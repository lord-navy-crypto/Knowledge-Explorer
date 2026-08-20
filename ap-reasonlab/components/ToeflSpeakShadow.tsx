"use client";

import { useEffect, useMemo, useState } from "react";

function splitLines(text: string): string[] {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n+/)
    .map((line) => line.replace(/^[-•*\d.)\s]+/, "").trim())
    .filter(Boolean);
}

/** Paste dialogue / shadow lines → play one sentence at a time for pronunciation follow-along. */
export default function ToeflSpeakShadow() {
  const [corpus, setCorpus] = useState(
    "A: Could you tell me where the library is?\nB: Sure — go straight, then turn left at the fountain.\nA: How long does it usually take to walk there?\nB: About ten minutes if you keep a steady pace."
  );
  const [rate, setRate] = useState(0.9);
  const [index, setIndex] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(false);

  const lines = useMemo(() => splitLines(corpus), [corpus]);
  const current = lines[Math.min(index, Math.max(lines.length - 1, 0))] || "";

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis?.cancel();
    };
  }, []);

  function speakLine(text: string, thenNext?: boolean) {
    if (!text) return;
    if (typeof window === "undefined" || !window.speechSynthesis) {
      window.alert("Speech synthesis is not available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = rate;
    u.onstart = () => setSpeaking(true);
    u.onend = () => {
      setSpeaking(false);
      if (thenNext) {
        setIndex((i) => {
          const next = Math.min(i + 1, lines.length - 1);
          return next;
        });
      }
    };
    u.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }

  function playCurrent() {
    speakLine(current, autoAdvance && index < lines.length - 1);
  }

  return (
    <section className="space-y-4 rounded-2xl border border-violet-200 bg-violet-50/50 p-5">
      <div>
        <h2 className="text-lg font-semibold text-violet-950">Speak · shadow each line</h2>
        <p className="mt-1 text-sm leading-6 text-violet-900/80">
          Paste dialogues or shadowing lines (one sentence per line). Play the model voice, then
          read aloud with the same rhythm — daily pronunciation practice, not scored speaking
          tasks.
        </p>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Dialogue / shadow corpus
        <textarea
          className="input mt-1 min-h-[10rem]"
          value={corpus}
          onChange={(e) => {
            setCorpus(e.target.value);
            setIndex(0);
          }}
          placeholder={"A: …\nB: …\nOne sentence per line works best."}
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 text-sm">
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
          disabled={index <= 0}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
        >
          Previous line
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={index >= lines.length - 1}
          onClick={() => setIndex((i) => Math.min(lines.length - 1, i + 1))}
        >
          Next line
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
    </section>
  );
}
