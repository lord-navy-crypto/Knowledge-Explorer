"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import MathCalcLab from "@/components/MathCalcLab";
import UnitsConstants from "@/components/UnitsConstants";
import SciNotationTool from "@/components/SciNotationTool";
import VectorResolveTool from "@/components/VectorResolveTool";
import LatexChecker from "@/components/LatexChecker";

const TICalculator = dynamic(() => import("@/components/TICalculator"), {
  loading: () => <div className="card text-sm text-slate-500">Loading calculator…</div>,
});
const TIGrapher = dynamic(() => import("@/components/TIGrapher"), {
  loading: () => <div className="card text-sm text-slate-500">Loading grapher…</div>,
});

type PadTab = "calc" | "units" | "sci" | "vector" | "latex";

type Props = {
  focus?: "calculator" | "grapher";
};

function parsePad(raw: string | null): PadTab {
  if (raw === "units" || raw === "sci" || raw === "vector" || raw === "latex") return raw;
  return "calc";
}

/** One Convenient Tools / AI Toolbox pad: ClassWiz calculator + function grapher + fused math lab. */
export default function MathPad({ focus = "calculator" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [paste, setPaste] = useState("");
  const [graphY1, setGraphY1] = useState("");
  const [pad, setPad] = useState<PadTab>(() => parsePad(searchParams.get("pad")));

  useEffect(() => {
    setPad(parsePad(searchParams.get("pad")));
  }, [searchParams]);

  function setPadTab(next: PadTab) {
    setPad(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tool", "calculator");
    if (next === "calc") params.delete("pad");
    else params.set("pad", next);
    router.replace(`/hints?${params.toString()}`, { scroll: false });
  }

  function sendToGraph(expr?: string) {
    const next = (expr ?? paste).trim() || "sin(x)";
    setGraphY1(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tool", "calculator");
    params.set("y1", next);
    params.delete("pad");
    setPad("calc");
    router.replace(`/hints?${params.toString()}`, { scroll: false });
    window.setTimeout(() => {
      document.getElementById("math-grapher")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-slate-900">Calc + Graph desk</h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Evaluate, plot Y1–Y4, run numeric d/dx and ∫, then convert units or resolve vectors without
          leaving this desk. Plot f(x) writes Y1 immediately and scrolls to the grapher. Paste once to
          import. Official-style AP STEM — original practice, not a licensed Casio/TI ROM.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(
            [
              ["calc", "Calc + Graph"],
              ["units", "Units"],
              ["sci", "Sci notation"],
              ["vector", "Vectors"],
              ["latex", "LaTeX"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setPadTab(id)}
              className={
                pad === id
                  ? "rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                  : "rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200"
              }
            >
              {label}
            </button>
          ))}
        </div>
        {pad === "calc" ? (
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
            <button type="button" className="btn-primary" onClick={() => sendToGraph()}>
              Send to Graph
            </button>
          </div>
        ) : null}
      </div>

      {pad === "units" ? <UnitsConstants embedded onInsert={sendToGraph} /> : null}
      {pad === "sci" ? <SciNotationTool embedded onInsert={sendToGraph} /> : null}
      {pad === "vector" ? <VectorResolveTool embedded onInsert={sendToGraph} /> : null}
      {pad === "latex" ? <LatexChecker embedded onPlot={sendToGraph} /> : null}

      {pad === "calc" ? (
        <>
          <MathCalcLab onSendToGraph={sendToGraph} />
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
              <TIGrapher handoffY1={graphY1} />
            </section>
          </div>
        </>
      ) : null}
    </div>
  );
}
