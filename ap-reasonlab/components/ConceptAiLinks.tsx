"use client";

import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";

type Props = {
  subject: string;
  title: string;
};

/** Special-feature entry points from any concept page into AI Toolbox. */
export default function ConceptAiLinks({ subject, title }: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        特殊功能 · AI Toolbox
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 hover:border-brand-300 hover:text-brand-900"
          onClick={() =>
            openToolboxWithPrefill({
              category: "ap",
              apTask: "concept",
              subject,
              prompt: `Explain “${title}” for AP study like I’m a high schooler. Then ask me 2 check questions without answers.`,
            })
          }
        >
          Explain + 2 checks
        </button>
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 hover:border-brand-300 hover:text-brand-900"
          onClick={() =>
            openToolboxWithPrefill({
              category: "ap",
              apTask: "concept-extension",
              subject,
              prompt: `Take the basic idea “${title}” and map how AP exams extend it into richer scenes (new variables, graphs, multi-step). List concepts + formulas + typical moves — no full graded solution.`,
            })
          }
        >
          Exam scene map
        </button>
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 hover:border-brand-300 hover:text-brand-900"
          onClick={() =>
            openToolboxWithPrefill({
              category: "ap",
              apTask: "generate-questions",
              subject,
              prompt: `Create 5 original practice items on “${title}”. Hints only — no final answers.`,
            })
          }
        >
          Generate practice
        </button>
        <button
          type="button"
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium text-slate-800 hover:border-brand-300 hover:text-brand-900"
          onClick={() =>
            openToolboxWithPrefill({
              category: "ap",
              apTask: "advice",
              subject,
              prompt: `I’m studying “${title}”. Give a half-process outline for a typical problem on this topic — knowns/unknowns and first steps, then STOP. No final answer.`,
            })
          }
        >
          Half-process FRQ
        </button>
      </div>
    </div>
  );
}
