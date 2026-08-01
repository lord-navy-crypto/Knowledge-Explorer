"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function countSigFigs(raw: string): number | null {
  const s = raw.trim().replace(/^[+-]/, "");
  if (!s || /[eE]/.test(s)) {
    const m = s.match(/^(\d*\.?\d+)[eE]/i);
    if (!m) return null;
    return countSigFigs(m[1]);
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

export default function SciNotationTool() {
  const [input, setInput] = useState("0.003040");
  const [sigWanted, setSigWanted] = useState(3);

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

  return (
    <StudyToolShell
      title="Scientific notation & sig figs"
      description="Convert numbers to scientific notation and estimate significant figures for lab and AP science work."
      tip="Sig-fig counting follows common classroom rules (trailing zeros after a decimal count). Always match your teacher’s convention."
    >
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
        </div>
      </div>
      <div className="card">
        <p className="text-xs font-semibold uppercase text-slate-500">Rounded (toPrecision)</p>
        <p className="mt-2 font-mono text-lg font-bold">{parsed.fixed}</p>
      </div>
    </StudyToolShell>
  );
}
