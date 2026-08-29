"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

const TICalculator = dynamic(() => import("@/components/TICalculator"), {
  loading: () => <div className="card text-sm text-slate-500">Loading calculator…</div>,
});
const TIGrapher = dynamic(() => import("@/components/TIGrapher"), {
  loading: () => <div className="card text-sm text-slate-500">Loading grapher…</div>,
});

type Props = {
  focus?: "calculator" | "grapher";
};

/** One Convenient Tools / AI Toolbox pad: ClassWiz calculator + function grapher. */
export default function MathPad({ focus = "calculator" }: Props) {
  const router = useRouter();
  const [paste, setPaste] = useState("");

  function sendToGraph() {
    const expr = paste.trim() || "sin(x)";
    router.replace(`/hints?tool=grapher&y1=${encodeURIComponent(expr)}`);
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Calc + Graph</h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Same pad: evaluate on the left, plot Y1–Y4 on the right. Paste an expression to import, or
          use → Graph on the calculator. Official-style AP STEM workflows — original practice, not a
          licensed Casio/TI ROM.
        </p>
        <div className="mt-3 flex flex-wrap items-end gap-2">
          <label className="block min-w-[12rem] flex-1 text-sm font-medium text-slate-700">
            Paste / import expression
            <input
              className="input mt-1"
              value={paste}
              onChange={(e) => setPaste(e.target.value)}
              placeholder="e.g. 3*x^2 + 2*x or sin(x)"
              spellCheck={false}
            />
          </label>
          <button type="button" className="btn-primary" onClick={sendToGraph}>
            Send to Graph
          </button>
        </div>
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <section
          id="math-calculator"
          className={`min-w-0 ${focus === "grapher" ? "xl:order-2" : ""}`}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Calculator
          </p>
          <TICalculator />
        </section>
        <section id="math-grapher" className="min-w-0">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Grapher
          </p>
          <TIGrapher />
        </section>
      </div>
    </div>
  );
}
