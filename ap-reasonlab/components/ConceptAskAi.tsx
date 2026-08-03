"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import EthicsBanner from "@/components/EthicsBanner";
import LocalAIControls from "@/components/LocalAIControls";
import VoiceInputButton from "@/components/VoiceInputButton";
import RichContent from "@/components/RichContent";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import { toolboxHref } from "@/lib/ai-toolbox-url";
import { stashToolboxPrefill } from "@/lib/ai-toolbox-prefill";
import { useLocalAI } from "@/components/LocalAIProvider";
import { conceptExplainLocal } from "@/lib/ai-prompts";
import { appendAiSiteContext, fetchAiSiteContext, AI_SITE_SEARCH_LIMIT_LOCAL } from "@/lib/ai-site-context";

type Props = {
  defaultSubject?: string;
  conceptTitle: string;
  conceptSummary?: string;
  lockToConcept?: boolean;
};

export default function ConceptAskAi({
  defaultSubject = "",
  conceptTitle,
  conceptSummary = "",
  lockToConcept = true,
}: Props) {
  const localAI = useLocalAI();
  const [mode, setMode] = useState<"explain" | "quiz" | "ask">("explain");
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    refused: boolean;
    reply: string;
    quizPrompt: string;
    aiMayBeWrong: string;
    note: string;
  } | null>(null);

  const title = useMemo(() => conceptTitle || "This concept", [conceptTitle]);

  async function run(nextMode: "explain" | "quiz" | "ask") {
    setMode(nextMode);
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const askText =
        nextMode === "ask"
          ? question
          : nextMode === "quiz"
            ? "Quiz me on this concept."
            : "Explain this concept for AP study.";

      if (localAI.usesLocal) {
        if (!localAI.ready) {
          throw new Error(
            "Local is selected, but no model is enabled. Enable Local above, or switch to Website API / Your own API."
          );
        }
        const localPrompt = `Subject: ${defaultSubject}\nConcept: ${conceptTitle}\nSummary: ${conceptSummary}\nMode: ${nextMode}\nQuestion: ${askText}`;
        const { context } = await fetchAiSiteContext(localPrompt, localAI.siteSearchEnabled, {
          limit: AI_SITE_SEARCH_LIMIT_LOCAL,
        });
        const text = await localAI.complete([
          {
            role: "system",
            content: conceptExplainLocal(nextMode),
          },
          {
            role: "user",
            content: appendAiSiteContext(localPrompt, context),
          },
        ]);
        setResult({
          refused: false,
          reply: text,
          quizPrompt: "",
          aiMayBeWrong: "Local AI may be wrong — verify with your notes.",
          note: context ? "Local · with Knowledge Explorer site search" : "Local · processed in this browser",
        });
        return;
      }

      if (localAI.mode === "byok" && !localAI.userKey.trim()) {
        throw new Error("Paste your own API key, or switch to Website API.");
      }
      const res = await fetch("/api/ai/concept", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: defaultSubject,
          conceptTitle,
          conceptSummary,
          mode: nextMode,
          question: askText,
          lockToConcept,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "AI request failed");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="card space-y-4 border-brand-100">
      <div>
        <h2 className="text-lg font-semibold">Ask AI about “{title}”</h2>
        <p className="mt-1 text-sm text-slate-600">
          Explain or quiz on this concept. Off-topic or non-learning questions are refused.
        </p>
      </div>
      <EthicsBanner />
      <LocalAIControls />
      <p className="text-xs text-slate-500">
        Prefer the full dialogue?{" "}
        <Link
          href={toolboxHref({ apTask: "concept", subject: defaultSubject })}
          className="font-medium text-brand-700 underline"
          onClick={() =>
            stashToolboxPrefill(
              `Concept: ${conceptTitle}\n${conceptSummary}\n\nExplain this concept for AP study.`
            )
          }
        >
          Open in AI Toolbox
        </Link>
        {" · "}
        <Link
          href={toolboxHref({ apTask: "generate-questions", subject: defaultSubject })}
          className="font-medium text-brand-700 underline"
          onClick={() =>
            stashToolboxPrefill(
              `Generate original practice questions for: ${conceptTitle}. Hints only, no final answers.`
            )
          }
        >
          Generate practice
        </Link>
        {" · "}
        <Link
          href={toolboxHref({ apTask: "concept-extension", subject: defaultSubject })}
          className="font-medium text-brand-700 underline"
          onClick={() =>
            stashToolboxPrefill(
              `${conceptTitle}\n${conceptSummary}\n\nMap how AP exams extend this basic concept into richer scenes (extension concepts, formulas, moves).`
            )
          }
        >
          Concept extension
        </Link>
      </p>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-primary" disabled={loading} onClick={() => run("explain")}>
          {loading && mode === "explain" ? "Explaining…" : "Explain"}
        </button>
        <button type="button" className="btn-secondary" disabled={loading} onClick={() => run("quiz")}>
          {loading && mode === "quiz" ? "Preparing…" : "Quiz me"}
        </button>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs font-medium text-slate-600">Follow-up question</p>
          <VoiceInputButton
            disabled={loading}
            onTranscript={(text, isFinal) => {
              setQuestion((prev) => {
                if (!prev.trim() || isFinal) {
                  const spacer = prev.trim() && isFinal ? (prev.endsWith(" ") ? "" : " ") : "";
                  return `${prev}${spacer}${text}`.trimStart();
                }
                return `${prev.replace(/\s+$/, "")} ${text}`.trim();
              });
            }}
          />
        </div>
        <MarkdownLatexField
          label="Or ask a follow-up (must stay on this concept)"
          help="Markdown + LaTeX supported when you paste a math question."
          value={question}
          onChange={setQuestion}
          minHeightClass="min-h-[6rem]"
          placeholder="e.g. Why do students mix this up with …?"
        />
        <button
          type="button"
          className="btn-secondary"
          disabled={loading || !question.trim()}
          onClick={() => run("ask")}
        >
          {loading && mode === "ask" ? "Thinking…" : "Ask"}
        </button>
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      {result && (
        <div className={`rounded-xl border p-4 ${result.refused ? "border-amber-200 bg-amber-50" : "border-slate-200"}`}>
          <RichContent className="text-sm text-slate-800">{result.reply}</RichContent>
          {result.quizPrompt ? (
            <p className="mt-3 text-sm text-slate-700">
              <strong>Quiz:</strong> {result.quizPrompt}
            </p>
          ) : null}
          <p className="mt-3 text-xs text-amber-800">{result.aiMayBeWrong}</p>
          <p className="mt-1 text-xs text-slate-400">{result.note}</p>
        </div>
      )}
    </section>
  );
}
