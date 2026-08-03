"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type DiffLine = { type: "same" | "add" | "del"; text: string };
type DiffToken = { type: "same" | "add" | "del"; text: string };

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

/** Word-level LCS for inline highlight inside changed lines. */
function diffWords(a: string, b: string): DiffToken[] {
  const left = a.match(/\S+|\s+/g) || [];
  const right = b.match(/\S+|\s+/g) || [];
  const n = left.length;
  const m = right.length;
  if (n * m > 80_000) {
    return [
      { type: "del", text: a },
      { type: "add", text: b },
    ];
  }
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = left[i] === right[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const out: DiffToken[] = [];
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

function charOverlapRatio(a: string, b: string): number {
  if (!a && !b) return 1;
  if (!a || !b) return 0;
  const left = [...a];
  const right = [...b];
  const n = left.length;
  const m = right.length;
  if (n * m > 400_000) {
    // Fallback for huge pastes: line-level similarity
    const lines = diffLines(a, b);
    const same = lines.filter((l) => l.type === "same").reduce((s, l) => s + l.text.length, 0);
    return same / Math.max(a.length, b.length);
  }
  const prev = Array(m + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    let diag = 0;
    for (let j = 1; j <= m; j++) {
      const tmp = prev[j];
      prev[j] = left[i - 1] === right[j - 1] ? diag + 1 : Math.max(prev[j], prev[j - 1]);
      diag = tmp;
    }
  }
  return prev[m] / Math.max(n, m);
}

function pairChangedLines(lines: DiffLine[]): Array<{ left?: string; right?: string; same?: string }> {
  const pairs: Array<{ left?: string; right?: string; same?: string }> = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].type === "same") {
      pairs.push({ same: lines[i].text });
      i++;
      continue;
    }
    const dels: string[] = [];
    const adds: string[] = [];
    while (i < lines.length && lines[i].type === "del") {
      dels.push(lines[i].text);
      i++;
    }
    while (i < lines.length && lines[i].type === "add") {
      adds.push(lines[i].text);
      i++;
    }
    const max = Math.max(dels.length, adds.length);
    for (let k = 0; k < max; k++) {
      pairs.push({ left: dels[k], right: adds[k] });
    }
  }
  return pairs;
}

