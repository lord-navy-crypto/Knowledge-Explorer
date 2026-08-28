"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import { consumeWriteToolHandoff } from "@/lib/write-tool-handoff";

type Tab = "count" | "keywords" | "goals";

const DRAFT_KEY = "ke-word-count-draft-v1";
const GOAL_KEY = "ke-word-count-goal-v1";

function countStats(text: string) {
  const trimmed = text.trim();
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;
  const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0;
  const lines = text.length ? text.split(/\r\n|\r|\n/).length : 0;
  const sentences = trimmed
    ? (trimmed.match(/[.!?…]+(?:\s|$)|[.!?…]+$/g) || []).length || (trimmed ? 1 : 0)
    : 0;
  const paragraphs = trimmed
    ? trimmed.split(/\n\s*\n/).filter((p) => p.trim()).length
    : 0;
  const readingMins = words / 200;
  const speakingMins = words / 130;
  return {
    characters,
    charactersNoSpaces,
    words,
    lines,
    sentences,
    paragraphs,
    readingMins,
    speakingMins,
  };
}

function fmtMins(m: number): string {
  if (m < 1) return "< 1 min";
  if (m < 60) return `${m.toFixed(1)} min`;
  const h = Math.floor(m / 60);
  const rem = Math.round(m % 60);
  return `${h}h ${rem}m`;
}

const STOP = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "is",
  "are",
  "was",
  "were",
  "be",
  "been",
  "being",
  "it",
  "this",
  "that",
  "with",
  "as",
  "by",
  "from",
  "not",
  "have",
  "has",
  "had",
  "i",
  "you",
  "he",
  "she",
  "they",
  "we",
  "my",
  "your",
  "their",
]);

