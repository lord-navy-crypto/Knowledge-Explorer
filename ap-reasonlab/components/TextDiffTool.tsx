"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type DiffLine = { type: "same" | "add" | "del"; text: string };

function diffLines(a: string, b: string): DiffLine[] {
  const left = a.split(/\r?\n/);
  const right = b.split(/\r?\n/);
  const n = left.length;
  const m = right.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = left[i] === right[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const out: DiffLine[] = [];
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (left[i] === right[j]) {
      out.push({ type: "same", text: left[i] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      out.push({ type: "del", text: left[i] });
      i++;
    } else {
      out.push({ type: "add", text: right[j] });
      j++;
    }
  }
  while (i < n) out.push({ type: "del", text: left[i++] });
  while (j < m) out.push({ type: "add", text: right[j++] });
  return out;
}

export default function TextDiffTool() {
  const [a, setA] = useState("Force is mass times acceleration.\nDraw the FBD first.");
  const [b, setB] = useState("Net force is mass times acceleration.\nDraw the FBD first.\nCheck units.");
  const lines = useMemo(() => diffLines(a, b), [a, b]);

  return (
    <StudyToolShell
      title="Text diff"
      description="Compare two drafts line by line — useful for peer review or rewriting an FRQ answer."
      tip="Green = added in B · Red = removed from A · Gray = unchanged."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Version A</span>
          <textarea className="input mt-1 min-h-[12rem] font-mono text-xs" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Version B</span>
          <textarea className="input mt-1 min-h-[12rem] font-mono text-xs" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
      </div>
      <div className="card space-y-1 font-mono text-xs">
        {lines.map((line, idx) => (
          <div
            key={`${idx}-${line.type}`}
            className={
              line.type === "add"
                ? "rounded bg-emerald-50 px-2 py-1 text-emerald-900"
                : line.type === "del"
                  ? "rounded bg-rose-50 px-2 py-1 text-rose-900"
                  : "rounded px-2 py-1 text-slate-600"
            }
          >
            <span className="mr-2 opacity-60">{line.type === "add" ? "+" : line.type === "del" ? "−" : " "}</span>
            {line.text || " "}
          </div>
        ))}
      </div>
    </StudyToolShell>
  );
}
