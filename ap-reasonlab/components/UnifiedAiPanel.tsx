"use client";

import { useMemo, useState } from "react";
import LocalAIControls from "@/components/LocalAIControls";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";
import { useLocalAI } from "@/components/LocalAIProvider";
import { appendAiSiteContext, fetchAiSiteContext } from "@/lib/ai-site-context";

type Category = "ap" | "english" | "coding";

type ApTask =
  | "advice"
  | "concept"
  | "guide"
  | "formula-derive"
  | "generate-questions";

type EnglishTask =
  | "grammar-explanation"
  | "vocab-extract"
  | "optimize-reading"
  | "corpus-find"
  | "corpus-generate"
  | "writing-feedback";

type CodingTask = "debug" | "write" | "explain";

const SUBJECT_OPTIONS = [
  "AP Physics 1",
  "AP Physics 2",
  "AP Physics C: Mechanics",
  "AP Physics C: E&M",
  "AP Calculus AB/BC",
  "AP Statistics",
  "AP Chemistry",
  "AP Biology",
  "AP Psychology",
  "AP Computer Science A",
  "AP Microeconomics",
  "AP Macroeconomics",
  "AP US History",
] as const;

const AP_TASKS: Array<{ value: ApTask; label: string; hint: string }> = [
  {
    value: "advice",
    label: "Hints & process",
    hint: "Paste a problem for strategy hints (no final answer).",
  },
  {
    value: "concept",
    label: "Concept explain",
    hint: "Explain an AP concept clearly.",
  },
  {
    value: "guide",
    label: "Site / study guide",
    hint: "Ask how to use the website or study workflow.",
  },
  {
    value: "formula-derive",
    label: "Formula derive",
    hint: "Paste a formula — get how/why it is derived.",
  },
  {
    value: "generate-questions",
    label: "Generate practice",
    hint: "Paste a topic or stem — get original practice questions.",
  },
];

const ENGLISH_TASKS: Array<{ value: EnglishTask; label: string; hint: string }> = [
  {
    value: "grammar-explanation",
    label: "Grammar check",
    hint: "Find and explain grammar issues.",
  },
  {
    value: "vocab-extract",
    label: "Vocab extract",
    hint: "Pull useful words from a reading passage.",
  },
  {
    value: "optimize-reading",
    label: "Optimize reading",
    hint: "Make a passage clearer or easier to follow.",
  },
  {
    value: "corpus-find",
    label: "Find useful corpus",
    hint: "Suggest useful example sentences / passages for a target.",
  },
  {
    value: "corpus-generate",
    label: "Corpus generator",
    hint: "Create short original practice sentences or a mini passage.",
  },
  {
    value: "writing-feedback",
    label: "Writing feedback",
    hint: "Feedback on a draft you paste.",
  },
];

const CODING_TASKS: Array<{ value: CodingTask; label: string; hint: string }> = [
  { value: "debug", label: "Find bugs", hint: "Paste code and describe the bug." },
  { value: "write", label: "Write code", hint: "Describe what to build; get guided code help." },
  { value: "explain", label: "Explain code", hint: "Paste code for a clear explanation." },
];

const LANGUAGES = ["Python", "Java", "HTML / CSS / JS", "General algorithms", "Other"] as const;

type Props = {
  defaultCategory?: Category;
  defaultSubject?: string;
};

type UnifiedResult = {
  kind: "hint" | "text" | "english" | "coding";
  title: string;
  note?: string;
  aiMayBeWrong?: string;
  refused?: boolean;
  body: string;
  lists?: Array<{ label: string; items: string[] }>;
  snippet?: string;
};

