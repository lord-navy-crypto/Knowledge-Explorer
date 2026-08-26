"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { evalExpr, formatCalc, oneVarStats, type OneVarStats } from "@/lib/math-expr";
import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";
import {
  binomialCdf,
  binomialPmf,
  cAbs,
  cAdd,
  cArg,
  cConj,
  cDiv,
  cMul,
  cSub,
  engNotation,
  formatComplex,
  formatMatrix,
  fromBase,
  matAdd,
  matDet2,
  matDet3,
  matInv2,
  matMul,
  normalCdf,
  normalPdf,
  parseComplex,
  solveLinear2,
  solveQuadratic,
  toBase,
  twoVarStats,
  type Complex,
  type Matrix,
  type TwoVarStats,
} from "@/lib/casio-modes";

type KeyDef = { label: string; insert?: string; action?: string; secondLabel?: string; secondInsert?: string };
type CalcMode = "COMP" | "COMPLEX" | "MATRIX" | "EQN" | "STAT2" | "BASE-N" | "DIST" | "ENG";
type HistoryRow = { expr: string; value: string };
type SciStyle = "auto" | "sci" | "fixed";

const CALC_MODES: CalcMode[] = [
  "COMP",
  "COMPLEX",
  "MATRIX",
  "EQN",
  "STAT2",
  "BASE-N",
  "DIST",
  "ENG",
];

const KEYS: KeyDef[] = [
  { label: "2nd", action: "2nd" },
  { label: "MODE", action: "mode" },
  { label: "SCI", action: "sci" },
  { label: "CLR", action: "clear" },
  { label: "sin", insert: "sin(", secondLabel: "asin", secondInsert: "asin(" },
  { label: "cos", insert: "cos(", secondLabel: "acos", secondInsert: "acos(" },
  { label: "tan", insert: "tan(", secondLabel: "atan", secondInsert: "atan(" },
  { label: "÷", insert: "/" },
  { label: "ln", insert: "ln(", secondLabel: "eˣ", secondInsert: "exp(" },
  { label: "log", insert: "log(", secondLabel: "10ˣ", secondInsert: "10^(" },
  { label: "√", insert: "sqrt(", secondLabel: "∛", secondInsert: "cbrt(" },
  { label: "×", insert: "*" },
  { label: "x²", action: "square", secondLabel: "x³", secondInsert: "^3" },
  { label: "1/x", action: "recip" },
  { label: "^", insert: "^", secondLabel: "ˣ√", secondInsert: "root(" },
  { label: "−", insert: "-" },
  { label: "(", insert: "(" },
  { label: ")", insert: ")" },
  { label: "nCr", insert: "nCr(", secondLabel: "nPr", secondInsert: "nPr(" },
  { label: "+", insert: "+" },
  { label: "abs", insert: "abs(", secondLabel: "|int|", secondInsert: "int(" },
  { label: "π", insert: "π", secondLabel: "e", secondInsert: "e" },
  { label: "%", action: "percent" },
  { label: "±", action: "neg" },
  { label: "7", insert: "7" },
  { label: "8", insert: "8" },
  { label: "9", insert: "9" },
  { label: "ANS", action: "ans" },
  { label: "4", insert: "4" },
  { label: "5", insert: "5" },
  { label: "6", insert: "6" },
  { label: "DEL", action: "del" },
  { label: "1", insert: "1" },
  { label: "2", insert: "2" },
  { label: "3", insert: "3" },
  { label: "STO→", action: "sto" },
  { label: "0", insert: "0" },
  { label: ".", insert: "." },
  { label: "!", insert: "!" },
  { label: "ENTER", action: "enter" },
];

const CONST_CHIPS = [
  { label: "π", insert: "π" },
  { label: "e", insert: "e" },
  { label: "g", insert: "g" },
  { label: "c", insert: "c" },
  { label: "h", insert: "h" },
  { label: "k", insert: "k" },
  { label: "N_A", insert: "Na" },
  { label: "R", insert: "R" },
  { label: "ε₀", insert: "eps0" },
  { label: "μ₀", insert: "mu0" },
  { label: "G", insert: "gconst" },
  { label: "e⁻", insert: "qe" },
  { label: "mₑ", insert: "me" },
  { label: "mₚ", insert: "mp" },
];

const AP_SNIPPETS = [
  { label: "nCr", insert: "nCr(10,3)" },
  { label: "nPr", insert: "nPr(10,3)" },
  { label: "hyp", insert: "hypot(3,4)" },
  { label: "P→R", insert: "ptX(5,π/6)" },
  { label: "R→θ", insert: "rtTh(3,4)" },
  { label: "logb", insert: "logb(8,2)" },
  { label: "sec", insert: "sec(π/3)" },
  { label: "sinh", insert: "sinh(1)" },
];

