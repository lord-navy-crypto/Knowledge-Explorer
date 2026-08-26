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

type Phase = "focus" | "break" | "long";
type DeskTab = "timer" | "stats" | "settings";

/** Procedural focus beds — generated in-browser, no audio files. */
export type NoiseType = "white" | "pink" | "brown" | "soft" | "rain";

export const NOISE_OPTIONS: Array<{ id: NoiseType; label: string; blurb: string }> = [
  { id: "white", label: "White", blurb: "Bright, even hiss — classic masking." },
  { id: "pink", label: "Pink", blurb: "Warmer than white; common for focus." },
  { id: "brown", label: "Brown", blurb: "Deep / rumbly; less sharp." },
  { id: "soft", label: "Soft hum", blurb: "Gentle low bed for quiet rooms." },
  { id: "rain", label: "Rain-like", blurb: "Softer splatters (procedural, not a recording)." },
];

const SETTINGS_KEY = "ke-focus-desk-settings-v1";
const LOG_KEY = "ke-focus-desk-log-v1";

type DeskSettings = {
  focusMins: number;
  breakMins: number;
  longBreakMins: number;
  cyclesUntilLong: number;
  noiseOn: boolean;
  noiseType: NoiseType;
  noiseVol: number;
  autoStartNext: boolean;
  task: string;
};

type FocusLogEntry = { date: string; focusSeconds: number; cycles: number };

const DEFAULT_SETTINGS: DeskSettings = {
  focusMins: 25,
  breakMins: 5,
  longBreakMins: 15,
  cyclesUntilLong: 4,
  noiseOn: false,
  noiseType: "pink",
  noiseVol: 0.45,
  autoStartNext: false,
  task: "",
};

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

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

