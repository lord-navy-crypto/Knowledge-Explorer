"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Press_Start_2P } from "next/font/google";
import StudyToolShell from "@/components/StudyToolShell";
import { useSiteTheme } from "@/components/ThemeProvider";

const pixelFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
      last = (last + 0.015 * white) / 1.015;
      const drip = Math.random() > 0.995 ? white * 0.35 : 0;
      data[i] = last * 2.8 + drip;
    }
  }
}

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

/** Tiny CSS/SVG potato sprite (pixel-ish). */
function PixelPotato({ className = "", night = false }: { className?: string; night?: boolean }) {
  const skin = night ? "#e5e5e5" : "#d4a574";
  const shade = night ? "#9a9a9a" : "#b07d4a";
  const eye = night ? "#111" : "#2a1a10";
  return (
    <svg
      className={className}
      width="28"
      height="34"
      viewBox="0 0 14 17"
      shapeRendering="crispEdges"
      aria-hidden
    >
      <rect x="3" y="2" width="8" height="12" fill={skin} />
      <rect x="2" y="4" width="1" height="8" fill={skin} />
      <rect x="11" y="4" width="1" height="8" fill={skin} />
      <rect x="4" y="1" width="6" height="1" fill={skin} />
      <rect x="4" y="14" width="6" height="1" fill={skin} />
      <rect x="5" y="6" width="1" height="1" fill={eye} />
      <rect x="8" y="6" width="1" height="1" fill={eye} />
      <rect x="6" y="9" width="2" height="1" fill={shade} />
      <rect x="4" y="11" width="1" height="1" fill={shade} />
      <rect x="9" y="5" width="1" height="1" fill={shade} />
    </svg>
  );
}

function PixelCircles({ night = false }: { night?: boolean }) {
  const fill = night ? "#fff" : "#fb7185";
  const dim = night ? "#737373" : "#fda4af";
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {[
        { t: "12%", l: "8%", s: 6, c: fill },
        { t: "22%", l: "88%", s: 8, c: dim },
        { t: "70%", l: "10%", s: 5, c: dim },
        { t: "78%", l: "86%", s: 7, c: fill },
        { t: "40%", l: "4%", s: 4, c: fill },
        { t: "55%", l: "93%", s: 5, c: dim },
      ].map((dot, i) => (
        <span
          key={i}
          className="absolute block"
          style={{
            top: dot.t,
            left: dot.l,
            width: dot.s,
            height: dot.s,
            background: dot.c,
            imageRendering: "pixelated",
            boxShadow: night ? "1px 1px 0 #000" : "1px 1px 0 rgba(0,0,0,0.25)",
          }}
        />
      ))}
    </div>
  );
}

