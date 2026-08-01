"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

export default function VectorResolveTool() {
  const [magnitude, setMagnitude] = useState(10);
  const [angle, setAngle] = useState(30);
  const [fromAxis, setFromAxis] = useState<"x" | "y">("x");

  const result = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const ax = fromAxis === "x" ? magnitude * Math.cos(rad) : magnitude * Math.sin(rad);
    const ay = fromAxis === "x" ? magnitude * Math.sin(rad) : magnitude * Math.cos(rad);
    return { ax, ay, rad };
  }, [magnitude, angle, fromAxis]);

  const size = 220;
  const cx = size / 2;
  const cy = size / 2;
  const scale = Math.min(70, 70 / Math.max(1, Math.abs(magnitude) / 10));
  const tipX = cx + result.ax * scale;
  const tipY = cy - result.ay * scale;

  return (
    <StudyToolShell
      title="Vector components"
      description="Resolve a 2D vector into x and y components. Simple helper for AP Physics free-body diagrams."
      tip="Angle is measured from the +x axis by default. Switch to +y if your problem is written that way."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="card space-y-3">
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
              A<sub>x</sub> = {result.ax.toFixed(4)}
            </p>
            <p>
              A<sub>y</sub> = {result.ay.toFixed(4)}
            </p>
          </div>
        </div>
        <div className="card flex items-center justify-center">
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="rounded-xl bg-white">
            <line x1={20} y1={cy} x2={size - 20} y2={cy} stroke="#cbd5e1" />
            <line x1={cx} y1={20} x2={cx} y2={size - 20} stroke="#cbd5e1" />
            <line x1={cx} y1={cy} x2={tipX} y2={cy} stroke="#0ea5e9" strokeWidth={2} />
            <line x1={cx} y1={cy} x2={cx} y2={tipY} stroke="#10b981" strokeWidth={2} />
            <line x1={cx} y1={cy} x2={tipX} y2={tipY} stroke="#1d4ed8" strokeWidth={3} markerEnd="url(#arrow)" />
            <defs>
              <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8" />
              </marker>
            </defs>
            <text x={size - 28} y={cy - 6} fontSize="10" fill="#64748b">
              x
            </text>
            <text x={cx + 6} y={24} fontSize="10" fill="#64748b">
              y
            </text>
          </svg>
        </div>
      </div>
    </StudyToolShell>
  );
}
