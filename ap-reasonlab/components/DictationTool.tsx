"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import InlineNotice from "@/components/InlineNotice";
import { listEnglishVoices, speakEnglish, whenVoicesReady } from "@/lib/english-tts";

type Tab = "practice" | "queue" | "history";
type Attempt = {
  id: string;
  prompt: string;
  answer: string;
  score: number;
  at: number;
};

const HISTORY_KEY = "ke-dictation-history-v1";
const QUEUE_KEY = "ke-dictation-queue-v1";

const SAMPLE_QUEUE = [
  "Photosynthesis converts light energy into chemical energy stored in glucose.",
  "The committee postponed the meeting until further notice.",
  "Students should cite sources when they paraphrase academic texts.",
];

function normalizeWords(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);
}

function scoreAnswer(prompt: string, answer: string): number | null {
  const aw = normalizeWords(prompt);
  const bw = normalizeWords(answer);
  if (!aw.length || !bw.length) return null;
  let hit = 0;
  aw.forEach((w, i) => {
    if (bw[i] === w) hit++;
  });
  return Math.round((hit / aw.length) * 100);
}

type DiffToken = { word: string; ok: boolean };

function buildDiff(prompt: string, answer: string): DiffToken[] {
  const aw = normalizeWords(prompt);
  const bw = normalizeWords(answer);
  const max = Math.max(aw.length, bw.length);
  const out: DiffToken[] = [];
  for (let i = 0; i < max; i++) {
    const expected = aw[i];
    const got = bw[i];
    if (!got && expected) out.push({ word: `(missed: ${expected})`, ok: false });
    else if (got && !expected) out.push({ word: got, ok: false });
    else if (got && expected) out.push({ word: got, ok: got === expected });
  }
  return out;
}

