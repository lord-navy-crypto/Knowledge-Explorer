"use client";

import { useState } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import LocalAIControls from "@/components/LocalAIControls";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import { useLocalAI } from "@/components/LocalAIProvider";
import { englishTutorLocal } from "@/lib/ai-prompts";
import { appendAiSiteContext, fetchAiSiteContext, AI_SITE_SEARCH_LIMIT_LOCAL } from "@/lib/ai-site-context";

type Result = {
  refused: boolean;
  feedback: string;
  strengths: string[];
  priorities: string[];
  revisionExample: string;
  practicePrompt: string;
  aiMayBeWrong: string;
  note: string;
};

const modes = [
  { value: "grammar-explanation", label: "Grammar check" },
  { value: "translator", label: "Translator" },
  { value: "writing-feedback", label: "Writing feedback" },
  { value: "language-materials", label: "Language materials" },
  { value: "test-strategy", label: "Exam strategy" },
  { value: "practice-generator", label: "Practice generator" },
] as const;

type Props = {
  embedded?: boolean;
  /** When true, parent already shows LocalAIControls */
  hideChannelUi?: boolean;
};

export default function EnglishAiTutor({ embedded = false, hideChannelUi = false }: Props) {
  const localAI = useLocalAI();
  const [mode, setMode] = useState<(typeof modes)[number]["value"]>("grammar-explanation");
  const [target, setTarget] = useState("General academic English");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      if (localAI.usesLocal) {
        if (!localAI.ready) {
          throw new Error(
            "Local is selected, but no model is enabled. Enable Local above, or switch to Website API / Your own API."
          );
        }
        const localPrompt = `Mode: ${mode}\nTarget: ${target}\n\nStudent input:\n${input}`;
        const { context } = await fetchAiSiteContext(localPrompt, localAI.siteSearchEnabled, {
          limit: AI_SITE_SEARCH_LIMIT_LOCAL,
        });
        setResult({
          refused: false,
          feedback: "",
          strengths: [],
          priorities: [],
          revisionExample: "",
          practicePrompt: "",
          aiMayBeWrong: "Local AI language advice may be wrong — verify important points.",
          note: context
            ? "Local AI · speaking… · with Knowledge Explorer site search"
            : "Local AI · speaking…",
        });
        const text = await localAI.complete(
          [
            {
              role: "system",
              content: englishTutorLocal(mode),
            },
            {
              role: "user",
              content: appendAiSiteContext(localPrompt, context),
            },
          ],
          (_token, fullText) => {
            flushSync(() => {
              setResult((prev) => (prev ? { ...prev, feedback: fullText } : prev));
            });
          }
        );
        setResult({
          refused: false,
          feedback: text,
          strengths: [],
          priorities: [],
          revisionExample: "",
          practicePrompt: "",
          aiMayBeWrong: "Local AI language advice may be wrong — verify important points.",
          note: context ? "Local AI · with Knowledge Explorer site search" : "Local AI · processed in this browser",
        });
        return;
      }

      if (localAI.mode === "byok" && !localAI.userKey.trim()) {
        throw new Error("Paste your own API key, or choose Website API / Local.");
      }
      const response = await fetch("/api/ai/english", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          target,
          input,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "English AI failed");
      setResult(data as Result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "English AI failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      {!embedded && (
        <div>
          <h2 className="text-xl font-semibold">English AI</h2>
          <p className="mt-1 text-sm text-slate-600">
            Writing, grammar, translation, and test strategy — Local, Website API, or Your own API.{" "}
            <Link href="/hints?tool=english" className="font-semibold underline">
              AI Toolbox · English AI
            </Link>
          </p>
        </div>
      )}

      {!hideChannelUi && <LocalAIControls />}

      <form onSubmit={submit} className="card space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Tool
            <select
              className="input mt-1"
              value={mode}
              onChange={(event) => setMode(event.target.value as typeof mode)}
            >
              {modes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Target
            <select className="input mt-1" value={target} onChange={(event) => setTarget(event.target.value)}>
              <option>General academic English</option>
              <option>TOEFL iBT</option>
              <option>IELTS Academic</option>
              <option>SAT Reading & Writing</option>
              <option>School writing</option>
            </select>
          </label>
        </div>
        <MarkdownLatexField
          label="Your text or English-learning question"
          help="Paste writing or a learning question. Markdown supported."
          value={input}
          onChange={setInput}
          required
          minHeightClass="min-h-52"
          placeholder="Paste your own paragraph, sentence, or text to translate…"
        />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            Maximum 10,000 characters · AI feedback is not an official test score.
          </p>
          <button type="submit" className="btn-primary" disabled={loading || !input.trim()}>
            {loading ? "Working…" : mode === "translator" ? "Translate" : "Ask English AI"}
          </button>
        </div>
      </form>

      {error && (
        <div role="alert" className="card border-red-200 bg-red-50 text-sm text-red-700">
          {error}
        </div>
      )}

      {result && (
        <section className={`card space-y-5 ${result.refused ? "border-amber-200 bg-amber-50/50" : ""}`}>
          <div>
            <h2 className="text-xl font-semibold">
              {result.refused
                ? "Outside English Tutor scope"
                : mode === "translator"
                  ? "Translation"
                  : "Feedback"}
            </h2>
            <RichContent className="mt-2 text-sm text-slate-700">{result.feedback}</RichContent>
          </div>
          {mode !== "translator" && result.strengths?.length > 0 && (
            <div>
              <h3 className="font-semibold text-emerald-800">Strengths</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {result.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {mode !== "translator" && result.priorities?.length > 0 && (
            <div>
              <h3 className="font-semibold text-brand-800">Priorities</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                {result.priorities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          )}
          {result.revisionExample && (
            <div className="rounded-xl bg-slate-950 p-4 text-sm text-slate-100">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                {mode === "translator" ? "Translation" : "Short revision example"}
              </p>
              <RichContent>{result.revisionExample}</RichContent>
            </div>
          )}
          {mode !== "translator" && result.practicePrompt && (
            <div className="rounded-xl bg-indigo-50 p-4 text-sm text-indigo-950">
              <strong>Next practice:</strong> {result.practicePrompt}
            </div>
          )}
          <p className="text-sm text-amber-800">{result.aiMayBeWrong}</p>
          <p className="text-xs text-slate-400">{result.note}</p>
        </section>
      )}
    </div>
  );
}
