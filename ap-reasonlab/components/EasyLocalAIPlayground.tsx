"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import type { ChatCompletionMessageParam, MLCEngineInterface } from "@mlc-ai/web-llm";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type RuntimeModel = {
  id: string;
  label: string;
};

const PREFERRED_MODEL_IDS = [
  "Qwen3-0.6B-q4f16_1-MLC",
  "Llama-3.2-1B-Instruct-q4f16_1-MLC",
  "gemma-2-2b-it-q4f16_1-MLC",
  "Qwen3-1.7B-q4f16_1-MLC",
  "Llama-3.2-3B-Instruct-q4f16_1-MLC",
  "Qwen3-4B-q4f16_1-MLC",
  "Qwen3-8B-q4f16_1-MLC",
] as const;

function messageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function friendlyModelLabel(modelId: string) {
  return modelId
    .replace(/-q\w+(?:_\d+)?-MLC$/i, "")
    .replace(/-MLC$/i, "")
    .replaceAll("-", " ");
}

async function browserHasWebGPU() {
  if (typeof navigator === "undefined") return false;
  const gpu = (navigator as Navigator & {
    gpu?: { requestAdapter: () => Promise<unknown> };
  }).gpu;
  if (!gpu?.requestAdapter) return false;
  try {
    return Boolean(await gpu.requestAdapter());
  } catch {
    return false;
  }
}

