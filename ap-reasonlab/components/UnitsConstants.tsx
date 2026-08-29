"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import MathDeskBanner from "@/components/MathDeskBanner";

type UnitDef = { label: string; toBase: number };

const LENGTH: UnitDef[] = [
  { label: "m", toBase: 1 },
  { label: "cm", toBase: 0.01 },
  { label: "mm", toBase: 0.001 },
  { label: "km", toBase: 1000 },
  { label: "ft", toBase: 0.3048 },
  { label: "in", toBase: 0.0254 },
  { label: "mi", toBase: 1609.344 },
  { label: "Å", toBase: 1e-10 },
];

const MASS: UnitDef[] = [
  { label: "kg", toBase: 1 },
  { label: "g", toBase: 0.001 },
  { label: "mg", toBase: 1e-6 },
  { label: "lb", toBase: 0.45359237 },
  { label: "u", toBase: 1.6605390666e-27 },
];

const ENERGY: UnitDef[] = [
  { label: "J", toBase: 1 },
  { label: "kJ", toBase: 1000 },
  { label: "eV", toBase: 1.602176634e-19 },
  { label: "keV", toBase: 1.602176634e-16 },
  { label: "cal", toBase: 4.184 },
  { label: "kWh", toBase: 3.6e6 },
];

const SPEED: UnitDef[] = [
  { label: "m/s", toBase: 1 },
  { label: "km/h", toBase: 1000 / 3600 },
  { label: "mph", toBase: 0.44704 },
  { label: "c", toBase: 2.99792458e8 },
];

const FORCE: UnitDef[] = [
  { label: "N", toBase: 1 },
  { label: "kN", toBase: 1000 },
  { label: "lbf", toBase: 4.4482216152605 },
  { label: "dyn", toBase: 1e-5 },
];

const PRESSURE: UnitDef[] = [
  { label: "Pa", toBase: 1 },
  { label: "kPa", toBase: 1000 },
  { label: "atm", toBase: 101325 },
  { label: "bar", toBase: 1e5 },
  { label: "mmHg", toBase: 133.322 },
  { label: "psi", toBase: 6894.76 },
];

const CHARGE: UnitDef[] = [
  { label: "C", toBase: 1 },
  { label: "mC", toBase: 1e-3 },
  { label: "μC", toBase: 1e-6 },
  { label: "nC", toBase: 1e-9 },
  { label: "e", toBase: 1.602176634e-19 },
];

const TIME: UnitDef[] = [
  { label: "s", toBase: 1 },
  { label: "ms", toBase: 1e-3 },
  { label: "min", toBase: 60 },
  { label: "h", toBase: 3600 },
  { label: "day", toBase: 86400 },
];

type TempUnit = "C" | "F" | "K";

function tempToK(v: number, u: TempUnit): number {
  if (u === "K") return v;
  if (u === "C") return v + 273.15;
  return ((v - 32) * 5) / 9 + 273.15;
}

function tempFromK(k: number, u: TempUnit): number {
  if (u === "K") return k;
  if (u === "C") return k - 273.15;
  return ((k - 273.15) * 9) / 5 + 32;
}

const GROUPS = [
  { id: "length", label: "Length", units: LENGTH },
  { id: "mass", label: "Mass", units: MASS },
  { id: "energy", label: "Energy", units: ENERGY },
  { id: "speed", label: "Speed", units: SPEED },
  { id: "force", label: "Force", units: FORCE },
  { id: "pressure", label: "Pressure", units: PRESSURE },
  { id: "charge", label: "Charge", units: CHARGE },
  { id: "time", label: "Time", units: TIME },
] as const;

const CONSTANTS = [
  { name: "g (Earth)", value: "9.80 m/s²", insert: "9.8" },
  { name: "c (light)", value: "2.998×10⁸ m/s", insert: "2.99792458e8" },
  { name: "h (Planck)", value: "6.626×10⁻³⁴ J·s", insert: "6.62607015e-34" },
  { name: "ħ", value: "1.055×10⁻³⁴ J·s", insert: "1.054571817e-34" },
  { name: "e (elementary charge)", value: "1.602×10⁻¹⁹ C", insert: "1.602176634e-19" },
  { name: "k (Boltzmann)", value: "1.381×10⁻²³ J/K", insert: "1.380649e-23" },
  { name: "N_A (Avogadro)", value: "6.022×10²³ mol⁻¹", insert: "6.02214076e23" },
  { name: "R (gas)", value: "8.314 J/(mol·K)", insert: "8.314462618" },
  { name: "ε₀", value: "8.854×10⁻¹² C²/(N·m²)", insert: "8.8541878128e-12" },
  { name: "μ₀", value: "4π×10⁻⁷ T·m/A", insert: "1.25663706212e-6" },
  { name: "G (gravity)", value: "6.674×10⁻¹¹ N·m²/kg²", insert: "6.6743e-11" },
  { name: "mₑ", value: "9.109×10⁻³¹ kg", insert: "9.1093837015e-31" },
  { name: "mₚ", value: "1.673×10⁻²⁷ kg", insert: "1.67262192369e-27" },
  { name: "F (Faraday)", value: "96485 C/mol", insert: "96485.3321" },
];

