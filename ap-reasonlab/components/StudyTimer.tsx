"use client";

import { useEffect, useRef, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

const PRESETS = [
  { label: "Pomodoro 25", seconds: 25 * 60 },
  { label: "Short break 5", seconds: 5 * 60 },
  { label: "FRQ 15", seconds: 15 * 60 },
  { label: "MCQ 45", seconds: 45 * 60 },
];

function format(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function StudyTimer() {
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [customMin, setCustomMin] = useState("25");
  const endAt = useRef<number | null>(null);

  useEffect(() => {
    if (!running) return;
    endAt.current = Date.now() + remaining * 1000;
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

  function applySeconds(seconds: number) {
    setRunning(false);
    endAt.current = null;
    setRemaining(seconds);
  }

  return (
    <StudyToolShell
      title="Study timer"
      description="Pomodoro and exam-style countdowns. Runs in this tab — keep the page open while you work."
    >
      <div className="card mx-auto max-w-xl space-y-6 text-center">
        <p className="font-mono text-6xl font-bold tracking-tight text-slate-900 md:text-7xl">
          {format(remaining)}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <button
            type="button"
            className="btn-primary"
            onClick={() => setRunning((v) => !v)}
          >
            {running ? "Pause" : "Start"}
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => applySeconds(Number(customMin) * 60 || 25 * 60)}
          >
            Reset
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.label}
              type="button"
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium hover:border-brand-300"
              onClick={() => applySeconds(preset.seconds)}
            >
              {preset.label}
            </button>
          ))}
        </div>
        <label className="mx-auto block max-w-xs text-sm font-medium">
          Custom minutes
          <input
            className="input mt-1 text-center"
            value={customMin}
            onChange={(e) => setCustomMin(e.target.value)}
            inputMode="numeric"
          />
        </label>
      </div>
    </StudyToolShell>
  );
}
