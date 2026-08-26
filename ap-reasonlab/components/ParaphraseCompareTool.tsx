"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Tab = "compare" | "report" | "history";

type HistoryItem = {
  id: string;
  original: string;
  rewrite: string;
  jaccard: number;
  at: number;
};

const HISTORY_KEY = "ke-paraphrase-compare-v1";

const STOP = new Set([
  "the",
  "a",
  "an",
  "and",
  "or",
  "but",
  "in",
  "on",
  "at",
  "to",
  "for",
  "of",
  "is",
  "are",
  "was",
  "were",
  "be",
  "it",
  "this",
  "that",
  "with",
  "as",
  "by",
  "from",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^\w\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function contentTokens(s: string): string[] {
  return tokenize(s).filter((w) => !STOP.has(w) && w.length > 2);
}

type AlignTok = { a?: string; b?: string; kind: "same" | "onlyA" | "onlyB" };

function alignWords(original: string, rewrite: string): AlignTok[] {
  const a = tokenize(original);
  const b = tokenize(rewrite);
  const out: AlignTok[] = [];
  let i = 0;
  let j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) {
      out.push({ a: a[i], b: b[j], kind: "same" });
      i++;
      j++;
      continue;
    }
    // Look ahead a few tokens for a match
    let matched = false;
    for (let d = 1; d <= 3; d++) {
      if (j + d < b.length && a[i] === b[j + d]) {
        for (let k = 0; k < d; k++) out.push({ b: b[j + k], kind: "onlyB" });
        j += d;
        matched = true;
        break;
      }
      if (i + d < a.length && a[i + d] === b[j]) {
        for (let k = 0; k < d; k++) out.push({ a: a[i + k], kind: "onlyA" });
        i += d;
        matched = true;
        break;
      }
    }
    if (matched) continue;
    out.push({ a: a[i], kind: "onlyA" });
    out.push({ b: b[j], kind: "onlyB" });
    i++;
    j++;
  }
  while (i < a.length) {
    out.push({ a: a[i++], kind: "onlyA" });
  }
  while (j < b.length) {
    out.push({ b: b[j++], kind: "onlyB" });
  }
  return out;
}