export default function UnitsConstants({
  embedded = false,
  onInsert,
}: {
  embedded?: boolean;
  onInsert?: (value: string) => void;
}) {
  const [groupId, setGroupId] = useState<(typeof GROUPS)[number]["id"]>("length");
  const group = GROUPS.find((g) => g.id === groupId) || GROUPS[0];
  const [from, setFrom] = useState(group.units[0]!.label);
  const [to, setTo] = useState(group.units[1]!.label);
  const [amount, setAmount] = useState("1");
  const [tempFrom, setTempFrom] = useState<TempUnit>("C");
  const [tempTo, setTempTo] = useState<TempUnit>("F");
  const [tempVal, setTempVal] = useState("25");
  const [copied, setCopied] = useState("");
  const [constQ, setConstQ] = useState("");

  const converted = useMemo(() => {
    const n = Number(amount);
    if (!Number.isFinite(n)) return "—";
    const a = group.units.find((u) => u.label === from);
    const b = group.units.find((u) => u.label === to);
    if (!a || !b) return "—";
    const base = n * a.toBase;
    const out = base / b.toBase;
    if (!Number.isFinite(out)) return "—";
    return Number(out.toPrecision(8)).toString();
  }, [amount, from, group.units, to]);

  const tempOut = useMemo(() => {
    const n = Number(tempVal);
    if (!Number.isFinite(n)) return "—";
    return Number(tempFromK(tempToK(n, tempFrom), tempTo).toPrecision(8)).toString();
  }, [tempFrom, tempTo, tempVal]);

  const filteredConstants = useMemo(() => {
    const q = constQ.trim().toLowerCase();
    if (!q) return CONSTANTS;
    return CONSTANTS.filter(
      (c) => c.name.toLowerCase().includes(q) || c.value.toLowerCase().includes(q)
    );
  }, [constQ]);

  async function copy(text: string, id: string) {
    await navigator.clipboard.writeText(text);
    setCopied(id);
    window.setTimeout(() => setCopied((c) => (c === id ? "" : c)), 1200);
  }

  const body = (
    <>
      <div className="flex flex-wrap gap-2">
        {GROUPS.map((g) => (
          <button
            key={g.id}
            type="button"
            className={
              groupId === g.id
                ? "rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white"
                : "rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
            }
            onClick={() => {
              setGroupId(g.id);
              setFrom(g.units[0]!.label);
              setTo(g.units[1]!.label);
            }}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="card grid gap-3 sm:grid-cols-3">
        <label className="block text-sm">
          Amount
          <input className="input mt-1 font-mono" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </label>
        <label className="block text-sm">
          From
          <select className="input mt-1" value={from} onChange={(e) => setFrom(e.target.value)}>
            {group.units.map((u) => (
              <option key={u.label} value={u.label}>
                {u.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          To
          <select className="input mt-1" value={to} onChange={(e) => setTo(e.target.value)}>
            {group.units.map((u) => (
              <option key={u.label} value={u.label}>
                {u.label}
              </option>
            ))}
          </select>
        </label>
        <div className="sm:col-span-3 rounded-xl bg-slate-50 px-3 py-2 font-mono text-lg font-semibold">
          {converted} {to}
          <button
            type="button"
            className="ml-3 text-xs font-semibold text-brand-700"
            onClick={() => copy(converted, "conv")}
          >
            {copied === "conv" ? "Copied" : "Copy"}
          </button>
          {onInsert && converted !== "—" ? (
            <button
              type="button"
              className="ml-2 text-xs font-semibold text-brand-700"
              onClick={() => onInsert(converted)}
            >
              Use in calc
            </button>
          ) : null}
        </div>
      </div>

      <div className="card space-y-3">
        <p className="text-sm font-semibold">Temperature</p>
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="block text-sm">
            Value
            <input className="input mt-1 font-mono" value={tempVal} onChange={(e) => setTempVal(e.target.value)} />
          </label>
          <label className="block text-sm">
            From
            <select className="input mt-1" value={tempFrom} onChange={(e) => setTempFrom(e.target.value as TempUnit)}>
              <option value="C">°C</option>
              <option value="F">°F</option>
              <option value="K">K</option>
            </select>
          </label>
          <label className="block text-sm">
            To
            <select className="input mt-1" value={tempTo} onChange={(e) => setTempTo(e.target.value as TempUnit)}>
              <option value="C">°C</option>
              <option value="F">°F</option>
              <option value="K">K</option>
            </select>
          </label>
        </div>
        <p className="font-mono text-lg font-semibold">
          {tempOut} {tempTo === "K" ? "K" : `°${tempTo}`}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-sm font-semibold text-slate-800">Constants</h2>
          <input
            className="input max-w-xs"
            placeholder="Search constants…"
            value={constQ}
            onChange={(e) => setConstQ(e.target.value)}
          />
        </div>
        <ul className="grid gap-2 sm:grid-cols-2">
          {filteredConstants.map((c) => (
            <li key={c.name} className="card flex items-center justify-between gap-2 py-3">
              <div>
                <p className="text-sm font-semibold">{c.name}</p>
                <p className="font-mono text-xs text-slate-600">{c.value}</p>
              </div>
              <button
                type="button"
                className="btn-secondary text-xs"
                onClick={() => copy(c.insert, c.name)}
              >
                {copied === c.name ? "Copied" : "Copy value"}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  if (embedded) {
    return <div className="card space-y-4">{body}</div>;
  }

  return (
    <StudyToolShell
      title="Units & constants"
      description="Casio-style unit converter for AP Physics / Chemistry — length, mass, energy, force, pressure, charge, time, temperature — plus searchable constants with one-click copy for the calculator."
      tip="Copy a constant’s insert value, then paste into KE ClassWiz. Temperature uses exact °C/°F/K formulas (not a linear scale factor)."
    >
      <MathDeskBanner pad="units" />
      {body}
    </StudyToolShell>
  );
}
