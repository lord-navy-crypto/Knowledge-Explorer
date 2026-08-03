"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type {
  ChatCompletionMessageParam,
  InitProgressReport,
  MLCEngineInterface,
} from "@mlc-ai/web-llm";
import type { AiProvider, SiteModelChoice } from "@/lib/ai-site-models";
import { parseSiteModelChoice } from "@/lib/ai-site-models";
import {
  isInsideOpenThinkBlock,
  mergeLocalDirectNudge,
  stripReasoningTrace,
} from "@/lib/ai-reasoning-strip";
import {
  chatOptsForModel,
  compactLocalMessages,
  getLocalGenPolicy,
} from "@/lib/local-ai-policy";
import {
  DEFAULT_LOCAL_MODEL_ID,
  FEATURED_LOCAL_MODELS,
  buildExtendedLocalModels,
  mergeLocalModelLists,
  type LocalModelOption as CatalogModelOption,
} from "@/lib/local-ai-models";

/**
 * Shared AI path for every tool:
 * - local  = runs in this browser
 * - site   = website API we provide
 * - byok   = user's own API key
 */
export type AIMode = "local" | "site" | "byok";
export type {
  LocalModelGroup,
  LocalModelOption,
  LocalModelTag,
} from "@/lib/local-ai-models";
export {
  DEFAULT_LOCAL_MODEL_ID,
  FEATURED_LOCAL_MODELS,
  formatLocalModelTags,
} from "@/lib/local-ai-models";

type LocalModelOption = CatalogModelOption;

type LocalAIStatus = "idle" | "loading" | "ready" | "generating" | "error";

type LocalAIContextValue = {
  mode: AIMode;
  setMode: (mode: AIMode) => void;
  /** True when the active path is Local AI. */
  usesLocal: boolean;
  /** True when the active path is website API or your own API. */
  usesCloud: boolean;
  siteModel: SiteModelChoice;
  setSiteModel: (model: SiteModelChoice) => void;
  provider: AiProvider;
  setProvider: (provider: AiProvider) => void;
  userKey: string;
  setUserKey: (key: string) => void;
  /** When true, AI tools search Knowledge Explorer content before answering. */
  siteSearchEnabled: boolean;
  setSiteSearchEnabled: (enabled: boolean) => void;
  /** Payload fields for /api/ai/* cloud calls from the shared settings. */
  cloudRequestFields: {
    userApiKey?: string;
    provider: AiProvider;
    siteModel: SiteModelChoice;
    siteSearch?: boolean;
  };
  models: LocalModelOption[];
  /** When true, picker includes the broader official WebLLM library. */
  showFullLibrary: boolean;
  setShowFullLibrary: (enabled: boolean) => void;
  selectedModelId: string;
  setSelectedModelId: (id: string) => void;
  loadedModelId: string;
  status: LocalAIStatus;
  progress: number;
  statusText: string;
  error: string;
  webGPUSupported: boolean | null;
  cacheScanning: boolean;
  ready: boolean;
  enable: (modelId?: string) => Promise<void>;
  stop: () => Promise<void>;
  refreshCacheStatus: () => Promise<void>;
  removeCachedModel: (modelId: string) => Promise<void>;
  complete: (
    messages: ChatCompletionMessageParam[],
    onToken?: (token: string, fullText: string) => void
  ) => Promise<string>;
  /** Stop an in-flight local generation (WebLLM interrupt). */
  interruptGeneration: () => void;
};

/** Generation budgets live in `lib/local-ai-policy.ts` (per-model). */

const LocalAIContext = createContext<LocalAIContextValue | null>(null);
const MODE_KEY = "results-ai-mode";
const MODEL_KEY = "results-local-ai-model";
const SITE_MODEL_KEY = "results-ai-site-model";
const PROVIDER_KEY = "results-ai-provider";
const SITE_SEARCH_KEY = "results-ai-site-search";
const FULL_LIBRARY_KEY = "results-local-ai-full-library";

function migrateMode(raw: string | null): AIMode | null {
  if (raw === "local" || raw === "site" || raw === "byok") return raw;
  // Older Local / Auto / Cloud UI
  if (raw === "auto" || raw === "cloud") return "site";
  return null;
}

function isLocalLoadOomError(message: string): boolean {
  return /oom|out of memory|device lost|resource.intensive|failed to allocate|local update|reload|webgpu device/i.test(
    message
  );
}