function topKeywords(text: string, limit = 12): Array<{ word: string; count: number }> {
  const map = new Map<string, number>();
  const tokens = text
    .toLowerCase()
    .replace(/[^\w\s'-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
  for (const w of tokens) map.set(w, (map.get(w) || 0) + 1);
  return Array.from(map.entries())
    .map(([word, count]) => ({ word, count }))
    .sort((a, b) => b.count - a.count || a.word.localeCompare(b.word))
    .slice(0, limit);
}

/** Rough Flesch Reading Ease (English). */
function fleschEase(text: string): number | null {
  const stats = countStats(text);
  if (!stats.words || !stats.sentences) return null;
  const syllableish = text
    .toLowerCase()
    .replace(/[^a-z\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .reduce((sum, w) => {
      const groups = w.match(/[aeiouy]+/g);
      return sum + Math.max(1, groups ? groups.length : 1);
    }, 0);
  const asl = stats.words / stats.sentences;
  const asw = syllableish / stats.words;
  return Math.round(206.835 - 1.015 * asl - 84.6 * asw);
}

function easeLabel(score: number): string {
  if (score >= 90) return "Very easy";
  if (score >= 70) return "Fairly easy";
  if (score >= 50) return "Plain English";
  if (score >= 30) return "Fairly difficult";
  return "Difficult";
}

export default function WordCountTool() {
  const [tab, setTab] = useState<Tab>("count");
  const [text, setText] = useState("");
  const [goal, setGoal] = useState(500);
  const [compare, setCompare] = useState("");
  const [mounted, setMounted] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  const stats = useMemo(() => countStats(text), [text]);
  const keywords = useMemo(() => topKeywords(text), [text]);
  const ease = useMemo(() => fleschEase(text), [text]);
  const compareStats = useMemo(() => countStats(compare), [compare]);

  useEffect(() => {
    setMounted(true);
    const handoff = consumeWriteToolHandoff("word-count");
    if (handoff?.text) {
      setText(handoff.text);
      return;
    }
    try {
      const draft = localStorage.getItem(DRAFT_KEY);
      if (draft) setText(draft);
      const g = localStorage.getItem(GOAL_KEY);
      if (g) setGoal(Math.max(1, Number(g) || 500));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = window.setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, text);
      setSavedAt(Date.now());
    }, 400);
    return () => window.clearTimeout(id);
  }, [text, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(GOAL_KEY, String(goal));
  }, [goal, mounted]);

  const progress = Math.min(100, Math.round((stats.words / Math.max(1, goal)) * 100));

  const cards = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.characters },
    { label: "No spaces", value: stats.charactersNoSpaces },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Lines", value: stats.lines },
  ];

  return (
    <StudyToolShell
      title="Word count & reading time"
      description="Paste an essay, FRQ draft, or notes. Auto-saves locally with keyword density, reading ease, and word goals."
      tip="Reading ≈ 200 wpm · Speaking ≈ 130 wpm. Draft autosaves in this browser."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["count", "Count"],
            ["keywords", "Keywords & ease"],
            ["goals", "Goals / compare"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
        {savedAt ? (
          <span className="self-center text-xs text-slate-500">
            Draft saved {new Date(savedAt).toLocaleTimeString()}
          </span>
        ) : null}
      </div>

      {tab === "count" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {cards.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center"
              >
                <p className="text-2xl font-bold tabular-nums text-slate-900">{c.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Reading time
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">{fmtMins(stats.readingMins)}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Speaking time
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">{fmtMins(stats.speakingMins)}</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
              <span>
                Goal progress:{" "}
                <span className="font-semibold tabular-nums">
                  {stats.words}/{goal} words ({progress}%)
                </span>
              </span>
              <button type="button" className="btn-ghost text-xs" onClick={() => setTab("goals")}>
                Edit goal →
              </button>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-brand-600 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <textarea
            className="input min-h-[18rem]"
            placeholder="Paste text here…"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-ghost" onClick={() => setText("")}>
              Clear
            </button>
            <button
              type="button"
              className="btn-secondary text-sm"
              onClick={() => void navigator.clipboard.writeText(text)}
              disabled={!text}
            >
              Copy text
            </button>
          </div>
        </>
      ) : null}

      {tab === "keywords" ? (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Flesch reading ease</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">
                {ease == null ? "—" : ease}
              </p>
              <p className="text-sm text-slate-600">{ease == null ? "Need more text" : easeLabel(ease)}</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Avg words / sentence</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">
                {stats.sentences ? (stats.words / stats.sentences).toFixed(1) : "—"}
              </p>
            </div>
          </div>
          <div className="card">
            <p className="mb-2 text-sm font-semibold text-slate-800">Top keywords (stopwords removed)</p>
            <ul className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <li
                  key={k.word}
                  className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                >
                  {k.word}{" "}
                  <span className="tabular-nums text-slate-500">×{k.count}</span>
                </li>
              ))}
              {!keywords.length ? <li className="text-sm text-slate-500">Paste text on the Count tab.</li> : null}
            </ul>
          </div>
        </div>
      ) : null}

      {tab === "goals" ? (
        <div className="space-y-4">
          <label className="block text-sm">
            Word goal
            <input
              type="number"
              min={50}
              max={20000}
              className="input mt-1 max-w-xs"
              value={goal}
              onChange={(e) => setGoal(Math.max(50, Number(e.target.value) || 500))}
            />
          </label>
          <p className="text-sm text-slate-600">
            Current draft: <span className="font-semibold tabular-nums">{stats.words}</span> words ·{" "}
            {stats.words >= goal ? "Goal met" : `${goal - stats.words} to go`}
          </p>
          <label className="block text-sm">
            Compare against another draft (side stats only)
            <textarea
              className="input mt-1 min-h-[8rem]"
              value={compare}
              onChange={(e) => setCompare(e.target.value)}
              placeholder="Paste a second version…"
            />
          </label>
          {compare.trim() ? (
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="card text-sm">
                <p className="font-semibold">Main draft</p>
                <p>{stats.words} words · {stats.sentences} sentences</p>
              </div>
              <div className="card text-sm">
                <p className="font-semibold">Compare draft</p>
                <p>
                  {compareStats.words} words · {compareStats.sentences} sentences
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Δ words: {compareStats.words - stats.words >= 0 ? "+" : ""}
                  {compareStats.words - stats.words}
                </p>
              </div>
            </div>
          ) : null}
        </div>
      ) : null}
    </StudyToolShell>
  );
}
