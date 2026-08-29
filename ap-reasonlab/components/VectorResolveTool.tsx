"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Vec = { x: number; y: number };

function mag(v: Vec) {
  return Math.hypot(v.x, v.y);
}

function angDeg(v: Vec) {
  return (Math.atan2(v.y, v.x) * 180) / Math.PI;
}

export default function VectorResolveTool({
  embedded = false,
  onInsert,
}: {
  embedded?: boolean;
  onInsert?: (value: string) => void;
}) {
  const [mode, setMode] = useState<"resolve" | "add">("resolve");
  const [magnitude, setMagnitude] = useState(10);
  const [angle, setAngle] = useState(30);
  const [fromAxis, setFromAxis] = useState<"x" | "y">("x");
  const [ax, setAx] = useState(3);
  const [ay, setAy] = useState(4);
  const [bx, setBx] = useState(-2);
  const [by, setBy] = useState(5);

  const resolved = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const vx = fromAxis === "x" ? magnitude * Math.cos(rad) : magnitude * Math.sin(rad);
    const vy = fromAxis === "x" ? magnitude * Math.sin(rad) : magnitude * Math.cos(rad);
    return { x: vx, y: vy };
  }, [magnitude, angle, fromAxis]);

  const a: Vec = { x: ax, y: ay };
  const b: Vec = { x: bx, y: by };
  const sum: Vec = { x: a.x + b.x, y: a.y + b.y };
  const diff: Vec = { x: a.x - b.x, y: a.y - b.y };

  const draw = mode === "resolve" ? resolved : sum;
  const size = 240;
  const cx = size / 2;
  const cy = size / 2;
  const maxComp = Math.max(1, Math.abs(draw.x), Math.abs(draw.y), mag(a), mag(b), mag(sum));
  const scale = Math.min(80, 80 / (maxComp / 8));
  const tip = (v: Vec) => ({ x: cx + v.x * scale, y: cy - v.y * scale });

  const body = (
    <>
      <div className="mb-3 flex flex-wrap gap-2">
        <button
          type="button"
          className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
            mode === "resolve" ? "bg-brand-700 text-white" : "border border-slate-200 bg-white"
          }`}
          onClick={() => setMode("resolve")}
        >
          Resolve |A|∠θ
        </button>
        <button
          type="button"
          className={`rounded-lg px-3 py-1.5 text-sm font-semibold ${
            mode === "add" ? "bg-brand-700 text-white" : "border border-slate-200 bg-white"
          }`}
          onClick={() => setMode("add")}
        >
          Add / subtract A,B
        </button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card space-y-3">
          {mode === "resolve" ? (
            <>
              <label className="block text-sm">
                <span className="font-medium">Magnitude</span>
                <input
                  type="number"
                  className="input mt-1"
                  value={magnitude}
                  onChange={(e) => setMagnitude(Number(e.target.value))}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Angle (degrees)</span>
                <input
                  type="number"
                  className="input mt-1"
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Angle measured from</span>
                <select
                  className="input mt-1"
                  value={fromAxis}
                  onChange={(e) => setFromAxis(e.target.value as "x" | "y")}
                >
                  <option value="x">+x axis</option>
                  <option value="y">+y axis</option>
                </select>
              </label>
              <div className="rounded-xl bg-slate-50 p-3 font-mono text-sm">
                <p>
                  A<sub>x</sub> = {resolved.x.toFixed(4)}
                </p>
                <p>
                  A<sub>y</sub> = {resolved.y.toFixed(4)}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Check: √(Ax²+Ay²) = {mag(resolved).toFixed(4)}
                </p>
                {onInsert ? (
                  <button
                    type="button"
                    className="mt-2 text-xs font-semibold text-brand-700"
                    onClick={() => onInsert(String(Number(resolved.x.toPrecision(8))))}
                  >
                    Use Ax in calc
                  </button>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2">
                <label className="block text-sm">
                  A<sub>x</sub>
                  <input type="number" className="input mt-1" value={ax} onChange={(e) => setAx(Number(e.target.value))} />
                </label>
                <label className="block text-sm">
                  A<sub>y</sub>
                  <input type="number" className="input mt-1" value={ay} onChange={(e) => setAy(Number(e.target.value))} />
                </label>
                <label className="block text-sm">
                  B<sub>x</sub>
                  <input type="number" className="input mt-1" value={bx} onChange={(e) => setBx(Number(e.target.value))} />
                </label>
                <label className="block text-sm">
                  B<sub>y</sub>
                  <input type="number" className="input mt-1" value={by} onChange={(e) => setBy(Number(e.target.value))} />
                </label>
              </div>
              <div className="rounded-xl bg-slate-50 p-3 font-mono text-sm space-y-1">
                <p>
                  A+B = ({sum.x.toFixed(4)}, {sum.y.toFixed(4)}) · |R|={mag(sum).toFixed(4)} · θ=
                  {angDeg(sum).toFixed(2)}°
                </p>
                <p>
                  A−B = ({diff.x.toFixed(4)}, {diff.y.toFixed(4)}) · |D|={mag(diff).toFixed(4)}
                </p>
                <p>
                  |A|={mag(a).toFixed(4)} · |B|={mag(b).toFixed(4)} · Â unit = (
                  {(a.x / mag(a) || 0).toFixed(4)}, {(a.y / mag(a) || 0).toFixed(4)})
                </p>
              </div>
            </>
          )}
        </div>
        <div className="card flex items-center justify-center">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-xl bg-white">
            <line x1={20} y1={cy} x2={size - 20} y2={cy} stroke="#cbd5e1" />
            <line x1={cx} y1={20} x2={cx} y2={size - 20} stroke="#cbd5e1" />
            {mode === "add" ? (
              <>
                <line x1={cx} y1={cy} x2={tip(a).x} y2={tip(a).y} stroke="#0ea5e9" strokeWidth={2} />
                <line x1={cx} y1={cy} x2={tip(b).x} y2={tip(b).y} stroke="#10b981" strokeWidth={2} />
                <line x1={cx} y1={cy} x2={tip(sum).x} y2={tip(sum).y} stroke="#1d4ed8" strokeWidth={3} />
              </>
            ) : (
              <>
                <line x1={cx} y1={cy} x2={tip(resolved).x} y2={cy} stroke="#0ea5e9" strokeWidth={2} />
                <line x1={cx} y1={cy} x2={cx} y2={tip(resolved).y} stroke="#10b981" strokeWidth={2} />
                <line
                  x1={cx}
                  y1={cy}
                  x2={tip(resolved).x}
                  y2={tip(resolved).y}
                  stroke="#1d4ed8"
                  strokeWidth={3}
                />
              </>
            )}
            <text x={size - 28} y={cy - 6} fontSize="10" fill="#64748b">
              x
            </text>
            <text x={cx + 6} y={24} fontSize="10" fill="#64748b">
              y
            </text>
          </svg>
        </div>
      </div>
    </>
  );

  if (embedded) {
    return <div className="space-y-4">{body}</div>;
  }

  return (
    <StudyToolShell
      title="Vector components"
      description="Resolve a 2D vector into components, or add/subtract two vectors — AP Physics free-body helper."
      tip="Resolve mode: angle from +x (or +y). Add mode: enter Ax,Ay and Bx,By to get A+B and |R|."
    >
      {body}
    </StudyToolShell>
  );
}
