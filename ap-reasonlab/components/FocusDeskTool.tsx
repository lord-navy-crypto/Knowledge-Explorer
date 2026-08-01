"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";

type Phase = "focus" | "break";

/** Procedural focus beds — generated in-browser, no audio files. */
export type NoiseType = "white" | "pink" | "brown" | "soft" | "rain";

export const NOISE_OPTIONS: Array<{ id: NoiseType; label: string; blurb: string }> = [
  { id: "white", label: "White", blurb: "Bright, even hiss — classic masking." },
  { id: "pink", label: "Pink", blurb: "Warmer than white; common for focus." },
  { id: "brown", label: "Brown", blurb: "Deep / rumbly; less sharp." },
  { id: "soft", label: "Soft hum", blurb: "Gentle low bed for quiet rooms." },
  { id: "rain", label: "Rain-like", blurb: "Softer splatters (procedural, not a recording)." },
];

function formatTime(totalSec: number): string {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function fillNoiseBuffer(data: Float32Array, type: NoiseType) {
  let last = 0;
  let b0 = 0;
  let b1 = 0;
  let b2 = 0;
  for (let i = 0; i < data.length; i++) {
    const white = Math.random() * 2 - 1;
    if (type === "white") {
      data[i] = white * 0.55;
    } else if (type === "pink") {
      // Paul Kellet-style pink approximation
      b0 = 0.99765 * b0 + white * 0.099046;
      b1 = 0.963 * b1 + white * 0.2965164;
      b2 = 0.57 * b2 + white * 1.0526913;
      data[i] = (b0 + b1 + b2 + white * 0.1848) * 0.11;
    } else if (type === "brown") {
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.5;
    } else if (type === "soft") {
      last = (last + 0.01 * white) / 1.01;
      data[i] = last * 2.2;
    } else {
      // rain-like: brown bed + sparse brighter ticks
      last = (last + 0.015 * white) / 1.015;
      const drip = Math.random() > 0.995 ? white * 0.35 : 0;
      data[i] = last * 2.8 + drip;
    }
  }
}

/** Procedural noise beds via Web Audio — no audio files. */
function useFocusNoise() {
  const ctxRef = useRef<AudioContext | null>(null);
  const nodeRef = useRef<AudioBufferSourceNode | null>(null);
  const filterRef = useRef<BiquadFilterNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const typeRef = useRef<NoiseType>("pink");

  const stop = useCallback(() => {
    try {
      nodeRef.current?.stop();
    } catch {
      // already stopped
    }
    nodeRef.current = null;
    filterRef.current = null;
    if (ctxRef.current) {
      void ctxRef.current.close();
    }
    ctxRef.current = null;
    gainRef.current = null;
  }, []);

  const start = useCallback(
    (volume: number, type: NoiseType) => {
      stop();
      typeRef.current = type;
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const bufferSize = 2 * ctx.sampleRate;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      fillNoiseBuffer(buffer.getChannelData(0), type);

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      const filter = ctx.createBiquadFilter();
      if (type === "soft") {
        filter.type = "lowpass";
        filter.frequency.value = 420;
        filter.Q.value = 0.7;
      } else if (type === "rain") {
        filter.type = "bandpass";
        filter.frequency.value = 1200;
        filter.Q.value = 0.55;
      } else if (type === "brown") {
        filter.type = "lowpass";
        filter.frequency.value = 900;
        filter.Q.value = 0.5;
      } else if (type === "pink") {
        filter.type = "lowshelf";
        filter.frequency.value = 400;
        filter.gain.value = 2;
      } else {
        filter.type = "peaking";
        filter.frequency.value = 1000;
        filter.gain.value = 0;
        filter.Q.value = 1;
      }

      const gain = ctx.createGain();
      const boost = type === "white" ? 0.28 : type === "soft" ? 0.42 : 0.35;
      gain.gain.value = Math.max(0, Math.min(1, volume)) * boost;

      source.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      source.start();

      ctxRef.current = ctx;
      nodeRef.current = source;
      filterRef.current = filter;
      gainRef.current = gain;
      void ctx.resume();
    },
    [stop]
  );

  const setVolume = useCallback((volume: number) => {
    if (!gainRef.current) return;
    const type = typeRef.current;
    const boost = type === "white" ? 0.28 : type === "soft" ? 0.42 : 0.35;
    gainRef.current.gain.value = Math.max(0, Math.min(1, volume)) * boost;
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
  const [noiseType, setNoiseType] = useState<NoiseType>("pink");
  const [noiseVol, setNoiseVol] = useState(0.45);
  const [deskMode, setDeskMode] = useState(false);
  const noise = useFocusNoise();
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
      noise.start(noiseVol, noiseType);
    } else {
      noise.stop();
    }
    // intentionally omit noise object identity
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noiseOn, running, phase, noiseType]);

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

  const activeNoise = NOISE_OPTIONS.find((n) => n.id === noiseType);

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

      <div className="flex w-full max-w-lg flex-col items-center gap-3 text-sm text-slate-200">
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={noiseOn} onChange={(e) => setNoiseOn(e.target.checked)} />
          Focus noise (focus phase only)
        </label>
        <div className="flex flex-wrap justify-center gap-1.5">
          {NOISE_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              type="button"
              disabled={!noiseOn}
              title={opt.blurb}
              onClick={() => setNoiseType(opt.id)}
              className={
                noiseType === opt.id
                  ? "rounded-lg bg-rose-500 px-2.5 py-1 text-[11px] font-semibold text-white"
                  : "rounded-lg bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-slate-200 hover:bg-white/15 disabled:opacity-40"
              }
            >
              {opt.label}
            </button>
          ))}
        </div>
        {noiseOn && activeNoise ? (
          <p className="text-center text-[11px] text-slate-400">{activeNoise.blurb}</p>
        ) : null}
        <label className="flex items-center gap-2 text-xs text-slate-300">
          Volume
          <input
            type="range"
            min={0.05}
            max={1}
            step={0.05}
            value={noiseVol}
            disabled={!noiseOn}
            onChange={(e) => setNoiseVol(Number(e.target.value))}
            className="w-36"
          />
        </label>
      </div>

      {deskMode ? (
        <p className="max-w-md text-center text-xs text-slate-400">
          Stay on this screen. Noise types are generated with Web Audio — no uploads or files.
        </p>
      ) : null}
    </div>
  );

  return (
    <StudyToolShell
      title="Tomato focus desk"
      description="Pomodoro focus / break cycles with optional focus-noise beds (white, pink, brown, soft, rain-like). Full-desk mode for distraction-free study."
      tip="Classic default: 25 min focus · 5 min break. Pick a noise type — all generated locally in this browser."
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