function wrapTrig(source: string, mode: "RAD" | "DEG") {
  if (mode === "RAD") return source;
  return source
    .replace(/\bsin\(([^()]*)\)/g, (_, inner) => `sin((${inner})*π/180)`)
    .replace(/\bcos\(([^()]*)\)/g, (_, inner) => `cos((${inner})*π/180)`)
    .replace(/\btan\(([^()]*)\)/g, (_, inner) => `tan((${inner})*π/180)`)
    .replace(/\bsec\(([^()]*)\)/g, (_, inner) => `sec((${inner})*π/180)`)
    .replace(/\bcsc\(([^()]*)\)/g, (_, inner) => `csc((${inner})*π/180)`)
    .replace(/\bcot\(([^()]*)\)/g, (_, inner) => `cot((${inner})*π/180)`);
}

function wrapInverseTrig(source: string, mode: "RAD" | "DEG") {
  if (mode === "RAD") return source;
  return source
    .replace(/\basin\(([^()]*)\)/g, (_, inner) => `deg(asin(${inner}))`)
    .replace(/\bacos\(([^()]*)\)/g, (_, inner) => `deg(acos(${inner}))`)
    .replace(/\batan\(([^()]*)\)/g, (_, inner) => `deg(atan(${inner}))`);
}

function emptyMat(n: 2 | 3): Matrix {
  return Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
}

function parseList(text: string): number[] {
  return text
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter((n) => Number.isFinite(n));
}

function storeAnsNumber(
  value: number,
  setAns: (n: number) => void,
  setDisplay: (s: string) => void,
  sci: SciStyle
) {
  setAns(value);
  setDisplay(formatCalc(value, sci));
}

