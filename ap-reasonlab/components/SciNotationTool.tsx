"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function countSigFigs(raw: string): number | null {
  const s = raw.trim().replace(/^[+-]/, "");
  if (!s || /[eE]/.test(s)) {
    const m = s.match(/^(\d*\.?\d+)[eE]/i);
    if (!m) return null;
    return countSigFigs(m[1]!);
  }
  if (s.includes(".")) {
    const digits = s.replace(".", "").replace(/^0+/, "");
    return digits.length || 0;
  }
  const trimmed = s.replace(/^0+/, "").replace(/0+$/, "");
  return trimmed.length || 0;
}

function toScientific(n: number, digits: number): string {
  if (!Number.isFinite(n)) return "—";
  return n.toExponential(Math.max(0, digits - 1));
}

function roundSig(n: number, sig: number): number {
  if (!Number.isFinite(n) || n === 0) return n;
  const d = Math.ceil(Math.log10(Math.abs(n)));
  const power = sig - d;
  const magnitude = 10 ** power;
  return Math.round(n * magnitude) / magnitude;
}

export default function SciNotationTool({
  embedded = false,
  onInsert,
}: {
  embedded?: boolean;
  onInsert?: (value: string) => void;
}) {
  const [input, setInput] = useState("0.003040");
  const [sigWanted, setSigWanted] = useState(3);
  const [a, setA] = useState("1.20e3");
  const [b, setB] = useState("4.0e-2");
  const [op, setOp] = useState<"*" | "/">("*");

  const parsed = useMemo(() => {
    const n = Number(input.trim());
    const sig = countSigFigs(input);
    return {
      n: Number.isFinite(n) ? n : null,
      sig,
      sci: Number.isFinite(n) ? toScientific(n, sigWanted) : "—",
      fixed: Number.isFinite(n) ? n.toPrecision(Math.max(1, sigWanted)) : "—",
    };
  }, [input, sigWanted]);

  const product = useMemo(() => {
    const na = Number(a);
    const nb = Number(b);
    if (!Number.isFinite(na) || !Number.isFinite(nb)) return null;
    const raw = op === "*" ? na * nb : nb === 0 ? Number.NaN : na / nb;
    const sa = countSigFigs(a) ?? sigWanted;
    const sb = countSigFigs(b) ?? sigWanted;
    const sig = Math.min(sa, sb);
    return {
      raw,
      sig,
      rounded: roundSig(raw, sig),
      sci: toScientific(roundSig(raw, sig), sig),
    };
  }, [a, b, op, sigWanted]);

  const body = (
    <>
      <div className="card grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Number</span>
          <input className="input mt-1 font-mono" value={input} onChange={(e) => setInput(e.target.value)} />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Display digits (sci / precision)</span>
          <input
            type="range"
            min={1}
            max={8}
            value={sigWanted}
            className="mt-3 w-full"
            onChange={(e) => setSigWanted(Number(e.target.value))}
          />
          <span className="text-xs text-slate-500">{sigWanted}</span>
        </label>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="card">
          <p className="text-xs font-semibold uppercase text-slate-500">Parsed value</p>
          <p className="mt-2 font-mono text-lg font-bold">{parsed.n ?? "Invalid"}</p>
        </div>
        <div className="card">
          <p className="text-xs font-semibold uppercase text-slate-500">Est. sig figs</p>
          <p className="mt-2 font-mono text-lg font-bold">{parsed.sig ?? "—"}</p>
        </div>
        <div className="card">
          <p className="text-xs font-semibold uppercase text-slate-500">Scientific</p>
          <p className="mt-2 break-all font-mono text-lg font-bold">{parsed.sci}</p>
          {onInsert && parsed.sci !== "—" ? (
            <button type="button" className="mt-2 text-xs font-semibold text-brand-700" onClick={() => onInsert(parsed.sci)}>
              Use in calc
            </button>
          ) : null}
        </div>
      </div>
      <div className="card">
        <p className="text-xs font-semibold uppercase text-slate-500">Rounded (toPrecision)</p>
        <p className="mt-2 font-mono text-lg font-bold">{parsed.fixed}</p>
      </div>

      <div className="card space-y-3">
        <p className="text-sm font-semibold text-slate-800">Multiply / divide (min sig figs)</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            A
            <input className="input mt-1 font-mono" value={a} onChange={(e) => setA(e.target.value)} />
          </label>
          <label className="block text-sm">
            Op
            <select className="input mt-1" value={op} onChange={(e) => setOp(e.target.value as "*" | "/")}>
              <option value="*">A × B</option>
              <option value="/">A ÷ B</option>
            </select>
          </label>
          <label className="block text-sm">
            B
            <input className="input mt-1 font-mono" value={b} onChange={(e) => setB(e.target.value)} />
          </label>
        </div>
        {product && Number.isFinite(product.raw) ? (
          <p className="font-mono text-sm">
            Raw = {product.raw} · sig≈{product.sig} · rounded ={" "}
            <strong>{product.sci}</strong>
          </p>
        ) : (
          <p className="text-sm text-slate-500">Enter finite A and B.</p>
        )}
      </div>
    </>
  );

  if (embedded) {
    return <div className="space-y-4">{body}</div>;
  }

  return (
    <StudyToolShell
      title="Scientific notation & sig figs"
      description="Convert numbers to scientific notation, estimate significant figures, and multiply/divide with sig-fig rounding for AP science labs."
      tip="Sig-fig counting follows common classroom rules (trailing zeros after a decimal count). Always match your teacher’s convention."
    >
      {body}
    </StudyToolShell>
  );
}
