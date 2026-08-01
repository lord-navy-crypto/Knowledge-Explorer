"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

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

export default function WordCountTool() {
  const [text, setText] = useState("");
  const stats = useMemo(() => countStats(text), [text]);

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
      description="Paste an essay, FRQ draft, or notes. Counts and reading-time estimates stay on this device."
      tip="Reading ≈ 200 wpm · Speaking ≈ 130 wpm (rough study estimates)."
    >
      <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {cards.map((c) => (
          <div key={c.label} className="rounded-xl border border-slate-200 bg-white px-3 py-3 text-center">
            <p className="text-2xl font-bold tabular-nums text-slate-900">{c.value}</p>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              {c.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-brand-100 bg-brand-50/40 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Reading time</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{fmtMins(stats.readingMins)}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Speaking time</p>
          <p className="mt-1 text-xl font-bold text-slate-900">{fmtMins(stats.speakingMins)}</p>
        </div>
      </div>

      <textarea
        className="input min-h-[18rem]"
        placeholder="Paste text here…"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" className="btn-ghost" onClick={() => setText("")}>
        Clear
      </button>
    </StudyToolShell>
  );
}
