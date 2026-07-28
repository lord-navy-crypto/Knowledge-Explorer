"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { evalExpr, formatCalc } from "@/lib/math-expr";

const KEYS: Array<{ label: string; insert?: string; action?: string }> = [
  { label: "2nd", action: "2nd" },
  { label: "MODE", action: "mode" },
  { label: "SCI", action: "sci" },
  { label: "CLR", action: "clear" },
  { label: "sin", insert: "sin(" },
  { label: "cos", insert: "cos(" },
  { label: "tan", insert: "tan(" },
  { label: "÷", insert: "/" },
  { label: "ln", insert: "ln(" },
  { label: "log", insert: "log(" },
  { label: "√", insert: "sqrt(" },
  { label: "×", insert: "*" },
  { label: "x²", action: "square" },
  { label: "1/x", action: "recip" },
  { label: "^", insert: "^" },
  { label: "−", insert: "-" },
  { label: "(", insert: "(" },
  { label: ")", insert: ")" },
  { label: "nCr", insert: "nCr(" },
  { label: "+", insert: "+" },
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
  { label: "M+", action: "mplus" },
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
];

type HistoryRow = { expr: string; value: string };
type SciStyle = "auto" | "sci" | "fixed";

function wrapTrig(source: string, mode: "RAD" | "DEG") {
  if (mode === "RAD") return source;
  return source
    .replace(/\bsin\(([^()]*)\)/g, (_, inner) => `sin((${inner})*π/180)`)
    .replace(/\bcos\(([^()]*)\)/g, (_, inner) => `cos((${inner})*π/180)`)
    .replace(/\btan\(([^()]*)\)/g, (_, inner) => `tan((${inner})*π/180)`);
}

export default function TICalculator() {
  const [expr, setExpr] = useState("");
  const [display, setDisplay] = useState("0");
  const [ans, setAns] = useState(0);
  const [memory, setMemory] = useState(0);
  const [error, setError] = useState("");
  const [second, setSecond] = useState(false);
  const [mode, setMode] = useState<"RAD" | "DEG">("RAD");
  const [sci, setSci] = useState<SciStyle>("auto");
  const [history, setHistory] = useState<HistoryRow[]>([]);

  const viz = useMemo(() => {
    const n = Number(display);
    if (!Number.isFinite(n) || display === "ERR") return null;
    const magnitude = Math.min(100, Math.abs(n) * (Math.abs(n) <= 1 ? 100 : 5));
    return { n, magnitude, positive: n >= 0 };
  }, [display]);

  const plotHref = useMemo(() => {
    const source = (expr.trim() || "sin(x)").replace(/\bans\b/gi, String(ans));
    // Only send if it looks like a function of x, else wrap as constant + 0*x
    const y1 = /\bx\b/i.test(source) ? source : `${source}+0*x`;
    return `/hints?tool=grapher&y1=${encodeURIComponent(y1)}`;
  }, [ans, expr]);

  function evaluate(sourceRaw: string) {
    let source = sourceRaw.trim();
    if (!source) throw new Error("Empty");
    if (second) {
      source = source
        .replace(/\bsin\(/g, "asin(")
        .replace(/\bcos\(/g, "acos(")
        .replace(/\btan\(/g, "atan(");
    }
    source = wrapTrig(source, mode);
    return evalExpr(source, { ans, mem: memory });
  }

  function press(key: (typeof KEYS)[number]) {
    setError("");
    if (key.action === "clear") {
      setExpr("");
      setDisplay("0");
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
      setExpr((value) => `(${value || display})^2`);
      return;
    }
    if (key.action === "recip") {
      setExpr((value) => `1/(${value || display})`);
      return;
    }
    if (key.action === "enter") {
      try {
        const source = expr.trim() || display;
        const value = evaluate(source);
        const formatted = formatCalc(value, sci);
        setAns(value);
        setDisplay(formatted);
        setHistory((prev) => [{ expr: source, value: formatted }, ...prev].slice(0, 12));
        setExpr("");
        setSecond(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
        setDisplay("ERR");
      }
      return;
    }
    if (key.insert !== undefined) {
      setExpr((value) => value + key.insert);
    }
  }

  return (
    <div className="ti-shell ti-shell--wide">
      <div className="ti-brand-row">
        <span className="ti-brand">KE-84 Plus CE</span>
        <span className="ti-sub">Computer · constants · nCr/n! · plot handoff</span>
      </div>
      <div className="ti-layout">
        <div>
          <div className="ti-screen" aria-live="polite">
            <div className="ti-screen-meta">
              <span>
                {second ? "2nd · " : ""}
                {mode} · {sci.toUpperCase()}
                {memory !== 0 ? " · M" : ""}
              </span>
              <span>ANS={formatCalc(ans, sci)}</span>
            </div>
            <div className="ti-screen-expr">{expr || " "}</div>
            <div className="ti-screen-value">{display}</div>
            {error && <p className="ti-error">{error}</p>}
            {viz && (
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
          </div>
          <div className="ti-keys">
            {KEYS.map((key) => (
              <button
                key={key.label}
                type="button"
                className={`ti-key ${key.action === "enter" ? "ti-key-enter" : ""} ${
                  key.action === "2nd" && second ? "ti-key-2nd-on" : ""
                }`}
                onClick={() => press(key)}
              >
                {key.label}
              </button>
            ))}
          </div>
        </div>
        <aside className="ti-side">
          <h3 className="ti-side-title">History</h3>
          {history.length === 0 ? (
            <p className="ti-hint">Press ENTER to log calculations.</p>
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
          <div className="ti-mem">
            <span>Memory</span>
            <strong>{formatCalc(memory, sci)}</strong>
            <button type="button" className="ti-key" onClick={() => setMemory(0)}>
              MC
            </button>
          </div>
          <p className="ti-hint">
            Examples: <code>nCr(10,3)</code>, <code>5!</code>, <code>g*2</code>,{" "}
            <code>sqrt(2)*π</code>
          </p>
        </aside>
      </div>
      <p className="ti-hint">
        MODE = RAD/DEG · SCI cycles Auto/Sci/Fixed · 2nd remaps sin/cos/tan to inverse · → Graph
        opens the function plotter.
      </p>
    </div>
  );
}
