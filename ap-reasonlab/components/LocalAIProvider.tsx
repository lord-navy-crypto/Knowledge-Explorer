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
  supportsDisableThinking,
} from "@/lib/ai-reasoning-strip";

/**
 * Shared AI path for every tool:
 * - local  = runs in this browser
 * - site   = website API we provide
 * - byok   = user's own API key
 */
export type AIMode = "local" | "site" | "byok";
/** Weight tiers for the local model library (WebLLM / WebGPU). */
export type LocalModelGroup = "superlight" | "light" | "medium" | "heavy";

export type LocalModelOption = {
  id: string;
  label: string;
  group: LocalModelGroup;
  summary: string;
  bestFor: string;
  parameterSize: string;
  vramMB: number;
  cached: boolean | null;
  recommended?: boolean;
};

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

/** Balanced cap — enough for formulas/steps without multi-minute runs. */
const LOCAL_MAX_TOKENS_DEFAULT = 1200;
const LOCAL_MAX_TOKENS_HEAVY = 1400;
/** Safety net only — normal answers should finish well before this. */
const LOCAL_GENERATE_TIMEOUT_MS = 180_000;

function maxTokensForModel(modelId: string): number {
  return /7B|8B|9B/i.test(modelId) ? LOCAL_MAX_TOKENS_HEAVY : LOCAL_MAX_TOKENS_DEFAULT;
}

const LocalAIContext = createContext<LocalAIContextValue | null>(null);
const MODE_KEY = "results-ai-mode";
const MODEL_KEY = "results-local-ai-model";
const SITE_MODEL_KEY = "results-ai-site-model";
const PROVIDER_KEY = "results-ai-provider";
const SITE_SEARCH_KEY = "results-ai-site-search";

function migrateMode(raw: string | null): AIMode | null {
  if (raw === "local" || raw === "site" || raw === "byok") return raw;
  // Older Local / Auto / Cloud UI
  if (raw === "auto" || raw === "cloud") return "site";
  return null;
}
/** Safe default for first enable — Super light Chinese/English starter. */
const DEFAULT_MODEL_ID = "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";

/**
 * Local model library by weight class.
 * IDs must exist in @mlc-ai/web-llm prebuiltAppConfig.model_list.
 */