export default function ParaphraseCompareTool() {
  const [tab, setTab] = useState<Tab>("compare");
  const [original, setOriginal] = useState(
    "The experiment demonstrated that temperature affects reaction rate."
  );
  const [rewrite, setRewrite] = useState(
    "The lab showed that how fast the reaction happens depends on temperature."
  );
  const [ignoreStop, setIgnoreStop] = useState(true);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      if (raw) setHistory(JSON.parse(raw) as HistoryItem[]);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 30)));
  }, [history, mounted]);

  const stats = useMemo(() => {
    const tokA = ignoreStop ? contentTokens(original) : tokenize(original);
    const tokB = ignoreStop ? contentTokens(rewrite) : tokenize(rewrite);
    const a = new Set(tokA);
    const b = new Set(tokB);
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
    const lenA = tokenize(original).length;
    const lenB = tokenize(rewrite).length;
    const charsA = original.trim().length;
    const charsB = rewrite.trim().length;
    return {
      jaccard,
      shared,
      onlyA,
      onlyB,
      lenA,
      lenB,
      charsA,
      charsB,
      deltaWords: lenB - lenA,
    };
  }, [original, rewrite, ignoreStop]);

  const aligned = useMemo(() => alignWords(original, rewrite), [original, rewrite]);

  function saveHistory() {
    if (!stats) return;
    setHistory((prev) =>
      [
        {
          id: `p-${Date.now()}`,
          original,
          rewrite,
          jaccard: stats.jaccard,
          at: Date.now(),
        },
        ...prev,
      ].slice(0, 30)
    );
  }

  async function copyReport() {
    if (!stats) return;
    const text = [
      `Paraphrase report`,
      `Overlap: ${Math.round(stats.jaccard * 100)}% (${ignoreStop ? "content words" : "all words"})`,
      `Original (${stats.lenA} words): ${original}`,
      `Rewrite (${stats.lenB} words): ${rewrite}`,
      `Shared: ${stats.shared.join(", ") || "—"}`,
      `Only original: ${stats.onlyA.join(", ") || "—"}`,
      `Only rewrite: ${stats.onlyB.join(", ") || "—"}`,
    ].join("\n");
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  const strength =
    stats == null
      ? null
      : stats.jaccard < 0.35
        ? "Strong rewording (low overlap)"
        : stats.jaccard < 0.55
          ? "Moderate paraphrase"
          : "High overlap — try more synonym / structure changes";

  return (
    <StudyToolShell
      title="Paraphrase compare"
      description="Compare original vs rewrite with content-word overlap, side-by-side alignment, and a copyable report. History stays local."
      tip="Lower content-word overlap usually means a stronger paraphrase — still check meaning with a teacher or AI tutor."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["compare", "Compare"],
            ["report", "Report"],
            ["history", `History (${history.length})`],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={tab === id ? "btn-primary text-sm" : "btn-secondary text-sm"}
            onClick={() => setTab(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "compare" ? (
        <>
          <div className="grid gap-4 lg:grid-cols-2">
            <label className="block text-sm">
              Original
              <textarea
                className="input mt-1 min-h-[10rem]"
                value={original}
                onChange={(e) => setOriginal(e.target.value)}
              />
            </label>
            <label className="block text-sm">
              Your paraphrase
              <textarea
                className="input mt-1 min-h-[10rem]"
                value={rewrite}
                onChange={(e) => setRewrite(e.target.value)}
              />
            </label>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={ignoreStop}
              onChange={(e) => setIgnoreStop(e.target.checked)}
            />
            Ignore common stopwords in overlap %
          </label>
          {stats ? (
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="card">
                <p className="text-xs font-semibold uppercase text-slate-500">Word overlap</p>
                <p className="mt-2 text-2xl font-bold tabular-nums">
                  {Math.round(stats.jaccard * 100)}%
                </p>
                <p className="mt-1 text-xs text-slate-600">{strength}</p>
              </div>
              <div className="card">
                <p className="text-xs font-semibold uppercase text-slate-500">Length</p>
                <p className="mt-2 text-sm text-slate-700">
                  {stats.lenA} → {stats.lenB} words ({stats.deltaWords >= 0 ? "+" : ""}
                  {stats.deltaWords})
                </p>
                <p className="text-xs text-slate-500">
                  {stats.charsA} → {stats.charsB} chars
                </p>
              </div>
              <div className="card sm:col-span-1">
                <p className="text-xs font-semibold uppercase text-slate-500">Shared words</p>
                <p className="mt-2 text-sm text-slate-700">{stats.shared.join(", ") || "—"}</p>
              </div>
            </div>
          ) : null}
          {aligned.length ? (
            <div className="card space-y-2">
              <p className="text-xs font-semibold uppercase text-slate-500">Aligned view</p>
              <p className="flex flex-wrap gap-1 text-sm">
                {aligned.map((t, i) => (
                  <span
                    key={i}
                    className={
                      t.kind === "same"
                        ? "rounded bg-slate-100 px-1 text-slate-700"
                        : t.kind === "onlyA"
                          ? "rounded bg-rose-100 px-1 text-rose-900 line-through"
                          : "rounded bg-emerald-100 px-1 text-emerald-900"
                    }
                    title={t.kind}
                  >
                    {t.a || t.b}
                  </span>
                ))}
              </p>
              <p className="text-[11px] text-slate-500">
                Gray = shared · Red strike = only original · Green = only rewrite
              </p>
            </div>
          ) : null}
          {stats ? (
            <div className="flex flex-wrap gap-2">
              <button type="button" className="btn-secondary text-sm" onClick={saveHistory}>
                Save to history
              </button>
              <button type="button" className="btn-ghost text-sm" onClick={() => setTab("report")}>
                Open full report →
              </button>
            </div>
          ) : null}
        </>
      ) : null}

      {tab === "report" ? (
        <div className="card space-y-3 text-sm">
          {!stats ? (
            <p className="text-slate-500">Add text on Compare first.</p>
          ) : (
            <>
              <p className="font-semibold text-slate-900">
                Overlap {Math.round(stats.jaccard * 100)}% · {strength}
              </p>
              <p>
                <span className="font-medium">Only in original:</span>{" "}
                {stats.onlyA.join(", ") || "—"}
              </p>
              <p>
                <span className="font-medium">Only in rewrite:</span>{" "}
                {stats.onlyB.join(", ") || "—"}
              </p>
              <p>
                <span className="font-medium">Shared:</span> {stats.shared.join(", ") || "—"}
              </p>
              <button type="button" className="btn-primary" onClick={() => void copyReport()}>
                {copied ? "Copied" : "Copy report"}
              </button>
            </>
          )}
        </div>
      ) : null}

      {tab === "history" ? (
        <ul className="space-y-3">
          {history.map((h) => (
            <li key={h.id} className="card space-y-1 text-sm">
              <div className="flex flex-wrap justify-between gap-2 text-xs text-slate-500">
                <span>
                  {new Date(h.at).toLocaleString()} · {Math.round(h.jaccard * 100)}% overlap
                </span>
                <button
                  type="button"
                  className="font-semibold text-brand-700"
                  onClick={() => {
                    setOriginal(h.original);
                    setRewrite(h.rewrite);
                    setTab("compare");
                  }}
                >
                  Restore
                </button>
              </div>
              <p className="text-slate-700">{h.original}</p>
              <p className="text-slate-500">→ {h.rewrite}</p>
            </li>
          ))}
          {!history.length ? (
            <li className="card text-sm text-slate-500">No saved comparisons yet.</li>
          ) : null}
        </ul>
      ) : null}
    </StudyToolShell>
  );
}
