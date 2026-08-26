"use client";

import Link from "next/link";
import type { AiEquation } from "@/lib/ai-latex-accuracy";
import { FormulaMath } from "@/components/RichContent";
import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";
import { latexToGrapherY1, looksLikeFunctionOfX } from "@/lib/math-expr";

type Props = {
  equations: AiEquation[];
  title?: string;
  className?: string;
};

/**
 * Render structured AI equations as KaTeX cards — no $…$ markers in the UI.
 * Site authored Markdown still uses $ in RichContent; AI dialogue uses this instead.
 */
export default function AiEquationCards({
  equations,
  title = "Key equations",
  className = "",
}: Props) {
  if (!equations.length) return null;

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">{title}</p>
      <ul className="space-y-2">
        {equations.map((eq, index) => {
          const plotY1 = latexToGrapherY1(eq.latex);
          const canPlot = Boolean(plotY1) || looksLikeFunctionOfX(eq.latex);
          return (
            <li
              key={`${eq.latex}-${index}`}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5"
            >
              {eq.name ? (
                <p className="text-xs font-semibold text-slate-700">{eq.name}</p>
              ) : null}
              <FormulaMath
                expression={eq.latex}
                className="mt-1 border-0 bg-slate-50/80 px-3 py-2 text-base"
              />
              {eq.means ? (
                <p className="mt-1.5 text-[11px] leading-relaxed text-slate-500">{eq.means}</p>
              ) : null}
              <div className="mt-2 flex flex-wrap gap-2">
                {plotY1 ? (
                  <Link
                    href={`/hints?tool=grapher&y1=${encodeURIComponent(plotY1)}`}
                    className="text-[11px] font-semibold text-brand-700 hover:underline"
                  >
                    Plot
                  </Link>
                ) : canPlot ? (
                  <Link
                    href={`/hints?tool=grapher`}
                    className="text-[11px] font-semibold text-brand-700 hover:underline"
                    title="Open Grapher — paste a plain f(x) form of this equation"
                  >
                    Plot
                  </Link>
                ) : null}
                <button
                  type="button"
                  className="text-[11px] font-semibold text-brand-700 hover:underline"
                  onClick={() =>
                    openToolboxWithPrefill({
                      category: "ap",
                      apTask: "formula-derive",
                      prompt: [
                        eq.name ? `Explain this equation: ${eq.name}` : "Explain this equation.",
                        `LaTeX: ${eq.latex}`,
                        eq.means ? `Meaning: ${eq.means}` : "",
                        "Derive when useful, define symbols, and give a short example.",
                      ]
                        .filter(Boolean)
                        .join("\n"),
                    })
                  }
                >
                  Ask AI
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