export default function DictationTool() {
  const [tab, setTab] = useState<Tab>("practice");
  const [prompt, setPrompt] = useState(SAMPLE_QUEUE[0]!);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceName, setVoiceName] = useState("");
  const [rate, setRate] = useState(0.9);
  const [queue, setQueue] = useState<string[]>(SAMPLE_QUEUE);
  const [queueIndex, setQueueIndex] = useState(0);
  const [queueRaw, setQueueRaw] = useState(SAMPLE_QUEUE.join("\n"));
  const [history, setHistory] = useState<Attempt[]>([]);
  const [mounted, setMounted] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    return whenVoicesReady((list) => {
      setVoices(list);
      setVoiceName((prev) => prev || list[0]?.name || "");
    });
  }, []);

  useEffect(() => {
    setMounted(true);
    try {
      const h = localStorage.getItem(HISTORY_KEY);
      if (h) setHistory(JSON.parse(h) as Attempt[]);
      const q = localStorage.getItem(QUEUE_KEY);
      if (q) {
        const parsed = JSON.parse(q) as string[];
        if (parsed.length) {
          setQueue(parsed);
          setQueueRaw(parsed.join("\n"));
          setPrompt(parsed[0] || SAMPLE_QUEUE[0]!);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 50)));
  }, [history, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }, [queue, mounted]);

  const score = useMemo(() => scoreAnswer(prompt, answer), [prompt, answer]);
  const diff = useMemo(
    () => (revealed || score != null ? buildDiff(prompt, answer) : []),
    [prompt, answer, revealed, score]
  );

  function speak(customRate = rate) {
    const ok = speakEnglish(prompt, {
      rate: customRate,
      voiceName: voiceName || undefined,
      onStart: () => setSpeaking(true),
      onEnd: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
    if (!ok) setNotice("Speech synthesis is not available in this browser.");
  }

  function loadQueueIndex(i: number) {
    const next = queue[i];
    if (!next) return;
    setQueueIndex(i);
    setPrompt(next);
    setAnswer("");
    setRevealed(false);
    setTab("practice");
  }

  function saveAttempt() {
    if (score == null) return;
    setHistory((prev) => [
      {
        id: `d-${Date.now()}`,
        prompt,
        answer,
        score,
        at: Date.now(),
      },
      ...prev,
    ].slice(0, 50));
  }

  function applyQueueFromRaw() {
    const lines = queueRaw
      .split(/\n+/)
      .map((l) => l.trim())
      .filter(Boolean);
    if (!lines.length) return;
    setQueue(lines);
    setQueueIndex(0);
    setPrompt(lines[0]!);
    setAnswer("");
    setRevealed(false);
  }

  return (
    <StudyToolShell
      title="Dictation"
      description="Listen to a sentence, type what you hear, check word-level diffs, and work through a queue. History stays local."
      tip="Adjust playback speed. Save attempts after you check. Queue = one sentence per line."
    >
      <InlineNotice message={notice} onDismiss={() => setNotice("")} />
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["practice", "Practice"],
            ["queue", "Sentence queue"],
            ["history", `History (${history.length})`],
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

      {tab === "practice" ? (
        <>
          <div className="grid gap-3 sm:grid-cols-2">
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
            <label className="block text-sm">
              Playback speed ({rate.toFixed(2)}×)
              <input
                type="range"
                className="mt-3 w-full"
                min={0.6}
                max={1.2}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
            </label>
          </div>
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
              className={`input mt-1 min-h-[6rem] ${
                revealed ? "" : "text-transparent caret-transparent selection:bg-transparent"
              }`}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </label>
          {queue.length > 1 ? (
            <p className="text-xs text-slate-500">
              Queue item {queueIndex + 1}/{queue.length}
            </p>
          ) : null}
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={() => speak()}>
              {speaking ? "Speaking…" : "Play audio"}
            </button>
            <button type="button" className="btn-secondary" onClick={() => speak(Math.max(0.55, rate - 0.2))}>
              Play slower
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
            {queue.length > 1 ? (
              <button
                type="button"
                className="btn-ghost"
                onClick={() => loadQueueIndex((queueIndex + 1) % queue.length)}
              >
                Next in queue
              </button>
            ) : null}
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
            <div className="card space-y-2 text-sm">
              <p>
                Rough word-order match: <span className="font-bold tabular-nums">{score}%</span>
              </p>
              {diff.length ? (
                <p className="flex flex-wrap gap-1">
                  {diff.map((t, i) => (
                    <span
                      key={`${t.word}-${i}`}
                      className={
                        t.ok
                          ? "rounded bg-emerald-100 px-1 text-emerald-900"
                          : "rounded bg-rose-100 px-1 text-rose-900"
                      }
                    >
                      {t.word}
                    </span>
                  ))}
                </p>
              ) : null}
              {revealed ? (
                <p className="text-slate-700">
                  Original: <span className="font-medium">{prompt}</span>
                </p>
              ) : null}
              <button type="button" className="btn-secondary text-sm" onClick={saveAttempt}>
                Save attempt to history
              </button>
            </div>
          ) : null}
        </>
      ) : null}

      {tab === "queue" ? (
        <div className="card space-y-3">
          <p className="text-sm text-slate-600">One sentence per line. Load into practice.</p>
          <textarea
            className="input min-h-[12rem]"
            value={queueRaw}
            onChange={(e) => setQueueRaw(e.target.value)}
          />
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-primary" onClick={applyQueueFromRaw}>
              Use this queue
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => {
                setQueueRaw(SAMPLE_QUEUE.join("\n"));
                setQueue(SAMPLE_QUEUE);
              }}
            >
              Restore sample
            </button>
          </div>
          <ul className="space-y-1 text-sm">
            {queue.map((s, i) => (
              <li key={`${i}-${s.slice(0, 12)}`}>
                <button
                  type="button"
                  className="text-left text-brand-700 hover:underline"
                  onClick={() => loadQueueIndex(i)}
                >
                  {i + 1}. {s.slice(0, 80)}
                  {s.length > 80 ? "…" : ""}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab === "history" ? (
        <ul className="space-y-3">
          {history.map((h) => (
            <li key={h.id} className="card space-y-1 text-sm">
              <div className="flex flex-wrap justify-between gap-2 text-xs text-slate-500">
                <span>
                  {new Date(h.at).toLocaleString()} · {h.score}%
                </span>
                <button
                  type="button"
                  className="font-semibold text-brand-700"
                  onClick={() => {
                    setPrompt(h.prompt);
                    setAnswer(h.answer);
                    setRevealed(true);
                    setTab("practice");
                  }}
                >
                  Reopen
                </button>
              </div>
              <p className="font-medium text-slate-800">{h.prompt}</p>
              <p className="text-slate-600">You: {h.answer}</p>
            </li>
          ))}
          {!history.length ? (
            <li className="card text-sm text-slate-500">No saved attempts yet.</li>
          ) : null}
          {history.length ? (
            <button type="button" className="btn-ghost text-sm" onClick={() => setHistory([])}>
              Clear history
            </button>
          ) : null}
        </ul>
      ) : null}
    </StudyToolShell>
  );
}