function explainLocalLoadError(message: string, modelId: string): string {
  if (/webgpu|device lost|out of memory|oom|resource.intensive/i.test(message)) {
    return `${message}\n\nTip: Free GPU VRAM — close other heavy tabs, try a Light/Medium model, Remove cached model then Enable again, or use Website API.`;
  }
  if (/Failed to fetch|Cache\.add|network|huggingface|integrity/i.test(message)) {
    return `${message}\n\nTip: Model download from Hugging Face failed or cache is corrupt. Check network, free disk space, then use “Remove from cache” and Enable again.`;
  }
  if (/local update|update has failed|reload/i.test(message)) {
    return `${message}\n\nTip: Local model reload failed (often a half-written cache). Remove the cached model, Enable again, or switch to Website API.`;
  }
  if (/deepseek/i.test(modelId)) {
    return `${message}\n\nDeepSeek Distill was removed from this site because the thinking-phase path was too laggy in-browser. Pick Qwen3.5 / Qwen3 / Llama or Website API.`;
  }
  return message;
}

async function detectWebGPU(): Promise<boolean> {
  if (typeof navigator === "undefined") return false;
  const gpu = (navigator as Navigator & { gpu?: { requestAdapter: () => Promise<unknown> } }).gpu;
  if (!gpu?.requestAdapter) return false;
  try {
    const adapter = await gpu.requestAdapter();
    return Boolean(adapter);
  } catch {
    return false;
  }
}