export default function EasyLocalAIPlayground() {
  const engineRef = useRef<MLCEngineInterface | null>(null);
  const [runtimeModels, setRuntimeModels] = useState<RuntimeModel[]>([]);
  const [selectedModelId, setSelectedModelId] = useState("");
  const [loadedModelId, setLoadedModelId] = useState("");
  const [webGPUSupported, setWebGPUSupported] = useState<boolean | null>(null);
  const [discovering, setDiscovering] = useState(true);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Checking the installed WebLLM runtime…");
  const [uiError, setUiError] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      const gpuOk = await browserHasWebGPU();
      if (cancelled) return;
      setWebGPUSupported(gpuOk);

      try {
        const webllm = await import("@mlc-ai/web-llm");
        const officialIds = (webllm.prebuiltAppConfig.model_list || [])
          .map((record) => record.model_id)
          .filter((value): value is string => typeof value === "string" && value.length > 0);
        const officialSet = new Set(officialIds);

        const preferred = PREFERRED_MODEL_IDS.filter((id) => officialSet.has(id));
        const additional = officialIds.filter(
          (id) =>
            !preferred.includes(id as (typeof PREFERRED_MODEL_IDS)[number]) &&
            /(?:Qwen|Llama|Gemma|Phi|Mistral|SmolLM|OLMo)/i.test(id)
        );
        const ids = [...preferred, ...additional].slice(0, 40);
        const discovered = ids.map((id) => ({ id, label: friendlyModelLabel(id) }));

        if (cancelled) return;
        setRuntimeModels(discovered);

        const first = preferred[0] || ids[0] || "";
        setSelectedModelId(first);
        if (!gpuOk) {
          setStatusText("WebGPU is unavailable in this browser. Local models cannot run here.");
        } else if (first) {
          setStatusText(`${discovered.length} compatible WebLLM models found. Choose one and enable it.`);
        } else {
          setStatusText("This WebLLM build did not report any compatible local models.");
          setUiError("No WebLLM prebuilt models were found in the installed runtime.");
        }
      } catch (caught) {
        if (cancelled) return;
        setUiError(caught instanceof Error ? caught.message : "Could not inspect the WebLLM model catalog.");
        setStatusText("Could not read the installed WebLLM model catalog.");
      } finally {
        if (!cancelled) setDiscovering(false);
      }
    })();

    return () => {
      cancelled = true;
      const engine = engineRef.current;
      engineRef.current = null;
      if (engine) void engine.unload().catch(() => undefined);
    };
  }, []);

  const selected = useMemo(
    () => runtimeModels.find((model) => model.id === selectedModelId),
    [runtimeModels, selectedModelId]
  );

  const ready = Boolean(engineRef.current && loadedModelId && loadedModelId === selectedModelId);

  async function unloadModel() {
    const engine = engineRef.current;
    engineRef.current = null;
    setLoadedModelId("");
    setSending(false);
    if (engine) {
      try {
        engine.interruptGenerate();
      } catch {
        // No active generation.
      }
      await engine.unload().catch(() => undefined);
    }
    setStatusText("Local model unloaded.");
  }

  async function enableSelected() {
    if (!selectedModelId || loading) return;
    setUiError("");
    setLoading(true);
    setProgress(0);
    setStatusText("Preparing WebLLM…");

    try {
      if (!(await browserHasWebGPU())) {
        setWebGPUSupported(false);
        throw new Error(
          "WebGPU is unavailable. Use a current desktop Chrome/Edge/Safari build with hardware acceleration enabled."
        );
      }

      await unloadModel();
      const webllm = await import("@mlc-ai/web-llm");
      const supported = new Set(
        (webllm.prebuiltAppConfig.model_list || []).map((record) => record.model_id)
      );
      if (!supported.has(selectedModelId)) {
        throw new Error(
          `The installed WebLLM runtime no longer contains “${selectedModelId}”. Refresh the page to rebuild the model list.`
        );
      }

      const engine = await webllm.CreateMLCEngine(selectedModelId, {
        initProgressCallback: (report) => {
          const next = Math.max(0, Math.min(1, report.progress ?? 0));
          setProgress(next);
          setStatusText(report.text || `Loading model: ${Math.round(next * 100)}%`);
        },
      });

      engineRef.current = engine;
      setLoadedModelId(selectedModelId);
      setProgress(1);
      setStatusText(`Ready: ${friendlyModelLabel(selectedModelId)} is running locally.`);
    } catch (caught) {
      engineRef.current = null;
      setLoadedModelId("");
      const message = caught instanceof Error ? caught.message : "Could not start this local model.";
      setUiError(message);
      setStatusText("Model loading failed.");
    } finally {
      setLoading(false);
    }
  }

  function stopGeneration() {
    try {
      engineRef.current?.interruptGenerate();
    } catch {
      // Engine may already be idle.
    }
    setSending(false);
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    const engine = engineRef.current;
    if (!text || sending) return;
    if (!engine || !ready) {
      setUiError("Enable the selected local model before sending a message.");
      return;
    }

    const userMessage: ChatMessage = { id: messageId(), role: "user", content: text };
    const assistantId = messageId();
    const history = [...messages, userMessage];
    setMessages([...history, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setSending(true);
    setUiError("");

    const payload: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a general-purpose local assistant. Answer directly and naturally. Do not force an AP, English, or coding workflow unless the user asks for one.",
      },
      ...history.map(
        (message) => ({ role: message.role, content: message.content }) as ChatCompletionMessageParam
      ),
    ];

    try {
      const stream = await engine.chat.completions.create({
        messages: payload,
        stream: true,
        temperature: 0.7,
        max_tokens: 768,
      });

      let fullText = "";
      for await (const chunk of stream) {
        const token = chunk.choices[0]?.delta?.content || "";
        if (!token) continue;
        fullText += token;
        const nextText = fullText;
        setMessages((current) =>
          current.map((message) =>
            message.id === assistantId ? { ...message, content: nextText } : message
          )
        );
      }

      if (!fullText.trim()) {
        throw new Error("The model returned an empty response. Try another compatible model.");
      }
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Local generation failed.";
      setUiError(message);
      setMessages((current) => current.filter((item) => item.id !== assistantId));
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Browser-local runtime
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Choose a verified WebLLM model</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              This list is generated from the WebLLM version installed on this site. Models that are
              not present in its official prebuilt catalog are not shown, so stale model IDs cannot
              be selected. No Ollama, local server, account, or API key is required.
            </p>
          </div>
          <span className="rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
            {webGPUSupported === null
              ? "Checking WebGPU…"
              : webGPUSupported
                ? "WebGPU available"
                : "WebGPU unavailable"}
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <label className="text-sm font-medium text-slate-800">
            Compatible model
            <select
              className="input mt-1 w-full"
              value={selectedModelId}
              disabled={discovering || loading || sending || runtimeModels.length === 0}
              onChange={(event) => setSelectedModelId(event.target.value)}
            >
              {runtimeModels.length === 0 ? <option value="">No compatible model found</option> : null}
              {runtimeModels.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end gap-2">
            {!ready ? (
              <button
                type="button"
                className="btn-primary"
                disabled={discovering || loading || !selectedModelId || webGPUSupported === false}
                onClick={() => void enableSelected()}
              >
                {discovering ? "Finding models…" : loading ? "Loading…" : "Download & enable"}
              </button>
            ) : (
              <button type="button" className="btn-secondary" onClick={() => void unloadModel()}>
                Unload model
              </button>
            )}
          </div>
        </div>

        {selected ? <p className="mt-2 text-xs text-slate-600">Runtime model ID: {selected.id}</p> : null}

        {loading ? (
          <div className="mt-4">
            <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
              <div
                className="h-full rounded-full bg-emerald-600 transition-[width]"
                style={{ width: `${Math.round(progress * 100)}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-slate-600">
              {Math.round(progress * 100)}% · {statusText}
            </p>
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-600">{statusText}</p>
        )}

        {loadedModelId ? (
          <p className="mt-2 text-xs font-semibold text-emerald-800">
            Running locally: {friendlyModelLabel(loadedModelId)} · WebGPU
          </p>
        ) : null}

        {uiError ? (
          <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">
            {uiError}
          </pre>
        ) : null}
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Free chat</p>
            <h2 className="text-lg font-bold text-slate-950">Easy Local AI</h2>
          </div>
          <div className="flex gap-2">
            {sending ? (
              <button type="button" className="btn-secondary text-xs" onClick={stopGeneration}>
                Stop generation
              </button>
            ) : null}
            <button
              type="button"
              className="btn-secondary text-xs"
              disabled={messages.length === 0}
              onClick={() => setMessages([])}
            >
              Clear conversation
            </button>
          </div>
        </div>

        <div className="min-h-80 space-y-4 bg-slate-50/50 p-4">
          {messages.length === 0 ? (
            <div className="mx-auto max-w-xl py-16 text-center">
              <p className="text-lg font-semibold text-slate-900">Ask anything you want to test locally.</p>
              <p className="mt-2 text-sm text-slate-600">
                Enable one of the runtime-verified models above first. The model and chat stay in your browser.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.role === "user"
                    ? "ml-auto max-w-3xl rounded-2xl bg-slate-900 px-4 py-3 text-sm leading-6 text-white"
                    : "mr-auto max-w-3xl whitespace-pre-wrap rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800"
                }
              >
                {message.content || (sending ? "Thinking locally…" : "")}
              </div>
            ))
          )}
        </div>

        <form onSubmit={submit} className="border-t border-slate-200 p-4">
          <textarea
            className="input min-h-24 w-full resize-y"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder={ready ? "Message your local model…" : "Enable a compatible local model first…"}
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">Local inference requires WebGPU and enough device memory for the chosen model.</p>
            <button type="submit" className="btn-primary" disabled={!input.trim() || sending || !ready}>
              {sending ? "Generating…" : "Send locally"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
