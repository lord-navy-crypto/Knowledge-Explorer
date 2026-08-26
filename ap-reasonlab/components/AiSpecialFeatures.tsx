"use client";

import { useMemo, useState } from "react";
import {
  deleteSavedSpecialFeature,
  listMatchingSpecialFeatures,
  loadSavedSpecialFeatures,
  saveSpecialFeature,
  type SpecialFeature,
} from "@/lib/ai-special-features";

type Props = {
  category: "ap" | "english" | "coding";
  apTask?: string;
  englishTask?: string;
  codingTask?: string;
  subject?: string;
  guidePrompts?: Array<{ label: string; prompt: string }>;
  onApply: (feature: SpecialFeature) => void;
  /** Current input — used when saving a custom special feature */
  currentPrompt?: string;
  currentNotes?: string;
  currentCode?: string;
};

export default function AiSpecialFeatures({
  category,
  apTask,
  englishTask,
  codingTask,
  subject,
  guidePrompts,
  onApply,
  currentPrompt = "",
  currentNotes = "",
  currentCode = "",
}: Props) {
  const [savedTick, setSavedTick] = useState(0);
  const [saveOpen, setSaveOpen] = useState(false);
  const [saveLabel, setSaveLabel] = useState("");

  const features = useMemo(() => {
    void savedTick;
    return listMatchingSpecialFeatures({
      category,
      apTask,
      englishTask,
      codingTask,
      subject,
      saved: loadSavedSpecialFeatures(),
      guidePrompts,
    });
  }, [apTask, category, codingTask, englishTask, guidePrompts, savedTick, subject]);

  function handleSave() {
    const prompt = currentPrompt.trim();
    if (!prompt) return;
    const label = saveLabel.trim() || prompt.slice(0, 36);
    saveSpecialFeature({
      id: `saved-${Date.now()}`,
      label,
      badge: "Mine",
      category,
      apTask: category === "ap" ? apTask : undefined,
      englishTask: category === "english" ? englishTask : undefined,
      codingTask: category === "coding" ? codingTask : undefined,
      subjects: category === "ap" && subject ? [subject] : undefined,
      prompt,
      notes: currentNotes.trim() || undefined,
      code: currentCode.trim() || undefined,
    });
    setSaveLabel("");
    setSaveOpen(false);
    setSavedTick((n) => n + 1);
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white px-3 py-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            特殊功能 · Special features
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            One-click starters & exam templates for this task — fill the box, then Ask AI.
          </p>
        </div>
        <button
          type="button"
          className="text-xs font-medium text-brand-700 hover:underline"
          onClick={() => setSaveOpen((v) => !v)}
        >
          {saveOpen ? "Cancel" : "Save current as special feature"}
        </button>
      </div>

      {saveOpen ? (
        <div className="mt-2 flex flex-wrap items-end gap-2 rounded-lg border border-brand-200 bg-brand-50/50 p-2">
          <label className="min-w-[10rem] flex-1 text-xs font-medium text-slate-700">
            Name
            <input
              className="input mt-1 text-sm"
              value={saveLabel}
              onChange={(e) => setSaveLabel(e.target.value)}
              placeholder="e.g. My kinematics FRQ"
            />
          </label>
          <button
            type="button"
            className="btn-primary text-xs"
            disabled={!currentPrompt.trim()}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : null}

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        {features.length === 0 ? (
          <p className="text-xs text-slate-500">No special features for this task yet.</p>
        ) : (
          features.map((feature) => (
            <div key={feature.id} className="inline-flex items-center gap-0.5">
              <button
                type="button"
                onClick={() => onApply(feature)}
                className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-left text-xs font-medium text-slate-800 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-900"
                title={feature.prompt.slice(0, 160)}
              >
                {feature.badge ? (
                  <span className="mr-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {feature.badge}
                  </span>
                ) : null}
                {feature.label}
              </button>
              {feature.kind === "saved" ? (
                <button
                  type="button"
                  className="rounded px-1 text-[10px] text-slate-400 hover:text-red-600"
                  title="Delete saved special feature"
                  onClick={() => {
                    deleteSavedSpecialFeature(feature.id);
                    setSavedTick((n) => n + 1);
                  }}
                >
                  ×
                </button>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