const LOCAL_MODELS: LocalModelOption[] = [
  // —— Super light ——
  {
    id: "SmolLM2-135M-Instruct-q0f16-MLC",
    label: "SmolLM2 Tiny",
    group: "superlight",
    summary: "Smallest option — very fast, basic answers only.",
    bestFor: "Smoke-test Local AI, short labels, tiny rewrites",
    parameterSize: "135M",
    vramMB: 360,
    cached: null,
  },
  {
    id: "SmolLM2-360M-Instruct-q4f16_1-MLC",
    label: "SmolLM2 Mini",
    group: "superlight",
    summary: "Slightly stronger than Tiny; still ultra-light English.",
    bestFor: "Short English summaries on weak devices",
    parameterSize: "360M",
    vramMB: 376,
    cached: null,
  },
  {
    id: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Micro",
    group: "superlight",
    summary: "Best starter for Chinese + English on low VRAM.",
    bestFor: "Everyday bilingual chat on phones/Chromebooks",
    parameterSize: "0.5B",
    vramMB: 945,
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen3-0.6B-q4f16_1-MLC",
    label: "Qwen3 Micro",
    group: "superlight",
    summary: "Newer Qwen3 micro — thinking disabled for fast visible answers.",
    bestFor: "Newer bilingual micro replies on modest GPUs",
    parameterSize: "0.6B",
    vramMB: 1403,
    cached: null,
  },
  // —— Light ——
  {
    id: "Llama-3.2-1B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Light",
    group: "light",
    summary: "Compact Meta model — strong English for its size.",
    bestFor: "English explanations and light study Q&A",
    parameterSize: "1B",
    vramMB: 879,
    cached: null,
  },
  {
    id: "Qwen2.5-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Light",
    group: "light",
    summary: "Balanced bilingual light model.",
    bestFor: "Chinese/English study help without heavy GPU",
    parameterSize: "1.5B",
    vramMB: 1630,
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-Math-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Math Light",
    group: "light",
    summary: "Math-tuned light model for step language.",
    bestFor: "AP math hints, formula-oriented explanations",
    parameterSize: "1.5B",
    vramMB: 1630,
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-1.5B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Light",
    group: "light",
    summary: "Code-focused light assistant.",
    bestFor: "Small snippets, comments, Markdown edits",
    parameterSize: "1.5B",
    vramMB: 1630,
    cached: null,
  },
  // —— Medium ——
  {
    id: "Llama-3.2-3B-Instruct-q4f16_1-MLC",
    label: "Llama 3.2 Medium",
    group: "medium",
    summary: "Best English quality/speed balance for most desktops.",
    bestFor: "General study tutoring in English",
    parameterSize: "3B",
    vramMB: 2264,
    cached: null,
    recommended: true,
  },
  {
    id: "Qwen2.5-3B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Medium",
    group: "medium",
    summary: "Strong bilingual mid-size Qwen.",
    bestFor: "Longer Chinese/English explanations and drafting",
    parameterSize: "3B",
    vramMB: 2505,
    cached: null,
  },
  {
    id: "Qwen3-4B-q4f16_1-MLC",
    label: "Qwen3 Medium+",
    group: "medium",
    summary: "Newer Qwen3 4B — thinking disabled so TeX/text appears immediately.",
    bestFor: "Harder bilingual study help when VRAM allows",
    parameterSize: "4B",
    vramMB: 3432,
    cached: null,
  },
  {
    id: "Phi-3.5-mini-instruct-q4f16_1-MLC",
    label: "Phi-3.5 Mini",
    group: "medium",
    summary: "Microsoft mini model — solid reasoning for its class.",
    bestFor: "Structured reasoning and careful short answers",
    parameterSize: "3.8B",
    vramMB: 3672,
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-3B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Medium",
    group: "medium",
    summary: "Stronger local coding without jumping to 7B.",
    bestFor: "Code explanations and AI Developer drafts",
    parameterSize: "3B",
    vramMB: 2505,
    cached: null,
  },
  // —— Heavy ——
  {
    id: "Qwen2.5-7B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Heavy",
    group: "heavy",
    summary: "Flagship bilingual local general model (~5 GB VRAM).",
    bestFor: "High-quality study answers when your GPU can load it",
    parameterSize: "7B",
    vramMB: 5107,
    cached: null,
    recommended: true,
  },
  {
    id: "Llama-3.1-8B-Instruct-q4f16_1-MLC",
    label: "Llama 3.1 Heavy",
    group: "heavy",
    summary: "Strong English 8B instruct model.",
    bestFor: "Deep English tutoring and long-form writing",
    parameterSize: "8B",
    vramMB: 5001,
    cached: null,
  },
  {
    id: "Qwen2.5-Coder-7B-Instruct-q4f16_1-MLC",
    label: "Qwen2.5 Coder Heavy",
    group: "heavy",
    summary: "Strongest coder in this library.",
    bestFor: "Complex code help and AI Developer work",
    parameterSize: "7B",
    vramMB: 5107,
    cached: null,
  },
];

