"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

export default function DictationTool() {
  const [prompt, setPrompt] = useState(
    "Photosynthesis converts light energy into chemical energy stored in glucose."
  );
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [speaking, setSpeaking] = useState(false);

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
    if (typeof window === "undefined" || !window.speechSynthesis) {
      window.alert("Speech synthesis is not available in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(prompt);
    u.rate = 0.9;
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    window.speechSynthesis.speak(u);
  }

  return (
    <StudyToolShell
      title="Dictation"
      description="Listen to a sentence (browser speech), type what you hear, then check against the original."
      tip="Uses your device’s speech synthesis — quality varies by browser/OS. Hide the prompt before you play."
    >
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
        <textarea className="input mt-1 min-h-[8rem]" value={answer} onChange={(e) => setAnswer(e.target.value)} />
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
