"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { practiceQuestions } from "@/data/content";
import {
  getSubjectsFromQuestionnaires,
  questionnaires,
} from "@/data/questionnaires";
import { AP_SUBJECTS } from "@/data/ap-expanded";
import FolderGrid from "@/components/FolderGrid";
import FrqPackCard from "@/components/FrqPackCard";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { ROOT_SPACE, spaceFromSearchParams } from "@/lib/storage-space";
import { subjectsMatch } from "@/lib/managed-types";
import RichContent from "@/components/RichContent";
import type { Questionnaire } from "@/lib/types";
import type { DifficultyTier } from "@/lib/types";
import {
  groupPracticeSets,
  isGeneratedPracticeSet,
  practiceSetLabel,
} from "@/lib/practice-set-group";

type Tab = "drills" | "sets";
const TIER_OPTIONS: Array<{ value: "all" | DifficultyTier; label: string }> = [
  { value: "all", label: "All tiers" },
  { value: 1, label: "Intro" },
  { value: 2, label: "Standard" },
  { value: 3, label: "Challenge" },
];

function PracticeContent() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const folderParam = searchParams.get("folder");
  const spaceKey = spaceFromSearchParams({ subject, folder: folderParam });
  const [tab, setTab] = useState<Tab>("sets");
  const [tierFilter, setTierFilter] = useState<"all" | DifficultyTier>("all");
  const [mounted, setMounted] = useState(false);
  const [managedSubjects, setManagedSubjects] = useState<string[]>([]);
  const [managedQuizzes, setManagedQuizzes] = useState<Questionnaire[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/edit", { cache: "no-store" });
        const data = await res.json();
        if (cancelled) return;
        setManagedSubjects(
          Array.isArray(data.subjects)
            ? data.subjects.map((s: unknown) =>
                typeof s === "string" ? s : String((s as { name?: string }).name || "")
              ).filter(Boolean)
            : []
        );
        setManagedQuizzes(Array.isArray(data.questionnaires) ? data.questionnaires : []);
      } catch {
        // ignore
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [spaceKey]);

  const subjects = useMemo(() => {
    const set = new Set<string>();
    AP_SUBJECTS.forEach((s) => set.add(s));
    practiceQuestions.forEach((q) => set.add(q.subject));
    getSubjectsFromQuestionnaires().forEach((s) => set.add(s));
    managedSubjects.forEach((s) => set.add(s));
    managedQuizzes.forEach((q) => set.add(q.subject));
    return [...set].sort();
  }, [managedSubjects, managedQuizzes]);

  const subjectFolders = subjects.map((s) => {
    const drillCount = practiceQuestions.filter((q) => subjectsMatch(q.subject, s)).length;
    const setCount =
      questionnaires.filter((q) => subjectsMatch(q.subject, s)).length +
      managedQuizzes.filter((q) => subjectsMatch(q.subject, s)).length;
    return {
      id: s,
      title: s,
      subtitle: `${drillCount} drills · ${setCount} generated sets · + to add sets`,
      count: drillCount + setCount,
      href: `/practice?subject=${encodeURIComponent(s)}`,
    };
  });

  if (!subject) {
    return (
      <div className="space-y-6">
        <div>
          <Link href="/ap" className="text-sm text-brand-600 hover:underline">
            ← AP Area
          </Link>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Practice</h1>
          <p className="mt-2 text-slate-600">
            Open a subject for generated FRQ sets, drills, and exam &amp; paper materials. Use{" "}
            <strong>+ Add subject folder</strong> to create a new subject.
          </p>
        </div>
        <UnifiedMediaFrame
          alsoShow={["subject", "folder", "document"]}
          folderArea="practice"
          spaceKey={ROOT_SPACE}
          spaceBasePath="/practice"
          title="Practice hub · pictures, documents, files & subject folders"
          onSubjectsChange={setManagedSubjects}
          onQuestionnairesChange={(q) => setManagedQuizzes(q as Questionnaire[])}
          collapsedByDefault
        />
        <FolderGrid folders={subjectFolders} />
      </div>
    );
  }

  const drills = practiceQuestions.filter((q) => subjectsMatch(q.subject, subject || ""));
  const builtInSets = questionnaires.filter((q) => subjectsMatch(q.subject, subject || ""));
  const managedSets = managedQuizzes.filter((q) => subjectsMatch(q.subject, subject || ""));
  const seen = new Set(builtInSets.map((q) => q.id));
  const sets = [
    ...builtInSets,
    ...managedSets.filter((q) => !seen.has(q.id)),
  ].filter((q) => {
    if (tierFilter === "all") return true;
    return q.difficultyTier === tierFilter || q.items?.some((item) => item.difficultyTier === tierFilter);
  });

  const generatedSets = sets.filter((q) => isGeneratedPracticeSet(q));
  const otherSets = sets.filter((q) => !isGeneratedPracticeSet(q));
  const setGroups = groupPracticeSets(generatedSets);

  function renderSetCard(q: Questionnaire) {
    const setLabel = practiceSetLabel(q.title);
    return (
      <Link key={q.id} href={`/questionnaires/${q.id}`} className="card-hover block">
        <div className="flex flex-wrap gap-2">
          <span className="badge-generated">GENERATED</span>
          {setLabel ? <span className="badge">{setLabel}</span> : null}
          <span className="badge">~{q.estimatedMinutes} min</span>
          {q.difficultyTier ? (
            <span className="badge">
              Tier {q.difficultyTier === 1 ? "Intro" : q.difficultyTier === 3 ? "Challenge" : "Standard"}
            </span>
          ) : null}
          {q.id.startsWith("m-quiz") && <span className="badge">UI-added</span>}
        </div>
        <h2 className="mt-3 text-xl font-semibold text-slate-900">{q.title}</h2>
        <RichContent clampLines={3} className="mt-2 text-sm text-slate-600">{q.description}</RichContent>
        <p className="mt-3 text-xs text-slate-400">
          {q.items?.length || 0} items · {q.generationNote}
        </p>
      </Link>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <Link href="/practice" className="text-sm text-brand-600 hover:underline">
          ← All subject folders
        </Link>
        <h1 className="mt-2 text-2xl font-bold sm:text-3xl">Practice · {subject}</h1>
        <p className="mt-2 text-slate-600">
          Generated sets, half-process drills, and exam &amp; paper materials for this subject. Hints
          only — use <strong>+ Add generated practice set</strong> to create a new FRQ set.
        </p>
      </div>

      {subject === "AP Statistics" ? (
        <div id="frq-pack">
          <FrqPackCard />
        </div>
      ) : null}

      <UnifiedMediaFrame
        alsoShow={["questionnaire", "document", "folder"]}
        defaultSubject={subject}
        folderArea="practice"
        spaceKey={spaceKey}
        spaceBasePath="/practice"
        title={`${subject} · practice sets & files`}
        onSubjectsChange={setManagedSubjects}
        onQuestionnairesChange={(q) => setManagedQuizzes(q as Questionnaire[])}
      />

      <section id="exam-and-paper" className="space-y-3 scroll-mt-24">
        <div>
          <h2 className="section-title">Exam &amp; paper</h2>
          <p className="mt-1 text-sm text-slate-600">
            Upload downloadable exam PDFs or study files for {subject}. Keep them in normal folders
            and download them directly here.
          </p>
        </div>
        <UnifiedMediaFrame
          title={`${subject} · exam & paper`}
          folderArea="past-papers"
          spaceKey={subject}
          defaultSubject={subject}
          alsoShow={["document", "folder"]}
        />
      </section>

      <div className="card p-2">
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setTab("drills")}
            className={
              tab === "drills"
                ? "rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow"
                : "rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            }
          >
            Exam-format drills ({drills.length})
          </button>
          <button
            type="button"
            onClick={() => setTab("sets")}
            className={
              tab === "sets"
                ? "rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow"
                : "rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100"
            }
          >
            Generated Sets ({sets.length})
          </button>
        </div>
      </div>

      {mounted && tab === "drills" && (
        <div className="space-y-6">
          {drills.length === 0 ? (
            <div className="card text-sm text-slate-500">
              No built-in drills in this folder yet. Switch to Generated Sets and use + Add generated
              practice set.
            </div>
          ) : (
            drills.map((q) => (
              <article key={q.id} className="card space-y-4">
                <div className="flex flex-wrap gap-2">
                  <span className="badge">{q.topic}</span>
                  {q.examSection ? <span className="badge">{q.examSection}</span> : null}
                  {q.format === "mcq" ? <span className="badge">MCQ</span> : null}
                  {q.format === "frq_half" ? <span className="badge">FRQ</span> : null}
                </div>
                <RichContent className="font-medium text-slate-900">{q.question}</RichContent>
                {q.format === "mcq" && q.choices?.length ? (
                  <ol className="list-none space-y-2 text-sm text-slate-700">
                    {q.choices.map((choice) => (
                      <li
                        key={choice}
                        className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <RichContent>{choice}</RichContent>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {q.visibleSteps.length > 0 ? (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Visible steps
                  </h2>
                  <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                    {q.visibleSteps.map((step) => (
                      <li key={step}>
                        <RichContent>{step}</RichContent>
                      </li>
                    ))}
                  </ol>
                </div>
                ) : null}
                {q.blankSteps.length > 0 ? (
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Your turn (fill in)
                  </h2>
                  <ul className="mt-2 space-y-2">
                    {q.blankSteps.map((step) => (
                      <li
                        key={step}
                        className="rounded-xl border border-dashed border-brand-300 bg-brand-50 px-4 py-3 text-sm text-slate-700"
                      >
                        <RichContent>{step}</RichContent>
                      </li>
                    ))}
                  </ul>
                </div>
                ) : null}
                <div>
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                    Hints (no final answer)
                  </h2>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {q.hints.map((hint) => (
                      <li key={hint}>
                        <RichContent>{hint}</RichContent>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))
          )}
        </div>
      )}

      {mounted && tab === "sets" && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1">
            <span className="text-sm font-medium text-slate-600">Difficulty:</span>
            {TIER_OPTIONS.map((option) => (
              <button
                key={String(option.value)}
                type="button"
                onClick={() => setTierFilter(option.value)}
                className={
                  tierFilter === option.value
                    ? "rounded-full border border-brand-400 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"
                    : "rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 hover:border-slate-300"
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        <div className="space-y-8">
          {sets.length === 0 ? (
            <div className="card text-sm text-slate-500">
              No generated sets yet. Use + Add generated practice set above.
            </div>
          ) : (
            <>
              {setGroups.length > 0 ? (
                <div className="space-y-6">
                  {setGroups.map((group) => (
                    <section key={group.key} className="space-y-3">
                      <h3 className="text-lg font-semibold text-slate-800">{group.baseTitle}</h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {group.sets.map((q) => renderSetCard(q))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : null}
              {otherSets.length > 0 ? (
                <section className="space-y-3">
                  {setGroups.length > 0 ? (
                    <h3 className="text-lg font-semibold text-slate-800">Other practice sets</h3>
                  ) : null}
                  <div className="grid gap-4 md:grid-cols-2">
                    {otherSets.map((q) => renderSetCard(q))}
                  </div>
                </section>
              ) : null}
            </>
          )}
        </div>
        </div>
      )}
    </div>
  );
}

export default function PracticePage() {
  return (
    <Suspense fallback={<div className="text-sm text-slate-500">Loading practice...</div>}>
      <PracticeContent />
    </Suspense>
  );
}
