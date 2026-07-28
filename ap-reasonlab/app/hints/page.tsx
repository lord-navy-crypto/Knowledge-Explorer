"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EthicsBanner from "@/components/EthicsBanner";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import TICalculator from "@/components/TICalculator";
import TIGrapher from "@/components/TIGrapher";
import {
  loadToolboxExtraTool,
  saveToolboxExtraTool,
  type ToolboxExtraTool,
} from "@/lib/ai-toolbox-prefs";

type ExtraTool = ToolboxExtraTool;

function resolveSubject(raw: string | null): string | undefined {
  if (!raw?.trim()) return undefined;
  return raw.trim();
}

function resolveExtraTool(raw: string | null): ExtraTool {
  if (raw === "calculator" || raw === "grapher") return raw;
  if (raw === "english" || raw === "coding" || raw === "concept" || raw === "guide" || raw === "hint") {
    return "ai";
  }
  // Retired Image Gen links land on the function plotter instead.
  if (raw === "imagegen") return "grapher";
  return "ai";
}

function resolveCategory(raw: string | null): "ap" | "english" | "coding" {
  if (raw === "english" || raw === "coding") return raw;
  if (raw === "concept" || raw === "guide" || raw === "hint") return "ap";
  return "ap";
}

function ToolboxContent() {
  const searchParams = useSearchParams();
  const [extra, setExtra] = useState<ExtraTool>(() => resolveExtraTool(searchParams.get("tool")));
  const subject = resolveSubject(searchParams.get("subject"));
  const category = resolveCategory(searchParams.get("tool"));

  useEffect(() => {
    const fromUrl = searchParams.get("tool");
    if (fromUrl) {
      setExtra(resolveExtraTool(fromUrl));
      return;
    }
    const saved = loadToolboxExtraTool();
    if (saved) setExtra(saved);
  }, [searchParams]);

  function selectExtra(next: ExtraTool) {
    setExtra(next);
    saveToolboxExtraTool(next);
  }

  return (
    <div className="space-y-8">
      <section className="hero-gradient rounded-3xl px-6 py-9 text-white shadow-lg md:px-9">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          AI TOOLBOX
        </span>
        <h1 className="mt-3 text-3xl font-bold md:text-4xl">One AI panel for study help</h1>
        <p className="mt-2 max-w-2xl text-blue-100">
          Choose Local, Website API, or Your own API inside one box — then pick AP, English, or
          Coding tasks. Extra tools: Calculator (computer) and Grapher (function plotter). Your AI
          path, model, and last tab are remembered in this browser.
        </p>
      </section>

      <EthicsBanner />

      <div className="flex flex-wrap gap-2">
        {(
          [
            { id: "ai", label: "Unified AI" },
            { id: "calculator", label: "Calculator" },
            { id: "grapher", label: "Grapher" },
          ] as const
        ).map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => selectExtra(item.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
              extra === item.id
                ? "border-brand-500 bg-brand-50 text-brand-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {extra === "ai" ? (
        <UnifiedAiPanel defaultCategory={category} defaultSubject={subject} />
      ) : null}
      {extra === "calculator" ? <TICalculator /> : null}
      {extra === "grapher" ? <TIGrapher /> : null}

      <UnifiedMediaFrame
        title="AI Toolbox · pictures, documents & files"
        folderArea="hints"
        alsoShow={["document", "folder"]}
      />

      <RecommendedStudyTools />
    </div>
  );
}

export default function HintsPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Loading AI Toolbox…</div>}>
      <ToolboxContent />
    </Suspense>
  );
}