function playPhaseBeep() {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = 660;
    gain.gain.value = 0.04;
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
    osc.stop(ctx.currentTime + 0.13);
    window.setTimeout(() => void ctx.close(), 200);
  } catch {
    // ignore
  }
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
  const { nightMode } = useSiteTheme();
  const noise = useFocusNoise();
  const phaseRef = useRef<Phase>("focus");
  const focusRef = useRef(focusMins);
  const breakRef = useRef(breakMins);
  const skipBeepRef = useRef(true);

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
    if (skipBeepRef.current) {
      skipBeepRef.current = false;
      return;
    }
    playPhaseBeep();
  }, [phase]);

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
  const night = nightMode;

  const btnBase = night
    ? "rounded-none border-2 border-white bg-black px-3 py-2 text-[10px] font-normal text-white hover:bg-neutral-900"
    : "rounded-none border-2 border-black bg-[#ffe4e6] px-3 py-2 text-[10px] font-normal text-black hover:bg-[#fecdd3]";
  const btnPrimary = night
    ? "rounded-none border-2 border-white bg-white px-3 py-2 text-[10px] font-normal text-black hover:bg-neutral-200"
    : "rounded-none border-2 border-black bg-[#fb7185] px-3 py-2 text-[10px] font-normal text-black hover:bg-[#f43f5e]";

  const windowShell = night
    ? "border-4 border-white bg-black text-white shadow-[6px_6px_0_#fff]"
    : "border-4 border-black bg-[#fff1f2] text-black shadow-[6px_6px_0_#000]";

  const titleBar = night
    ? "border-b-4 border-white bg-white text-black"
    : "border-b-4 border-black bg-[#fb7185] text-black";

  const deskInner = (
    <div
      className={`${pixelFont.className} relative overflow-hidden ${windowShell} ${
        deskMode ? "max-w-xl w-full" : ""
      }`}
    >
      <PixelCircles night={night} />

      {/* Title bar — pixel window */}
      <div className={`relative z-10 flex items-center justify-between gap-2 px-3 py-2 ${titleBar}`}>
        <span className="flex items-center gap-2 text-[10px] leading-none">
          <PixelPotato night={night} />
          TOMATO DESK
        </span>
        <span className="flex items-center gap-2 text-[8px] opacity-80">
          <PixelPotato night={night} className="opacity-80" />
          {night ? "NIGHT · STYLE" : "DAY"}
        </span>
      </div>

      <div
        className={`relative z-10 space-y-4 px-4 py-5 ${
          deskMode ? "min-h-[70vh] flex flex-col items-center justify-center" : ""
        }`}
      >
        <p className="text-center text-[10px] uppercase tracking-widest">
          {phase === "focus" ? "FOCUS" : "BREAK"}
          {noiseOn && running && phase === "focus" ? " · SOUND ON" : ""}
        </p>

        <p
          className={`text-center tabular-nums leading-none ${
            deskMode ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {formatTime(Math.max(0, secondsLeft))}
        </p>

        {/* Pixel progress */}
        <div
          className={`mx-auto h-3 w-full max-w-sm border-2 ${
            night ? "border-white bg-black" : "border-black bg-white"
          }`}
        >
          <div
            className={`h-full ${night ? "bg-white" : "bg-[#fb7185]"}`}
            style={{
              width: `${Math.round(Math.min(1, Math.max(0, progress)) * 100)}%`,
              imageRendering: "pixelated",
            }}
          />
        </div>

        <p className="text-center text-[9px]">
          CYCLES <span className="underline">{cycles}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <button type="button" className={btnPrimary} onClick={() => setRunning((r) => !r)}>
            {running ? "PAUSE" : "START"}
          </button>
          <button type="button" className={btnBase} onClick={() => resetPhase("focus")}>
            RESET
          </button>
          <button type="button" className={btnBase} onClick={() => resetPhase("break")}>
            BREAK
          </button>
          <button type="button" className={btnBase} onClick={() => setDeskMode((d) => !d)}>
            {deskMode ? "EXIT" : "FULL"}
          </button>
        </div>

        <div
          className={`mx-auto w-full max-w-md space-y-3 border-2 p-3 ${
            night ? "border-white" : "border-black"
          }`}
        >
          <p className="text-center text-[9px]">SOUND BOX</p>
          <label className="flex items-center justify-center gap-2 text-[9px]">
            <input
              type="checkbox"
              checked={noiseOn}
              onChange={(e) => setNoiseOn(e.target.checked)}
              className="h-3 w-3 accent-current"
            />
            FOCUS NOISE
          </label>
          <div className="flex flex-wrap justify-center gap-1">
            {NOISE_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                disabled={!noiseOn}
                title={opt.blurb}
                onClick={() => setNoiseType(opt.id)}
                className={
                  noiseType === opt.id
                    ? btnPrimary
                    : `${btnBase} disabled:opacity-40`
                }
              >
                {opt.label.toUpperCase()}
              </button>
            ))}
          </div>
          {noiseOn && activeNoise ? (
            <p className={`text-center text-[8px] leading-relaxed ${night ? "text-neutral-300" : "text-neutral-700"}`}>
              {activeNoise.blurb}
            </p>
          ) : null}
          <label className="flex items-center justify-center gap-2 text-[9px]">
            VOL
            <input
              type="range"
              min={0.05}
              max={1}
              step={0.05}
              value={noiseVol}
              disabled={!noiseOn}
              onChange={(e) => setNoiseVol(Number(e.target.value))}
              className="w-28"
            />
          </label>
        </div>

        <div className="flex items-end justify-center gap-3 pt-1">
          <PixelPotato night={night} />
          <span
            className={`inline-block h-2 w-2 ${night ? "bg-white" : "bg-[#fb7185]"}`}
            aria-hidden
          />
          <PixelPotato night={night} />
          <span
            className={`inline-block h-3 w-3 ${night ? "bg-neutral-400" : "bg-[#fda4af]"}`}
            aria-hidden
          />
          <PixelPotato night={night} />
        </div>
      </div>
    </div>
  );

  const desk = deskMode ? (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        night ? "bg-black" : "bg-[#fff1f2]"
      }`}
    >
      {deskInner}
    </div>
  ) : (
    deskInner
  );

  return (
    <StudyToolShell
      title="Tomato focus desk"
      description="Pixel tomato window: Pomodoro timer, focus-noise sound box, potatoes & circles. Night (B&W) is toggled in the Style window."
      tip="25 / 5 default. Open Style → Night mode for B&W pixel chrome. Noise types stay local Web Audio."
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
