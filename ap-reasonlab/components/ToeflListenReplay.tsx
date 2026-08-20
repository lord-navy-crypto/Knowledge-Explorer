"use client";

import { useEffect, useMemo, useState } from "react";
import {
  listEnglishVoices,
  speakEnglish,
  whenVoicesReady,
} from "@/lib/english-tts";

function splitChunks(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      if (line.length < 220) return [line];
      return line
        .split(/(?<=[.!?。！？])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
    });
}

/** Paste / load a listening script → browser TTS with a fixed natural English voice. */
export default function ToeflListenReplay() {
  const [script, setScript] = useState(
    "Professor: Today we’ll look at how coral reefs respond to rising ocean temperatures.\nStudent: Does bleaching always kill the coral?\nProfessor: Not always — recovery is possible if the stress ends soon enough."
  );
  const [rate, setRate] = useState(0.95);
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");

  const chunks = useMemo(() => splitChunks(script), [script]);
  const current = chunks[Math.min(index, Math.max(chunks.length - 1, 0))] || "";

  useEffect(() => {
    return whenVoicesReady((list) => {
      setVoices(list);
      setVoiceName((prev) => prev || list[0]?.name || "");
    });
  }, []);

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  function speakText(text: string, onEnd?: () => void) {
    const ok = speakEnglish(text, {
      rate,
      voiceName: voiceName || undefined,
      onStart: () => setSpeaking(true),
      onEnd: () => {
        setSpeaking(false);
        onEnd?.();
      },
      onError: () => setSpeaking(false),
    });
    if (!ok) window.alert("Speech synthesis is not available in this browser.");
  }

  function playAllFrom(start: number) {
    if (!chunks.length) return;
    let i = start;
    const step = () => {
      if (i >= chunks.length) {
        setSpeaking(false);
        return;
      }
      setIndex(i);
      speakText(chunks[i], () => {
        i += 1;
        step();
      });
    };
    step();
  }

  return (
    <section className="space-y-4 rounded-2xl border border-sky-200 bg-sky-50/50 p-5">
      <div>
        <h2 className="text-lg font-semibold text-sky-950">Listen · machine replay</h2>
        <p className="mt-1 text-sm leading-6 text-sky-900/80">
          Paste a lecture / conversation script. Playback uses a selected <strong>English</strong>{" "}
          voice (prefers natural US English) — not a Chinese/default engine.
        </p>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Listening script / transcript
        <textarea
          className={`input mt-1 min-h-[10rem] ${hideText ? "text-transparent caret-slate-400" : ""}`}
          value={script}
          onChange={(e) => {
            setScript(e.target.value);
            setIndex(0);
          }}
          placeholder="Paste the listening material text here…"
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
            max={1.2}
            step={0.05}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-28"
          />
          <span className="tabular-nums text-slate-800">{rate.toFixed(2)}×</span>
        </label>
        <button type="button" className="btn-ghost" onClick={() => setHideText((v) => !v)}>
          {hideText ? "Show text" : "Hide text while listening"}
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setVoices(listEnglishVoices())}
        >
          Refresh voices
        </button>
        <span className="text-slate-500">
          {chunks.length} chunk{chunks.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-primary"
          disabled={!chunks.length}
          onClick={() => playAllFrom(0)}
        >
          {speaking ? "Playing…" : "Replay full script"}
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={!current}
          onClick={() => speakText(current)}
        >
          Play this chunk
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={index <= 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={index >= chunks.length - 1}
          onClick={() => setIndex((i) => Math.min(chunks.length - 1, i + 1))}
        >
          Next
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => {
            window.speechSynthesis?.cancel();
            setSpeaking(false);
          }}
        >
          Stop
        </button>
      </div>

      {current ? (
        <p className="rounded-xl bg-white px-4 py-3 text-sm leading-7 text-slate-800 ring-1 ring-sky-100">
          <span className="text-xs font-semibold uppercase tracking-wide text-sky-700">
            Chunk {Math.min(index + 1, chunks.length)} / {chunks.length}
          </span>
          <span className={`mt-1 block ${hideText ? "select-none blur-sm" : ""}`}>{current}</span>
        </p>
      ) : null}
    </section>
  );
}
