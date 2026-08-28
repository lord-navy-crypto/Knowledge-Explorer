"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ToeflPracticeTimer from "@/components/ToeflPracticeTimer";
import { useToast } from "@/components/ToastProvider";
import {
  listEnglishVoices,
  speakEnglish,
  whenVoicesReady,
} from "@/lib/english-tts";

const TONGUE_TWISTER_PACK = `She sells seashells by the seashore.
The thirty-three thieves thought that they thrilled the throne throughout Thursday.
Red leather, yellow leather.
Unique New York, unique New York.
How much wood would a woodchuck chuck if a woodchuck could chuck wood?
Fresh fried fish, fish fresh fried.
Irish wristwatch, Swiss wristwatch.
Six slippery snails slid slowly seaward.
Betty Botter bought some butter, but she said the butter’s bitter.
A proper copper coffee pot.`;

const DIALOGUE_PACK = `A: Could you tell me where the library is?
B: Sure — go straight, then turn left at the fountain.
A: How long does it usually take to walk there?
B: About ten minutes if you keep a steady pace.`;

function splitLines(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((line) => line.replace(/^[-•*\d.)\s]+/, "").trim())
    .filter(Boolean);
}

function normalizeWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s']/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function scoreOverlap(target: string, heard: string): number | null {
  const a = normalizeWords(target);
  const b = normalizeWords(heard);
  if (!a.length || !b.length) return null;
  const bag = new Set(b);
  let hit = 0;
  for (const w of a) if (bag.has(w)) hit += 1;
  return Math.round((hit / a.length) * 100);
}

type SpeechRec = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((ev: { results: ArrayLike<{ 0: { transcript: string }; isFinal: boolean }> }) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};

function getSpeechRecognition(): (new () => SpeechRec) | null {
  if (typeof window === "undefined") return null;
  const w = window as Window & {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  };
  return w.SpeechRecognition || w.webkitSpeechRecognition || null;
}

