"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { EnglishPracticeQuestion } from "@/data/english-content";
import EnglishPractice from "@/components/EnglishPractice";

const PAGE_SIZE = 10;

type SavedState = {
  skill: string;
  page: number;
  answers: Record<string, number>;
  timerSecondsLeft?: number | null;
  timerRunning?: boolean;
};

type Props = {
  title: string;
  description: string;
  questions: EnglishPracticeQuestion[];
  /** Unique key for localStorage resume (e.g. toefl-hub, sat-reading). */
  storageKey: string;
  /** Exam-style countdown in minutes (section pages). */
  timedMinutes?: number;
};

function loadSaved(key: string): SavedState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(`ke-english-bank:${key}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SavedState;
    if (typeof parsed.skill !== "string") return null;
    if (typeof parsed.page !== "number") return null;
    if (!parsed.answers || typeof parsed.answers !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function formatTimer(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function EnglishPracticeBank({
  title,
  description,
  questions,
  storageKey,
  timedMinutes,
}: Props) {
  const skills = useMemo(
    () => [...new Set(questions.map((q) => q.skill))].sort(),
    [questions]
  );
  const [skill, setSkill] = useState<string>("all");
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [restored, setRestored] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);
  const [timerRunning, setTimerRunning] = useState(false);
  const [reviewWrong, setReviewWrong] = useState(false);

  useEffect(() => {
    const saved = loadSaved(storageKey);
    if (saved) {
      setSkill(saved.skill);
      setPage(saved.page);
      setAnswers(saved.answers);
      if (timedMinutes && typeof saved.timerSecondsLeft === "number") {
        setSecondsLeft(saved.timerSecondsLeft);
        setTimerRunning(Boolean(saved.timerRunning));
      }
    } else if (timedMinutes) {
      setSecondsLeft(timedMinutes * 60);
    }
    setRestored(true);
  }, [storageKey, timedMinutes]);

  useEffect(() => {
    if (!restored) return;
    const payload: SavedState = {
      skill,
      page,
      answers,
      timerSecondsLeft: secondsLeft,
      timerRunning,
    };
    try {
      localStorage.setItem(`ke-english-bank:${storageKey}`, JSON.stringify(payload));
    } catch {
      /* quota */
    }
  }, [skill, page, answers, storageKey, restored, secondsLeft, timerRunning]);

  useEffect(() => {
    if (!timerRunning || secondsLeft === null) return;
    if (secondsLeft <= 0) {
      setTimerRunning(false);
      return;
    }
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => (prev === null ? prev : Math.max(0, prev - 1)));
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, secondsLeft]);

  const filtered = useMemo(() => {
    if (skill === "all") return questions;
    return questions.filter((q) => q.skill === skill);
  }, [questions, skill]);

  const scoreStats = useMemo(() => {
    let correct = 0;
    let wrong = 0;
    for (const q of filtered) {
      const picked = answers[q.id];
      if (picked === undefined) continue;
      if (picked === q.answer) correct += 1;
      else wrong += 1;
    }
    return { correct, wrong, answered: correct + wrong };
  }, [filtered, answers]);

  const wrongQuestions = useMemo(
    () =>
      filtered.filter((q) => {
        const picked = answers[q.id];
        return picked !== undefined && picked !== q.answer;
      }),
    [filtered, answers]
  );

  const displayPool = reviewWrong ? wrongQuestions : filtered;
  const pageCount = Math.max(1, Math.ceil(displayPool.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const slice = displayPool.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const answeredCount = Object.keys(answers).filter((id) =>
    filtered.some((q) => q.id === id)
  ).length;

  const clearProgress = useCallback(() => {
    setAnswers({});
    setPage(0);
    setSkill("all");
    setReviewWrong(false);
    setTimerRunning(false);
    if (timedMinutes) setSecondsLeft(timedMinutes * 60);
    try {
      localStorage.removeItem(`ke-english-bank:${storageKey}`);
    } catch {
      /* ignore */
    }
  }, [storageKey, timedMinutes]);

  const timeUp = timedMinutes != null && secondsLeft === 0;

  return (
    <section className="card space-y-4" aria-labelledby="english-practice-bank-title">
      <div>
        <h2 id="english-practice-bank-title" className="text-xl font-semibold text-slate-900">
          {title}
        </h2>
        <p className="mt-1 text-sm text-slate-600">{description}</p>
        <p className="mt-2 text-xs text-slate-500">
          {filtered.length} question{filtered.length === 1 ? "" : "s"}
          {skill !== "all" ? ` · skill: ${skill}` : ""}
          {answeredCount > 0 ? ` · ${answeredCount} answered (saved in this browser)` : ""}
        </p>
      </div>

      {timedMinutes != null && secondsLeft != null ? (
        <div
          className={`flex flex-wrap items-center gap-3 rounded-xl border px-3 py-2 text-sm ${
            timeUp
              ? "border-amber-300 bg-amber-50 text-amber-950"
              : "border-slate-200 bg-slate-50 text-slate-800"
          }`}
        >
          <span className="font-semibold tabular-nums" aria-live="polite">
            {timeUp ? "Time's up" : `Timer ${formatTimer(secondsLeft)}`}
          </span>
          <span className="text-slate-600">· {timedMinutes} min section pace</span>
          {!timeUp ? (
            <button
              type="button"
              className="font-semibold text-brand-700 underline"
              onClick={() => setTimerRunning((r) => !r)}
            >
              {timerRunning ? "Pause" : secondsLeft === timedMinutes * 60 ? "Start timer" : "Resume"}
            </button>
          ) : null}
          <button
            type="button"
            className="text-slate-600 underline"
            onClick={() => {
              setSecondsLeft(timedMinutes * 60);
              setTimerRunning(false);
            }}
          >
            Reset timer
          </button>
        </div>
      ) : null}

      {scoreStats.answered > 0 ? (
        <div className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-800">
          <span>
            Score: <strong>{scoreStats.correct}</strong> / {scoreStats.answered} correct in this
            filter
          </span>
          {scoreStats.wrong > 0 ? (
            <button
              type="button"
              className="font-semibold text-brand-700 underline"
              onClick={() => {
                setReviewWrong((v) => !v);
                setPage(0);
              }}
            >
              {reviewWrong ? "Show all questions" : `Review ${scoreStats.wrong} wrong`}
            </button>
          ) : (
            <span className="text-emerald-700">No wrong answers in this filter.</span>
          )}
        </div>
      ) : null}

      {reviewWrong ? (
        <p className="text-sm text-amber-900">
          Review mode — {wrongQuestions.length} missed question
          {wrongQuestions.length === 1 ? "" : "s"}. Change answers to update your score.
        </p>
      ) : null}

      {answeredCount > 0 ? (
        <div className="flex flex-wrap items-center gap-2 rounded-xl border border-brand-200 bg-brand-50 px-3 py-2 text-sm text-brand-900">
          <span>Progress saved — resume anytime on this device.</span>
          <button type="button" className="font-semibold underline" onClick={clearProgress}>
            Clear progress
          </button>
        </div>
      ) : null}

      {skills.length > 1 ? (
        <div className="flex flex-wrap items-center gap-2">
          <label htmlFor="english-skill-filter" className="text-sm font-medium text-slate-600">
            Skill
          </label>
          <select
            id="english-skill-filter"
            className="input max-w-xs"
            value={skill}
            onChange={(e) => {
              setSkill(e.target.value);
              setPage(0);
              setReviewWrong(false);
            }}
          >
            <option value="all">All skills</option>
            {skills.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      {displayPool.length === 0 ? (
        <p className="text-sm text-slate-500">
          {reviewWrong ? "No wrong answers to review in this filter." : "No practice questions in this filter yet."}
        </p>
      ) : (
        <>
          <EnglishPractice questions={slice} answers={answers} onAnswer={setAnswers} />
          {pageCount > 1 ? (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="btn-secondary"
                disabled={safePage <= 0}
                onClick={() => setPage((p) => Math.max(0, p - 1))}
              >
                ← Previous
              </button>
              <span className="text-sm text-slate-600">
                Page {safePage + 1} of {pageCount}
              </span>
              <button
                type="button"
                className="btn-secondary"
                disabled={safePage >= pageCount - 1}
                onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              >
                Next →
              </button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
