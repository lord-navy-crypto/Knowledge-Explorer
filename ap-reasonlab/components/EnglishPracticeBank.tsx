"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { EnglishPracticeQuestion } from "@/data/english-content";
import EnglishPractice from "@/components/EnglishPractice";

const PAGE_SIZE = 10;

type SavedState = {
  skill: string;
  page: number;
  answers: Record<string, number>;
};

type Props = {
  title: string;
  description: string;
  questions: EnglishPracticeQuestion[];
  /** Unique key for localStorage resume (e.g. toefl-hub, sat-reading). */
  storageKey: string;
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

export default function EnglishPracticeBank({ title, description, questions, storageKey }: Props) {
  const skills = useMemo(
    () => [...new Set(questions.map((q) => q.skill))].sort(),
    [questions]
  );
  const [skill, setSkill] = useState<string>("all");
  const [page, setPage] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    const saved = loadSaved(storageKey);
    if (saved) {
      setSkill(saved.skill);
      setPage(saved.page);
      setAnswers(saved.answers);
    }
    setRestored(true);
  }, [storageKey]);

  useEffect(() => {
    if (!restored) return;
    const payload: SavedState = { skill, page, answers };
    try {
      localStorage.setItem(`ke-english-bank:${storageKey}`, JSON.stringify(payload));
    } catch {
      /* quota */
    }
  }, [skill, page, answers, storageKey, restored]);

  const filtered = useMemo(() => {
    if (skill === "all") return questions;
    return questions.filter((q) => q.skill === skill);
  }, [questions, skill]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const slice = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  const answeredCount = Object.keys(answers).filter((id) =>
    filtered.some((q) => q.id === id)
  ).length;

  const clearProgress = useCallback(() => {
    setAnswers({});
    setPage(0);
    setSkill("all");
    try {
      localStorage.removeItem(`ke-english-bank:${storageKey}`);
    } catch {
      /* ignore */
    }
  }, [storageKey]);

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

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-500">No practice questions in this filter yet.</p>
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
