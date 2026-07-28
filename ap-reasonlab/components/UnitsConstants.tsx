"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type UnitDef = { label: string; toBase: number };

const LENGTH: UnitDef[] = [
  { label: "m", toBase: 1 },
  { label: "cm", toBase: 0.01 },
  { label: "mm", toBase: 0.001 },
  { label: "km", toBase: 1000 },
  { label: "ft", toBase: 0.3048 },
  { label: "in", toBase: 0.0254 },
];

const MASS: UnitDef[] = [
  { label: "kg", toBase: 1 },
  { label: "g", toBase: 0.001 },
  { label: "mg", toBase: 1e-6 },
  { label: "lb", toBase: 0.45359237 },
];

const ENERGY: UnitDef[] = [
  { label: "J", toBase: 1 },
  { label: "kJ", toBase: 1000 },
  { label: "eV", toBase: 1.602176634e-19 },
  { label: "cal", toBase: 4.184 },
];

const SPEED: UnitDef[] = [
  { label: "m/s", toBase: 1 },
  { label: "km/h", toBase: 1000 / 3600 },
  { label: "mph", toBase: 0.44704 },
];

const GROUPS = [
  { id: "length", label: "Length", units: LENGTH },
  { id: "mass", label: "Mass", units: MASS },
  { id: "energy", label: "Energy", units: ENERGY },
  { id: "speed", label: "Speed", units: SPEED },
] as const;

const CONSTANTS = [
  { name: "g (Earth)", value: "9.80 m/s²" },
  { name: "c (light)", value: "2.998×10⁸ m/s" },
  { name: "h (Planck)", value: "6.626×10⁻³⁴ J·s" },
  { name: "e (elementary charge)", value: "1.602×10⁻¹⁹ C" },
  { name: "k (Boltzmann)", value: "1.381×10⁻²³ J/K" },
  { name: "N_A (Avogadro)", value: "6.022×10²³ mol⁻¹" },
  { name: "R (gas)", value: "8.314 J/(mol·K)" },
  { name: "ε₀", value: "8.854×10⁻¹² C²/(N·m²)" },
  { name: "μ₀", value: "4π×10⁻⁷ T·m/A" },
  { name: "G (gravity)", value: "6.674×10⁻¹¹ N·m²/kg²" },
];

export default function UnitsConstants() {
  const [groupId, setGroupId] = useState<(typeof GROUPS)[number]["id"]>("length");
  const group = GROUPS.find((g) => g.id === groupId) || GROUPS[0];
  const [from, setFrom] = useState(group.units[0]!.label);
  const [to, setTo] = useState(group.units[1]!.label);
  const [amount, setAmount] = useState("1");

  const converted = useMemo(() => {
    const n = Number(amount);
    if (!Number.isFinite(n)) return "—";
    const a = group.units.find((u) => u.label === from);
    const b = group.units.find((u) => u.label === to);
    if (!a || !b) return "—";
    const base = n * a.toBase;
    const out = base / b.toBase;
    if (!Number.isFinite(out)) return "—";
    return out.toPrecision(6).replace(/\.?0+$/, "");
  }, [amount, from, group.units, to]);

  return (
    <StudyToolShell
      title="Units & constants"
      description="Quick converters for AP Physics / Chemistry plus a pocket sheet of common constants."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card space-y-3">
          <label className="block text-sm font-medium">
            Quantity
            <select
              className="input mt-1"
              value={groupId}
              onChange={(e) => {
                const next = GROUPS.find((g) => g.id === e.target.value) || GROUPS[0];
                setGroupId(next.id);
                setFrom(next.units[0]!.label);
                setTo(next.units[1]!.label);
              }}
            >
              {GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </select>
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block text-sm font-medium">
              From
              <select className="input mt-1" value={from} onChange={(e) => setFrom(e.target.value)}>
                {group.units.map((u) => (
                  <option key={u.label} value={u.label}>
                    {u.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-medium">
              To
              <select className="input mt-1" value={to} onChange={(e) => setTo(e.target.value)}>
                {group.units.map((u) => (
                  <option key={u.label} value={u.label}>
                    {u.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="block text-sm font-medium">
            Value
            <input
              className="input mt-1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              inputMode="decimal"
            />
          </label>
          <p className="rounded-xl bg-brand-50 px-4 py-3 text-lg font-semibold text-brand-900">
            {converted} {to}
          </p>
        </div>

        <div className="card">
          <h2 className="font-semibold text-slate-900">Common constants</h2>
          <ul className="mt-3 divide-y divide-slate-100">
            {CONSTANTS.map((row) => (
              <li key={row.name} className="flex items-center justify-between gap-3 py-2 text-sm">
                <span className="text-slate-700">{row.name}</span>
                <span className="font-mono text-slate-900">{row.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </StudyToolShell>
  );
}
