"use client";

import { useEffect, useMemo, useState } from "react";
import katex from "katex";
import Link from "next/link";
import StudyToolShell from "@/components/StudyToolShell";
import { FORMULA_BOARD } from "@/data/formula-board";
import { toLatexSource } from "@/lib/unicode-math";
import { latexToGrapherY1 } from "@/lib/math-expr";

const PRESETS = [
  { label: "Quadratic", src: "x = \\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}" },
  { label: "Derivative", src: "\\frac{d}{dx}[f(x)] = \\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}" },
  { label: "Integral", src: "\\int_a^b f(x)\\,dx = F(b)-F(a)" },
  { label: "Normal PDF", src: "f(x)=\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}" },
  { label: "Newton 2", src: "\\sum \\vec F = m\\vec a" },
];

export default function LatexChecker({
  embedded = false,
  onPlot,
  handoffTex = "",
}: {
  embedded?: boolean;
  onPlot?: (expr: string) => void;
  handoffTex?: string;
}) {
  const [source, setSource] = useState("E = \\frac{1}{2}mv^2");
  const [display, setDisplay] = useState(true);
  const [wrapDollars, setWrapDollars] = useState(true);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const tex = new URLSearchParams(window.location.search).get("tex");
    if (tex?.trim()) setSource(tex);
  }, []);

  useEffect(() => {
    if (handoffTex.trim()) setSource(handoffTex);
  }, [handoffTex]);

  const result = useMemo(() => {
    try {
      const html = katex.renderToString(toLatexSource(source), {
        throwOnError: true,
        displayMode: display,
        strict: "ignore",
      });
      return { ok: true as const, html, error: "" };
    } catch (error) {
      return {
        ok: false as const,
        html: "",
        error: error instanceof Error ? error.message : "Invalid LaTeX",
      };
    }
  }, [display, source]);

  const exportText = useMemo(() => {
    const body = source.trim();
    if (!wrapDollars) return body;
    return display ? `$$${body}$$` : `$${body}$`;
  }, [display, source, wrapDollars]);

  async function copy(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? "" : c)), 1200);
  }

  const plotExpr = latexToGrapherY1(source);

  const body = (
    <>
      <div className="flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className="rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
            onClick={() => setSource(p.src)}
          >
            {p.label}
          </button>
        ))}
        <Link href="/tools/formula-board" className="rounded-lg bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-200">
          Formula board →
        </Link>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm font-medium">
          LaTeX source
          <textarea
            className="textarea mt-2 min-h-[14rem] font-mono text-sm"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            placeholder="F_{net}=ma"
          />
        </label>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-3 text-sm">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={display} onChange={(e) => setDisplay(e.target.checked)} />
              Display mode ($$)
            </label>
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={wrapDollars}
                onChange={(e) => setWrapDollars(e.target.checked)}
              />
              Wrap dollars on copy
            </label>
          </div>
          <div className="min-h-[14rem] rounded-2xl border border-slate-200 bg-white p-6">
            {result.ok ? (
              <div
                className="overflow-x-auto text-slate-900"
                dangerouslySetInnerHTML={{ __html: result.html }}
              />
            ) : (
              <p className="text-sm text-red-600">{result.error}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn-secondary text-xs" onClick={() => copy(exportText, "exp")} disabled={!result.ok}>
              {copied === "exp" ? "Copied" : "Copy for editor"}
            </button>
            <button type="button" className="btn-secondary text-xs" onClick={() => copy(source, "raw")}>
              {copied === "raw" ? "Copied" : "Copy raw"}
            </button>
            {onPlot && plotExpr ? (
              <button type="button" className="btn-primary text-xs" onClick={() => onPlot(plotExpr)}>
                Plot as Y1
              </button>
            ) : null}
          </div>
          <p className={`text-xs ${result.ok ? "text-emerald-700" : "text-red-600"}`}>
            {result.ok ? "Valid — ready to paste into a concept or document." : "Fix the source above."}
          </p>
        </div>
      </div>

      <details className="card text-sm">
        <summary className="cursor-pointer font-semibold">Insert from Formula board (quick pick)</summary>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {FORMULA_BOARD.flatMap((s) =>
            s.items.slice(0, 4).map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-left hover:border-brand-300"
                  onClick={() => setSource(item.latex)}
                >
                  <span className="text-xs text-slate-500">{s.title}</span>
                  <br />
                  <span className="font-medium">{item.name}</span>
                </button>
              </li>
            ))
          )}
        </ul>
      </details>
    </>
  );

  if (embedded) {
    return <div className="space-y-4">{body}</div>;
  }

  return (
    <StudyToolShell
      title="LaTeX checker"
      description="Paste a formula (with or without $...$), check KaTeX rendering, copy wrapped $ / $$, and jump to Formula board presets — AP STEM note workflow."
      tip="Unicode math like √ or · is normalized when possible. Prefer $...$ / $$...$$ in content editors."
    >
      {body}
    </StudyToolShell>
  );
}
