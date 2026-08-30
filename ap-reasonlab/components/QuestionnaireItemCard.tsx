"use client";

import { useState } from "react";
import Link from "next/link";
import { QuestionnaireItem } from "@/lib/types";
import RichContent from "@/components/RichContent";

function responseModeLabel(mode?: QuestionnaireItem["responseMode"]): string | null {
  if (!mode) return null;
  const labels: Record<string, string> = {
    single_choice: "Selected response",
    student_produced: "Student-produced response",
    short_response: "Short response",
    extended_response: "Extended response",
    essay: "Essay",
    spoken: "Spoken response",
    listen_repeat: "Listen & repeat",
    email: "Email",
    academic_discussion: "Academic discussion",
    sentence_build: "Sentence build",
  };
  return labels[mode] || mode;
}

export default function QuestionnaireItemCard({
  item,
  index,
}: {
  item: QuestionnaireItem;
  index: number;
}) {
  const [revealed, setRevealed] = useState(false);
  const hasAnswer =
    Boolean(item.answerKey?.trim()) ||
    item.mcqAnswer != null ||
    (item.blankAnswers?.length ?? 0) > 0;
  const modeLabel = responseModeLabel(item.responseMode);

  return (
    <article className="card space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="badge">Q{index + 1}</span>
        <span className={item.authenticity === "exam_authentic" ? "badge" : "badge-generated"}>
          {item.authenticity === "exam_authentic" ? "Exam-style" : "Skill drill"}
        </span>
        <span className="badge">{item.format}</span>
        {modeLabel ? <span className="badge">{modeLabel}</span> : null}
        {item.examSection ? <span className="badge">{item.examSection}</span> : null}
        {item.difficultyTier ? <span className="badge">Tier {item.difficultyTier}</span> : null}
      </div>

      {item.conceptIntro && (
        <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <strong>Key concept intro: </strong>
          <RichContent className="mt-1">{item.conceptIntro}</RichContent>
        </div>
      )}

      {item.stimulus?.trim() ? (
        <section className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Stimulus / data / source</p>
          <RichContent className="mt-2 text-sm leading-6 text-slate-800">{item.stimulus}</RichContent>
        </section>
      ) : null}

      <RichContent className="font-medium text-slate-900">{item.prompt}</RichContent>

      {item.choices && (
        <ul className="space-y-2 text-sm text-slate-700">
          {item.choices.map((c, choiceIdx) => (
            <li
              key={`${item.id}-${choiceIdx}`}
              className={
                revealed && item.mcqAnswer === choiceIdx
                  ? "rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-2"
                  : "rounded-xl border border-slate-200 px-4 py-2"
              }
            >
              <span className="mr-2 font-semibold">{String.fromCharCode(65 + choiceIdx)}.</span>
              <RichContent className="inline [&>p]:inline">{c}</RichContent>
            </li>
          ))}
        </ul>
      )}

      {item.visibleSteps && item.visibleSteps.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Task guidance</h3>
          <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            {item.visibleSteps.map((s) => (
              <li key={s}><RichContent>{s}</RichContent></li>
            ))}
          </ol>
        </div>
      )}

      {item.blankSteps && item.blankSteps.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Your turn</h3>
          <ul className="mt-2 space-y-2">
            {item.blankSteps.map((s, blankIdx) => (
              <li key={`${item.id}-blank-${blankIdx}`} className="rounded-xl border border-dashed border-brand-300 bg-brand-50 px-4 py-3 text-sm">
                <RichContent>{s}</RichContent>
                {revealed && item.blankAnswers?.[blankIdx] ? (
                  <p className="mt-2 border-t border-brand-200 pt-2 text-emerald-800">
                    <strong>Reference: </strong><RichContent className="inline">{item.blankAnswers[blankIdx]}</RichContent>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.hints?.length ? (
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Hints (use only after attempting)</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
            {item.hints.map((h, hintIdx) => <li key={`${item.id}-hint-${hintIdx}`}><RichContent>{h}</RichContent></li>)}
          </ul>
        </div>
      ) : null}

      {hasAnswer ? (
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          {!revealed ? (
            <button type="button" className="text-sm font-semibold text-brand-700 hover:underline" onClick={() => setRevealed(true)}>
              Reveal reference answer & scoring
            </button>
          ) : (
            <div className="space-y-4 text-sm text-slate-800">
              <div>
                <p className="font-semibold text-emerald-800">Reference answer</p>
                {item.answerKey ? <RichContent className="mt-1">{item.answerKey}</RichContent> : null}
                {item.mcqAnswer != null && item.choices?.[item.mcqAnswer] ? (
                  <p className="mt-1"><strong>{String.fromCharCode(65 + item.mcqAnswer)}.</strong> <RichContent className="inline [&>p]:inline">{item.choices[item.mcqAnswer]}</RichContent></p>
                ) : null}
              </div>
              {item.rationale?.trim() ? (
                <div>
                  <p className="font-semibold text-emerald-800">Why / expected reasoning</p>
                  <RichContent className="mt-1">{item.rationale}</RichContent>
                </div>
              ) : null}
              {item.scoringGuide?.length ? (
                <div>
                  <p className="font-semibold text-emerald-800">Scoring guide</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    {item.scoringGuide.map((criterion, criterionIdx) => <li key={`${item.id}-rubric-${criterionIdx}`}>{criterion}</li>)}
                  </ul>
                </div>
              ) : null}
            </div>
          )}
        </div>
      ) : null}

      {item.conceptId && (
        <Link href={`/concepts/${item.conceptId}`} className="text-sm text-brand-600 hover:underline">
          Open related concept →
        </Link>
      )}
    </article>
  );
}
