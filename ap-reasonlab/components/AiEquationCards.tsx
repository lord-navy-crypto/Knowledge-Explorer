"use client";

import type { AiEquation } from "@/lib/ai-latex-accuracy";
import { FormulaMath } from "@/components/RichContent";

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
        {equations.map((eq, index) => (
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
          </li>
        ))}
      </ul>
    </div>
  );
}