export default function UnifiedAiPanel({
  defaultCategory = "ap",
  defaultSubject,
}: Props) {
  const localAI = useLocalAI();
  const [category, setCategory] = useState<Category>(defaultCategory);
  const [apTask, setApTask] = useState<ApTask>("advice");
  const [englishTask, setEnglishTask] = useState<EnglishTask>("grammar-explanation");
  const [codingTask, setCodingTask] = useState<CodingTask>("debug");
  const [subject, setSubject] = useState(defaultSubject || SUBJECT_OPTIONS[0]);
  const [englishTarget, setEnglishTarget] = useState("General academic English");
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]>("Python");
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<UnifiedResult | null>(null);

  const taskMeta = useMemo(() => {
    if (category === "ap") return AP_TASKS.find((t) => t.value === apTask)!;
    if (category === "english") return ENGLISH_TASKS.find((t) => t.value === englishTask)!;
    return CODING_TASKS.find((t) => t.value === codingTask)!;
  }, [apTask, category, codingTask, englishTask]);

  async function ensureLocalReady() {
    if (!localAI.usesLocal) return;
    if (!localAI.ready) {
      throw new Error(
        "Local is selected, but no model is enabled. Enable Local above, or switch to Website API / Your own API."
      );
    }
  }

  async function runLocal(system: string, user: string) {
    await ensureLocalReady();
    const { context } = await fetchAiSiteContext(user, localAI.siteSearchEnabled);
    return localAI.complete([
      { role: "system", content: system },
      { role: "user", content: appendAiSiteContext(user, context) },
    ]);
  }

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      if (localAI.mode === "byok" && !localAI.usesLocal && !localAI.userKey.trim()) {
        throw new Error("Paste your own API key, or choose Website API / Local.");
      }

      if (category === "ap" && apTask === "advice") {
        if (!input.trim()) throw new Error("Paste a problem or question first.");
        if (localAI.usesLocal) {
          const text = await runLocal(
            "You are an AP tutor. Give strategy hints and half-process steps only. Never give the final answer. Reply in plain markdown.",
            `Subject: ${subject}\nQuestion:\n${input}`
          );
          setResult({
            kind: "text",
            title: "Hints & process",
            body: text,
            note: "Local AI",
            aiMayBeWrong: "Local AI may be wrong — verify with your notes.",
          });
          return;
        }
        const response = await fetch("/api/hints", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject,
            question: input,
            notes: "",
            ...localAI.cloudRequestFields,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Hint request failed");
        setResult({
          kind: "hint",
          title: "Hints & process",
          body: "",
          note: data.note,
          aiMayBeWrong: data.aiMayBeWrong,
          lists: [
            { label: "Hints", items: data.hints || [] },
            { label: "Key formulas", items: data.keyFormulas || [] },
            { label: "Checkpoints", items: data.checkpoints || [] },
            { label: "Process outline", items: data.processOutline || [] },
          ],
        });
        return;
      }

      if (category === "ap" && apTask === "guide") {
        if (!input.trim()) throw new Error("Ask a site or study-guide question.");
        if (localAI.usesLocal) {
          const text = await runLocal(
            "You are Site Guide for Knowledge Explorer. Only answer how to use the site. Refuse homework solving.",
            input
          );
          setResult({
            kind: "text",
            title: "Site / study guide",
            body: text,
            note: "Local AI",
          });
          return;
        }
        const response = await fetch("/api/ai/guide", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input, ...localAI.cloudRequestFields }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Guide failed");
        setResult({
          kind: "text",
          title: "Site / study guide",
          body: data.reply || "",
          refused: data.refused,
          note: data.note,
          aiMayBeWrong: data.aiMayBeWrong,
        });
        return;
      }

      if (category === "ap") {
        const mode =
          apTask === "formula-derive"
            ? "formula-derive"
            : apTask === "generate-questions"
              ? "generate-questions"
              : apTask === "concept"
                ? "explain"
                : "ask";
        if (!input.trim()) throw new Error("Enter a concept, formula, or question.");
        if (localAI.usesLocal) {
          const text = await runLocal(
            "You are an AP concept tutor. Teach clearly. Never finish graded finals. Reply in markdown.",
            `Subject: ${subject}\nMode: ${mode}\nInput:\n${input}`
          );
          setResult({
            kind: "text",
            title: taskMeta.label,
            body: text,
            note: "Local AI",
          });
          return;
        }
        const response = await fetch("/api/ai/concept", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject,
            conceptTitle: apTask === "concept" ? input.slice(0, 120) : "",
            mode,
            question: input,
            ...localAI.cloudRequestFields,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "AP AI failed");
        setResult({
          kind: "text",
          title: taskMeta.label,
          body: [data.reply, data.quizPrompt ? `\n\n**Try this:** ${data.quizPrompt}` : ""]
            .filter(Boolean)
            .join(""),
          refused: data.refused,
          note: data.note,
          aiMayBeWrong: data.aiMayBeWrong,
        });
        return;
      }

      if (category === "english") {
        if (!input.trim()) throw new Error("Paste English text or a learning request.");
        const mode =
          englishTask === "vocab-extract" ? "vocabulary-coach" : englishTask;
        if (localAI.usesLocal) {
          const text = await runLocal(
            "You are English AI Tutor. Only English learning help. Refuse AP science solving. Reply in markdown.",
            `Mode: ${mode}\nTarget: ${englishTarget}\n\nStudent input:\n${input}`
          );
          setResult({
            kind: "text",
            title: taskMeta.label,
            body: text,
            note: "Local AI",
          });
          return;
        }
        const response = await fetch("/api/ai/english", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            mode,
            target: englishTarget,
            input,
            ...localAI.cloudRequestFields,
          }),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "English AI failed");
        setResult({
          kind: "english",
          title: taskMeta.label,
          body: data.feedback || "",
          refused: data.refused,
          note: data.note,
          aiMayBeWrong: data.aiMayBeWrong,
          lists: [
            { label: "Strengths", items: data.strengths || [] },
            { label: "Priorities", items: data.priorities || [] },
          ],
          snippet: data.revisionExample || data.practicePrompt || "",
        });
        return;
      }

      // coding
      if (!input.trim() && !code.trim()) {
        throw new Error("Describe the coding task and/or paste code.");
      }
      const taskText =
        codingTask === "explain"
          ? `Explain this code clearly.\n${input}`
          : codingTask === "write"
            ? `Write / help implement:\n${input}`
            : `Debug / find bugs:\n${input}`;
      if (localAI.usesLocal) {
        const text = await runLocal(
          "You are Coding AI. Teach with hints and short examples. Prefer partial solutions for graded work. Reply in markdown.",
          `Language: ${language}\nFocus: ${codingTask}\nTask: ${taskText}\nCode:\n${code || "(none)"}`
        );
        setResult({
          kind: "text",
          title: taskMeta.label,
          body: text,
          note: "Local AI",
        });
        return;
      }
      const response = await fetch("/api/ai/coding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          focus: codingTask,
          task: taskText,
          code,
          ...localAI.cloudRequestFields,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Coding AI failed");
      setResult({
        kind: "coding",
        title: taskMeta.label,
        body: data.reply || "",
        refused: data.refused,
        note: data.note,
        aiMayBeWrong: data.aiMayBeWrong,
        lists: [{ label: "Steps", items: data.steps || [] }],
        snippet: data.snippet || "",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "AI request failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-slate-50 px-4 py-3 md:px-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Unified AI
        </p>
        <h2 className="mt-1 text-xl font-bold text-slate-900">One panel · three models · choose a task</h2>
        <p className="mt-1 text-sm text-slate-600">
          Pick Local, Website API, or Your own API once — then choose AP, English, or Coding work
          below.
        </p>
      </div>

      <div className="space-y-5 p-4 md:p-5">
        <LocalAIControls />

        <div className="grid gap-2 sm:grid-cols-3">
          {(
            [
              { id: "ap", label: "AP / Learning", detail: "Hints, concepts, formulas, practice" },
              { id: "english", label: "English", detail: "Grammar, vocab, reading, corpus" },
              { id: "coding", label: "Coding", detail: "Debug, write, explain" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCategory(item.id)}
              className={`rounded-xl border px-3 py-3 text-left transition ${
                category === item.id
                  ? "border-brand-400 bg-brand-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-slate-300"
              }`}
            >
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{item.detail}</p>
            </button>
          ))}
        </div>

        <form onSubmit={(e) => void submit(e)} className="space-y-4">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Task
              <select
                className="input mt-1"
                value={
                  category === "ap" ? apTask : category === "english" ? englishTask : codingTask
                }
                onChange={(e) => {
                  const value = e.target.value;
                  if (category === "ap") setApTask(value as ApTask);
                  else if (category === "english") setEnglishTask(value as EnglishTask);
                  else setCodingTask(value as CodingTask);
                }}
              >
                {(category === "ap"
                  ? AP_TASKS
                  : category === "english"
                    ? ENGLISH_TASKS
                    : CODING_TASKS
                ).map((task) => (
                  <option key={task.value} value={task.value}>
                    {task.label}
                  </option>
                ))}
              </select>
              <span className="mt-1 block text-xs font-normal text-slate-500">{taskMeta.hint}</span>
            </label>

            {category === "ap" ? (
              <label className="block text-sm font-medium text-slate-700">
                Subject
                <select
                  className="input mt-1"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                >
                  {SUBJECT_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            {category === "english" ? (
              <label className="block text-sm font-medium text-slate-700">
                Target
                <select
                  className="input mt-1"
                  value={englishTarget}
                  onChange={(e) => setEnglishTarget(e.target.value)}
                >
                  {[
                    "General academic English",
                    "TOEFL",
                    "IELTS",
                    "SAT Reading & Writing",
                    "Writing revision",
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}

            {category === "coding" ? (
              <label className="block text-sm font-medium text-slate-700">
                Language
                <select
                  className="input mt-1"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as (typeof LANGUAGES)[number])}
                >
                  {LANGUAGES.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ) : null}
          </div>

          <MarkdownLatexField
            label="Your question / paste"
            value={input}
            onChange={setInput}
            minHeightClass="min-h-[10rem]"
            placeholder={
              category === "coding"
                ? "Describe the bug, feature, or what to explain…"
                : category === "english"
                  ? "Paste a passage, sentence, or writing draft…"
                  : "Paste a problem, formula, concept, or question…"
            }
            help={taskMeta.hint}
          />

          {category === "coding" ? (
            <label className="block text-sm font-medium text-slate-700">
              Code (optional)
              <textarea
                className="input mt-1 font-mono text-xs"
                rows={8}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Paste code here…"
              />
            </label>
          ) : null}

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? "Working…" : "Ask AI"}
          </button>
        </form>

        {result ? (
          <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-slate-900">{result.title}</h3>
              {result.refused ? (
                <span className="badge bg-amber-100 text-amber-900">Refused / out of scope</span>
              ) : null}
              {result.note ? <span className="text-xs text-slate-500">{result.note}</span> : null}
            </div>
            {result.body ? (
              <RichContent className="text-sm text-slate-800">{result.body}</RichContent>
            ) : null}
            {result.lists?.map((list) =>
              list.items.length > 0 ? (
                <div key={list.label}>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {list.label}
                  </p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {list.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
            {result.snippet ? (
              <pre className="overflow-x-auto rounded-lg border border-slate-200 bg-white p-3 text-xs text-slate-800">
                {result.snippet}
              </pre>
            ) : null}
            {result.aiMayBeWrong ? (
              <p className="text-xs text-amber-800">{result.aiMayBeWrong}</p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
