"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import { listEnglishVoices, speakEnglish, whenVoicesReady } from "@/lib/english-tts";

export default function DictationTool() {
  const [prompt, setPrompt] = useState(
    "Photosynthesis converts light energy into chemical energy stored in glucose."
  );
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");

  useEffect(() => {
    return whenVoicesReady((list) => {
      setVoices(list);
      setVoiceName((prev) => prev || list[0]?.name || "");
    });
  }, []);

  const score = useMemo(() => {
    const norm = (s: string) =>
      s
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .trim();
    const a = norm(prompt);
    const b = norm(answer);
    if (!a || !b) return null;
    const aw = a.split(" ");
    const bw = b.split(" ");
    let hit = 0;
    aw.forEach((w, i) => {
      if (bw[i] === w) hit++;
    });
    return Math.round((hit / aw.length) * 100);
  }, [prompt, answer]);

  function speak() {
    const ok = speakEnglish(prompt, {
      rate: 0.9,
      voiceName: voiceName || undefined,
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
    if (!ok) window.alert("Speech synthesis is not available in this browser.");
  }

  return (
    <StudyToolShell
      title="Dictation"
      description="Listen to a sentence (natural English voice), type what you hear, then check against the original."
      tip="Picks an English TTS voice automatically — change it below if your browser offers several."
    >
      <label className="block text-sm">
        English voice
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
      <button
        type="button"
        className="btn-ghost text-sm"
        onClick={() => setVoices(listEnglishVoices())}
      >
        Refresh voices
      </button>
      <label className="block text-sm">
        Prompt sentence (hide this while practicing)
        <textarea
          className={`input mt-1 min-h-[6rem] ${revealed ? "" : "text-transparent caret-transparent selection:bg-transparent"}`}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-primary" onClick={speak}>
          {speaking ? "Speaking…" : "Play audio"}
        </button>
        <button type="button" className="btn-secondary" onClick={() => setRevealed((v) => !v)}>
          {revealed ? "Hide prompt" : "Show prompt"}
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => {
            setAnswer("");
            setRevealed(false);
          }}
        >
          Reset answer
        </button>
      </div>
      <label className="block text-sm">
        Your dictation
        <textarea
          className="input mt-1 min-h-[8rem]"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </label>
      {score != null ? (
        <p className="card text-sm">
          Rough word-order match: <span className="font-bold tabular-nums">{score}%</span>
          {revealed ? (
            <>
              {" "}
              · Original: <span className="text-slate-700">{prompt}</span>
            </>
          ) : null}
        </p>
      ) : null}
    </StudyToolShell>
  );
}
