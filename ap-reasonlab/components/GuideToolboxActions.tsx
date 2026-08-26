"use client";

import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";
import { toolboxHref } from "@/lib/ai-toolbox-url";

type Props = {
  subject: string;
  guideId: string;
  prompts: string[];
};

function apTaskForGuide(guideId: string) {
  if (guideId === "guide-ai-generate-questions" || guideId === "guide-stats-ai-generate") {
    return "generate-questions";
  }
  if (guideId === "guide-ai-explain") return "concept";
  if (guideId === "guide-ai-concept-extension") return "concept-extension";
  return "advice";
}

export default function GuideToolboxActions({ subject, guideId, prompts }: Props) {
  const apTask = apTaskForGuide(guideId);

  return (
    <div className="card space-y-3">
      <h2 className="text-lg font-semibold">Try in AI Toolbox</h2>
      <p className="text-sm text-slate-600">
        Local AI recommended — click a prompt to open the Toolbox with it pre-filled.
      </p>
      <ul className="space-y-2">
        {prompts.map((prompt) => (
          <li key={prompt.slice(0, 48)} className="flex flex-wrap items-start gap-2">
            <p className="min-w-0 flex-1 text-sm text-slate-700">{prompt}</p>
            <button
              type="button"
              className="btn-secondary shrink-0 text-xs"
              onClick={() =>
                openToolboxWithPrefill({
                  category: "ap",
                  apTask,
                  subject,
                  prompt,
                })
              }
            >
              Use in Toolbox
            </button>
          </li>
        ))}
      </ul>
      <a href={toolboxHref({ apTask: apTask as never, subject })} className="text-sm font-medium text-brand-700 hover:underline">
        Open AI Toolbox →
      </a>
    </div>
  );
}
