"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

export default function ParaphraseCompareTool() {
  const [original, setOriginal] = useState(
    "The experiment demonstrated that temperature affects reaction rate."
  );
  const [rewrite, setRewrite] = useState(
    "The lab showed that how fast the reaction happens depends on temperature."
  );

  const stats = useMemo(() => {
    const a = new Set(tokenize(original));
    const b = new Set(tokenize(rewrite));
    if (!a.size || !b.size) return null;
    let overlap = 0;
    a.forEach((w) => {
      if (b.has(w)) overlap++;
    });
    const union = new Set([...a, ...b]).size;
    const jaccard = union ? overlap / union : 0;
    const shared = [...a].filter((w) => b.has(w));
    const onlyA = [...a].filter((w) => !b.has(w));
    const onlyB = [...b].filter((w) => !a.has(w));
    return { jaccard, shared, onlyA, onlyB };
  }, [original, rewrite]);

  return (
    <StudyToolShell
      title="Paraphrase compare"
      description="Paste an original sentence and your rewrite to see shared vs new wording — helpful for avoiding plagiarism and improving variety."
      tip="Lower overlap usually means a stronger paraphrase, but meaning still matters — check with a teacher or AI tutor."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          Original
          <textarea className="input mt-1 min-h-[10rem]" value={original} onChange={(e) => setOriginal(e.target.value)} />
        </label>
        <label className="block text-sm">
          Your paraphrase
          <textarea className="input mt-1 min-h-[10rem]" value={rewrite} onChange={(e) => setRewrite(e.target.value)} />
        </label>
      </div>
      {stats ? (
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="card">
            <p className="text-xs font-semibold uppercase text-slate-500">Word overlap</p>
            <p className="mt-2 text-2xl font-bold tabular-nums">{Math.round(stats.jaccard * 100)}%</p>
          </div>
          <div className="card sm:col-span-2">
            <p className="text-xs font-semibold uppercase text-slate-500">Shared words</p>
            <p className="mt-2 text-sm text-slate-700">{stats.shared.join(", ") || "—"}</p>
            <p className="mt-2 text-xs text-slate-500">Only in original: {stats.onlyA.join(", ") || "—"}</p>
            <p className="text-xs text-slate-500">Only in rewrite: {stats.onlyB.join(", ") || "—"}</p>
          </div>
        </div>
      ) : null}
    </StudyToolShell>
  );
}
