"use client";

import { useState } from "react";
import {
  evalAtX,
  findZeros,
  formatCalc,
  newtonRoot,
  numericDerivative,
  numericIntegral,
  numericSum,
  valueTable,
} from "@/lib/math-expr";

/** Numeric calculus extras fused into Calc + Graph — original-practice AP STEM, not a licensed ROM. */
export default function MathCalcLab({ onSendToGraph }: { onSendToGraph: (expr: string) => void }) {
  const [expr, setExpr] = useState("x^2");
  const [x0, setX0] = useState("2");
  const [a, setA] = useState("0");
  const [b, setB] = useState("2");
  const [n0, setN0] = useState("1");
  const [n1, setN1] = useState("10");
  const [xmin, setXmin] = useState("-2");
  const [xmax, setXmax] = useState("2");
  const [step, setStep] = useState("0.5");
  const [out, setOut] = useState("");
  const [table, setTable] = useState<Array<{ x: string; y: string }>>([]);
  const [error, setError] = useState("");

  function run(kind: "eval" | "deriv" | "int" | "sum" | "zeros" | "newton" | "table") {
    setError("");
    setTable([]);
    try {
      const f = expr.trim() || "x";
      if (kind === "eval") {
        const x = Number(x0);
        setOut(`f(${x0}) = ${formatCalc(evalAtX(f, x))}`);
      } else if (kind === "deriv") {
        const x = Number(x0);
        setOut(`f'(${x0}) ≈ ${formatCalc(numericDerivative(f, x))}`);
      } else if (kind === "int") {
        setOut(`∫ from ${a} to ${b} ≈ ${formatCalc(numericIntegral(f, Number(a), Number(b)))}`);
      } else if (kind === "sum") {
        setOut(`Σ n=${n0}..${n1} ≈ ${formatCalc(numericSum(f, Number(n0), Number(n1)))}`);
      } else if (kind === "zeros") {
        const zeros = findZeros(f, Number(xmin), Number(xmax));
        setOut(
          zeros.length
            ? `zeros in [${xmin}, ${xmax}]: ${zeros.map((z) => formatCalc(z)).join(", ")}`
            : `No sign-change zeros in [${xmin}, ${xmax}].`
        );
      } else if (kind === "newton") {
        const root = newtonRoot(f, Number(x0));
        setOut(`Newton from x=${x0} → ${formatCalc(root)}  (f ≈ ${formatCalc(evalAtX(f, root))})`);
      } else {
        const rows = valueTable(f, Number(xmin), Number(xmax), Number(step));
        setTable(
          rows.map((row) => ({
            x: formatCalc(row.x),
            y: row.y === null ? "—" : formatCalc(row.y),
          }))
        );
        setOut(`${rows.length} rows · Δx = ${step}`);
      }
    } catch (caught) {
      setOut("");
      setError(caught instanceof Error ? caught.message : "Could not evaluate.");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calc lab</p>
          <h3 className="text-sm font-semibold text-slate-900">Evaluate · d/dx · ∫ · Σ · table · zeros</h3>
        </div>
        <button type="button" className="btn-secondary text-xs" onClick={() => onSendToGraph(expr.trim() || "x")}>
          Plot f(x)
        </button>
      </div>
      <label className="mt-3 block text-sm font-medium text-slate-700">
        f(x) or a_n (use n for sums)
        <input
          className="input mt-1 font-mono"
          value={expr}
          onChange={(e) => setExpr(e.target.value)}
          spellCheck={false}
        />
      </label>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-xs font-medium text-slate-600">
          x / Newton guess
          <input className="input mt-1" value={x0} onChange={(e) => setX0(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          ∫ a
          <input className="input mt-1" value={a} onChange={(e) => setA(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          ∫ b
          <input className="input mt-1" value={b} onChange={(e) => setB(e.target.value)} />
        </label>
        <div className="grid grid-cols-2 gap-2">
          <label className="text-xs font-medium text-slate-600">
            n₀
            <input className="input mt-1" value={n0} onChange={(e) => setN0(e.target.value)} />
          </label>
          <label className="text-xs font-medium text-slate-600">
            n₁
            <input className="input mt-1" value={n1} onChange={(e) => setN1(e.target.value)} />
          </label>
        </div>
      </div>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        <label className="text-xs font-medium text-slate-600">
          table / zeros xmin
          <input className="input mt-1" value={xmin} onChange={(e) => setXmin(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          xmax
          <input className="input mt-1" value={xmax} onChange={(e) => setXmax(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          table Δx
          <input className="input mt-1" value={step} onChange={(e) => setStep(e.target.value)} />
        </label>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="btn-primary text-xs" onClick={() => run("eval")}>
          f(x)
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("deriv")}>
          f′(x)
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("int")}>
          ∫ f dx
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("sum")}>
          Σ a_n
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("table")}>
          Table
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("zeros")}>
          Zeros
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("newton")}>
          Newton
        </button>
      </div>
      {out ? <p className="mt-3 font-mono text-sm text-slate-900">{out}</p> : null}
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
      {table.length ? (
        <div className="mt-3 max-h-48 overflow-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-xs">
            <thead className="sticky top-0 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-3 py-1.5">x</th>
                <th className="px-3 py-1.5">f(x)</th>
              </tr>
            </thead>
            <tbody className="font-mono text-slate-800">
              {table.map((row, i) => (
                <tr key={`${row.x}-${i}`} className="border-t border-slate-100">
                  <td className="px-3 py-1">{row.x}</td>
                  <td className="px-3 py-1">{row.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}
