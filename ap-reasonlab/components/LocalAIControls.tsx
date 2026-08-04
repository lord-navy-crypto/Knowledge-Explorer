"use client";

import { useMemo, useState } from "react";
import AiApiChannel from "@/components/AiApiChannel";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import {
  formatLocalModelTags,
  useLocalAI,
  type AIMode,
  type LocalModelGroup,
} from "@/components/LocalAIProvider";
import {
  LOCAL_MODEL_GROUP_LABELS,
  LOCAL_MODEL_GROUP_ORDER,
  LOCAL_MODEL_USE_CASES,
  modelsForUseCase,
} from "@/lib/local-ai-models";

const PATHS: Array<{
  value: AIMode;
  label: string;
  detail: string;
}> = [
  {
    value: "local",
    label: "Local",
    detail: "Preferred default — runs in this browser when WebGPU is available.",
  },
  {
    value: "site",
    label: "Website API",
    detail: "Uses the API this site provides (shared Instant or Advanced Default).",
  },
  {
    value: "byok",
    label: "Your own API",
    detail: "Paste your provider key. Key is used for this session only.",
  },
];

const MODEL_GROUPS: Array<{ value: LocalModelGroup; label: string }> = [
  { value: "superlight", label: "Super light" },
  { value: "light", label: "Light" },
  { value: "medium", label: "Medium" },
  { value: "heavy", label: "Heavy" },
];

type Props = {
  /** Flatten styling when nested inside the unified AI card. */
  embedded?: boolean;
};

/**
 * One shared AI settings panel for every tool:
 * Local · Website API · Your own API.
 */
