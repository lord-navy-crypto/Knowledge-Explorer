"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";

export default function TypewriterMode() {
  const [raw, setRaw] = useState(
    "Newton's second law\nNet force equals mass times acceleration\nAlways draw a free-body diagram first\nCheck units before substituting numbers"
  );
  const lines = useMemo(
    () => raw.split(/\n+/).map((line) => line.trim()).filter(Boolean),
    [raw]
  );
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ms, setMs] = useState(2200);

  useEffect(() => {
    if (!playing || lines.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, Math.max(600, ms));
    return () => window.clearInterval(id);
  }, [playing, ms, lines.length]);

  const current = lines[index] || "";

  return (
    <StudyToolShell
      title="Typewriter mode"
      description="Reveal one line at a time — memorize concepts without staring at a full wall of text."
      tip="Paste one idea per line. Press Play, then look away and recite before the next line."
    >
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <label className="block text-sm font-medium">
          Lines to memorize
          <textarea
            className="textarea mt-2 min-h-[18rem] font-mono text-sm"
            value={raw}
            onChange={(e) => {
              setRaw(e.target.value);
              setIndex(0);
            }}
          />
        </label>
        <div className="flex min-h-[18rem] flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white shadow-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Line {lines.length ? index + 1 : 0} / {lines.length}
            </p>
            <div className="mt-6 text-2xl font-semibold leading-relaxed md:text-3xl">
              {current ? <RichContent className="text-inherit">{current}</RichContent> : "Add lines…"}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <button
              type="button"
              className="btn-primary"
              onClick={() => setPlaying((v) => !v)}
            >
              {playing ? "Pause" : "Play"}
            </button>
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setIndex((prev) => (prev + 1) % Math.max(lines.length, 1))}
            >
              Next
            </button>
            <button type="button" className="btn-ghost text-white" onClick={() => setIndex(0)}>
              Restart
            </button>
            <label className="ml-auto text-xs text-slate-300">
              Speed {ms}ms
              <input
                type="range"
                min={800}
                max={5000}
                step={100}
                value={ms}
                onChange={(e) => setMs(Number(e.target.value))}
                className="ml-2 align-middle"
              />
            </label>
          </div>
        </div>
      </div>
    </StudyToolShell>
  );
}
