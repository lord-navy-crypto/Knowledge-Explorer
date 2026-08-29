"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AiForApToolboxSection from "@/components/AiForApToolboxSection";
import EthicsBanner from "@/components/EthicsBanner";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import SiteAiStatusBanner from "@/components/SiteAiStatusBanner";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import UnifiedAiPanel from "@/components/UnifiedAiPanel";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import {
  loadToolboxExtraTool,
  saveToolboxExtraTool,
  type ToolboxExtraTool,
} from "@/lib/ai-toolbox-prefs";
import { legacyToolToApTask, migrateEnglishTask } from "@/lib/ai-toolbox-url";
import { decodeSpecialPrompt } from "@/lib/ai-special-features";

const MathPad = dynamic(() => import("@/components/MathPad"), {
  loading: () => <div className="card text-sm text-slate-500">Loading Calc + Graph…</div>,
});

type ExtraTool = ToolboxExtraTool;

const AP_TASKS = new Set([
  "advice",
  "concept",
  "guide",
  "formula-derive",
  "generate-questions",
  "concept-extension",
]);
const CODING_TASKS = new Set(["debug", "write", "explain", "csa-frq"]);

function resolveSubject(raw: string | null): string | undefined {
  if (!raw?.trim()) return undefined;
  return raw.trim();
}

function resolveExtraTool(raw: string | null): ExtraTool {
  if (raw === "calculator" || raw === "grapher" || raw === "math") return raw === "grapher" ? "grapher" : "calculator";
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
  return migrateEnglishTask(searchParams.get("englishTask"));
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
  const prefillPrompt = decodeSpecialPrompt(searchParams.get("sf"));

  useEffect(() => {
    if (searchParams.get("section") === "ai-for-ap") {
      setExtra("ai");
      saveToolboxExtraTool("ai");
      return;
    }
    const fromUrl = searchParams.get("tool");
    if (fromUrl) {
      setExtra(resolveExtraTool(fromUrl));
      return;
    }
    const saved = loadToolboxExtraTool();
    if (saved) setExtra(saved);
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("section") !== "ai-for-ap") return;
    const timer = window.setTimeout(() => {
      document.getElementById("ai-for-ap")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 160);
    return () => window.clearTimeout(timer);
  }, [searchParams]);

  function selectExtra(next: ExtraTool) {
    setExtra(next);
    saveToolboxExtraTool(next);
  }

  return (
    <div className="space-y-8">
      <section className="hero-gradient rounded-3xl px-5 py-6 text-white shadow-lg md:px-9 md:py-9">
        <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
          AI TOOLBOX · AI FOR AP
        </span>
        <h1 className="mt-3 text-2xl font-bold md:text-4xl">AI Toolbox</h1>
        <p className="mt-2 hidden max-w-2xl text-blue-100 sm:block">
          One panel for study help. Choose Local, Website API, or Your own API — then pick AP,
          English, or Coding. Extra tool: Calc + Graph (calculator and grapher fused). Official AP /
          ETS links sit next to chat. Your path and last tab are remembered in this browser.
        </p>
        <p className="mt-2 text-sm text-blue-100 sm:hidden">
          Local / Website API / Your key · AP · English · Coding · Calc + Graph
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a
            href="#unified-ai-chat"
            className="rounded-lg border border-white/35 bg-white px-4 py-2 text-sm font-semibold text-brand-800 hover:bg-white/90 sm:hidden"
          >
            Jump to chat
          </a>
          <a
            href="#ai-for-ap"
            className="rounded-lg border border-white/35 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            AI for AP guides ↓
          </a>
        </div>
        <LocalAiRecommendation variant="hero" className="mt-4 max-w-2xl" />
      </section>

      <SiteAiStatusBanner />

      <EthicsBanner />

      <div className="sticky top-16 z-20 -mx-1 flex flex-wrap gap-2 scroll-mt-24 bg-slate-50/95 px-1 py-2 backdrop-blur supports-[backdrop-filter]:bg-slate-50/80 md:static md:top-auto md:bg-transparent md:p-0 md:backdrop-blur-none" role="tablist" aria-label="Toolbox tools">
        {(
          [
            { id: "ai", label: "Unified AI" },
            { id: "calculator", label: "Calc + Graph" },
          ] as const
        ).map((item) => {
          const selected = item.id === "ai" ? extra === "ai" : extra !== "ai";
          return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => selectExtra(item.id)}
            className={`rounded-full border px-3 py-1.5 text-sm font-medium ${
              selected
                ? "border-brand-500 bg-brand-50 text-brand-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
            }`}
          >
            {item.label}
          </button>
          );
        })}
        {extra === "ai" ? (
          <a
            href="#unified-ai-chat"
            className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-sm font-medium text-brand-800 hover:bg-brand-50 md:hidden"
          >
            ↓ Chat
          </a>
        ) : null}
      </div>

      {extra === "ai" ? (
        <UnifiedAiPanel
          defaultCategory={category}
          defaultSubject={subject}
          defaultApTask={apTask}
          defaultEnglishTask={englishTask}
          defaultCodingTask={codingTask}
          defaultPrefillPrompt={prefillPrompt || undefined}
        />
      ) : null}
      {extra !== "ai" ? (
        <MathPad focus={extra === "grapher" ? "grapher" : "calculator"} />
      ) : null}

      {extra === "ai" ? <AiForApToolboxSection /> : null}

      <UnifiedMediaFrame
        title="AI Toolbox · pictures, documents & files"
        folderArea="hints"
        alsoShow={["document", "folder"]}
      />

      <RecommendedStudyTools context="hints" />
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