/** Tiny CSS/SVG tomato sprite — 酵素番茄 (pixel-ish). */
function PixelTomato({ className = "", night = false }: { className?: string; night?: boolean }) {
  const skin = night ? "#e5e5e5" : "#f43f5e";
  const shade = night ? "#9a9a9a" : "#be123c";
  const leaf = night ? "#d4d4d4" : "#4ade80";
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
      <rect x="6" y="1" width="2" height="1" fill={leaf} />
      <rect x="5" y="2" width="1" height="1" fill={leaf} />
      <rect x="8" y="2" width="1" height="1" fill={leaf} />
      <rect x="3" y="3" width="8" height="10" fill={skin} />
      <rect x="2" y="5" width="1" height="6" fill={skin} />
      <rect x="11" y="5" width="1" height="6" fill={skin} />
      <rect x="4" y="13" width="6" height="1" fill={skin} />
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

function phaseLabel(phase: Phase): string {
  if (phase === "focus") return "FOCUS";
  if (phase === "long") return "LONG BREAK";
  return "BREAK";
}

export default function FocusDeskTool() {
  const [tab, setTab] = useState<DeskTab>("timer");
  const [focusMins, setFocusMins] = useState(25);
  const [breakMins, setBreakMins] = useState(5);
  const [longBreakMins, setLongBreakMins] = useState(15);
  const [cyclesUntilLong, setCyclesUntilLong] = useState(4);
  const [phase, setPhase] = useState<Phase>("focus");
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [noiseOn, setNoiseOn] = useState(false);
  const [noiseType, setNoiseType] = useState<NoiseType>("pink");
  const [noiseVol, setNoiseVol] = useState(0.45);
  const [deskMode, setDeskMode] = useState(false);
  const [autoStartNext, setAutoStartNext] = useState(false);
  const [task, setTask] = useState("");
  const [log, setLog] = useState<FocusLogEntry[]>([]);
  const [mounted, setMounted] = useState(false);
  const { nightMode } = useSiteTheme();
  const noise = useFocusNoise();
  const phaseRef = useRef<Phase>("focus");
  const focusRef = useRef(focusMins);
  const breakRef = useRef(breakMins);
  const longBreakRef = useRef(longBreakMins);
  const cyclesUntilLongRef = useRef(cyclesUntilLong);
  const cyclesRef = useRef(0);
  const autoStartRef = useRef(false);
  const skipBeepRef = useRef(true);
  const focusTickAccumRef = useRef(0);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        const s = JSON.parse(raw) as Partial<DeskSettings>;
        const nextFocus = Math.max(1, Number(s.focusMins) || 25);
        const nextBreak = Math.max(1, Number(s.breakMins) || 5);
        const nextLong = Math.max(1, Number(s.longBreakMins) || 15);
        setFocusMins(nextFocus);
        setBreakMins(nextBreak);
        setLongBreakMins(nextLong);
        setCyclesUntilLong(Math.max(2, Number(s.cyclesUntilLong) || 4));
        setNoiseOn(Boolean(s.noiseOn));
        if (s.noiseType) setNoiseType(s.noiseType);
        if (typeof s.noiseVol === "number") setNoiseVol(s.noiseVol);
        setAutoStartNext(Boolean(s.autoStartNext));
        setTask(typeof s.task === "string" ? s.task : "");
        setSecondsLeft(nextFocus * 60);
      }
      const logRaw = localStorage.getItem(LOG_KEY);
      if (logRaw) setLog(JSON.parse(logRaw) as FocusLogEntry[]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const payload: DeskSettings = {
      focusMins,
      breakMins,
      longBreakMins,
      cyclesUntilLong,
      noiseOn,
      noiseType,
      noiseVol,
      autoStartNext,
      task,
    };
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(payload));
  }, [
    mounted,
    focusMins,
    breakMins,
    longBreakMins,
    cyclesUntilLong,
    noiseOn,
    noiseType,
    noiseVol,
    autoStartNext,
    task,
  ]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(-60)));
  }, [log, mounted]);

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
    longBreakRef.current = longBreakMins;
  }, [longBreakMins]);
  useEffect(() => {
    cyclesUntilLongRef.current = cyclesUntilLong;
  }, [cyclesUntilLong]);
  useEffect(() => {
    cyclesRef.current = cycles;
  }, [cycles]);
  useEffect(() => {
    autoStartRef.current = autoStartNext;
  }, [autoStartNext]);

  useEffect(() => {
    if (skipBeepRef.current) {
      skipBeepRef.current = false;
      return;
    }
    playPhaseBeep();
  }, [phase]);

  function logFocusSeconds(sec: number) {
    if (sec <= 0) return;
    const key = todayKey();
    setLog((prev) => {
      const idx = prev.findIndex((e) => e.date === key);
      if (idx < 0) return [...prev, { date: key, focusSeconds: sec, cycles: 0 }];
      const next = [...prev];
      const cur = next[idx]!;
      next[idx] = { ...cur, focusSeconds: cur.focusSeconds + sec };
      return next;
    });
  }

  function bumpCycleLog() {
    const key = todayKey();
    setLog((prev) => {
      const idx = prev.findIndex((e) => e.date === key);
      if (idx < 0) return [...prev, { date: key, focusSeconds: 0, cycles: 1 }];
      const next = [...prev];
      const cur = next[idx]!;
      next[idx] = { ...cur, cycles: cur.cycles + 1 };
      return next;
    });
  }

  function advanceFromFocus(): { phase: Phase; seconds: number } {
    const nextCycles = cyclesRef.current + 1;
    setCycles(nextCycles);
    bumpCycleLog();
    const useLong = nextCycles % cyclesUntilLongRef.current === 0;
    if (useLong) {
      return { phase: "long", seconds: longBreakRef.current * 60 };
    }
    return { phase: "break", seconds: breakRef.current * 60 };
  }

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      if (phaseRef.current === "focus") {
        focusTickAccumRef.current += 1;
        if (focusTickAccumRef.current >= 30) {
          logFocusSeconds(focusTickAccumRef.current);
          focusTickAccumRef.current = 0;
        }
      }
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        const current = phaseRef.current;
        if (current === "focus") {
          if (focusTickAccumRef.current > 0) {
            logFocusSeconds(focusTickAccumRef.current);
            focusTickAccumRef.current = 0;
          }
          const next = advanceFromFocus();
          setPhase(next.phase);
          if (!autoStartRef.current) setRunning(false);
          return next.seconds;
        }
        setPhase("focus");
        if (!autoStartRef.current) setRunning(false);
        return focusRef.current * 60;
      });
    }, 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    if (phase === "focus" && focusTickAccumRef.current > 0) {
      logFocusSeconds(focusTickAccumRef.current);
      focusTickAccumRef.current = 0;
    }
    setRunning(false);
    setPhase(next);
    const secs =
      next === "focus"
        ? focusMins * 60
        : next === "long"
          ? longBreakMins * 60
          : breakMins * 60;
    setSecondsLeft(secs);
    noise.stop();
  }

  function skipPhase() {
    if (phase === "focus") {
      if (focusTickAccumRef.current > 0) {
        logFocusSeconds(focusTickAccumRef.current);
        focusTickAccumRef.current = 0;
      }
      const next = advanceFromFocus();
      setPhase(next.phase);
      setSecondsLeft(next.seconds);
      if (!autoStartNext) setRunning(false);
    } else {
      setPhase("focus");
      setSecondsLeft(focusMins * 60);
      if (!autoStartNext) setRunning(false);
    }
  }

  const phaseTotal =
    phase === "focus" ? focusMins * 60 : phase === "long" ? longBreakMins * 60 : breakMins * 60;
  const progress = 1 - secondsLeft / Math.max(1, phaseTotal);

  const activeNoise = NOISE_OPTIONS.find((n) => n.id === noiseType);
  const night = nightMode;

  const today = log.find((e) => e.date === todayKey());
  const weekSecs = log
    .filter((e) => {
      const t = new Date(`${e.date}T12:00:00`).getTime();
      return Date.now() - t < 7 * 86_400_000;
    })
    .reduce((sum, e) => sum + e.focusSeconds, 0);
  const weekCycles = log
    .filter((e) => {
      const t = new Date(`${e.date}T12:00:00`).getTime();
      return Date.now() - t < 7 * 86_400_000;
    })
    .reduce((sum, e) => sum + e.cycles, 0);

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

      <div className={`relative z-10 flex items-center justify-between gap-2 px-3 py-2 ${titleBar}`}>
        <span className="flex items-center gap-2 text-[10px] leading-none">
          <PixelTomato night={night} />
          TOMATO DESK
        </span>
        <span className="flex items-center gap-2 text-[8px] opacity-80">
          <PixelTomato night={night} className="opacity-80" />
          {night ? "NIGHT · STYLE" : "DAY"}
        </span>
      </div>

      <div
        className={`relative z-10 space-y-4 px-4 py-5 ${
          deskMode ? "min-h-[70vh] flex flex-col items-center justify-center" : ""
        }`}
      >
        <p className="text-center text-[10px] uppercase tracking-widest">
          {phaseLabel(phase)}
          {noiseOn && running && phase === "focus" ? " · SOUND ON" : ""}
        </p>

        {task.trim() ? (
          <p
            className={`mx-auto max-w-sm text-center text-[8px] leading-relaxed ${
              night ? "text-neutral-300" : "text-neutral-700"
            }`}
          >
            TASK: {task.trim().slice(0, 80)}
          </p>
        ) : null}

        <p
          className={`text-center tabular-nums leading-none ${
            deskMode ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl"
          }`}
        >
          {formatTime(Math.max(0, secondsLeft))}
        </p>

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
          {" · "}
          NEXT LONG IN{" "}
          <span className="underline">
            {(() => {
              const rem = cycles % cyclesUntilLong;
              return rem === 0 ? cyclesUntilLong : cyclesUntilLong - rem;
            })()}
          </span>
        </p>

        <div className="flex flex-wrap justify-center gap-2">
          <button type="button" className={btnPrimary} onClick={() => setRunning((r) => !r)}>
            {running ? "PAUSE" : "START"}
          </button>
          <button type="button" className={btnBase} onClick={() => resetPhase("focus")}>
            RESET
          </button>
          <button type="button" className={btnBase} onClick={skipPhase}>
            SKIP
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
                className={noiseType === opt.id ? btnPrimary : `${btnBase} disabled:opacity-40`}
              >
                {opt.label.toUpperCase()}
              </button>
            ))}
          </div>
          {noiseOn && activeNoise ? (
            <p
              className={`text-center text-[8px] leading-relaxed ${
                night ? "text-neutral-300" : "text-neutral-700"
              }`}
            >
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
          <PixelTomato night={night} />
          <span
            className={`inline-block h-2 w-2 ${night ? "bg-white" : "bg-[#fb7185]"}`}
            aria-hidden
          />
          <PixelTomato night={night} />
          <span
            className={`inline-block h-3 w-3 ${night ? "bg-neutral-400" : "bg-[#fda4af]"}`}
            aria-hidden
          />
          <PixelTomato night={night} />
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

  const recentLog = [...log].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 14);

  return (
    <StudyToolShell
      title="Tomato focus desk"
      description="Pixel tomato window: Pomodoro timer, long breaks, focus-noise sound box, session task, and local focus stats. Site Night mode (Style) also paints this desk black & white."
      tip="Settings & daily focus minutes save in this browser. After N focus cycles you get a longer break. Noise stays local Web Audio."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["timer", "Timer"],
            ["stats", "Focus log"],
            ["settings", "Settings"],
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
      </div>

      {tab === "timer" ? (
        <>
          <label className="block text-sm">
            Session task (shown on desk)
            <input
              className="input mt-1"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="e.g. AP Chem Unit 4 FRQ set"
              maxLength={120}
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            <label className="block text-sm">
              Long break minutes
              <input
                type="number"
                min={1}
                max={60}
                className="input mt-1"
                value={longBreakMins}
                disabled={running}
                onChange={(e) => {
                  const v = Math.max(1, Number(e.target.value) || 15);
                  setLongBreakMins(v);
                  if (phase === "long" && !running) setSecondsLeft(v * 60);
                }}
              />
            </label>
            <label className="block text-sm">
              Cycles until long break
              <input
                type="number"
                min={2}
                max={12}
                className="input mt-1"
                value={cyclesUntilLong}
                disabled={running}
                onChange={(e) => setCyclesUntilLong(Math.max(2, Number(e.target.value) || 4))}
              />
            </label>
          </div>

          {desk}

          <p className="text-xs text-slate-500">
            Today: {Math.round((today?.focusSeconds || 0) / 60)} focus min · {today?.cycles || 0}{" "}
            tomatoes. For test dates (not Pomodoro), use{" "}
            <Link href="/tools/exam-countdown" className="text-brand-600 hover:underline">
              Exam countdown
            </Link>
            .
          </p>
        </>
      ) : null}

      {tab === "stats" ? (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Today focus</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">
                {Math.round((today?.focusSeconds || 0) / 60)} min
              </p>
              <p className="text-xs text-slate-500">{today?.cycles || 0} cycles</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Last 7 days</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">{Math.round(weekSecs / 60)} min</p>
              <p className="text-xs text-slate-500">{weekCycles} cycles</p>
            </div>
            <div className="card">
              <p className="text-xs font-semibold uppercase text-slate-500">Session tomatoes</p>
              <p className="mt-1 text-2xl font-bold tabular-nums">{cycles}</p>
              <p className="text-xs text-slate-500">This page visit</p>
            </div>
          </div>
          <ul className="space-y-2">
            {recentLog.map((e) => (
              <li
                key={e.date}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <span className="font-medium text-slate-800">{e.date}</span>
                <span className="tabular-nums text-slate-600">
                  {Math.round(e.focusSeconds / 60)} min · {e.cycles} cycles
                </span>
              </li>
            ))}
            {!recentLog.length ? (
              <li className="card text-sm text-slate-500">No focus logged yet — start a timer.</li>
            ) : null}
          </ul>
          <button
            type="button"
            className="btn-ghost text-sm"
            onClick={() => {
              setLog([]);
              localStorage.removeItem(LOG_KEY);
            }}
          >
            Clear focus log
          </button>
        </div>
      ) : null}

      {tab === "settings" ? (
        <div className="card space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={autoStartNext}
              onChange={(e) => setAutoStartNext(e.target.checked)}
            />
            Auto-start next phase when a timer ends
          </label>
          <p className="text-xs text-slate-500">
            Durations, noise prefs, and session task also save automatically. Reset restores{" "}
            {DEFAULT_SETTINGS.focusMins}/{DEFAULT_SETTINGS.breakMins} defaults.
          </p>
          <button
            type="button"
            className="btn-secondary text-sm"
            onClick={() => {
              setFocusMins(DEFAULT_SETTINGS.focusMins);
              setBreakMins(DEFAULT_SETTINGS.breakMins);
              setLongBreakMins(DEFAULT_SETTINGS.longBreakMins);
              setCyclesUntilLong(DEFAULT_SETTINGS.cyclesUntilLong);
              setNoiseOn(DEFAULT_SETTINGS.noiseOn);
              setNoiseType(DEFAULT_SETTINGS.noiseType);
              setNoiseVol(DEFAULT_SETTINGS.noiseVol);
              setAutoStartNext(DEFAULT_SETTINGS.autoStartNext);
              setTask("");
              resetPhase("focus");
            }}
          >
            Restore defaults
          </button>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
