"use client";

import { FormEvent, useMemo, useState } from "react";
import type { ChatCompletionMessageParam } from "@mlc-ai/web-llm";
import { useLocalAI } from "@/components/LocalAIProvider";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function id() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export default function EasyLocalAIPlayground() {
  const localAI = useLocalAI();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [uiError, setUiError] = useState("");
  const selected = useMemo(
    () => localAI.models.find((model) => model.id === localAI.selectedModelId),
    [localAI.models, localAI.selectedModelId]
  );
  const loaded = useMemo(
    () => localAI.models.find((model) => model.id === localAI.loadedModelId),
    [localAI.models, localAI.loadedModelId]
  );

  async function enableSelected() {
    setUiError("");
    localAI.setMode("local");
    try {
      await localAI.enable(localAI.selectedModelId);
    } catch (caught) {
      setUiError(caught instanceof Error ? caught.message : "Could not start Local AI.");
    }
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    const text = input.trim();
    if (!text || sending) return;
    if (!localAI.ready) {
      setUiError("Enable a local model before sending a message.");
      return;
    }

    const userMessage: ChatMessage = { id: id(), role: "user", content: text };
    const assistantId = id();
    const next = [...messages, userMessage];
    setMessages([...next, { id: assistantId, role: "assistant", content: "" }]);
    setInput("");
    setSending(true);
    setUiError("");

    const payload: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content:
          "You are a general-purpose local assistant. Answer the user's request directly and naturally. This is an open chat playground, not an AP, English, or coding-only tutor.",
      },
      ...next.map((message) => ({ role: message.role, content: message.content }) as ChatCompletionMessageParam),
    ];

    try {
      const answer = await localAI.complete(
        payload,
        (_token, fullText) => {
          setMessages((current) =>
            current.map((message) =>
              message.id === assistantId ? { ...message, content: fullText } : message
            )
          );
        },
        {
          nudge:
            "Give a useful general chat response. Do not force a study rubric, AP structure, formula section, or tutoring workflow unless the user asks for one.",
        }
      );
      setMessages((current) =>
        current.map((message) =>
          message.id === assistantId ? { ...message, content: answer } : message
        )
      );
    } catch (caught) {
      const message = caught instanceof Error ? caught.message : "Local generation failed.";
      setUiError(message);
      setMessages((current) => current.filter((item) => item.id !== assistantId));
    } finally {
      setSending(false);
    }
  }

  function stopGeneration() {
    localAI.interruptGeneration();
    setSending(false);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Browser-local runtime
            </p>
            <h2 className="mt-1 text-xl font-bold text-slate-950">Choose a model and run it here</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-700">
              No Ollama, local server, account, or API key is required. WebLLM runs the model with
              WebGPU in this browser. Model files are downloaded once and kept in the browser cache.
              Chat messages stay in this page and are not sent to the Knowledge Explorer server.
            </p>
          </div>
          <span className="rounded-full border border-emerald-300 bg-white px-3 py-1 text-xs font-semibold text-emerald-800">
            {localAI.webGPUSupported === null
              ? "Checking WebGPU…"
              : localAI.webGPUSupported
                ? "WebGPU available"
                : "WebGPU unavailable"}
          </span>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_auto]">
          <label className="text-sm font-medium text-slate-800">
            Local model
            <select
              className="input mt-1 w-full"
              value={localAI.selectedModelId}
              disabled={localAI.status === "loading" || sending}
              onChange={(event) => localAI.setSelectedModelId(event.target.value)}
            >
              {localAI.models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.label} · {model.parameterSize} · ~{Math.round(model.vramMB / 1024 * 10) / 10} GB VRAM
                  {model.cached ? " · cached" : ""}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-end gap-2">
            {!localAI.ready || localAI.loadedModelId !== localAI.selectedModelId ? (
              <button
                type="button"
                className="btn-primary"
                disabled={localAI.status === "loading" || localAI.webGPUSupported === false}
                onClick={() => void enableSelected()}
              >
                {localAI.status === "loading" ? "Loading…" : selected?.cached ? "Enable model" : "Download & enable"}
              </button>
            ) : (
              <button type="button" className="btn-secondary" onClick={() => void localAI.stop()}>
                Unload model
              </button>
            )}
          </div>
        </div>

        {selected ? (
          <p className="mt-2 text-xs text-slate-600">
            {selected.summary} · Best for: {selected.bestFor}
          </p>
        ) : null}

        {(localAI.status === "loading" || localAI.progress > 0) && !localAI.ready ? (
          <div className="mt-4">
            <div className="h-2 overflow-hidden rounded-full bg-emerald-100">
              <div
                className="h-full rounded-full bg-emerald-600 transition-[width]"
                style={{ width: `${Math.round(localAI.progress * 100)}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-slate-600">
              {Math.round(localAI.progress * 100)}% · {localAI.statusText}
            </p>
          </div>
        ) : (
          <p className="mt-3 text-xs text-slate-600">{localAI.statusText}</p>
        )}

        {loaded ? (
          <p className="mt-2 text-xs font-semibold text-emerald-800">
            Running locally: {loaded.label} · {loaded.parameterSize} · WebGPU
          </p>
        ) : null}
        {(uiError || localAI.error) ? (
          <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">
            {uiError || localAI.error}
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
                This sandbox is intentionally general-purpose. For structured AP, English, and coding
                workflows, use AI for AP, AI for English, or AI for Code instead.
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
            placeholder={localAI.ready ? "Message your local model…" : "Enable a local model first…"}
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-500">Local inference requires a browser/device with WebGPU support.</p>
            <button type="submit" className="btn-primary" disabled={!input.trim() || sending || !localAI.ready}>
              {sending ? "Generating…" : "Send locally"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
