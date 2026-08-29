"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import MathCalcLab from "@/components/MathCalcLab";
import UnitsConstants from "@/components/UnitsConstants";
import SciNotationTool from "@/components/SciNotationTool";
import VectorResolveTool from "@/components/VectorResolveTool";
import FormulaBoardTool from "@/components/FormulaBoardTool";
import LatexChecker from "@/components/LatexChecker";

const TICalculator = dynamic(() => import("@/components/TICalculator"), {
  loading: () => <div className="card text-sm text-slate-500">Loading calculator…</div>,
});
const TIGrapher = dynamic(() => import("@/components/TIGrapher"), {
  loading: () => <div className="card text-sm text-slate-500">Loading grapher…</div>,
});

type PadTab = "calc" | "units" | "sci" | "vector" | "latex" | "formulas";

type Props = {
  focus?: "calculator" | "grapher";
};

const QUICK_FUNCTIONS = ["x^2", "sin(x)", "cos(x)", "exp(-x^2)"] as const;

function parsePad(raw: string | null): PadTab {
  if (raw === "units" || raw === "sci" || raw === "vector" || raw === "latex" || raw === "formulas")
    return raw;
  return "calc";
}

/** One Convenient Tools / AI Toolbox pad: calculator + grapher + calculus + reference utilities. */
export default function MathPad({ focus = "calculator" }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [labExpr, setLabExpr] = useState("x^2");
  const [graphY1, setGraphY1] = useState("");
  const [graphY2, setGraphY2] = useState("");
  const [calcHandoff, setCalcHandoff] = useState("");
  const [latexHandoff, setLatexHandoff] = useState("");
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

  function sendToGraph(expr?: string, overlay?: string) {
    const next = (expr ?? labExpr).trim() || "sin(x)";
    const y2 = (overlay ?? "").trim();
    setGraphY1(next);
    setGraphY2(y2);
    setLabExpr(next);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tool", "calculator");
    params.set("y1", next);
    if (y2) params.set("y2", y2);
    else params.delete("y2");
    params.delete("pad");
    setPad("calc");
    router.replace(`/hints?${params.toString()}`, { scroll: false });
    window.setTimeout(() => {
      document.getElementById("math-grapher")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }

  function sendToCalculator(value?: string) {
    const next = (value ?? labExpr).trim() || "0";
    setCalcHandoff(next);
    window.setTimeout(() => {
      document.getElementById("math-calculator")?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Math workbench</p>
            <h2 className="mt-1 text-xl font-semibold text-slate-900">Calc + Graph</h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Start with the calculator or graph. Open the calculus lab only when you need derivatives,
              integrals, tables, roots, intersections, numerical methods, or AP-style analysis.
            </p>
          </div>
          <button
            type="button"
            className="btn-ghost text-xs"
            onClick={() => {
              setLabExpr("x^2");
              setGraphY1("");
              setGraphY2("");
              setCalcHandoff("");
            }}
          >
            Reset math desk
          </button>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">Main desk</p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setPadTab("calc")}
              className={
                pad === "calc"
                  ? "rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                  : "rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200"
              }
            >
              Calculator + Graph
            </button>
          </div>
          <p className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
            Reference & conversions
          </p>
          <div className="flex flex-wrap gap-2">
            {(
              [
                ["units", "Units & constants"],
                ["sci", "Scientific notation"],
                ["vector", "Vectors"],
                ["latex", "LaTeX check"],
                ["formulas", "Formula board"],
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
        </div>

        {pad === "calc" ? (
          <div className="mt-4 rounded-xl bg-slate-50 p-3">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-end">
              <label className="block min-w-0 flex-1 text-sm font-medium text-slate-700">
                Shared f(x) / expression
                <input
                  className="input mt-1 font-mono"
                  value={labExpr}
                  onChange={(e) => setLabExpr(e.target.value)}
                  placeholder="e.g. 3*x^2 + 2*x or sin(x)"
                  spellCheck={false}
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <button type="button" className="btn-primary" onClick={() => sendToGraph(labExpr)}>
                  Plot f(x)
                </button>
                <button type="button" className="btn-secondary" onClick={() => sendToCalculator(labExpr)}>
                  Send to calculator
                </button>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">Quick examples</span>
              {QUICK_FUNCTIONS.map((expr) => (
                <button
                  key={expr}
                  type="button"
                  className="rounded-full border border-slate-200 bg-white px-2.5 py-1 font-mono text-xs text-slate-600 hover:border-brand-300 hover:text-brand-700"
                  onClick={() => {
                    setLabExpr(expr);
                    sendToGraph(expr);
                  }}
                >
                  {expr}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {pad === "units" ? <UnitsConstants embedded onInsert={sendToGraph} /> : null}
      {pad === "sci" ? <SciNotationTool embedded onInsert={sendToGraph} /> : null}
      {pad === "vector" ? <VectorResolveTool embedded onInsert={sendToGraph} /> : null}
      {pad === "latex" ? <LatexChecker embedded onPlot={sendToGraph} handoffTex={latexHandoff} /> : null}
      {pad === "formulas" ? (
        <FormulaBoardTool
          embedded
          onPlot={sendToGraph}
          onCheckLatex={(tex) => {
            setLatexHandoff(tex);
            setPadTab("latex");
          }}
        />
      ) : null}

      {pad === "calc" ? (
        <>
          <div className="grid gap-4 xl:grid-cols-2">
            <section
              id="math-calculator"
              className={`min-w-0 ${focus === "grapher" ? "xl:order-2" : ""}`}
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calculator</p>
                <span className="text-[11px] text-slate-400">Everyday calculations first</span>
              </div>
              <TICalculator handoffExpr={calcHandoff} />
            </section>
            <section id="math-grapher" className="min-w-0">
              <div className="mb-2 flex items-center justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Grapher</p>
                <span className="text-[11px] text-slate-400">Y1–Y4 and shared f(x)</span>
              </div>
              <TIGrapher handoffY1={graphY1} handoffY2={graphY2} />
            </section>
          </div>

          <MathCalcLab
            expr={labExpr}
            onExprChange={setLabExpr}
            onSendToGraph={sendToGraph}
            onSendToCalc={sendToCalculator}
          />
        </>
      ) : null}
    </div>
  );
}