function MatEditor({
  label,
  mat,
  size,
  which,
  onChange,
}: {
  label: string;
  mat: Matrix;
  size: 2 | 3;
  which: "A" | "B";
  onChange: (which: "A" | "B", r: number, c: number, raw: string) => void;
}) {
  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div className="ti-side-title" style={{ marginBottom: "0.3rem" }}>
        {label}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))`,
          gap: "0.3rem",
        }}
      >
        {mat.slice(0, size).map((row, r) =>
          row.slice(0, size).map((v, c) => (
            <input
              key={`${which}-${r}-${c}`}
              className="ti-input"
              type="number"
              value={v}
              onChange={(e) => onChange(which, r, c, e.target.value)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function TICalculator() {
  const [expr, setExpr] = useState("");
  const [display, setDisplay] = useState("0");
  const [ans, setAns] = useState(0);
  const [memory, setMemory] = useState(0);
  const [vars, setVars] = useState<Record<string, number>>({ a: 0, b: 0, c: 0, x: 0, y: 0 });
  const [stoTarget, setStoTarget] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [second, setSecond] = useState(false);
  const [mode, setMode] = useState<"RAD" | "DEG">("RAD");
  const [sci, setSci] = useState<SciStyle>("auto");
  const [history, setHistory] = useState<HistoryRow[]>([]);
  const [listText, setListText] = useState("2, 4, 4, 5, 7, 9");
  const [stats, setStats] = useState<OneVarStats | null>(null);
  const [panel, setPanel] = useState<"hist" | "stats" | "vars">("hist");
  const [calcMode, setCalcMode] = useState<CalcMode>("COMP");

  // COMPLEX
  const [cA, setCA] = useState("3+4i");
  const [cB, setCB] = useState("1-2i");
  const [cResult, setCResult] = useState("");

  // MATRIX
  const [matSize, setMatSize] = useState<2 | 3>(2);
  const [matA, setMatA] = useState<Matrix>(() => [
    [1, 2],
    [3, 4],
  ]);
  const [matB, setMatB] = useState<Matrix>(() => [
    [5, 6],
    [7, 8],
  ]);
  const [matOut, setMatOut] = useState("");

  // EQN
  const [eqKind, setEqKind] = useState<"lin2" | "quad">("lin2");
  const [lin, setLin] = useState({ a1: 2, b1: 1, c1: 5, a2: 1, b2: -1, c2: 1 });
  const [quad, setQuad] = useState({ a: 1, b: -3, c: 2 });
  const [eqOut, setEqOut] = useState("");

  // STAT2
  const [l1Text, setL1Text] = useState("1, 2, 3, 4, 5");
  const [l2Text, setL2Text] = useState("2, 3, 5, 7, 11");
  const [stat2, setStat2] = useState<TwoVarStats | null>(null);

  // BASE-N
  const [baseRaw, setBaseRaw] = useState("255");
  const [baseFrom, setBaseFrom] = useState<2 | 8 | 10 | 16>(10);
  const [baseOut, setBaseOut] = useState("");

  // DIST
  const [distKind, setDistKind] = useState<"norm" | "bin">("norm");
  const [normMu, setNormMu] = useState(0);
  const [normSigma, setNormSigma] = useState(1);
  const [normX, setNormX] = useState(1.96);
  const [binN, setBinN] = useState(10);
  const [binK, setBinK] = useState(3);
  const [binP, setBinP] = useState(0.5);
  const [distOut, setDistOut] = useState("");

  // ENG
  const [engOut, setEngOut] = useState("");

  const viz = useMemo(() => {
    const n = Number(display);
    if (!Number.isFinite(n) || display === "ERR") return null;
    const magnitude = Math.min(100, Math.abs(n) * (Math.abs(n) <= 1 ? 100 : 5));
    return { n, magnitude, positive: n >= 0 };
  }, [display]);

  const plotHref = useMemo(() => {
    const source = (expr.trim() || "sin(x)").replace(/\bans\b/gi, String(ans));
    const y1 = /\bx\b/i.test(source) ? source : `${source}+0*x`;
    return `/hints?tool=grapher&y1=${encodeURIComponent(y1)}`;
  }, [ans, expr]);

  function askAiAboutCalc() {
    const expression = (expr.trim() || display).replace(/\bans\b/gi, String(ans));
    const ansText = formatCalc(ans, sci);
    const looksFormula = /\bx\b/i.test(expression) || /[a-z]/i.test(expression);
    openToolboxWithPrefill({
      category: "ap",
      apTask: looksFormula ? "formula-derive" : "advice",
      prompt: [
        "Help with this calculator expression.",
        `Expression: ${expression}`,
        `ANS (last answer): ${ansText}`,
        `Display: ${display}`,
        looksFormula
          ? "Derive / explain the related formula and how to evaluate or simplify it."
          : "Explain the result and suggest a careful next step.",
      ].join("\n"),
    });
  }

  function evaluate(sourceRaw: string) {
    let source = sourceRaw.trim();
    if (!source) throw new Error("Empty");
    source = wrapTrig(source, mode);
    source = wrapInverseTrig(source, mode);
    return evalExpr(source, { ans, mem: memory, ...vars });
  }

  function pushHistory(label: string, value: string) {
    setHistory((prev) => [{ expr: label, value }, ...prev].slice(0, 16));
  }

  function press(key: KeyDef) {
    setError("");
    if (stoTarget) {
      const letter = key.insert?.toLowerCase();
      if (letter && /^[a-z]$/.test(letter)) {
        try {
          const value = evaluate(expr.trim() || display);
          setVars((prev) => ({ ...prev, [letter]: value }));
          setDisplay(formatCalc(value, sci));
          setStoTarget(null);
          setSecond(false);
        } catch (err) {
          setError(err instanceof Error ? err.message : "Error");
          setStoTarget(null);
        }
        return;
      }
      if (key.action === "clear" || key.action === "del") {
        setStoTarget(null);
        return;
      }
    }

    if (key.action === "clear") {
      setExpr("");
      setDisplay("0");
      setStoTarget(null);
      return;
    }
    if (key.action === "del") {
      setExpr((value) => value.slice(0, -1));
      return;
    }
    if (key.action === "ans") {
      setExpr((value) => value + String(ans));
      return;
    }
    if (key.action === "2nd") {
      setSecond((value) => !value);
      return;
    }
    if (key.action === "mode") {
      setMode((value) => (value === "RAD" ? "DEG" : "RAD"));
      return;
    }
    if (key.action === "sci") {
      setSci((value) => (value === "auto" ? "sci" : value === "sci" ? "fixed" : "auto"));
      return;
    }
    if (key.action === "sto") {
      setStoTarget("pick");
      setError("STO → press A–C / X / Y (use letter keys via chips or type a,b,c,x,y)");
      return;
    }
    if (key.action === "mplus") {
      try {
        const value = evaluate(expr.trim() || display);
        setMemory((prev) => prev + value);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      }
      return;
    }
    if (key.action === "square") {
      if (second) {
        setExpr((value) => `(${value || display})^3`);
        setSecond(false);
      } else {
        setExpr((value) => `(${value || display})^2`);
      }
      return;
    }
    if (key.action === "recip") {
      setExpr((value) => `1/(${value || display})`);
      return;
    }
    if (key.action === "percent") {
      setExpr((value) => `percent(${value || display})`);
      return;
    }
    if (key.action === "neg") {
      setExpr((value) => `-(${value || display})`);
      return;
    }
    if (key.action === "enter") {
      try {
        const source = expr.trim() || display;
        const value = evaluate(source);
        const formatted = formatCalc(value, sci);
        setAns(value);
        setDisplay(formatted);
        setHistory((prev) => [{ expr: source, value: formatted }, ...prev].slice(0, 16));
        setExpr("");
        setSecond(false);
        setStoTarget(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
        setDisplay("ERR");
      }
      return;
    }
    if (second && key.secondInsert !== undefined) {
      setExpr((value) => value + key.secondInsert);
      setSecond(false);
      return;
    }
    if (key.insert !== undefined) {
      setExpr((value) => value + key.insert);
    }
  }

  function runStats() {
    try {
      const nums = parseList(listText);
      const result = oneVarStats(nums);
      setStats(result);
      setAns(result.mean);
      setDisplay(formatCalc(result.mean, sci));
      setPanel("stats");
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Stats error");
      setStats(null);
    }
  }

  function runComplex(op: "add" | "sub" | "mul" | "div" | "abs" | "arg" | "conj") {
    try {
      const a = parseComplex(cA);
      const b = parseComplex(cB);
      let z: Complex | null = null;
      let scalar: number | null = null;
      if (op === "add") z = cAdd(a, b);
      else if (op === "sub") z = cSub(a, b);
      else if (op === "mul") z = cMul(a, b);
      else if (op === "div") z = cDiv(a, b);
      else if (op === "abs") scalar = cAbs(a);
      else if (op === "arg") scalar = cArg(a);
      else if (op === "conj") z = cConj(a);

      if (scalar !== null) {
        const formatted = formatCalc(scalar, sci);
        setCResult(formatted);
        storeAnsNumber(scalar, setAns, setDisplay, sci);
        pushHistory(`COMPLEX ${op}`, formatted);
      } else if (z) {
        const formatted = formatComplex(z);
        setCResult(formatted);
        setAns(z.re);
        setDisplay(formatted);
        pushHistory(`COMPLEX ${op}`, formatted);
      }
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Complex error");
      setCResult("ERR");
    }
  }

  function updateMatCell(which: "A" | "B", r: number, c: number, raw: string) {
    const n = Number(raw);
    const setter = which === "A" ? setMatA : setMatB;
    setter((prev) => {
      const next = prev.map((row) => [...row]);
      if (!next[r]) return prev;
      next[r]![c] = Number.isFinite(n) ? n : 0;
      return next;
    });
  }

  function resizeMats(n: 2 | 3) {
    setMatSize(n);
    setMatA((prev) => {
      const m = emptyMat(n);
      for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) m[i]![j] = prev[i]?.[j] ?? (i === j ? 1 : 0);
      }
      return m;
    });
    setMatB((prev) => {
      const m = emptyMat(n);
      for (let i = 0; i < n; i += 1) {
        for (let j = 0; j < n; j += 1) m[i]![j] = prev[i]?.[j] ?? 0;
      }
      return m;
    });
  }

  function runMatrix(op: "det" | "inv" | "add" | "mul") {
    try {
      let out = "";
      if (op === "det") {
        const d = matSize === 2 ? matDet2(matA) : matDet3(matA);
        out = formatCalc(d, sci);
        storeAnsNumber(d, setAns, setDisplay, sci);
      } else if (op === "inv") {
        if (matSize !== 2) throw new Error("Inv needs 2×2");
        const inv = matInv2(matA);
        out = formatMatrix(inv);
        setAns(inv[0]![0]!);
        setDisplay(out.replace(/\n/g, " | "));
      } else if (op === "add") {
        const m = matAdd(matA, matB);
        out = formatMatrix(m);
        setAns(m[0]![0]!);
        setDisplay(out.replace(/\n/g, " | "));
      } else {
        const m = matMul(matA, matB);
        out = formatMatrix(m);
        setAns(m[0]![0]!);
        setDisplay(out.replace(/\n/g, " | "));
      }
      setMatOut(out);
      pushHistory(`MATRIX ${op}`, out.replace(/\n/g, " ; "));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Matrix error");
      setMatOut("ERR");
    }
  }

  function runEqn() {
    try {
      if (eqKind === "lin2") {
        const { x, y } = solveLinear2(lin.a1, lin.b1, lin.c1, lin.a2, lin.b2, lin.c2);
        const out = `x=${formatCalc(x, sci)}, y=${formatCalc(y, sci)}`;
        setEqOut(out);
        storeAnsNumber(x, setAns, setDisplay, sci);
        pushHistory("EQN 2×2", out);
      } else {
        const { x1, x2 } = solveQuadratic(quad.a, quad.b, quad.c);
        const out = `x₁=${formatComplex(x1)}, x₂=${formatComplex(x2)}`;
        setEqOut(out);
        setAns(x1.re);
        setDisplay(out);
        pushHistory("EQN quadratic", out);
      }
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "EQN error");
      setEqOut("ERR");
    }
  }

  function runStat2() {
    try {
      const xs = parseList(l1Text);
      const ys = parseList(l2Text);
      const result = twoVarStats(xs, ys);
      setStat2(result);
      storeAnsNumber(result.r, setAns, setDisplay, sci);
      pushHistory("STAT2 r", formatCalc(result.r, sci));
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "STAT2 error");
      setStat2(null);
    }
  }

  function runBaseN() {
    try {
      const n = fromBase(baseRaw, baseFrom);
      const lines = ([10, 16, 2, 8] as const).map((b) => `${b === 10 ? "DEC" : b === 16 ? "HEX" : b === 2 ? "BIN" : "OCT"}: ${toBase(n, b)}`);
      const out = lines.join("\n");
      setBaseOut(out);
      storeAnsNumber(n, setAns, setDisplay, sci);
      pushHistory("BASE-N", `DEC ${n}`);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "BASE-N error");
      setBaseOut("ERR");
    }
  }

  function runDist(kind: "pdf" | "cdf") {
    try {
      let value = 0;
      let label = "";
      if (distKind === "norm") {
        value = kind === "pdf" ? normalPdf(normX, normMu, normSigma) : normalCdf(normX, normMu, normSigma);
        label = `Normal ${kind.toUpperCase()}`;
      } else {
        value = kind === "pdf" ? binomialPmf(binN, binK, binP) : binomialCdf(binN, binK, binP);
        label = `Binomial ${kind.toUpperCase()}`;
      }
      const formatted = formatCalc(value, sci);
      setDistOut(`${label} = ${formatted}`);
      storeAnsNumber(value, setAns, setDisplay, sci);
      pushHistory(label, formatted);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "DIST error");
      setDistOut("ERR");
    }
  }

  function runEng() {
    try {
      let n = ans;
      if (expr.trim()) n = evaluate(expr.trim());
      else if (display !== "ERR" && Number.isFinite(Number(display))) n = Number(display);
      const out = engNotation(n);
      setEngOut(out);
      setAns(n);
      setDisplay(out);
      pushHistory("ENG", out);
      setError("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "ENG error");
      setEngOut("ERR");
    }
  }

  return (
    <div className="ti-shell ti-shell--wide">
      <div className="ti-brand-row">
        <span className="ti-brand">KE ClassWiz CE</span>
        <span className="ti-sub">
          ClassWiz-class · AP STEM · COMP/COMPLEX/MATRIX/EQN/STAT/BASE/DIST
        </span>
      </div>

      <div className="ti-presets" style={{ marginBottom: "0.55rem" }}>
        {CALC_MODES.map((id) => (
          <button
            key={id}
            type="button"
            className={`ti-preset ${calcMode === id ? "ti-key-2nd-on" : ""}`}
            onClick={() => {
              setCalcMode(id);
              setError("");
              if (id === "ENG") runEng();
            }}
          >
            {id}
          </button>
        ))}
      </div>

      <div className="ti-layout">
        <div>
          <div className="ti-screen" aria-live="polite">
            <div className="ti-screen-meta">
              <span>
                {calcMode} · {second ? "2nd · " : ""}
                {stoTarget ? "STO · " : ""}
                {mode} · {sci.toUpperCase()}
                {memory !== 0 ? " · M" : ""}
              </span>
              <span>ANS={formatCalc(ans, sci)}</span>
            </div>
            <div className="ti-screen-expr">{expr || " "}</div>
            <div className="ti-screen-value">{display}</div>
            {error && <p className="ti-error">{error}</p>}
            {viz && calcMode === "COMP" && (
              <div className="ti-viz" aria-hidden>
                <div className="ti-viz-label">|value| bar</div>
                <div className="ti-viz-track">
                  <div
                    className={`ti-viz-fill ${viz.positive ? "is-pos" : "is-neg"}`}
                    style={{ width: `${viz.magnitude}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {calcMode === "COMP" && (
            <>
              <div className="ti-presets" style={{ marginBottom: "0.5rem" }}>
                {CONST_CHIPS.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    className="ti-preset"
                    onClick={() => setExpr((value) => value + chip.insert)}
                  >
                    {chip.label}
                  </button>
                ))}
                <Link href={plotHref} className="ti-preset" title="Send expression to Grapher">
                  → Graph
                </Link>
                <button
                  type="button"
                  className="ti-preset"
                  title="Open AI Toolbox with this expression"
                  onClick={askAiAboutCalc}
                >
                  Ask AI
                </button>
              </div>

              <div className="ti-presets" style={{ marginBottom: "0.5rem" }}>
                {AP_SNIPPETS.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    className="ti-preset"
                    onClick={() => setExpr(chip.insert)}
                  >
                    {chip.label}
                  </button>
                ))}
                {(["a", "b", "c", "x", "y"] as const).map((letter) => (
                  <button
                    key={letter}
                    type="button"
                    className="ti-preset"
                    title={`Insert ${letter} (value ${formatCalc(vars[letter] ?? 0, sci)})`}
                    onClick={() => {
                      if (stoTarget) {
                        try {
                          const value = evaluate(expr.trim() || display);
                          setVars((prev) => ({ ...prev, [letter]: value }));
                          setDisplay(formatCalc(value, sci));
                          setStoTarget(null);
                          setError("");
                        } catch (err) {
                          setError(err instanceof Error ? err.message : "Error");
                          setStoTarget(null);
                        }
                        return;
                      }
                      setExpr((value) => value + letter);
                    }}
                  >
                    {letter.toUpperCase()}={formatCalc(vars[letter] ?? 0, "auto")}
                  </button>
                ))}
              </div>

              <div className="ti-keys">
                {KEYS.map((key) => (
                  <button
                    key={key.label}
                    type="button"
                    className={`ti-key ${key.action === "enter" ? "ti-key-enter" : ""} ${
                      key.action === "2nd" && second ? "ti-key-2nd-on" : ""
                    } ${key.action === "sto" && stoTarget ? "ti-key-2nd-on" : ""}`}
                    onClick={() => press(key)}
                  >
                    {second && key.secondLabel ? key.secondLabel : key.label}
                  </button>
                ))}
              </div>
            </>
          )}

          {calcMode === "COMPLEX" && (
            <div className="ti-graph-controls">
              <label className="ti-field">
                A (a+bi)
                <input className="ti-input" value={cA} onChange={(e) => setCA(e.target.value)} spellCheck={false} />
              </label>
              <label className="ti-field">
                B (a+bi)
                <input className="ti-input" value={cB} onChange={(e) => setCB(e.target.value)} spellCheck={false} />
              </label>
              <div className="ti-graph-actions">
                {(
                  [
                    ["add", "A+B"],
                    ["sub", "A−B"],
                    ["mul", "A×B"],
                    ["div", "A÷B"],
                    ["abs", "|A|"],
                    ["arg", "arg(A)"],
                    ["conj", "conj(A)"],
                  ] as const
                ).map(([op, label]) => (
                  <button key={op} type="button" className="ti-key" onClick={() => runComplex(op)}>
                    {label}
                  </button>
                ))}
              </div>
              {cResult && <p className="ti-trace-readout">Result → ANS: {cResult}</p>}
            </div>
          )}

          {calcMode === "MATRIX" && (
            <div className="ti-graph-controls">
              <div className="ti-presets">
                <button
                  type="button"
                  className={`ti-preset ${matSize === 2 ? "ti-key-2nd-on" : ""}`}
                  onClick={() => resizeMats(2)}
                >
                  2×2
                </button>
                <button
                  type="button"
                  className={`ti-preset ${matSize === 3 ? "ti-key-2nd-on" : ""}`}
                  onClick={() => resizeMats(3)}
                >
                  3×3
                </button>
              </div>
              <MatEditor label="MatA" mat={matA} size={matSize} which="A" onChange={updateMatCell} />
              <MatEditor label="MatB" mat={matB} size={matSize} which="B" onChange={updateMatCell} />
              <div className="ti-graph-actions">
                <button type="button" className="ti-key" onClick={() => runMatrix("det")}>
                  det(A)
                </button>
                <button type="button" className="ti-key" onClick={() => runMatrix("inv")}>
                  inv(A) 2×2
                </button>
                <button type="button" className="ti-key" onClick={() => runMatrix("add")}>
                  A+B
                </button>
                <button type="button" className="ti-key" onClick={() => runMatrix("mul")}>
                  A×B
                </button>
              </div>
              {matOut && (
                <pre className="ti-hint" style={{ whiteSpace: "pre-wrap", color: "#e2e8f0" }}>
                  {matOut}
                </pre>
              )}
            </div>
          )}

          {calcMode === "EQN" && (
            <div className="ti-graph-controls">
              <div className="ti-presets">
                <button
                  type="button"
                  className={`ti-preset ${eqKind === "lin2" ? "ti-key-2nd-on" : ""}`}
                  onClick={() => setEqKind("lin2")}
                >
                  Simultaneous 2×2
                </button>
                <button
                  type="button"
                  className={`ti-preset ${eqKind === "quad" ? "ti-key-2nd-on" : ""}`}
                  onClick={() => setEqKind("quad")}
                >
                  Quadratic
                </button>
              </div>
              {eqKind === "lin2" ? (
                <div className="ti-range-grid">
                  {(
                    [
                      ["a1", "a₁"],
                      ["b1", "b₁"],
                      ["c1", "c₁"],
                      ["a2", "a₂"],
                      ["b2", "b₂"],
                      ["c2", "c₂"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key} className="ti-field">
                      {label}
                      <input
                        className="ti-input"
                        type="number"
                        value={lin[key]}
                        onChange={(e) => setLin((prev) => ({ ...prev, [key]: Number(e.target.value) }))}
                      />
                    </label>
                  ))}
                </div>
              ) : (
                <div className="ti-range-grid">
                  {(
                    [
                      ["a", "a"],
                      ["b", "b"],
                      ["c", "c"],
                    ] as const
                  ).map(([key, label]) => (
                    <label key={key} className="ti-field">
                      {label}
                      <input
                        className="ti-input"
                        type="number"
                        value={quad[key]}
                        onChange={(e) => setQuad((prev) => ({ ...prev, [key]: Number(e.target.value) }))}
                      />
                    </label>
                  ))}
                </div>
              )}
              <p className="ti-hint">
                {eqKind === "lin2" ? "a₁x + b₁y = c₁ · a₂x + b₂y = c₂" : "ax² + bx + c = 0 (complex roots OK)"}
              </p>
              <button type="button" className="ti-key" onClick={runEqn}>
                Solve
              </button>
              {eqOut && <p className="ti-trace-readout">{eqOut}</p>}
            </div>
          )}

          {calcMode === "STAT2" && (
            <div className="ti-graph-controls">
              <label className="ti-field">
                L1 (x)
                <textarea
                  className="ti-input"
                  rows={2}
                  value={l1Text}
                  onChange={(e) => setL1Text(e.target.value)}
                  spellCheck={false}
                />
              </label>
              <label className="ti-field">
                L2 (y)
                <textarea
                  className="ti-input"
                  rows={2}
                  value={l2Text}
                  onChange={(e) => setL2Text(e.target.value)}
                  spellCheck={false}
                />
              </label>
              <button type="button" className="ti-key" onClick={runStat2}>
                Calc 2-Var Stats
              </button>
              {stat2 && (
                <ul className="ti-history" style={{ marginTop: "0.4rem" }}>
                  {(
                    [
                      ["n", stat2.n],
                      ["x̄", stat2.meanX],
                      ["ȳ", stat2.meanY],
                      ["Sx", stat2.sx],
                      ["Sy", stat2.sy],
                      ["r", stat2.r],
                      ["a (y=a+bx)", stat2.a],
                      ["b", stat2.b],
                    ] as const
                  ).map(([k, v]) => (
                    <li key={k}>
                      <button
                        type="button"
                        className="ti-history-row"
                        onClick={() => storeAnsNumber(v, setAns, setDisplay, sci)}
                      >
                        <span>{k}</span>
                        <strong>{formatCalc(v, sci)}</strong>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {calcMode === "BASE-N" && (
            <div className="ti-graph-controls">
              <label className="ti-field">
                Integer
                <input className="ti-input" value={baseRaw} onChange={(e) => setBaseRaw(e.target.value)} spellCheck={false} />
              </label>
              <div className="ti-presets">
                {(
                  [
                    [10, "DEC"],
                    [16, "HEX"],
                    [2, "BIN"],
                    [8, "OCT"],
                  ] as const
                ).map(([b, label]) => (
                  <button
                    key={b}
                    type="button"
                    className={`ti-preset ${baseFrom === b ? "ti-key-2nd-on" : ""}`}
                    onClick={() => setBaseFrom(b)}
                  >
                    From {label}
                  </button>
                ))}
              </div>
              <button type="button" className="ti-key" onClick={runBaseN}>
                Convert all bases
              </button>
              {baseOut && (
                <pre className="ti-hint" style={{ whiteSpace: "pre-wrap", color: "#e2e8f0" }}>
                  {baseOut}
                </pre>
              )}
            </div>
          )}

          {calcMode === "DIST" && (
            <div className="ti-graph-controls">
              <div className="ti-presets">
                <button
                  type="button"
                  className={`ti-preset ${distKind === "norm" ? "ti-key-2nd-on" : ""}`}
                  onClick={() => setDistKind("norm")}
                >
                  Normal
                </button>
                <button
                  type="button"
                  className={`ti-preset ${distKind === "bin" ? "ti-key-2nd-on" : ""}`}
                  onClick={() => setDistKind("bin")}
                >
                  Binomial
                </button>
              </div>
              {distKind === "norm" ? (
                <div className="ti-range-grid">
                  <label className="ti-field">
                    μ
                    <input className="ti-input" type="number" value={normMu} onChange={(e) => setNormMu(Number(e.target.value))} />
                  </label>
                  <label className="ti-field">
                    σ
                    <input className="ti-input" type="number" value={normSigma} onChange={(e) => setNormSigma(Number(e.target.value))} />
                  </label>
                  <label className="ti-field">
                    x
                    <input className="ti-input" type="number" value={normX} onChange={(e) => setNormX(Number(e.target.value))} />
                  </label>
                </div>
              ) : (
                <div className="ti-range-grid">
                  <label className="ti-field">
                    n
                    <input className="ti-input" type="number" value={binN} onChange={(e) => setBinN(Number(e.target.value))} />
                  </label>
                  <label className="ti-field">
                    k
                    <input className="ti-input" type="number" value={binK} onChange={(e) => setBinK(Number(e.target.value))} />
                  </label>
                  <label className="ti-field">
                    p
                    <input className="ti-input" type="number" step="0.01" value={binP} onChange={(e) => setBinP(Number(e.target.value))} />
                  </label>
                </div>
              )}
              <div className="ti-graph-actions">
                <button type="button" className="ti-key" onClick={() => runDist("pdf")}>
                  PDF / PMF
                </button>
                <button type="button" className="ti-key" onClick={() => runDist("cdf")}>
                  CDF
                </button>
              </div>
              {distOut && <p className="ti-trace-readout">{distOut}</p>}
            </div>
          )}

          {calcMode === "ENG" && (
            <div className="ti-graph-controls">
              <p className="ti-hint">Engineering notation of ANS or current expression (×10^(3k)).</p>
              <label className="ti-field">
                Optional expression
                <input
                  className="ti-input"
                  value={expr}
                  onChange={(e) => setExpr(e.target.value)}
                  spellCheck={false}
                  placeholder="leave blank to use ANS"
                />
              </label>
              <button type="button" className="ti-key" onClick={runEng}>
                → ENG
              </button>
              {engOut && <p className="ti-trace-readout">{engOut}</p>}
            </div>
          )}
        </div>

        <aside className="ti-side">
          <div className="ti-presets" style={{ marginBottom: "0.5rem" }}>
            {(
              [
                ["hist", "History"],
                ["stats", "1-Var Stats"],
                ["vars", "Memory"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`ti-preset ${panel === id ? "ti-key-2nd-on" : ""}`}
                onClick={() => setPanel(id)}
              >
                {label}
              </button>
            ))}
          </div>

          {panel === "hist" && (
            <>
              <h3 className="ti-side-title">History</h3>
              {history.length === 0 ? (
                <p className="ti-hint">Press ENTER or run a mode op to log.</p>
              ) : (
                <ul className="ti-history">
                  {history.map((row, index) => (
                    <li key={`${row.expr}-${index}`}>
                      <button
                        type="button"
                        className="ti-history-row"
                        onClick={() => setExpr(row.expr)}
                        title="Reuse expression"
                      >
                        <span>{row.expr}</span>
                        <strong>{row.value}</strong>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}

          {panel === "stats" && (
            <>
              <h3 className="ti-side-title">1-Var Stats (L1)</h3>
              <label className="ti-field">
                List (comma-separated)
                <textarea
                  className="ti-input"
                  rows={3}
                  value={listText}
                  onChange={(e) => setListText(e.target.value)}
                  spellCheck={false}
                />
              </label>
              <button type="button" className="ti-key" style={{ marginTop: "0.4rem" }} onClick={runStats}>
                Calc 1-Var Stats
              </button>
              {stats ? (
                <ul className="ti-history" style={{ marginTop: "0.6rem" }}>
                  {(
                    [
                      ["n", stats.n],
                      ["x̄", stats.mean],
                      ["Σx", stats.sum],
                      ["Σx²", stats.sumSq],
                      ["Sx", stats.sx],
                      ["σx", stats.sigma],
                      ["min", stats.min],
                      ["Q1", stats.q1],
                      ["med", stats.median],
                      ["Q3", stats.q3],
                      ["max", stats.max],
                    ] as const
                  ).map(([k, v]) => (
                    <li key={k}>
                      <button
                        type="button"
                        className="ti-history-row"
                        onClick={() => {
                          setAns(v);
                          setDisplay(formatCalc(v, sci));
                        }}
                      >
                        <span>{k}</span>
                        <strong>{formatCalc(v, sci)}</strong>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="ti-hint">AP Statistics: mean, Sx, σx, five-number summary.</p>
              )}
            </>
          )}

          {panel === "vars" && (
            <>
              <h3 className="ti-side-title">Memory & STO</h3>
              <div className="ti-mem">
                <span>Memory (M)</span>
                <strong>{formatCalc(memory, sci)}</strong>
                <button type="button" className="ti-key" onClick={() => setMemory(0)}>
                  MC
                </button>
                <button
                  type="button"
                  className="ti-key"
                  onClick={() => {
                    try {
                      setMemory(evaluate(expr.trim() || display));
                    } catch (err) {
                      setError(err instanceof Error ? err.message : "Error");
                    }
                  }}
                >
                  M←
                </button>
              </div>
              <ul className="ti-history">
                {Object.entries(vars).map(([k, v]) => (
                  <li key={k}>
                    <button
                      type="button"
                      className="ti-history-row"
                      onClick={() => setExpr((prev) => prev + k)}
                    >
                      <span>{k.toUpperCase()}</span>
                      <strong>{formatCalc(v, sci)}</strong>
                    </button>
                  </li>
                ))}
              </ul>
              <p className="ti-hint">STO→ then tap A/B/C/X/Y to store the current value.</p>
            </>
          )}

          <p className="ti-hint">
            Modes: COMPLEX · MATRIX · EQN · STAT2 · BASE-N · DIST · ENG. COMP keeps the classic
            keypad.
          </p>
        </aside>
      </div>
      <p className="ti-hint">
        MODE strip = ClassWiz panels · keypad MODE = RAD/DEG · SCI = Auto/Sci/Fixed · STO→ variables ·
        1-Var Stats · → Graph opens KE Graph CE.
      </p>
    </div>
  );
}