/** Cap context on heavier WebLLM models so typical laptop GPUs do not OOM. */
function chatOptsForModel(modelId: string, contextWindow = 4096) {
  const opts: { context_window_size: number; prefill_chunk_size: number } = {
    context_window_size: contextWindow,
    prefill_chunk_size: Math.min(1024, contextWindow),
  };
  // 7B/8B heavies need a capped context on typical laptops.
  if (/7B|8B/i.test(modelId)) return opts;
  if (/3B|4B/i.test(modelId)) return { ...opts, context_window_size: Math.min(contextWindow, 4096) };
  return undefined;
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
    return `${message}\n\nDeepSeek Distill was removed from this site because the thinking-phase path was too laggy in-browser. Pick Qwen2.5 / Llama or Website API.`;
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
  const [mode, setModeState] = useState<AIMode>("site");
  const [siteModel, setSiteModelState] = useState<SiteModelChoice>("auto");
  const [provider, setProviderState] = useState<AiProvider>("groq");
  const [userKey, setUserKey] = useState("");
  const [siteSearchEnabled, setSiteSearchEnabledState] = useState(true);
  const [models, setModels] = useState<LocalModelOption[]>(LOCAL_MODELS);
  const [selectedModelId, setSelectedModelIdState] = useState(DEFAULT_MODEL_ID);
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
    void detectWebGPU().then(setWebGPUSupported);
    const savedMode = migrateMode(localStorage.getItem(MODE_KEY));
    if (savedMode) {
      setModeState(savedMode);
      localStorage.setItem(MODE_KEY, savedMode);
    }
    const savedModel = localStorage.getItem(MODEL_KEY);
    if (savedModel && /deepseek-r1|r1-distill/i.test(savedModel)) {
      // Retired: Distill’s private-thinking path made answers feel stuck on “thinking”.
      localStorage.setItem(MODEL_KEY, DEFAULT_MODEL_ID);
      setSelectedModelIdState(DEFAULT_MODEL_ID);
    } else if (LOCAL_MODELS.some((item) => item.id === savedModel)) {
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

  const setSelectedModelId = useCallback((id: string) => {
    if (!LOCAL_MODELS.some((item) => item.id === id)) return;
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
        if (!LOCAL_MODELS.some((item) => item.id === targetModelId)) {
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
          const contextAttempts = /7B|8B/i.test(targetModelId) ? [4096, 2048] : [4096];

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
              setStatusText(`Worker failed (${workerMessage}). Trying main-thread engine…`);
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
        LOCAL_MODELS.map(async (model) => ({
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
      if (!LOCAL_MODELS.some((item) => item.id === modelId)) return;
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
      setStatus("generating");
      setError("");
      setStatusText("Writing answer…");

      const prepared = mergeLocalDirectNudge(
        messages as Array<{ role: string; content: string }>
      ) as ChatCompletionMessageParam[];

      let timedOut = false;
      const timeoutId = window.setTimeout(() => {
        timedOut = true;
        try {
          void engine.interruptGenerate();
        } catch {
          // ignore
        }
        setStatusText("Stopped — answer took too long. Try a lighter model or Website API.");
      }, LOCAL_GENERATE_TIMEOUT_MS);

      try {
        const stream = await engine.chat.completions.create({
          messages: prepared,
          stream: true,
          temperature: 0.45,
          max_tokens: maxTokensForModel(modelId),
          // Qwen3/3.5: skip hidden thinking so TeX appears while streaming.
          ...(supportsDisableThinking(modelId)
            ? { extra_body: { enable_thinking: false } }
            : {}),
        });
        let raw = "";
        for await (const chunk of stream) {
          if (timedOut) break;
          const token = chunk.choices[0]?.delta?.content ?? "";
          raw += token;
          const visible = stripReasoningTrace(raw);
          if (isInsideOpenThinkBlock(raw) && !visible) {
            setStatusText("Skipping hidden thinking — answer will appear next…");
          } else {
            setStatusText("Writing answer…");
          }
          onToken?.(token, visible || raw);
        }
        if (timedOut) {
          const partial = stripReasoningTrace(raw) || raw.trim();
          if (partial) {
            setStatusText("Stopped on timeout — showing partial answer.");
            return partial;
          }
          throw new Error(
            "Local AI timed out. Try Website API or a lighter model (Qwen2.5 / Llama)."
          );
        }
        const cleaned = stripReasoningTrace(raw) || raw.trim();
        if (!cleaned) {
          throw new Error(
            "Local model returned an empty answer. Try again or switch to Website API."
          );
        }
        setStatusText("Local AI is ready on this device.");
        return cleaned;
      } catch (caught) {
        if (timedOut) {
          setStatus("error");
          const message =
            "Local AI timed out. Try Website API or a lighter local model.";
          setError(message);
          throw new Error(message);
        }
        const message = caught instanceof Error ? caught.message : "Local generation failed.";
        setStatus("error");
        setError(message);
        throw caught;
      } finally {
        window.clearTimeout(timeoutId);
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
