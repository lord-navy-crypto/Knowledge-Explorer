"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";
import { FORMULA_BOARD } from "@/data/formula-board";

export default function FormulaBoardTool() {
  const [sectionId, setSectionId] = useState(FORMULA_BOARD[0]?.id || "physics");
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [mode, setMode] = useState<"latex" | "plain">("latex");
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      return JSON.parse(localStorage.getItem("ke-formula-favs") || "[]") as string[];
    } catch {
      return [];
    }
  });

  const section = FORMULA_BOARD.find((s) => s.id === sectionId) || FORMULA_BOARD[0];

  const allItems = useMemo(
    () => FORMULA_BOARD.flatMap((s) => s.items.map((item) => ({ ...item, section: s.title }))),
    []
  );

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

  const favItems = useMemo(
    () => allItems.filter((item) => favorites.includes(item.id)),
    [allItems, favorites]
  );

  async function copyText(id: string, text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? "" : c)), 1500);
  }

  function toggleFav(id: string) {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem("ke-formula-favs", JSON.stringify(next));
      return next;
    });
  }

  function exportFavs() {
    const lines = favItems.map((i) => `## ${i.name}\n$${i.latex}$\n${i.plain}`).join("\n\n");
    const blob = new Blob([lines || "# No favorites"], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "formula-favorites.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <StudyToolShell
      title="Formula board"
      description="Common AP / STEM formulas — one-click copy as LaTeX or plain text, star favorites, export a cheat sheet, or open in LaTeX checker / Grapher."
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
        <button type="button" className="btn-secondary text-xs" onClick={exportFavs}>
          Export favorites
        </button>
        <Link href="/tools/latex" className="btn-secondary text-xs">
          LaTeX checker
        </Link>
        <Link href="/hints?tool=grapher" className="btn-secondary text-xs">
          Grapher
        </Link>
      </div>

      {favItems.length > 0 && (
        <div className="rounded-xl border border-amber-200 bg-amber-50/60 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-900">Favorites</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {favItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className="rounded-lg bg-white px-2 py-1 text-xs font-medium ring-1 ring-amber-200"
                onClick={() => copyText(item.id, mode === "latex" ? item.latex : item.plain)}
              >
                ★ {item.name}
              </button>
            ))}
          </ul>
        </div>
      )}

      <ul className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id} className="card space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-slate-900">{item.name}</h3>
              <button
                type="button"
                className="text-amber-600"
                aria-label="Favorite"
                onClick={() => toggleFav(item.id)}
              >
                {favorites.includes(item.id) ? "★" : "☆"}
              </button>
            </div>
            <div className="overflow-x-auto text-slate-800">
              <RichContent mode="math">{item.latex}</RichContent>
            </div>
            <p className="font-mono text-xs text-slate-500">{item.plain}</p>
            {item.note ? <p className="text-xs text-slate-500">{item.note}</p> : null}
            <button
              type="button"
              className="btn-secondary text-xs"
              onClick={() => copyText(item.id, mode === "latex" ? item.latex : item.plain)}
            >
              {copied === item.id ? "Copied" : mode === "latex" ? "Copy LaTeX" : "Copy plain"}
            </button>
          </li>
        ))}
      </ul>
    </StudyToolShell>
  );
}
