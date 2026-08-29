"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  arcLength,
  averageValue,
  evalAtX,
  eulerMethod,
  findExtrema,
  findInflections,
  findIntersections,
  findZeros,
  formatCalc,
  newtonRoot,
  numericDerivative,
  numericIntegral,
  numericSecondDerivative,
  numericSum,
  riemannSum,
  simpsonSum,
  tangentLineExpression,
  trapezoidSum,
  valueTable,
} from "@/lib/math-expr";
import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";
import { preloadForumComposer } from "@/lib/forum-local";

/** Numeric calculus extras fused into Calc + Graph — original-practice AP STEM, not a licensed ROM. */
export default function MathCalcLab({
  onSendToGraph,
  onSendToCalc,
  expr,
  onExprChange,
}: {
  onSendToGraph: (expr: string, overlay?: string) => void;
  onSendToCalc?: (expr: string) => void;
  expr: string;
  onExprChange: (next: string) => void;
}) {
  const router = useRouter();
  const [gExpr, setGExpr] = useState("x");
  const [x0, setX0] = useState("2");
  const [a, setA] = useState("0");
  const [b, setB] = useState("2");
  const [n0, setN0] = useState("1");
  const [n1, setN1] = useState("10");
  const [xmin, setXmin] = useState("-2");
  const [xmax, setXmax] = useState("2");
  const [step, setStep] = useState("0.5");
  const [slices, setSlices] = useState("8");
  const [y0, setY0] = useState("1");
  const [hEuler, setHEuler] = useState("0.2");
  const [eulerSteps, setEulerSteps] = useState("5");
  const [out, setOut] = useState("");
  const [table, setTable] = useState<Array<{ x: string; y: string }>>([]);
  const [error, setError] = useState("");

  function run(
    kind:
      | "eval"
      | "deriv"
      | "second"
      | "int"
      | "avg"
      | "riemann"
      | "sum"
      | "zeros"
      | "newton"
      | "table"
      | "intersect"
      | "trap"
      | "simpson"
      | "extrema"
      | "inflect"
      | "arc"
      | "euler"
  ) {
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
      } else if (kind === "second") {
        const x = Number(x0);
        setOut(`f''(${x0}) ≈ ${formatCalc(numericSecondDerivative(f, x))}`);
      } else if (kind === "int") {
        setOut(`∫ from ${a} to ${b} ≈ ${formatCalc(numericIntegral(f, Number(a), Number(b)))}`);
      } else if (kind === "avg") {
        setOut(
          `avg on [${a}, ${b}] ≈ ${formatCalc(averageValue(f, Number(a), Number(b)))}`
        );
      } else if (kind === "riemann") {
        const n = Number(slices);
        const left = riemannSum(f, Number(a), Number(b), n, "left");
        const mid = riemannSum(f, Number(a), Number(b), n, "mid");
        const right = riemannSum(f, Number(a), Number(b), n, "right");
        setOut(
          `Riemann n=${slices} on [${a}, ${b}]: L=${formatCalc(left)}  M=${formatCalc(mid)}  R=${formatCalc(right)}`
        );
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
      } else if (kind === "intersect") {
        const g = gExpr.trim() || "x";
        const pts = findIntersections(f, g, Number(xmin), Number(xmax));
        setOut(
          pts.length
            ? `f ∩ g in [${xmin}, ${xmax}]: ${pts
                .map((p) => `(${formatCalc(p.x)}, ${formatCalc(p.y)})`)
                .join(", ")}`
            : `No intersections in [${xmin}, ${xmax}].`
        );
        onSendToGraph(f, g);
      } else if (kind === "trap") {
        setOut(
          `Trapezoid n=${slices} on [${a}, ${b}] ≈ ${formatCalc(
            trapezoidSum(f, Number(a), Number(b), Number(slices))
          )}`
        );
      } else if (kind === "simpson") {
        setOut(
          `Simpson n=${slices} on [${a}, ${b}] ≈ ${formatCalc(
            simpsonSum(f, Number(a), Number(b), Number(slices))
          )}`
        );
      } else if (kind === "extrema") {
        const pts = findExtrema(f, Number(xmin), Number(xmax));
        setOut(
          pts.length
            ? `extrema in [${xmin}, ${xmax}]: ${pts
                .map((p) => `${p.kind} (${formatCalc(p.x)}, ${formatCalc(p.y)})`)
                .join("; ")}`
            : `No f′ sign-change extrema in [${xmin}, ${xmax}].`
        );
      } else if (kind === "inflect") {
        const pts = findInflections(f, Number(xmin), Number(xmax));
        setOut(
          pts.length
            ? `inflection candidates in [${xmin}, ${xmax}]: ${pts
                .map((p) => `(${formatCalc(p.x)}, ${formatCalc(p.y)})`)
                .join(", ")}`
            : `No f″ sign-change inflections in [${xmin}, ${xmax}].`
        );
      } else if (kind === "arc") {
        setOut(
          `arc length on [${a}, ${b}] ≈ ${formatCalc(arcLength(f, Number(a), Number(b)))}`
        );
      } else if (kind === "euler") {
        const rows = eulerMethod(f, Number(x0), Number(y0), Number(hEuler), Number(eulerSteps));
        setTable(rows.map((row) => ({ x: formatCalc(row.x), y: formatCalc(row.y) })));
        const last = rows[rows.length - 1]!;
        setOut(
          `Euler y'=${f}, x0=${x0}, y0=${y0}, h=${hEuler}, n=${eulerSteps} → (${formatCalc(last.x)}, ${formatCalc(last.y)})`
        );
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

  function plotTangent() {
    setError("");
    try {
      const f = expr.trim() || "x";
      const line = tangentLineExpression(f, Number(x0));
      setOut(`tangent at x=${x0}: y = ${line}  (plotted as Y2)`);
      onSendToGraph(f, line);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Could not build tangent.");
    }
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Calc lab</p>
          <h3 className="text-sm font-semibold text-slate-900">
            Evaluate · d/dx · f″ · ∫ · Riemann · trapezoid · Simpson · extrema · Euler · f∩g
          </h3>
        </div>
        <button type="button" className="btn-secondary text-xs" onClick={() => onSendToGraph(expr.trim() || "x")}>
          Plot f(x)
        </button>
        {onSendToCalc ? (
          <button
            type="button"
            className="btn-secondary text-xs"
            onClick={() => onSendToCalc(expr.trim() || "x")}
          >
            → Calculator
          </button>
        ) : null}
      </div>
      <label className="mt-3 block text-sm font-medium text-slate-700">
        f(x) or a_n (use n for sums)
        <input
          className="input mt-1 font-mono"
          value={expr}
          onChange={(e) => onExprChange(e.target.value)}
          spellCheck={false}
        />
      </label>
      <label className="mt-2 block text-sm font-medium text-slate-700">
        g(x) for intersections (plots as Y2)
        <input
          className="input mt-1 font-mono"
          value={gExpr}
          onChange={(e) => setGExpr(e.target.value)}
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
      <label className="mt-2 block max-w-[8rem] text-xs font-medium text-slate-600">
        Riemann / trap / Simpson n
        <input className="input mt-1" value={slices} onChange={(e) => setSlices(e.target.value)} />
      </label>
      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        <label className="text-xs font-medium text-slate-600">
          Euler y₀
          <input className="input mt-1" value={y0} onChange={(e) => setY0(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          Euler h
          <input className="input mt-1" value={hEuler} onChange={(e) => setHEuler(e.target.value)} />
        </label>
        <label className="text-xs font-medium text-slate-600">
          Euler steps
          <input className="input mt-1" value={eulerSteps} onChange={(e) => setEulerSteps(e.target.value)} />
        </label>
      </div>
      <p className="mt-1 text-[11px] text-slate-500">
        Euler treats f as <span className="font-mono">dy/dx(x,y)</span>. Extrema / inflections use xmin–xmax.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <button type="button" className="btn-primary text-xs" onClick={() => run("eval")}>
          f(x)
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("deriv")}>
          f′(x)
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("second")}>
          f″(x)
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={plotTangent}>
          Tangent → Y2
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("int")}>
          ∫ f dx
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("avg")}>
          Avg value
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("riemann")}>
          Riemann L/M/R
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("trap")}>
          Trapezoid
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("simpson")}>
          Simpson
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
        <button type="button" className="btn-secondary text-xs" onClick={() => run("extrema")}>
          Extrema
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("inflect")}>
          Inflection
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("arc")}>
          Arc length
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("euler")}>
          Euler y′
        </button>
        <button type="button" className="btn-secondary text-xs" onClick={() => run("intersect")}>
          f ∩ g → Y1/Y2
        </button>
        <button
          type="button"
          className="btn-secondary text-xs"
          onClick={() =>
            openToolboxWithPrefill({
              category: "ap",
              apTask: "advice",
              prompt: [
                "Help with this original-practice calc lab (do not paste copyrighted exam text).",
                `f(x) = ${expr.trim() || "x"}`,
                gExpr.trim() ? `g(x) = ${gExpr.trim()}` : "",
                out ? `Latest result: ${out}` : "",
              ]
                .filter(Boolean)
                .join("\n"),
            })
          }
        >
          Ask AI
        </button>
        <button
          type="button"
          className="btn-secondary text-xs"
          onClick={() => {
            preloadForumComposer({
              title: `Calc lab: ${expr.trim() || "f(x)"}`,
              body: [
                `f(x) = \`${expr.trim() || "x"}\``,
                gExpr.trim() ? `g(x) = \`${gExpr.trim()}\`` : "",
                out ? `Result: ${out}` : "Need help checking this setup.",
              ]
                .filter(Boolean)
                .join("\n\n"),
              postCategory: "questions",
            });
            router.push("/forum");
          }}
        >
          Post to Forum
        </button>
      </div>
      {out ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <p className="font-mono text-sm text-slate-900">{out}</p>
          <button
            type="button"
            className="text-xs font-semibold text-brand-700 hover:underline"
            onClick={() => void navigator.clipboard.writeText(out)}
          >
            Copy result
          </button>
        </div>
      ) : null}
      {error ? <p className="mt-2 text-sm text-red-700">{error}</p> : null}
      {table.length ? (
        <div className="mt-3 max-h-48 overflow-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-xs">
            <thead className="sticky top-0 bg-slate-50 font-semibold text-slate-600">
              <tr>
                <th className="px-3 py-1.5">x</th>
                <th className="px-3 py-1.5">y</th>
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
