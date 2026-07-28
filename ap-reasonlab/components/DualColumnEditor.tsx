"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";

const STARTER = `# Dual-column desk

Write Markdown + $\\LaTeX$ on the left.

$$F_{\\mathrm{net}} = ma$$

- Claim
- Evidence
- Reasoning
`;

export default function DualColumnEditor() {
  const [value, setValue] = useState(STARTER);
  const wordCount = useMemo(
    () => value.trim().split(/\s+/).filter(Boolean).length,
    [value]
  );

  return (
    <StudyToolShell
      title="Dual-column editor"
      description="Write on the left, see rendered Markdown + LaTeX on the right — good for FRQ drafts and concept notes."
      tip={`${wordCount} words · stays in this tab until you copy it elsewhere.`}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Write"
          value={value}
          onChange={setValue}
          minHeightClass="min-h-[28rem]"
          showPreview={false}
          help="Paste ChatGPT KaTeX or write $...$ / $$...$$ yourself."
        />
        <div className="min-h-[28rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Live render
          </p>
          <RichContent className="text-sm text-slate-800">{value}</RichContent>
        </div>
      </div>
    </StudyToolShell>
  );
}
