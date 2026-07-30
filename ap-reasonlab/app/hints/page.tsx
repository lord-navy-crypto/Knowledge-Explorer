"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import EthicsBanner from "@/components/EthicsBanner";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
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
import { legacyToolToApTask } from "@/lib/ai-toolbox-url";

type ExtraTool = ToolboxExtraTool;

const AP_TASKS = new Set([
  "advice",
  "concept",
  "guide",
  "formula-derive",
  "generate-questions",
]);
const ENGLISH_TASKS = new Set([
  "grammar-explanation",
  "vocab-extract",
  "optimize-reading",
  "corpus-find",
  "corpus-generate",
  "writing-feedback",
  "test-strategy",
  "original-practice",
]);
const CODING_TASKS = new Set(["debug", "write", "explain"]);

function resolveSubject(raw: string | null): string | undefined {
  if (!raw?.trim()) return undefined;
  return raw.trim();
}

function resolveExtraTool(raw: string | null): ExtraTool {
  if (raw === "calculator" || raw === "grapher") return raw;
  if (
    raw === "english" ||
    raw === "coding" ||
    raw === "concept" ||
    raw === "guide" ||
    raw === "hint"
  ) {
    return "ai";
  }
  if (raw === "imagegen") return "grapher";
  return "ai";
}

function resolveCategory(raw: string | null): "ap" | "english" | "coding" {
  if (raw === "english" || raw === "coding") return raw;
  if (raw === "concept" || raw === "guide" || raw === "hint") return "ap";
  return "ap";
}

function resolveApTask(
  searchParams: URLSearchParams,
  tool: string | null
): string | undefined {
  const direct = searchParams.get("apTask");
  if (direct && AP_TASKS.has(direct)) return direct;
  const legacy = legacyToolToApTask(tool);
  return legacy;
}

function resolveEnglishTask(searchParams: URLSearchParams): string | undefined {
  const direct = searchParams.get("englishTask");
  if (direct && ENGLISH_TASKS.has(direct)) return direct;
  return undefined;
}

function resolveCodingTask(searchParams: URLSearchParams): string | undefined {
  const direct = searchParams.get("codingTask");
  if (direct && CODING_TASKS.has(direct)) return direct;
  return undefined;
}

function ToolboxContent() {
  const searchParams = useSearchParams();
  const tool = searchParams.get("tool");
  const [extra, setExtra] = useState<ExtraTool>(() => resolveExtraTool(tool));
  const subject = resolveSubject(searchParams.get("subject"));
  const category = resolveCategory(tool);
  const apTask = resolveApTask(searchParams, tool);
  const englishTask = resolveEnglishTask(searchParams);
  const codingTask = resolveCodingTask(searchParams);

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
        <LocalAiRecommendation variant="hero" className="mt-4 max-w-2xl" />
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
        <UnifiedAiPanel
          defaultCategory={category}
          defaultSubject={subject}
          defaultApTask={apTask}
          defaultEnglishTask={englishTask}
          defaultCodingTask={codingTask}
        />
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
