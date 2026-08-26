"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";

const STORAGE_KEY = "ke-typewriter-v1";

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
  const [charReveal, setCharReveal] = useState(true);
  const [charsShown, setCharsShown] = useState(0);
  const [shuffleOrder, setShuffleOrder] = useState<number[] | null>(null);
  const [blurUntilSpace, setBlurUntilSpace] = useState(false);
  const [revealed, setRevealed] = useState(true);
  const [mounted, setMounted] = useState(false);

  const order = shuffleOrder && shuffleOrder.length === lines.length
    ? shuffleOrder
    : lines.map((_, i) => i);
  const currentIndex = order[index] ?? 0;
  const current = lines[currentIndex] || "";

  useEffect(() => {
    setMounted(true);
    try {
      const rawStore = localStorage.getItem(STORAGE_KEY);
      if (!rawStore) return;
      const parsed = JSON.parse(rawStore) as { raw?: string; ms?: number; charReveal?: boolean };
      if (typeof parsed.raw === "string" && parsed.raw.trim()) setRaw(parsed.raw);
      if (typeof parsed.ms === "number") setMs(parsed.ms);
      if (typeof parsed.charReveal === "boolean") setCharReveal(parsed.charReveal);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ raw, ms, charReveal }));
    } catch {
      /* ignore */
    }
  }, [raw, ms, charReveal, mounted]);

  useEffect(() => {
    setCharsShown(0);
    setRevealed(!blurUntilSpace);
  }, [index, current, blurUntilSpace]);

  useEffect(() => {
    if (!charReveal || !current) {
      setCharsShown(current.length);
      return;
    }
    setCharsShown(0);
    const id = window.setInterval(() => {
      setCharsShown((n) => {
        if (n >= current.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 28);
    return () => window.clearInterval(id);
  }, [current, charReveal, index]);

  useEffect(() => {
    if (!playing || lines.length === 0) return;
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % lines.length);
    }, Math.max(600, ms));
    return () => window.clearInterval(id);
  }, [playing, ms, lines.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.code === "Space" && blurUntilSpace) {
        const tag = (e.target as HTMLElement)?.tagName;
        if (tag === "TEXTAREA" || tag === "INPUT") return;
        e.preventDefault();
        setRevealed((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [blurUntilSpace]);

  const displayText = charReveal ? current.slice(0, charsShown) : current;

  function shuffleLines() {
    const idxs = lines.map((_, i) => i);
    for (let i = idxs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [idxs[i], idxs[j]] = [idxs[j], idxs[i]];
    }
    setShuffleOrder(idxs);
    setIndex(0);
  }

  return (
    <StudyToolShell
      title="Typewriter mode"
      description="Reveal one line at a time — memorize concepts without staring at a full wall of text. Optional character type-in and self-test blur."
      tip="Paste one idea per line. Space toggles blur in self-test mode. Draft auto-saves in this browser."
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
              setShuffleOrder(null);
            }}
          />
        </label>
        <div className="flex min-h-[18rem] flex-col justify-between rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-6 text-white shadow-xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Line {lines.length ? index + 1 : 0} / {lines.length}
              {shuffleOrder ? " · shuffled" : ""}
            </p>
            <div
              className={`mt-6 text-2xl font-semibold leading-relaxed md:text-3xl ${
                blurUntilSpace && !revealed ? "select-none blur-md" : ""
              }`}
              onClick={() => blurUntilSpace && setRevealed((v) => !v)}
            >
              {displayText ? (
                <RichContent className="text-inherit">{displayText}</RichContent>
              ) : (
                "Add lines…"
              )}
              {charReveal && current && charsShown < current.length ? (
                <span className="ml-0.5 inline-block h-[1.1em] w-0.5 animate-pulse bg-sky-300 align-middle" />
              ) : null}
            </div>
            {blurUntilSpace ? (
              <p className="mt-3 text-xs text-slate-400">
                {revealed ? "Visible — press Space or tap to hide" : "Hidden — press Space or tap to reveal"}
              </p>
            ) : null}
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
              onClick={() => setIndex((prev) => (prev - 1 + Math.max(lines.length, 1)) % Math.max(lines.length, 1))}
            >
              Prev
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
            <button type="button" className="btn-ghost text-white" onClick={shuffleLines} disabled={!lines.length}>
              Shuffle
            </button>
            <label className="flex items-center gap-1.5 text-xs text-slate-300">
              <input
                type="checkbox"
                checked={charReveal}
                onChange={(e) => setCharReveal(e.target.checked)}
              />
              Type-in
            </label>
            <label className="flex items-center gap-1.5 text-xs text-slate-300">
              <input
                type="checkbox"
                checked={blurUntilSpace}
                onChange={(e) => {
                  setBlurUntilSpace(e.target.checked);
                  setRevealed(!e.target.checked);
                }}
              />
              Self-test
            </label>
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
