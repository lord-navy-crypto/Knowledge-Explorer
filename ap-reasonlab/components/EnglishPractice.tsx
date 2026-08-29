"use client";

import type { EnglishPracticeQuestion } from "@/data/english-content";
import RichContent from "@/components/RichContent";
import { englishStimulusLabel } from "@/lib/english-exam-format";

type Props = {
  questions: EnglishPracticeQuestion[];
  answers?: Record<string, number>;
  onAnswer?: (answers: Record<string, number>) => void;
};

export default function EnglishPractice({ questions, answers: controlled, onAnswer }: Props) {
  const isControlled = controlled != null && onAnswer != null;

  function select(questionId: string, choiceIndex: number) {
    if (!onAnswer) return;
    onAnswer({ ...(controlled || {}), [questionId]: choiceIndex });
  }

  return (
    <div className="space-y-4">
      {questions.map((question, questionIndex) => {
        const selected = isControlled ? controlled[question.id] : undefined;
        const answered = selected !== undefined;
        const passage = question.passage?.trim();
        return (
          <article key={question.id} className="card space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge">Practice {questionIndex + 1}</span>
              <span className="text-xs font-medium text-slate-500">{question.skill}</span>
            </div>
            {passage ? (
              <figure className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <figcaption className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {englishStimulusLabel(question.skill)}
                </figcaption>
                <blockquote className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-800">
                  {passage}
                </blockquote>
              </figure>
            ) : null}
            <RichContent className="font-medium leading-7 text-slate-900">{question.prompt}</RichContent>
            <div className="grid gap-2">
              {question.choices.map((choice, choiceIndex) => {
                const isSelected = selected === choiceIndex;
                const isCorrect = answered && choiceIndex === question.answer;
                return (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => select(question.id, choiceIndex)}
                    className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                      isCorrect
                        ? "border-emerald-300 bg-emerald-50 text-emerald-950"
                        : isSelected
                          ? "border-brand-400 bg-brand-50 text-brand-950"
                          : "border-slate-200 bg-white hover:border-brand-300"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="mr-2 font-semibold">{String.fromCharCode(65 + choiceIndex)}.</span>
                    <RichContent className="inline [&>p]:inline">{choice}</RichContent>
                  </button>
                );
              })}
            </div>
            {answered && (
              <div
                role="status"
                className={`rounded-xl px-4 py-3 text-sm ${selected === question.answer ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-950"}`}
              >
                <strong>
                  {selected === question.answer
                    ? "Correct."
                    : `Review: the best answer is ${String.fromCharCode(65 + question.answer)}.`}
                </strong>{" "}
                <RichContent className="mt-1 inline [&>p]:inline">{question.explanation}</RichContent>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
