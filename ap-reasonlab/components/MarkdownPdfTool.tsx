"use client";

import { useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MarkdownLatexField from "@/components/MarkdownLatexField";
import RichContent from "@/components/RichContent";

const STARTER = `# Study export

Subject: AP Physics 1

## Key idea

$$F_{\\mathrm{net}} = ma$$

1. Draw the free-body diagram.
2. Resolve components.
3. Write $\\Sigma F = ma$ per axis.
`;

export default function MarkdownPdfTool() {
  const [value, setValue] = useState(STARTER);

  function printPdf() {
    window.print();
  }

  return (
    <StudyToolShell
      title="Markdown → PDF"
      description="Write Markdown + LaTeX, preview, then use your browser’s Print → Save as PDF. No upload required."
      tip="Chrome tip: Print → Destination: Save as PDF → Paper size A4."
    >
      <div className="no-print flex flex-wrap gap-2">
        <button type="button" className="btn-primary" onClick={printPdf}>
          Print / Save as PDF
        </button>
        <button type="button" className="btn-secondary" onClick={() => setValue(STARTER)}>
          Reset sample
        </button>
      </div>

      <div className="no-print grid gap-4 lg:grid-cols-2">
        <MarkdownLatexField
          label="Source"
          value={value}
          onChange={setValue}
          minHeightClass="min-h-[24rem]"
          showPreview={false}
        />
        <div className="min-h-[24rem] overflow-auto rounded-2xl border border-slate-200 bg-white p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
            Preview
          </p>
          <RichContent className="text-sm">{value}</RichContent>
        </div>
      </div>

      <article className="hidden print:block">
        <RichContent>{value}</RichContent>
      </article>
    </StudyToolShell>
  );
}