/** Paste dialogue / tongue twisters → natural English TTS + mic score + 40s timer. */
export default function ToeflSpeakShadow() {
  const { warning, error } = useToast();
  const [corpus, setCorpus] = useState(DIALOGUE_PACK);
  const [packLabel, setPackLabel] = useState("Dialogue");
  const [rate, setRate] = useState(0.9);
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState("");
  const [score, setScore] = useState<number | null>(null);
  const recRef = useRef<SpeechRec | null>(null);

  const lines = useMemo(() => splitLines(corpus), [corpus]);
  const current = lines[Math.min(index, Math.max(lines.length - 1, 0))] || "";
  const canMic = typeof window !== "undefined" && Boolean(getSpeechRecognition());

  useEffect(() => {
    return whenVoicesReady((list) => {
      setVoices(list);
      setVoiceName((prev) => prev || list[0]?.name || "");
    });
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
      try {
        recRef.current?.stop();
      } catch {
        /* ignore */
      }
    };
  }, []);

  function loadPack(kind: "dialogue" | "twisters") {
    if (kind === "twisters") {
      setCorpus(TONGUE_TWISTER_PACK);
      setPackLabel("Tongue twisters");
    } else {
      setCorpus(DIALOGUE_PACK);
      setPackLabel("Dialogue");
    }
    setIndex(0);
    setHeard("");
    setScore(null);
  }

  function speakLine(text: string, thenNext?: boolean) {
    if (!text) return;
    const ok = speakEnglish(text, {
      rate,
      voiceName: voiceName || undefined,
      onStart: () => setSpeaking(true),
      onEnd: () => {
        setSpeaking(false);
        if (thenNext) {
          setIndex((i) => Math.min(i + 1, lines.length - 1));
        }
      },
      onError: () => setSpeaking(false),
    });
    if (!ok) warning("Speech synthesis is not available in this browser.");
  }

  function playCurrent() {
    speakLine(current, autoAdvance && index < lines.length - 1);
  }

  function stopMic() {
    try {
      recRef.current?.stop();
    } catch {
      /* ignore */
    }
    recRef.current = null;
    setListening(false);
  }

  function startMicScore() {
    const Ctor = getSpeechRecognition();
    if (!Ctor || !current) {
      warning("Live mic scoring needs Chrome or Edge.");
      return;
    }
    stopMic();
    setHeard("");
    setScore(null);
    const rec = new Ctor();
    rec.lang = "en-US";
    rec.continuous = false;
    rec.interimResults = true;
    rec.onresult = (ev) => {
      let text = "";
      for (let i = 0; i < ev.results.length; i++) {
        text += ev.results[i][0].transcript + " ";
      }
      const trimmed = text.trim();
      setHeard(trimmed);
      const s = scoreOverlap(current, trimmed);
      setScore(s);
    };
    rec.onerror = () => setListening(false);
    rec.onend = () => setListening(false);
    recRef.current = rec;
    try {
      rec.start();
      setListening(true);
    } catch {
      setListening(false);
      error("Could not start the microphone.");
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
      <section className="space-y-4 rounded-2xl border border-violet-200 bg-violet-50/50 p-5">
        <div>
          <h2 className="text-lg font-semibold text-violet-950">
            Speak · shadow &amp; tongue twisters
          </h2>
          <p className="mt-1 text-sm leading-6 text-violet-900/80">
            Load a dialogue or tongue-twister pack, play the model voice, then score your follow-along
            with the mic (approximate word match — not a formal speaking grade).
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-secondary text-sm" onClick={() => loadPack("dialogue")}>
            Load dialogue pack
          </button>
          <button type="button" className="btn-primary text-sm" onClick={() => loadPack("twisters")}>
            Load tongue twisters
          </button>
          <span className="self-center text-xs text-slate-500">Active: {packLabel}</span>
        </div>

        <label className="block text-sm font-medium text-slate-700">
          Dialogue / tongue-twister corpus
          <textarea
            className="input mt-1 min-h-[10rem]"
            value={corpus}
            onChange={(e) => {
              setCorpus(e.target.value);
              setPackLabel("Custom");
              setIndex(0);
              setHeard("");
              setScore(null);
            }}
            placeholder={"One sentence per line works best."}
          />
        </label>

        <div className="flex flex-wrap items-end gap-3 text-sm">
          <label className="block min-w-[14rem] flex-1 text-slate-600">
            English voice (accent)
            <select
              className="input mt-1"
              value={voiceName}
              onChange={(e) => setVoiceName(e.target.value)}
            >
              {voices.length === 0 ? (
                <option value="">Loading English voices…</option>
              ) : (
                voices.map((v) => (
                  <option key={`${v.name}-${v.lang}`} value={v.name}>
                    {v.name} ({v.lang})
                  </option>
                ))
              )}
            </select>
          </label>
          <label className="flex items-center gap-2 text-slate-600">
            Speed
            <input
              type="range"
              min={0.7}
              max={1.15}
              step={0.05}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-28"
            />
            <span className="tabular-nums text-slate-800">{rate.toFixed(2)}×</span>
          </label>
          <label className="flex items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              checked={autoAdvance}
              onChange={(e) => setAutoAdvance(e.target.checked)}
            />
            After play, go to next line
          </label>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => setVoices(listEnglishVoices())}
          >
            Refresh voices
          </button>
          <span className="text-slate-500">
            Line {lines.length ? index + 1 : 0} / {lines.length}
          </span>
        </div>

        <div className="rounded-xl bg-white px-4 py-5 text-center ring-1 ring-violet-100">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
            Read after the model
          </p>
          <p className="mt-3 text-xl font-medium leading-9 text-slate-900 md:text-2xl">
            {current || "Paste lines above to begin."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary" disabled={!current} onClick={playCurrent}>
            {speaking ? "Playing model…" : "Play this line"}
          </button>
          <button
            type="button"
            className="btn-secondary"
            disabled={!current || !canMic}
            onClick={() => (listening ? stopMic() : startMicScore())}
          >
            {listening ? "Stop mic score…" : "Score my reading (mic)"}
          </button>
          <button
            type="button"
            className="btn-secondary"
            disabled={index <= 0}
            onClick={() => {
              setIndex((i) => Math.max(0, i - 1));
              setHeard("");
              setScore(null);
            }}
          >
            Previous line
          </button>
          <button
            type="button"
            className="btn-secondary"
            disabled={index >= lines.length - 1}
            onClick={() => {
              setIndex((i) => Math.min(lines.length - 1, i + 1));
              setHeard("");
              setScore(null);
            }}
          >
            Next line
          </button>
          <button
            type="button"
            className="btn-ghost"
            onClick={() => {
              window.speechSynthesis?.cancel();
              setSpeaking(false);
              stopMic();
            }}
          >
            Stop
          </button>
        </div>

        {score != null || heard ? (
          <div className="rounded-xl border border-violet-100 bg-white px-4 py-3 text-sm text-slate-700">
            <p>
              Practice score:{" "}
              <span className="font-bold tabular-nums text-violet-800">
                {score == null ? "—" : `${score}%`}
              </span>
              <span className="ml-2 text-xs text-slate-500">
                (word overlap vs model line — approximate)
              </span>
            </p>
            {heard ? (
              <p className="mt-1 text-xs text-slate-500">
                Heard: <span className="text-slate-700">{heard}</span>
              </p>
            ) : null}
            {!canMic ? (
              <p className="mt-1 text-xs text-amber-700">
                Mic scoring needs Chrome/Edge. You can still shadow without a score.
              </p>
            ) : null}
          </div>
        ) : null}
      </section>

      <ToeflPracticeTimer
        title="Speaking timer"
        accent="violet"
        presets={[{ label: "40s response", seconds: 40 }]}
      />
      </div>
    </div>
  );
}
