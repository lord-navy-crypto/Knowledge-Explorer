"use client";

import { useMemo, useState } from "react";
import katex from "katex";
import StudyToolShell from "@/components/StudyToolShell";
import { toLatexSource } from "@/lib/unicode-math";

export default function LatexChecker() {
  const [source, setSource] = useState("E = \\frac{1}{2}mv^2");
  const [display, setDisplay] = useState(true);

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

  return (
    <StudyToolShell
      title="LaTeX checker"
      description="Paste a formula (with or without $...$) and check KaTeX rendering before you put it into concepts or practice."
      tip="Unicode math like √ or · is normalized when possible. Prefer $...$ / $$...$$ in content editors."
    >
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
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={display}
              onChange={(e) => setDisplay(e.target.checked)}
            />
            Display mode ($$)
          </label>
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
          <p className={`text-xs ${result.ok ? "text-emerald-700" : "text-red-600"}`}>
            {result.ok ? "Valid — ready to paste into a concept or document." : "Fix the source above."}
          </p>
        </div>
      </div>
    </StudyToolShell>
  );
}