export default function LocalAIControls({ embedded = false }: Props) {
  const localAI = useLocalAI();
  const [pendingModelId, setPendingModelId] = useState("");
  const [confirmLoad, setConfirmLoad] = useState(false);
  const [confirmRemoveId, setConfirmRemoveId] = useState("");
  const [showDownloads, setShowDownloads] = useState(false);
  const [loadError, setLoadError] = useState("");
  const [showSuitabilityGuide, setShowSuitabilityGuide] = useState(false);
  const selected = localAI.models.find((model) => model.id === localAI.selectedModelId);
  const loaded = localAI.models.find((model) => model.id === localAI.loadedModelId);
  const target = localAI.models.find(
    (model) => model.id === (pendingModelId || localAI.selectedModelId)
  );
  const removeTarget = localAI.models.find((model) => model.id === confirmRemoveId);
  const cachedModels = localAI.models.filter((model) => model.cached);
  const cacheChecked = localAI.models.every((model) => model.cached !== null);
  const busy = localAI.status === "loading" || localAI.status === "generating";
  const modeNeedsModel = localAI.mode === "local" && !localAI.ready;
  const featuredCount = useMemo(
    () => localAI.models.filter((model) => !model.extended).length,
    [localAI.models]
  );
  const extendedCount = useMemo(
    () => localAI.models.filter((model) => model.extended).length,
    [localAI.models]
  );

  function requestModel(modelId: string) {
    if (localAI.ready && modelId !== localAI.loadedModelId) {
      setPendingModelId(modelId);
      setConfirmLoad(true);
      setLoadError("");
      return;
    }
    localAI.setSelectedModelId(modelId);
  }

  function openLoadConfirmation(modelId?: string) {
    setPendingModelId(modelId || localAI.selectedModelId);
    setConfirmLoad(true);
    setLoadError("");
  }

  function selectMode(next: AIMode) {
    localAI.setMode(next);
    if (next === "local" && !localAI.ready && !busy) {
      openLoadConfirmation(localAI.selectedModelId);
    }
  }

  async function confirmModelLoad() {
    const modelId = pendingModelId || localAI.selectedModelId;
    setConfirmLoad(false);
    setPendingModelId("");
    setLoadError("");
    try {
      if (localAI.mode !== "local") localAI.setMode("local");
      await localAI.enable(modelId);
    } catch (caught) {
      setLoadError(caught instanceof Error ? caught.message : "Could not enable local AI.");
    }
  }

  async function openDownloads() {
    if (showDownloads) {
      setShowDownloads(false);
      return;
    }
    setShowDownloads(true);
    if (!cacheChecked) await localAI.refreshCacheStatus();
  }

  return (
    <section
      className={
        embedded
          ? "space-y-4 border-b border-slate-200 pb-4"
          : "space-y-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
      }
    >
      <div>
        <LocalAiRecommendation className="mb-3" />
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">AI settings</p>
        <p className="mt-1 text-sm text-slate-600">
          One shared panel for every AI task: Local, Website API, or Your own API — then choose the
          work below.
        </p>
        <div className="mt-3 grid gap-2 md:grid-cols-3">
          {PATHS.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => selectMode(item.value)}
              className={
                localAI.mode === item.value
                  ? "rounded-xl bg-slate-900 px-4 py-3 text-left text-white shadow"
                  : "rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-slate-800 hover:border-slate-400"
              }
            >
              <span className="block text-sm font-semibold">{item.label}</span>
              <span
                className={`mt-1 block text-xs ${
                  localAI.mode === item.value ? "text-slate-200" : "text-slate-500"
                }`}
              >
                {item.detail}
              </span>
            </button>
          ))}
        </div>
        <label className="mt-3 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700">
          <input
            type="checkbox"
            className="mt-1"
            checked={localAI.siteSearchEnabled}
            onChange={(event) => localAI.setSiteSearchEnabled(event.target.checked)}
          />
          <span>
            <span className="font-semibold text-slate-900">Always search Knowledge Explorer</span>
            <span className="mt-0.5 block text-xs text-slate-500">
              Before answering, look up matching concepts / formulas / practice / documents on this
              site and feed them to the AI so it can teach from your materials. Free to search —
              only a little extra prompt size if matches exist. Not Google / open-web search.
              Author tip: keep this ON — Local AI works best with site content.
            </span>
          </span>
        </label>
      </div>

      {localAI.mode === "site" && (
        <AiApiChannel
          path="site"
          siteModel={localAI.siteModel}
          onSiteModelChange={localAI.setSiteModel}
          provider={localAI.provider}
          onProviderChange={localAI.setProvider}
          userKey={localAI.userKey}
          onUserKeyChange={localAI.setUserKey}
        />
      )}

      {localAI.mode === "byok" && (
        <AiApiChannel
          path="byok"
          siteModel={localAI.siteModel}
          onSiteModelChange={localAI.setSiteModel}
          provider={localAI.provider}
          onProviderChange={localAI.setProvider}
          userKey={localAI.userKey}
          onUserKeyChange={localAI.setUserKey}
        />
      )}

      {localAI.mode === "local" && (
        <>
          {modeNeedsModel && (
            <div className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950">
              <strong>Local is selected, but no model is loaded yet.</strong>
              <p className="mt-1">
                Press <strong>Enable local AI</strong> to download/load a model in this browser, or
                switch to Website API / Your own API.
              </p>
              <p className="mt-2 text-xs text-amber-900/90">
                Local keeps only <strong>thinking mode off</strong>. There is{" "}
                <strong>no generation time limit</strong> — answers stream live and may be long.
                Prefer Starter/Light on weak GPUs; Heavy needs a strong GPU.
              </p>
            </div>
          )}

          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-semibold text-slate-900">Local model series</h2>
                <p className="mt-1 max-w-2xl text-sm text-slate-600">
                  Curated study picks (Qwen3.5 / Qwen3, Math, Coder, English). Enable stays on this
                  device. Turn on the full library for every official WebLLM q4f16 model.
                </p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  localAI.ready
                    ? "bg-emerald-100 text-emerald-800"
                    : localAI.webGPUSupported === false
                      ? "bg-red-100 text-red-700"
                      : localAI.status === "loading"
                        ? "bg-amber-100 text-amber-800"
                        : "bg-slate-100 text-slate-600"
                }`}
              >
                {localAI.ready
                  ? `Enabled · ${loaded?.parameterSize || "model"}`
                  : localAI.status === "loading"
                    ? "Enabling…"
                    : localAI.webGPUSupported === false
                      ? "WebGPU unavailable"
                      : "Not enabled"}
              </span>
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700">
              <input
                type="checkbox"
                className="mt-1"
                checked={localAI.showFullLibrary}
                onChange={(event) => localAI.setShowFullLibrary(event.target.checked)}
              />
              <span>
                <span className="font-semibold text-slate-900">
                  Show full WebLLM model library
                </span>
                <span className="mt-0.5 block text-xs text-slate-500">
                  Off = curated study series ({featuredCount} models) with flash points. On = also
                  list official WebLLM q4f16 instruct models
                  {localAI.showFullLibrary && extendedCount
                    ? ` (+${extendedCount} extra)`
                    : " (large list)"}
                  — DeepSeek-R1 Distill stays excluded (thinking lag). Heavier models need more GPU
                  memory; prefer Light/Medium on laptops.
                </span>
              </span>
            </label>

            <div className="mt-4 grid gap-3 md:grid-cols-[1fr_auto]">
              <div>
                <label className="mb-1 block text-sm font-medium">Choose local model</label>
                <select
                  className="input"
                  value={localAI.selectedModelId}
                  onChange={(event) => requestModel(event.target.value)}
                  disabled={busy}
                >
                  {MODEL_GROUPS.map((group) => {
                    const featured = localAI.models.filter(
                      (model) => model.group === group.value && !model.extended
                    );
                    const extended = localAI.models.filter(
                      (model) => model.group === group.value && model.extended
                    );
                    if (!featured.length && !extended.length) return null;
                    return (
                      <optgroup key={group.value} label={group.label}>
                        {featured.map((model) => (
                          <option key={model.id} value={model.id}>
                            {model.series} · {model.label} · {model.parameterSize} · ~
                            {model.vramMB} MB
                            {model.tags.length
                              ? ` · ${formatLocalModelTags(model.tags)}`
                              : ""}
                            {model.recommended ? " · recommended" : ""}
                            {model.cached ? " · downloaded" : ""}
                            {model.id === localAI.loadedModelId ? " · active" : ""}
                          </option>
                        ))}
                        {extended.map((model) => (
                          <option key={model.id} value={model.id}>
                            Full library · {model.series} · {model.label} · {model.parameterSize} · ~
                            {model.vramMB} MB
                            {model.cached ? " · downloaded" : ""}
                            {model.id === localAI.loadedModelId ? " · active" : ""}
                          </option>
                        ))}
                      </optgroup>
                    );
                  })}
                </select>
              </div>
              <div className="flex flex-wrap items-end gap-2">
                {!localAI.ready ? (
                  <button
                    type="button"
                    className="btn-primary"
                    disabled={busy || !localAI.selectedModelId || localAI.webGPUSupported === false}
                    onClick={() => openLoadConfirmation()}
                  >
                    {localAI.status === "loading"
                      ? "Enabling…"
                      : selected?.cached
                        ? "Enable local AI"
                        : "Enable / download"}
                  </button>
                ) : (
                  <button type="button" className="btn-secondary" onClick={() => void localAI.stop()}>
                    Stop local AI
                  </button>
                )}
                <button
                  type="button"
                  className="btn-secondary"
                  disabled={busy || localAI.cacheScanning}
                  onClick={() => void openDownloads()}
                >
                  {localAI.cacheScanning
                    ? "Checking…"
                    : showDownloads
                      ? "Hide downloads"
                      : "Manage downloads"}
                </button>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm font-semibold text-slate-900"
                aria-expanded={showSuitabilityGuide}
                onClick={() => setShowSuitabilityGuide((open) => !open)}
              >
                <span>What each Local AI is suitable for</span>
                <span className="text-xs font-medium text-brand-700">
                  {showSuitabilityGuide ? "Hide" : "Show guide"}
                </span>
              </button>
              {showSuitabilityGuide ? (
                <div className="space-y-4 border-t border-slate-200 px-3 py-3 text-sm">
                  <p className="text-xs leading-relaxed text-slate-600">
                    Curated study picks only (not the full WebLLM library). Pick by task, then Enable
                    above. Heavier models need more GPU memory.
                  </p>

                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Quick picks by task
                    </p>
                    {LOCAL_MODEL_USE_CASES.map((useCase) => {
                      const picks = modelsForUseCase(localAI.models, useCase, 3);
                      if (!picks.length) return null;
                      return (
                        <div key={useCase.id} className="rounded-lg bg-white px-3 py-2.5 ring-1 ring-slate-200">
                          <p className="font-semibold text-slate-900">{useCase.title}</p>
                          <p className="mt-0.5 text-xs text-slate-500">{useCase.detail}</p>
                          <ul className="mt-2 space-y-1.5">
                            {picks.map((model) => (
                              <li key={`${useCase.id}-${model.id}`}>
                                <button
                                  type="button"
                                  className="w-full rounded-md px-1.5 py-1 text-left hover:bg-slate-50"
                                  disabled={busy}
                                  onClick={() => requestModel(model.id)}
                                >
                                  <span className="font-medium text-brand-800">{model.label}</span>
                                  <span className="text-xs text-slate-500">
                                    {" "}
                                    · {model.parameterSize} · ~{model.vramMB} MB
                                    {model.recommended ? " · recommended" : ""}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-slate-600">
                                    Suitable for: {model.bestFor}
                                  </span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      Full curated list by size
                    </p>
                    {LOCAL_MODEL_GROUP_ORDER.map((group) => {
                      const rows = localAI.models.filter(
                        (model) => model.group === group && !model.extended
                      );
                      if (!rows.length) return null;
                      return (
                        <div key={group}>
                          <p className="mb-1.5 text-xs font-semibold text-slate-800">
                            {LOCAL_MODEL_GROUP_LABELS[group]}
                          </p>
                          <ul className="space-y-1">
                            {rows.map((model) => (
                              <li key={model.id}>
                                <button
                                  type="button"
                                  className={`w-full rounded-md px-2 py-1.5 text-left ring-1 ${
                                    model.id === localAI.selectedModelId
                                      ? "bg-brand-50 ring-brand-300"
                                      : "bg-white ring-slate-200 hover:bg-slate-50"
                                  }`}
                                  disabled={busy}
                                  onClick={() => requestModel(model.id)}
                                >
                                  <span className="flex flex-wrap items-center gap-1.5">
                                    <span className="text-sm font-medium text-slate-900">
                                      {model.label}
                                    </span>
                                    <span className="text-[11px] text-slate-500">
                                      {model.series} · {model.parameterSize} · ~{model.vramMB} MB
                                    </span>
                                    {model.recommended ? (
                                      <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-800">
                                        Recommended
                                      </span>
                                    ) : null}
                                  </span>
                                  <span className="mt-0.5 block text-xs text-slate-600">
                                    {model.summary}
                                  </span>
                                  <span className="mt-0.5 block text-xs font-medium text-slate-700">
                                    Suitable for: {model.bestFor}
                                  </span>
                                  {model.tags.length ? (
                                    <span className="mt-0.5 block text-[11px] text-slate-500">
                                      {formatLocalModelTags(model.tags)}
                                    </span>
                                  ) : null}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            {selected && !localAI.ready && (
              <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm">
                <div className="flex flex-wrap items-center gap-2">
                  <strong className="text-slate-900">{selected.label}</strong>
                  <span className="rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                    {selected.series}
                  </span>
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        tag === "Recommended" || tag === "New"
                          ? "rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800"
                          : tag === "Coding"
                            ? "rounded-full bg-sky-100 px-2 py-0.5 text-xs font-semibold text-sky-800"
                            : tag === "Math"
                              ? "rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-800"
                              : "rounded-full bg-slate-200 px-2 py-0.5 text-xs font-semibold text-slate-700"
                      }
                    >
                      {tag}
                    </span>
                  ))}
                  {selected.cached && (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                      Downloaded
                    </span>
                  )}
                </div>
                <p className="mt-1 text-slate-600">{selected.summary}</p>
                <p className="mt-1 text-xs text-slate-500">
                  Best for: {selected.bestFor}. Estimated device memory: {selected.vramMB} MB.
                </p>
              </div>
            )}

            {localAI.ready && loaded && (
              <div className="mt-4 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-950">
                <strong>
                  Active: {loaded.label} · {loaded.series}
                </strong>
                <p className="mt-1">{loaded.bestFor}.</p>
                {loaded.tags.length ? (
                  <p className="mt-1 text-xs text-emerald-900/80">
                    Flash points: {formatLocalModelTags(loaded.tags)}
                  </p>
                ) : null}
              </div>
            )}

            {localAI.status === "loading" && (
              <div className="mt-4" aria-live="polite">
                <div className="mb-1 flex justify-between text-xs text-slate-600">
                  <span>{localAI.statusText}</span>
                  <span>{Math.round(localAI.progress * 100)}%</span>
                </div>
                <progress className="h-2 w-full accent-slate-800" max={1} value={localAI.progress} />
              </div>
            )}
            {localAI.status !== "loading" && (
              <p className="mt-3 text-xs text-slate-500" aria-live="polite">
                {localAI.statusText}
              </p>
            )}
            {(localAI.error || loadError) && (
              <p className="mt-2 whitespace-pre-wrap text-sm text-red-700" role="alert">
                {loadError || localAI.error}
              </p>
            )}

            {showDownloads && (
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">Downloaded model files</h3>
                    <p className="text-xs text-slate-500">
                      Cache belongs to this browser profile on this device.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="text-xs font-medium text-slate-700 hover:underline"
                    disabled={localAI.cacheScanning}
                    onClick={() => void localAI.refreshCacheStatus()}
                  >
                    Check again
                  </button>
                </div>
                {cacheChecked && cachedModels.length === 0 && (
                  <p className="mt-3 text-sm text-slate-500">No downloaded models were found.</p>
                )}
                <div className="mt-3 space-y-2">
                  {cachedModels.map((model) => (
                    <div
                      key={model.id}
                      className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-white px-3 py-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-slate-800">{model.label}</p>
                        <p className="text-xs text-slate-500">
                          {model.parameterSize} · about {model.vramMB} MB device memory
                          {model.id === localAI.loadedModelId ? " · active" : ""}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-xs font-medium text-red-600 hover:underline"
                        disabled={busy}
                        onClick={() => setConfirmRemoveId(model.id)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {confirmLoad && target && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="local-ai-load-title"
        >
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <h2 id="local-ai-load-title" className="text-xl font-semibold">
              {localAI.ready ? "Switch local model" : "Enable local AI"}
            </h2>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              {localAI.ready && loaded && (
                <p>
                  The active model <strong>{loaded.label}</strong> will stop before{" "}
                  <strong>{target.label}</strong> loads.
                </p>
              )}
              <p>
                Model: <strong>{target.label}</strong> ({target.parameterSize}). Estimated device
                memory: <strong>{target.vramMB} MB</strong>.
              </p>
              <p>
                {target.cached
                  ? "This model looks cached and should load from this browser."
                  : "First enable downloads model files (needs internet). Later visits reuse the cache."}
              </p>
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  setConfirmLoad(false);
                  setPendingModelId("");
                }}
              >
                Cancel
              </button>
              <button type="button" className="btn-primary" onClick={() => void confirmModelLoad()}>
                {target.cached ? "Enable now" : "Download & enable"}
              </button>
            </div>
          </div>
        </div>
      )}

      {confirmRemoveId && removeTarget && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="local-ai-remove-title"
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <h2 id="local-ai-remove-title" className="text-xl font-semibold">
              Remove downloaded model?
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Remove <strong>{removeTarget.label}</strong> from this browser cache? You can download
              it again later.
            </p>
            <div className="mt-5 flex justify-end gap-2">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setConfirmRemoveId("")}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
                onClick={() => {
                  const modelId = confirmRemoveId;
                  setConfirmRemoveId("");
                  void localAI.removeCachedModel(modelId).catch(() => undefined);
                }}
              >
                Remove model
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