export default function TextDiffTool() {
  const [left, setLeft] = useState(
    "Force is mass times acceleration.\nDraw the FBD first."
  );
  const [right, setRight] = useState(
    "Net force is mass times acceleration.\nDraw the FBD first.\nCheck units."
  );

  const analysis = useMemo(() => {
    const identical = left === right;
    const lines = diffLines(left, right);
    const added = lines.filter((l) => l.type === "add");
    const removed = lines.filter((l) => l.type === "del");
    const same = lines.filter((l) => l.type === "same");
    const charsAdded = added.reduce((s, l) => s + l.text.length, 0);
    const charsRemoved = removed.reduce((s, l) => s + l.text.length, 0);
    const similarity = Math.round(charOverlapRatio(left, right) * 100);
    const changedPct = identical ? 0 : Math.max(0, Math.min(100, 100 - similarity));
    return {
      identical,
      lines,
      pairs: pairChangedLines(lines),
      addedLines: added.length,
      removedLines: removed.length,
      sameLines: same.length,
      charsAdded,
      charsRemoved,
      similarity,
      changedPct,
      leftChars: left.length,
      rightChars: right.length,
      leftEmpty: !left.trim(),
      rightEmpty: !right.trim(),
    };
  }, [left, right]);

  function swapSides() {
    setLeft(right);
    setRight(left);
  }

  function clearBoth() {
    setLeft("");
    setRight("");
  }

  return (
    <StudyToolShell
      title="Text-to-text comparator"
      description="Paste one text on the left and another on the right. If they match perfectly, you will see that. If not, the comparator highlights every difference so you can see how much the text changed."
      tip="Left = original / Version A · Right = revised / Version B · Green = added · Red = removed · Runs entirely in this browser."
    >
      <div className="flex flex-wrap gap-2">
        <button type="button" className="btn-secondary text-sm" onClick={swapSides}>
          Swap left ↔ right
        </button>
        <button type="button" className="btn-ghost text-sm" onClick={clearBoth}>
          Clear both
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-800">Left text</span>
          <textarea
            className="input mt-1 min-h-[14rem] font-mono text-xs"
            value={left}
            onChange={(e) => setLeft(e.target.value)}
            placeholder="Paste the first text here…"
            spellCheck={false}
          />
          <span className="mt-1 block text-xs text-slate-500 tabular-nums">
            {analysis.leftChars.toLocaleString()} characters
          </span>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-800">Right text</span>
          <textarea
            className="input mt-1 min-h-[14rem] font-mono text-xs"
            value={right}
            onChange={(e) => setRight(e.target.value)}
            placeholder="Paste the second text here…"
            spellCheck={false}
          />
          <span className="mt-1 block text-xs text-slate-500 tabular-nums">
            {analysis.rightChars.toLocaleString()} characters
          </span>
        </label>
      </div>

      {analysis.leftEmpty && analysis.rightEmpty ? (
        <p className="rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">
          Paste text on the left and on the right to compare.
        </p>
      ) : analysis.identical ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-5 text-center">
          <p className="text-lg font-semibold text-emerald-900">Perfect match</p>
          <p className="mt-1 text-sm text-emerald-800">
            The left and right texts are identical — nothing changed.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Changed
              </p>
              <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
                {analysis.changedPct}%
              </p>
              <p className="text-xs text-slate-500">{analysis.similarity}% similar</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Lines
              </p>
              <p className="mt-1 text-sm text-slate-800">
                <span className="font-semibold text-rose-700">−{analysis.removedLines}</span>
                {" · "}
                <span className="font-semibold text-emerald-700">+{analysis.addedLines}</span>
                {" · "}
                <span className="text-slate-500">{analysis.sameLines} same</span>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Characters
              </p>
              <p className="mt-1 text-sm text-slate-800">
                <span className="font-semibold text-rose-700">−{analysis.charsRemoved}</span>
                {" · "}
                <span className="font-semibold text-emerald-700">+{analysis.charsAdded}</span>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Length
              </p>
              <p className="mt-1 text-sm tabular-nums text-slate-800">
                {analysis.leftChars.toLocaleString()} → {analysis.rightChars.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200">
            <div className="border-b border-slate-200 bg-slate-50 px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Differences
              </p>
            </div>
            <div className="divide-y divide-slate-100 font-mono text-xs">
              {analysis.pairs.map((pair, idx) => {
                if (pair.same !== undefined) {
                  return (
                    <div key={`s-${idx}`} className="bg-white px-3 py-1.5 text-slate-500">
                      <span className="mr-2 opacity-50"> </span>
                      {pair.same || " "}
                    </div>
                  );
                }
                if (pair.left !== undefined && pair.right !== undefined) {
                  const tokens = diffWords(pair.left, pair.right);
                  return (
                    <div key={`c-${idx}`} className="space-y-1 bg-amber-50/40 px-3 py-2">
                      <div className="rounded bg-rose-50 px-2 py-1 text-rose-900">
                        <span className="mr-2 opacity-60">−</span>
                        {tokens
                          .filter((t) => t.type !== "add")
                          .map((t, ti) => (
                            <span
                              key={ti}
                              className={
                                t.type === "del" ? "rounded bg-rose-200/80 px-0.5" : undefined
                              }
                            >
                              {t.text}
                            </span>
                          ))}
                      </div>
                      <div className="rounded bg-emerald-50 px-2 py-1 text-emerald-900">
                        <span className="mr-2 opacity-60">+</span>
                        {tokens
                          .filter((t) => t.type !== "del")
                          .map((t, ti) => (
                            <span
                              key={ti}
                              className={
                                t.type === "add" ? "rounded bg-emerald-200/80 px-0.5" : undefined
                              }
                            >
                              {t.text}
                            </span>
                          ))}
                      </div>
                    </div>
                  );
                }
                if (pair.left !== undefined) {
                  return (
                    <div
                      key={`d-${idx}`}
                      className="bg-rose-50 px-3 py-1.5 text-rose-900"
                    >
                      <span className="mr-2 opacity-60">−</span>
                      {pair.left || " "}
                    </div>
                  );
                }
                return (
                  <div
                    key={`a-${idx}`}
                    className="bg-emerald-50 px-3 py-1.5 text-emerald-900"
                  >
                    <span className="mr-2 opacity-60">+</span>
                    {pair.right || " "}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </StudyToolShell>
  );
}
