"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";
import { FORMULA_BOARD } from "@/data/formula-board";

export default function FormulaBoardTool() {
  const [sectionId, setSectionId] = useState(FORMULA_BOARD[0]?.id || "physics");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [mode, setMode] = useState<"latex" | "plain">("latex");

  const section = FORMULA_BOARD.find((s) => s.id === sectionId) || FORMULA_BOARD[0];

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = section?.items || [];
    if (!q) return list;
    return list.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.plain.toLowerCase().includes(q) ||
        item.latex.toLowerCase().includes(q)
    );
  }, [section, query]);

  async function copyText(id: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? "" : c)), 1500);
  }

  return (
    <StudyToolShell
      title="Formula board"
      description="Common AP / STEM formulas — one-click copy as LaTeX or plain text for notes, dual-column editor, or LaTeX checker."
      tip="LaTeX mode copies ready-to-paste math for $...$ / $$...$$ workflows. Plain mode is for quick handwriting / typed notes."
    >
      <div className="flex flex-wrap items-center gap-2">
        {FORMULA_BOARD.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setSectionId(s.id)}
            className={
              sectionId === s.id
                ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
            }
          >
            {s.title}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <input
          className="input max-w-xs"
          placeholder="Search formulas…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          className={mode === "latex" ? "btn-primary text-xs" : "btn-secondary text-xs"}
          onClick={() => setMode("latex")}
        >
          Copy LaTeX
        </button>
        <button
          type="button"
          className={mode === "plain" ? "btn-primary text-xs" : "btn-secondary text-xs"}
          onClick={() => setMode("plain")}
        >
          Copy plain
        </button>
      </div>

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="card space-y-3">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-900">{item.name}</h3>
              <button
                type="button"
                className="shrink-0 rounded-lg bg-brand-600 px-2.5 py-1 text-[11px] font-semibold text-white hover:opacity-90"
                onClick={() => void copyText(item.id, mode === "latex" ? item.latex : item.plain)}
              >
                {copied === item.id ? "Copied" : mode === "latex" ? "Copy LaTeX" : "Copy plain"}
              </button>
            </div>
            <div className="rounded-xl bg-slate-50 px-3 py-3">
              <RichContent className="text-sm">{`$$${item.latex}$$`}</RichContent>
            </div>
            <p className="font-mono text-[11px] text-slate-500">{item.plain}</p>
          </li>
        ))}
        {!items.length ? <li className="card text-sm text-slate-500 sm:col-span-2">No matches.</li> : null}
      </ul>
    </StudyToolShell>
  );
}
