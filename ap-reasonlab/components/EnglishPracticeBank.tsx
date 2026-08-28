"use client";

import { useMemo, useState } from "react";
import type { EnglishPracticeQuestion } from "@/data/english-content";
import EnglishPractice from "@/components/EnglishPractice";

const PAGE_SIZE = 10;

type Props = {
  title: string;
  description: string;
  questions: EnglishPracticeQuestion[];
};

export default function EnglishPracticeBank({ title, description, questions }: Props) {
  const skills = useMemo(
    () => [...new Set(questions.map((q) => q.skill))].sort(),
    [questions]
  );
  const [skill, setSkill] = useState<string>("all");
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (skill === "all") return questions;
    return questions.filter((q) => q.skill === skill);
  }, [questions, skill]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const slice = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

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
        </p>
      </div>

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
          <EnglishPractice questions={slice} />
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
