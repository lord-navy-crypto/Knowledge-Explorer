"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const ConceptAskAi = dynamic(() => import("@/components/ConceptAskAi"), {
  ssr: false,
  loading: () => <div className="card text-sm text-slate-500">Loading concept AI…</div>,
});

type Props = {
  defaultSubject?: string;
  conceptTitle: string;
  conceptSummary?: string;
  lockToConcept?: boolean;
};

export default function LazyConceptAskAi(props: Props) {
  const [open, setOpen] = useState(false);
  if (!open) {
    return (
      <section className="card flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="font-semibold text-slate-900">Ask AI about this concept</h2>
          <p className="mt-1 text-sm text-slate-500">
            AI controls load only when you open them, so the concept itself stays fast.
          </p>
        </div>
        <button type="button" className="btn-primary" onClick={() => setOpen(true)}>
          Open concept AI
        </button>
      </section>
    );
  }
  return <ConceptAskAi {...props} />;
}
