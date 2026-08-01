"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";

type Phase = "focus" | "break";

function formatTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Procedural white/pink-ish noise via Web Audio — no audio files. */
function useWhiteNoise() {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodeRef = useRef<AudioBufferSourceNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const stop = useCallback(() => {
    try {
      nodeRef.current?.stop();
    } catch {
      // already stopped
    }
    nodeRef.current = null;
    if (ctxRef.current) {
      void ctxRef.current.close();
      ctxRef.current = null;
    }
    gainRef.current = null;
  }, []);

  const start = useCallback(
    (volume: number) => {
      stop();
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = 2 * ctx.sampleRate;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      let last = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      }
      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      const gain = ctx.createGain();
      gain.gain.value = Math.max(0, Math.min(1, volume)) * 0.35;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start();
      ctxRef.current = ctx;
      nodeRef.current = source;
      gainRef.current = gain;
      void ctx.resume();
    },
    [stop]
  );

  const setVolume = useCallback((volume: number) => {
    if (gainRef.current) {
      gainRef.current.gain.value = Math.max(0, Math.min(1, volume)) * 0.35;
    }
  }, []);

  useEffect(() => () => stop(), [stop]);

  return { start, stop, setVolume };
}

export default function FocusDeskTool() {
  const [focusMins, setFocusMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);
  const [phase, setPhase] = useState<Phase>("focus");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [noiseOn, setNoiseOn] = useState(false);
  const [noiseVol, setNoiseVol] = useState(0.45);
  const [deskMode, setDeskMode] = useState(false);
  const noise = useWhiteNoise();
  const phaseRef = useRef<Phase>("focus");
  const focusRef = useRef(focusMins);
  const breakRef = useRef(breakMins);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  useEffect(() => {
    focusRef.current = focusMins;
  }, [focusMins]);
  useEffect(() => {
    breakRef.current = breakMins;
  }, [breakMins]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        const current = phaseRef.current;
        if (current === "focus") {
          setCycles((c) => c + 1);
          setPhase("break");
          return breakRef.current * 60;
        }
        setPhase("focus");
        return focusRef.current * 60;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    if (noiseOn && running && phase === "focus") {
      noise.start(noiseVol);
    } else {
      noise.stop();
    }
    // intentionally omit noise object identity
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noiseOn, running, phase]);

  useEffect(() => {
    if (noiseOn) noise.setVolume(noiseVol);
  }, [noiseVol, noiseOn, noise]);

  function resetPhase(next: Phase = "focus") {
    setRunning(false);
    setPhase(next);
    setSecondsLeft((next === "focus" ? focusMins : breakMins) * 60);
    noise.stop();
  }

  const progress =
    phase === "focus"
      ? 1 - secondsLeft / Math.max(1, focusMins * 60)
      : 1 - secondsLeft / Math.max(1, breakMins * 60);

  const desk = (
    <div
      className={
        deskMode
          ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 px-6 text-slate-50"
          : "card space-y-5 bg-gradient-to-br from-slate-900 via-slate-800 to-rose-950 text-slate-50"
      }
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-300">
        {phase === "focus" ? "Focus · tomato" : "Break"}
      </p>
      <p className="font-display text-6xl font-bold tabular-nums tracking-tight sm:text-7xl">
        {formatTime(Math.max(0, secondsLeft))}
      </p>
      <div className="h-2 w-full max-w-md overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-rose-400 transition-[width] duration-1000"
          style={{ width: `${Math.round(Math.min(1, Math.max(0, progress)) * 100)}%` }}
        />
      </div>
      <p className="text-sm text-slate-300">
        Completed focus cycles: <span className="font-semibold text-white">{cycles}</span>
      </p>

      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-400"
          onClick={() => setRunning((r) => !r)}
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          onClick={() => resetPhase("focus")}
        >
          Reset focus
        </button>
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          onClick={() => resetPhase("break")}
        >
          Skip to break
        </button>
        <button
          type="button"
          className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/15"
          onClick={() => setDeskMode((d) => !d)}
        >
          {deskMode ? "Exit full desk" : "Full desk"}
        </button>
      </div>

      <label className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200">
        <span className="inline-flex items-center gap-2">
          <input type="checkbox" checked={noiseOn} onChange={(e) => setNoiseOn(e.target.checked)} />
          White noise (focus only)
        </span>
        <input
          type="range"
          min={0.05}
          max={1}
          step={0.05}
          value={noiseVol}
          disabled={!noiseOn}
          onChange={(e) => setNoiseVol(Number(e.target.value))}
          className="w-32"
        />
      </label>

      {deskMode ? (
        <p className="max-w-md text-center text-xs text-slate-400">
          Stay on this screen. Noise uses Web Audio in this browser — no upload.
        </p>
      ) : null}
    </div>
  );

  return (
    <StudyToolShell
      title="Tomato focus desk"
      description="Pomodoro focus / break cycles with an optional white-noise bed. Full-desk mode for distraction-free study."
      tip="Classic default: 25 min focus · 5 min break. White noise is generated locally (no audio files)."
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          Focus minutes
          <input
            type="number"
            min={1}
            max={120}
            className="input mt-1"
            value={focusMins}
            disabled={running}
            onChange={(e) => {
              const v = Math.max(1, Number(e.target.value) || 25);
              setFocusMins(v);
              if (phase === "focus" && !running) setSecondsLeft(v * 60);
            }}
          />
        </label>
        <label className="block text-sm">
          Break minutes
          <input
            type="number"
            min={1}
            max={60}
            className="input mt-1"
            value={breakMins}
            disabled={running}
            onChange={(e) => {
              const v = Math.max(1, Number(e.target.value) || 5);
              setBreakMins(v);
              if (phase === "break" && !running) setSecondsLeft(v * 60);
            }}
          />
        </label>
      </div>

      {desk}

      <p className="text-xs text-slate-500">
        For test dates (not Pomodoro), use{" "}
        <Link href="/tools/exam-countdown" className="text-brand-600 hover:underline">
          Exam countdown
        </Link>
        . The old separate Study timer page now redirects here.
      </p>
    </StudyToolShell>
  );
}
