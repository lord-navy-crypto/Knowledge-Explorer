"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import ChangePanel from "@/components/ChangePanel";
import RichContent from "@/components/RichContent";
import { subjectsMatch } from "@/lib/managed-types";

type ConceptRow = {
  id: string;
  title: string;
  subject: string;
  summary: string;
};

type QuizRow = {
  id: string;
  title: string;
  subject: string;
  description?: string;
  estimatedMinutes?: number;
  generationNote?: string;
  items?: unknown[];
};

/**
 * AP-style theory + practice cubes for English Vocabulary / Grammar lanes.
 * + Add concepts (theory) and + Add practice — same save flow as Concepts / Practice.
 */
export default function EnglishSkillsBoard({
  subject,
  theoryLabel = "Theory cubes",
  practiceLabel = "Practice cubes",
}: {
  subject: string;
  theoryLabel?: string;
  practiceLabel?: string;
}) {
  const [concepts, setConcepts] = useState<ConceptRow[]>([]);
  const [quizzes, setQuizzes] = useState<QuizRow[]>([]);
  const [baseUpdatedAt, setBaseUpdatedAt] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/edit", { cache: "no-store" });
      const data = await res.json();
      setBaseUpdatedAt(typeof data.updatedAt === "number" ? data.updatedAt : undefined);
      setConcepts(
        (Array.isArray(data.concepts) ? data.concepts : []).filter(
          (c: ConceptRow) => subjectsMatch(c.subject, subject) && !(c as { deletedAt?: number }).deletedAt
        )
      );
      setQuizzes(
        (Array.isArray(data.questionnaires) ? data.questionnaires : []).filter(
          (q: QuizRow) => subjectsMatch(q.subject, subject) && !(q as { deletedAt?: number }).deletedAt
        )
      );
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  }, [subject]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
          Add like AP Concepts / Practice
        </p>
        <p className="mt-1 text-sm text-indigo-950/80">
          Add theory cards (same as AP concepts) and practice sets. They appear as cubes below —
          open a cube to study.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <ChangePanel
            mode="concept"
            label="+ Add concepts (theory)"
            defaultSubject={subject}
            folderArea="english"
            spaceKey={subject.toLowerCase().includes("grammar") ? "grammar" : "vocabulary"}
            baseUpdatedAt={baseUpdatedAt}
            onSaved={() => void refresh()}
          />
          <ChangePanel
            mode="questionnaire"
            label="+ Add practice"
            defaultSubject={subject}
            folderArea="english"
            spaceKey={subject.toLowerCase().includes("grammar") ? "grammar" : "vocabulary"}
            baseUpdatedAt={baseUpdatedAt}
            onSaved={() => void refresh()}
          />
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="section-title">{theoryLabel}</h2>
          <p className="text-xs text-slate-500">{concepts.length} card{concepts.length === 1 ? "" : "s"}</p>
        </div>
        {loading ? (
          <p className="text-sm text-slate-500">Loading…</p>
        ) : concepts.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
            No theory cubes yet. Use <strong>+ Add concepts (theory)</strong> above.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((c) => (
              <Link key={c.id} href={`/concepts/${c.id}`} className="card-hover block">
                <span className="badge">Theory</span>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{c.title}</h3>
                <RichContent clampLines={3} className="mt-2 text-sm text-slate-600">
                  {c.summary}
                </RichContent>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="space-y-3">
        <div className="flex flex-wrap items-end justify-between gap-2">
          <h2 className="section-title">{practiceLabel}</h2>
          <p className="text-xs text-slate-500">{quizzes.length} set{quizzes.length === 1 ? "" : "s"}</p>
        </div>
        {loading ? (
          <p className="text-sm text-slate-500">Loading…</p>
        ) : quizzes.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-sm text-slate-500">
            No practice cubes yet. Use <strong>+ Add practice</strong> above.
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {quizzes.map((q) => (
              <Link key={q.id} href={`/questionnaires/${q.id}`} className="card-hover block">
                <div className="flex flex-wrap gap-2">
                  <span className="badge-generated">Practice</span>
                  {q.estimatedMinutes ? (
                    <span className="badge">~{q.estimatedMinutes} min</span>
                  ) : null}
                </div>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{q.title}</h3>
                <RichContent clampLines={3} className="mt-2 text-sm text-slate-600">
                  {q.description || ""}
                </RichContent>
                <p className="mt-3 text-xs text-slate-400">
                  {q.items?.length || 0} items
                  {q.generationNote ? ` · ${q.generationNote}` : ""}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
