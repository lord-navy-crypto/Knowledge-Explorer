"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ChatCompletionMessageParam } from "@mlc-ai/web-llm";
import { useLocalAI } from "@/components/LocalAIProvider";

type ChatMessage = { id: string; role: "user" | "assistant"; content: string };

function messageId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function friendlyModelLabel(modelId: string) {
  return modelId.replace(/-q\w+(?:_\d+)?-MLC$/i, "").replace(/-MLC$/i, "").replaceAll("-", " ");
}

export default function EasyLocalAIPlayground() {
  const {
    models,
    selectedModelId,
    setSelectedModelId,
    loadedModelId,
    webGPUSupported,
    status,
    progress,
    statusText,
    error,
    ready,
    enable,
    stop,
    complete,
    interruptGeneration,
  } = useLocalAI();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [uiError, setUiError] = useState("");
  const selected = useMemo(() => models.find((model) => model.id === selectedModelId), [models, selectedModelId]);
  const loading = status === "loading";
  const discovering = webGPUSupported === null;
  const activeError = uiError || error;

  async function enableSelected() {
    if (!selectedModelId || loading) return;
    setUiError("");
    try {
      await enable(selectedModelId);
    } catch (caught) {
      setUiError(caught instanceof Error ? caught.message : "Could not start this local model.");
    }
  }

  async function unloadModel() {
    setUiError("");
    setSending(false);
    await stop();
  }

  function stopGeneration() {
    interruptGeneration();
    setSending(false);
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || sending) return;
    if (!ready || !loadedModelId) {
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
        content: "You are a general-purpose local assistant. Answer directly and naturally. Do not force an AP, English, or coding workflow unless the user asks for one.",
      },
      ...history.map((message) => ({ role: message.role, content: message.content }) as ChatCompletionMessageParam),
    ];

    try {
      const answer = await complete(
        payload,
        (_token, fullText) => {
          setMessages((current) => current.map((message) => message.id === assistantId ? { ...message, content: fullText } : message));
        },
        {
          nudge: "Answer as a general-purpose assistant. Be direct, useful, and natural. Do not add an AP/English/Coding framework unless the user asks for one.",
          retryNudge: "Return a complete visible answer directly, with no hidden reasoning block.",
        }
      );
      if (!answer.trim()) throw new Error("The local model returned an empty response.");
      setMessages((current) => current.map((message) => message.id === assistantId ? { ...message, content: answer } : message));
    } catch (caught) {
      setUiError(caught instanceof Error ? caught.message : "Local generation failed.");
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
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">Shared browser-local runtime</p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Choose a Local AI model</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              Easy Local AI uses the same WebLLM engine, model picker, browser cache, WebGPU checks, loading progress, and error recovery as AI for AP, AI for English, and AI for Code. One loaded model is shared across those pages.
            </p>
          </div>
          <span className="rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
            {webGPUSupported === null ? "Checking WebGPU…" : webGPUSupported ? ready ? "Shared runtime ready" : "WebGPU available" : "WebGPU unavailable"}
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <label className="text-sm font-medium text-slate-800">
            Compatible model
            <select
              className="input mt-1 w-full"
              value={selectedModelId}
              disabled={discovering || loading || sending || models.length === 0}
              onChange={(event) => setSelectedModelId(event.target.value)}
            >
              {models.length === 0 ? <option value="">No compatible model found</option> : null}
              {models.map((model) => (
                <option key={model.id} value={model.id}>{model.label} · {model.parameterSize} · ~{Math.round(model.vramMB / 100) / 10} GB</option>
              ))}
            </select>
          </label>
          <div className="flex items-end gap-2">
            {!ready || loadedModelId !== selectedModelId ? (
              <button type="button" className="btn-primary" disabled={discovering || loading || !selectedModelId || webGPUSupported === false} onClick={() => void enableSelected()}>
                {discovering ? "Checking runtime…" : loading ? "Loading…" : "Download & enable"}
              </button>
            ) : (
              <button type="button" className="btn-secondary" onClick={() => void unloadModel()}>Unload model</button>
            )}
          </div>
        </div>

        {selected ? <p className="mt-2 text-xs text-slate-600">Model ID: {selected.id}</p> : null}
        {loading ? (
          <div className="mt-4">
            <div className="h-2 overflow-hidden rounded-full bg-emerald-100"><div className="h-full rounded-full bg-emerald-600 transition-[width]" style={{ width: `${Math.round(progress * 100)}%` }} /></div>
            <p className="mt-1 text-xs text-slate-600">{Math.round(progress * 100)}% · {statusText}</p>
          </div>
        ) : <p className="mt-3 text-xs text-slate-600">{statusText}</p>}
        {loadedModelId ? <p className="mt-2 text-xs font-semibold text-emerald-800">Shared engine: {friendlyModelLabel(loadedModelId)} · WebGPU</p> : null}
        {activeError ? <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">{activeError}</pre> : null}
      </section>

      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-4 py-3">
          <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Free chat</p><h2 className="text-lg font-bold text-slate-950">Easy Local AI</h2></div>
          <div className="flex gap-2">
            {sending ? <button type="button" className="btn-secondary text-xs" onClick={stopGeneration}>Stop generation</button> : null}
            <button type="button" className="btn-secondary text-xs" disabled={messages.length === 0} onClick={() => setMessages([])}>Clear conversation</button>
          </div>
        </div>

        <div className="min-h-80 space-y-4 bg-slate-50/50 p-4">
          {messages.length === 0 ? (
            <div className="mx-auto max-w-xl py-16 text-center">
              <p className="text-lg font-semibold text-slate-900">Ask anything you want to test locally.</p>
              <p className="mt-2 text-sm text-slate-600">The engine is shared across Easy Local AI and the subject assistants; this page only changes the general-purpose system prompt.</p>
            </div>
          ) : messages.map((message) => (
            <div key={message.id} className={message.role === "user" ? "ml-auto max-w-3xl rounded-2xl bg-slate-900 px-4 py-3 text-sm leading-6 text-white" : "mr-auto max-w-3xl whitespace-pre-wrap rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800"}>
              {message.content || (sending ? "Thinking locally…" : "")}
            </div>
          ))}
        </div>

        <form onSubmit={submit} className="border-t border-slate-200 p-4">
          <textarea className="input min-h-24 w-full resize-y" value={input} disabled={!ready || sending} placeholder={ready ? "Ask the shared local model…" : "Enable a compatible local model first…"} onChange={(event) => setInput(event.target.value)} />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">Same model engine and browser cache as AP, English, and Code AI.</p>
            <button type="submit" className="btn-primary" disabled={!ready || sending || !input.trim()}>{sending ? "Generating…" : "Send locally"}</button>
          </div>
        </form>
      </section>
    </div>
  );
}