export function LocalAIProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<AIMode>("local");
  const [siteModel, setSiteModelState] = useState<SiteModelChoice>("auto");
  const [provider, setProviderState] = useState<AiProvider>("groq");
  const [userKey, setUserKey] = useState("");
  const [siteSearchEnabled, setSiteSearchEnabledState] = useState(true);
  const [models, setModels] = useState<LocalModelOption[]>(FEATURED_LOCAL_MODELS);
  const [showFullLibrary, setShowFullLibraryState] = useState(false);
  const [extendedModels, setExtendedModels] = useState<LocalModelOption[]>([]);
  const modelsRef = useRef<LocalModelOption[]>(FEATURED_LOCAL_MODELS);
  const [selectedModelId, setSelectedModelIdState] = useState(DEFAULT_LOCAL_MODEL_ID);
  const [loadedModelId, setLoadedModelId] = useState("");
  const [status, setStatus] = useState<LocalAIStatus>("idle");
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState(
    "Local AI is off. Choose a model, then click Enable local AI."
  );
  const [error, setError] = useState("");
  const [webGPUSupported, setWebGPUSupported] = useState<boolean | null>(null);
  const [cacheScanning, setCacheScanning] = useState(false);
  const engineRef = useRef<MLCEngineInterface | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const loadedModelRef = useRef("");
  const enableLockRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const gpuOk = await detectWebGPU();
      if (cancelled) return;
      setWebGPUSupported(gpuOk);

      const savedMode = migrateMode(localStorage.getItem(MODE_KEY));
      if (savedMode) {
        setModeState(savedMode);
        localStorage.setItem(MODE_KEY, savedMode);
      } else {
        // First visit: Local-first when WebGPU works; otherwise Website API.
        const initial: AIMode = gpuOk ? "local" : "site";
        setModeState(initial);
        localStorage.setItem(MODE_KEY, initial);
        if (!gpuOk) {
          setStatusText(
            "WebGPU unavailable on this browser — using Website API. Local needs Chrome/Edge with WebGPU."
          );
        }
      }

      const fullLibraryOn = localStorage.getItem(FULL_LIBRARY_KEY) === "1";
      if (fullLibraryOn) setShowFullLibraryState(true);
      const savedModel = localStorage.getItem(MODEL_KEY);
      if (savedModel && /deepseek-r1|r1-distill/i.test(savedModel)) {
        // Retired: Distill’s private-thinking path made answers feel stuck on “thinking”.
        localStorage.setItem(MODEL_KEY, DEFAULT_LOCAL_MODEL_ID);
        setSelectedModelIdState(DEFAULT_LOCAL_MODEL_ID);
      } else if (savedModel && FEATURED_LOCAL_MODELS.some((item) => item.id === savedModel)) {
        setSelectedModelIdState(String(savedModel));
      } else if (savedModel === "Qwen2.5-0.5B-Instruct-q4f16_1-MLC") {
        // Previous default → newest light bilingual starter.
        localStorage.setItem(MODEL_KEY, DEFAULT_LOCAL_MODEL_ID);
        setSelectedModelIdState(DEFAULT_LOCAL_MODEL_ID);
      } else if (savedModel && fullLibraryOn && /MLC$/i.test(savedModel)) {
        // Extended WebLLM id — keep until full library finishes loading.
        setSelectedModelIdState(String(savedModel));
      }
      const savedSiteModel = parseSiteModelChoice(localStorage.getItem(SITE_MODEL_KEY));
      if (savedSiteModel) setSiteModelState(savedSiteModel);
      const savedProvider = localStorage.getItem(PROVIDER_KEY);
      if (
        savedProvider === "groq" ||
        savedProvider === "gemini" ||
        savedProvider === "githubmodels" ||
        savedProvider === "kimi" ||
        savedProvider === "openrouter" ||
        savedProvider === "deepseek"
      ) {
        setProviderState(savedProvider);
      }
      const savedSiteSearch = localStorage.getItem(SITE_SEARCH_KEY);
      if (savedSiteSearch === "0") setSiteSearchEnabledState(false);
      if (savedSiteSearch === "1") setSiteSearchEnabledState(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const setMode = useCallback((nextMode: AIMode) => {
    setModeState(nextMode);
    localStorage.setItem(MODE_KEY, nextMode);
  }, []);

  const setSiteModel = useCallback((next: SiteModelChoice) => {
    setSiteModelState(next);
    localStorage.setItem(SITE_MODEL_KEY, next);
  }, []);

  const setProvider = useCallback((next: AiProvider) => {
    setProviderState(next);
    localStorage.setItem(PROVIDER_KEY, next);
  }, []);

  const setSiteSearchEnabled = useCallback((enabled: boolean) => {
    setSiteSearchEnabledState(enabled);
    localStorage.setItem(SITE_SEARCH_KEY, enabled ? "1" : "0");
  }, []);

  useEffect(() => {
    modelsRef.current = models;
  }, [models]);

  useEffect(() => {
    const next = mergeLocalModelLists(FEATURED_LOCAL_MODELS, extendedModels, showFullLibrary);
    setModels((current) => {
      const cacheMap = new Map(current.map((item) => [item.id, item.cached]));
      return next.map((item) => ({
        ...item,
        cached: cacheMap.has(item.id) ? cacheMap.get(item.id)! : item.cached,
      }));
    });
  }, [extendedModels, showFullLibrary]);

  useEffect(() => {
    if (!showFullLibrary) return;
    if (extendedModels.length > 0) return;
    let cancelled = false;
    void (async () => {
      try {
        const { prebuiltAppConfig } = await import("@mlc-ai/web-llm");
        if (cancelled) return;
        setExtendedModels(buildExtendedLocalModels(prebuiltAppConfig.model_list || []));
      } catch {
        if (!cancelled) setExtendedModels([]);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [extendedModels.length, showFullLibrary]);

  const setShowFullLibrary = useCallback((enabled: boolean) => {
    setShowFullLibraryState(enabled);
    localStorage.setItem(FULL_LIBRARY_KEY, enabled ? "1" : "0");
    if (!enabled) {
      setSelectedModelIdState((current) => {
        if (FEATURED_LOCAL_MODELS.some((item) => item.id === current)) return current;
        localStorage.setItem(MODEL_KEY, DEFAULT_LOCAL_MODEL_ID);
        return DEFAULT_LOCAL_MODEL_ID;
      });
    }
  }, []);

  const setSelectedModelId = useCallback((id: string) => {
    if (/deepseek-r1|r1-distill/i.test(id)) {
      setError(
        "DeepSeek Distill is disabled here — its hidden thinking phase made Local AI feel stuck. Pick Qwen3.5 / Qwen3 / Llama instead."
      );
      return;
    }
    if (!modelsRef.current.some((item) => item.id === id)) return;
    setSelectedModelIdState(id);
    localStorage.setItem(MODEL_KEY, id);
  }, []);

  const releaseEngine = useCallback(async () => {
    const engine = engineRef.current;
    engineRef.current = null;
    loadedModelRef.current = "";
    setLoadedModelId("");
    if (engine) await engine.unload().catch(() => undefined);
    workerRef.current?.terminate();
    workerRef.current = null;
  }, []);

  const enable = useCallback(
    async (requestedModelId?: string) => {
      if (enableLockRef.current) {
        await enableLockRef.current.catch(() => undefined);
      }

      const run = (async () => {
        const targetModelId = requestedModelId || selectedModelId;
        if (!modelsRef.current.some((item) => item.id === targetModelId)) {
          throw new Error("Select a valid local model first.");
        }

        const gpuOk = await detectWebGPU();
        setWebGPUSupported(gpuOk);
        if (!gpuOk) {
          setStatus("error");
          setError(
            "WebGPU is unavailable (need a desktop Chrome/Edge with GPU acceleration, or a compatible GPU). Switch to Website API or Your own API meanwhile."
          );
          setStatusText("Local AI could not start — WebGPU missing.");
          throw new Error("WebGPU is not supported.");
        }

        if (engineRef.current && loadedModelRef.current === targetModelId) {
          setStatus("ready");
          setStatusText("Local AI is already ready on this device.");
          return;
        }

        setSelectedModelIdState(targetModelId);
        localStorage.setItem(MODEL_KEY, targetModelId);
        setStatus("loading");
        setProgress(0);
        setError("");
        setStatusText("Preparing local AI…");
        await releaseEngine();

        const onProgress = (report: InitProgressReport) => {
          const nextProgress = Math.max(0, Math.min(1, report.progress ?? 0));
          setProgress(nextProgress);
          setStatusText(report.text || `Loading local AI: ${Math.round(nextProgress * 100)}%`);
        };

        try {
          const webllm = await import("@mlc-ai/web-llm");
          let engine: MLCEngineInterface | null = null;
          const policy = getLocalGenPolicy(targetModelId);
          const contextAttempts = policy.contextAttempts;

          const loadWithOpts = async (contextWindow: number) => {
            const chatOpts = chatOptsForModel(targetModelId, contextWindow);
            setStatusText(
              chatOpts
                ? `Loading local AI (${Math.round(contextWindow / 1024)}k context)…`
                : "Loading local AI…"
            );
            try {
              setStatusText("Starting local AI worker…");
              const worker = new Worker(new URL("../workers/local-ai.worker.ts", import.meta.url), {
                type: "module",
              });
              workerRef.current = worker;
              return await webllm.CreateWebWorkerMLCEngine(
                worker,
                targetModelId,
                { initProgressCallback: onProgress },
                chatOpts
              );
            } catch (workerError) {
              workerRef.current?.terminate();
              workerRef.current = null;
              const workerMessage =
                workerError instanceof Error ? workerError.message : String(workerError);
              setStatusText(
                /7B|8B|9B/i.test(targetModelId)
                  ? `Worker failed (${workerMessage}). Trying main-thread engine — UI may freeze on Heavy models…`
                  : `Worker failed (${workerMessage}). Trying main-thread engine…`
              );
              return await webllm.CreateMLCEngine(
                targetModelId,
                { initProgressCallback: onProgress },
                chatOpts
              );
            }
          };

          let lastError: unknown;
          for (const contextWindow of contextAttempts) {
            try {
              engine = await loadWithOpts(contextWindow);
              lastError = undefined;
              break;
            } catch (attemptError) {
              lastError = attemptError;
              workerRef.current?.terminate();
              workerRef.current = null;
              const attemptMessage =
                attemptError instanceof Error ? attemptError.message : String(attemptError);
              if (!isLocalLoadOomError(attemptMessage)) throw attemptError;
              setStatusText(
                `Load failed at ${Math.round(contextWindow / 1024)}k context — retrying smaller…`
              );
            }
          }
          if (!engine) throw lastError || new Error("Local AI failed to load.");

          engineRef.current = engine;
          loadedModelRef.current = targetModelId;
          setLoadedModelId(targetModelId);
          setStatus("ready");
          setProgress(1);
          setError("");
          setStatusText("Local AI is ready on this device.");
          setModels((current) =>
            current.map((item) => (item.id === targetModelId ? { ...item, cached: true } : item))
          );
        } catch (caught) {
          workerRef.current?.terminate();
          workerRef.current = null;
          engineRef.current = null;
          loadedModelRef.current = "";
          setLoadedModelId("");
          const raw = caught instanceof Error ? caught.message : "Local AI failed to load.";
          const message = explainLocalLoadError(raw, targetModelId);
          setStatus("error");
          setError(message);
          setStatusText("Local AI could not start. See the error below, or use Website API.");
          throw new Error(message);
        }
      })();

      enableLockRef.current = run.finally(() => {
        enableLockRef.current = null;
      });
      await enableLockRef.current;
    },
    [releaseEngine, selectedModelId]
  );

  const stop = useCallback(async () => {
    await releaseEngine();
    setStatus("idle");
    setProgress(0);
    setError("");
    setStatusText("Local AI stopped. Downloaded model files remain cached until you remove them.");
  }, [releaseEngine]);

  const refreshCacheStatus = useCallback(async () => {
    setCacheScanning(true);
    setError("");
    try {
      const { hasModelInCache, prebuiltAppConfig } = await import("@mlc-ai/web-llm");
      const cacheResults = await Promise.all(
        modelsRef.current.map(async (model) => ({
          id: model.id,
          cached: await hasModelInCache(model.id, prebuiltAppConfig).catch(() => false),
        }))
      );
      const cacheMap = new Map(cacheResults.map((item) => [item.id, item.cached]));
      setModels((current) =>
        current.map((item) => ({ ...item, cached: cacheMap.get(item.id) ?? false }))
      );
      setStatusText("Browser model cache checked.");
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Could not check model cache.";
      setError(message);
    } finally {
      setCacheScanning(false);
    }
  }, []);

  const removeCachedModel = useCallback(
    async (modelId: string) => {
      if (!modelsRef.current.some((item) => item.id === modelId)) return;
      if (loadedModelRef.current === modelId) {
        await releaseEngine();
        setStatus("idle");
        setProgress(0);
      }
      const { deleteModelAllInfoInCache, prebuiltAppConfig } = await import("@mlc-ai/web-llm");
      await deleteModelAllInfoInCache(modelId, prebuiltAppConfig);
      setModels((current) =>
        current.map((item) => (item.id === modelId ? { ...item, cached: false } : item))
      );
      setError("");
      setStatusText("Selected model removed from browser cache.");
    },
    [releaseEngine]
  );

  const interruptGeneration = useCallback(() => {
    const engine = engineRef.current;
    if (!engine) return;
    try {
      void engine.interruptGenerate();
    } catch {
      // ignore — engine may already be idle
    }
  }, []);

  const complete = useCallback(
    async (
      messages: ChatCompletionMessageParam[],
      onToken?: (token: string, fullText: string) => void
    ) => {
      const engine = engineRef.current;
      if (!engine) throw new Error("Enable local AI before sending a local request.");
      const modelId = loadedModelRef.current || selectedModelId;
      const policy = getLocalGenPolicy(modelId);
      setStatus("generating");
      setError("");
      setStatusText("Writing answer…");

      const prepared = compactLocalMessages(
        mergeLocalDirectNudge(
          messages as Array<{ role: string; content: string }>,
          policy.nudge
        )
      ) as ChatCompletionMessageParam[];

      const startedAt = Date.now();
      let timedOut = false;
      let idleTimedOut = false;
      let deadlineAt = startedAt + policy.timeoutMs;
      let softTimerId = 0;
      let idleTimerId = 0;

      const stopTimers = () => {
        window.clearTimeout(softTimerId);
        window.clearTimeout(idleTimerId);
      };

      const fireTimeout = (kind: "soft" | "idle" | "absolute") => {
        if (timedOut) return;
        timedOut = true;
        if (kind === "idle") idleTimedOut = true;
        try {
          void engine.interruptGenerate();
        } catch {
          // ignore
        }
        setStatusText(
          kind === "idle"
            ? "Stopped — no visible answer yet. Try a lighter model or Website API."
            : "Stopped — answer took too long. Showing what we have, or try a lighter model."
        );
      };

      const armSoftDeadline = () => {
        window.clearTimeout(softTimerId);
        const remaining = Math.max(0, deadlineAt - Date.now());
        softTimerId = window.setTimeout(() => fireTimeout("soft"), remaining);
      };

      const armIdleDeadline = () => {
        window.clearTimeout(idleTimerId);
        idleTimerId = window.setTimeout(() => fireTimeout("idle"), policy.idleVisibleMs);
      };

      const absoluteTimerId = window.setTimeout(
        () => fireTimeout("absolute"),
        policy.absoluteTimeoutMs
      );
      armSoftDeadline();
      armIdleDeadline();

      let lastStatusPhase = "writing";
      let raw = "";
      let lastVisibleLen = 0;

      const finishWithPartialOrThrow = () => {
        const partial = stripReasoningTrace(raw);
        if (partial) {
          setStatusText(
            idleTimedOut
              ? "Stopped early — showing partial answer. Prefer a lighter model next time."
              : "Stopped on timeout — showing partial answer."
          );
          return partial;
        }
        throw new Error(
          idleTimedOut
            ? "Local AI produced no visible answer in time (often still thinking). Try Qwen3.5 Starter / Light, or Website API."
            : "Local AI timed out. Try Website API or a lighter model (Qwen3.5 Starter / Light)."
        );
      };

      try {
        const stream = await engine.chat.completions.create({
          messages: prepared,
          stream: true,
          temperature: 0.4,
          max_tokens: policy.maxTokens,
          // All Qwen3 / Qwen3.5: skip hidden thinking (the main big-model lag cause).
          ...(policy.disableThinking ? { extra_body: { enable_thinking: false } } : {}),
        });
        for await (const chunk of stream) {
          if (timedOut) break;
          const token = chunk.choices[0]?.delta?.content ?? "";
          raw += token;
          const visible = stripReasoningTrace(raw, { trim: false });
          const visibleTrimmed = visible.trim();
          if (visibleTrimmed.length > lastVisibleLen) {
            lastVisibleLen = visibleTrimmed.length;
            // Sliding soft deadline while the answer is visibly progressing.
            deadlineAt = Math.min(
              startedAt + policy.absoluteTimeoutMs,
              Date.now() + policy.timeoutMs
            );
            armSoftDeadline();
            armIdleDeadline();
          }
          const thinking = isInsideOpenThinkBlock(raw) && !visibleTrimmed;
          const phase = thinking ? "thinking" : "writing";
          if (phase !== lastStatusPhase) {
            lastStatusPhase = phase;
            setStatusText(
              thinking
                ? "Skipping hidden thinking — answer will appear next…"
                : "Writing answer…"
            );
          }
          // Never fall back to raw — that re-leaks <think> dumps into the UI.
          onToken?.(token, visible);
        }
        if (timedOut) return finishWithPartialOrThrow();
        const cleaned = stripReasoningTrace(raw);
        if (!cleaned) {
          throw new Error(
            "Local model returned an empty answer. Try again or switch to Website API."
          );
        }
        setStatusText("Local AI is ready on this device.");
        return cleaned;
      } catch (caught) {
        // interruptGenerate often rejects the stream — still return any partial.
        if (timedOut) return finishWithPartialOrThrow();
        const message = caught instanceof Error ? caught.message : "Local generation failed.";
        setStatus("error");
        setError(message);
        throw caught;
      } finally {
        stopTimers();
        window.clearTimeout(absoluteTimerId);
        if (engineRef.current) setStatus("ready");
      }
    },
    [selectedModelId]
  );

  const value = useMemo<LocalAIContextValue>(
    () => ({
      mode,
      setMode,
      usesLocal: mode === "local",
      usesCloud: mode === "site" || mode === "byok",
      siteModel,
      setSiteModel,
      provider,
      setProvider,
      userKey,
      setUserKey,
      siteSearchEnabled,
      setSiteSearchEnabled,
      cloudRequestFields: {
        userApiKey: mode === "byok" ? userKey.trim() || undefined : undefined,
        provider,
        siteModel: mode === "site" ? siteModel : "auto",
        siteSearch: siteSearchEnabled,
      },
      models,
      showFullLibrary,
      setShowFullLibrary,
      selectedModelId,
      setSelectedModelId,
      loadedModelId,
      status,
      progress,
      statusText,
      error,
      webGPUSupported,
      cacheScanning,
      ready: status === "ready" || status === "generating",
      enable,
      stop,
      refreshCacheStatus,
      removeCachedModel,
      complete,
      interruptGeneration,
    }),
    [
      cacheScanning,
      complete,
      enable,
      error,
      interruptGeneration,
      loadedModelId,
      mode,
      models,
      progress,
      provider,
      setShowFullLibrary,
      showFullLibrary,
      refreshCacheStatus,
      removeCachedModel,
      selectedModelId,
      setMode,
      setProvider,
      setSelectedModelId,
      setSiteModel,
      setSiteSearchEnabled,
      siteModel,
      siteSearchEnabled,
      status,
      statusText,
      stop,
      userKey,
      webGPUSupported,
    ]
  );

  return <LocalAIContext.Provider value={value}>{children}</LocalAIContext.Provider>;
}

export function useLocalAI() {
  const value = useContext(LocalAIContext);
  if (!value) throw new Error("useLocalAI must be used inside LocalAIProvider");
  return value;
}
