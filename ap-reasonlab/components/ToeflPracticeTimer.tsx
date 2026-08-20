"use client";

import { useEffect, useRef, useState } from "react";

export type TimerPreset = { label: string; seconds: number };

function formatClock(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Compact countdown for TOEFL speaking / writing practice. */
export default function ToeflPracticeTimer({
  title,
  presets,
  accent = "brand",
}: {
  title: string;
  presets: TimerPreset[];
  accent?: "brand" | "violet" | "amber";
}) {
  const initial = presets[0]?.seconds ?? 40;
  const [remaining, setRemaining] = useState(initial);
  const [running, setRunning] = useState(false);
  const [activeLabel, setActiveLabel] = useState(presets[0]?.label ?? "Timer");
  const endAt = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      const end = endAt.current;
      if (!end) return;
      const next = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      setRemaining(next);
      if (next <= 0) {
        setRunning(false);
        endAt.current = null;
        try {
          new Audio(
            "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAESsAACJWAAACABAAZGF0YQAAAAA="
          ).play();
        } catch {
          /* ignore */
        }
      }
    }, 200);
    return () => window.clearInterval(id);
  }, [running]);

  function applyPreset(p: TimerPreset) {
    setRunning(false);
    endAt.current = null;
    setActiveLabel(p.label);
    setRemaining(p.seconds);
  }

  const wrap =
    accent === "violet"
      ? "border-violet-200 bg-violet-50/70"
      : accent === "amber"
        ? "border-amber-200 bg-amber-50/70"
        : "border-brand-200 bg-brand-50/50";
  const labelColor =
    accent === "violet"
      ? "text-violet-800"
      : accent === "amber"
        ? "text-amber-900"
        : "text-brand-800";

  return (
    <aside className={`rounded-2xl border px-4 py-4 shadow-sm ${wrap}`}>
      <p className={`text-xs font-semibold uppercase tracking-wide ${labelColor}`}>{title}</p>
      <p className="mt-2 text-4xl font-bold tabular-nums tracking-tight text-slate-900">
        {formatClock(remaining)}
      </p>
      <p className="mt-1 text-xs text-slate-500">{activeLabel}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand-300"
            onClick={() => applyPreset(p)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-primary text-sm"
          onClick={() => {
            let secs = remaining;
            if (secs <= 0) {
              const p = presets.find((x) => x.label === activeLabel) || presets[0];
              secs = p?.seconds ?? initial;
              setRemaining(secs);
            }
            endAt.current = Date.now() + secs * 1000;
            setRunning(true);
          }}
          disabled={running}
        >
          Start
        </button>
        <button
          type="button"
          className="btn-secondary text-sm"
          onClick={() => {
            setRunning(false);
            endAt.current = null;
          }}
          disabled={!running}
        >
          Pause
        </button>
        <button
          type="button"
          className="btn-ghost text-sm"
          onClick={() => {
            setRunning(false);
            endAt.current = null;
            const p = presets.find((x) => x.label === activeLabel) || presets[0];
            setRemaining(p?.seconds ?? initial);
          }}
        >
          Reset
        </button>
      </div>
    </aside>
  );
}
