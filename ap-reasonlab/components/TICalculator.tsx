"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { evalExpr, formatCalc, oneVarStats, type OneVarStats } from "@/lib/math-expr";

type KeyDef = { label: string; insert?: string; action?: string; secondLabel?: string; secondInsert?: string };

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

type HistoryRow = { expr: string; value: string };
type SciStyle = "auto" | "sci" | "fixed";

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

  function evaluate(sourceRaw: string) {
    let source = sourceRaw.trim();
    if (!source) throw new Error("Empty");
    source = wrapTrig(source, mode);
    source = wrapInverseTrig(source, mode);
    return evalExpr(source, { ans, mem: memory, ...vars });
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
      const nums = listText
        .split(/[,;\s]+/)
        .map((s) => s.trim())
        .filter(Boolean)
        .map(Number)
        .filter((n) => Number.isFinite(n));
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

  return (
    <div className="ti-shell ti-shell--wide">
      <div className="ti-brand-row">
        <span className="ti-brand">KE-84 Plus CE</span>
        <span className="ti-sub">AP Math / Physics · stats · polar · constants · → Graph</span>
      </div>
      <div className="ti-layout">
        <div>
          <div className="ti-screen" aria-live="polite">
            <div className="ti-screen-meta">
              <span>
                {second ? "2nd · " : ""}
                {stoTarget ? "STO · " : ""}
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
                onClick={() => {
                  if (stoTarget) {
                    const letter = chip.insert.toLowerCase();
                    if (/^[a-z]+$/.test(letter) && letter.length <= 2) {
                      // store not via const chips
                    }
                    setExpr((value) => value + chip.insert);
                    return;
                  }
                  setExpr((value) => value + chip.insert);
                }}
              >
                {chip.label}
              </button>
            ))}
            <Link href={plotHref} className="ti-preset" title="Send expression to Grapher">
              → Graph
            </Link>
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
            Examples: <code>nCr(10,3)</code>, <code>ptX(5,π/6)</code>, <code>sec(π/3)</code>,{" "}
            <code>hypot(3,4)</code>
          </p>
        </aside>
      </div>
      <p className="ti-hint">
        MODE = RAD/DEG · SCI = Auto/Sci/Fixed · 2nd = inverse / eˣ / 10ˣ / nPr · STO→ variables ·
        1-Var Stats for AP Statistics · → Graph opens KE Graph CE.
      </p>
    </div>
  );
}
