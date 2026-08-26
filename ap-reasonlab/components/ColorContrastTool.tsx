"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.trim().replace(/^#/, "").match(/^([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (!m) return null;
  let h = m[1];
  if (h.length === 3) h = h.split("").map((c) => c + c).join("");
  const n = parseInt(h, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function srgbToLin(c: number): number {
  const s = c / 255;
  return s <= 0.04045 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex: string): number | null {
  const rgb = hexToRgb(hex);
  if (!rgb) return null;
  const r = srgbToLin(rgb.r);
  const g = srgbToLin(rgb.g);
  const b = srgbToLin(rgb.b);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(fg: string, bg: string): number | null {
  const L1 = relativeLuminance(fg);
  const L2 = relativeLuminance(bg);
  if (L1 == null || L2 == null) return null;
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

function passBadge(ok: boolean) {
  return ok ? (
    <span className="rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-emerald-800">
      Pass
    </span>
  ) : (
    <span className="rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-rose-800">
      Fail
    </span>
  );
}

export default function ColorContrastTool() {
  const [fg, setFg] = useState("#0f172a");
  const [bg, setBg] = useState("#f8fafc");
  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);

  const checks = ratio
    ? [
        { label: "Normal text AA (4.5:1)", ok: ratio >= 4.5 },
        { label: "Large text AA (3:1)", ok: ratio >= 3 },
        { label: "Normal text AAA (7:1)", ok: ratio >= 7 },
        { label: "Large text AAA (4.5:1)", ok: ratio >= 4.5 },
      ]
    : [];

  return (
    <StudyToolShell
      title="Color & contrast"
      description="Pick foreground and background colors and check WCAG contrast for readable slides and notes."
      tip="Large text ≈ 18pt+ or 14pt bold. Aim for AA at minimum on study materials."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="card block space-y-2">
          <span className="text-sm font-medium text-slate-700">Foreground (text)</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={hexToRgb(fg) ? fg : "#000000"}
              onChange={(e) => setFg(e.target.value)}
              className="h-10 w-14 cursor-pointer rounded border border-slate-200"
            />
            <input className="input font-mono" value={fg} onChange={(e) => setFg(e.target.value)} />
          </div>
        </label>
        <label className="card block space-y-2">
          <span className="text-sm font-medium text-slate-700">Background</span>
          <div className="flex items-center gap-3">
            <input
              type="color"
              value={hexToRgb(bg) ? bg : "#ffffff"}
              onChange={(e) => setBg(e.target.value)}
              className="h-10 w-14 cursor-pointer rounded border border-slate-200"
            />
            <input className="input font-mono" value={bg} onChange={(e) => setBg(e.target.value)} />
          </div>
        </label>
      </div>

      <div
        className="rounded-2xl border border-slate-200 px-6 py-10 text-center shadow-sm"
        style={{ background: bg, color: fg }}
      >
        <p className="text-3xl font-bold">NauWiki Explorer</p>
        <p className="mt-2 text-base">The quick brown fox jumps over the lazy dog. 0123456789</p>
        <p className="mt-1 text-sm opacity-90">Sample body text for contrast checking.</p>
      </div>

      <div className="card space-y-3">
        <p className="text-lg font-semibold text-slate-900">
          Contrast ratio:{" "}
          <span className="tabular-nums">
            {ratio != null ? `${ratio.toFixed(2)} : 1` : "Invalid color"}
          </span>
        </p>
        <ul className="space-y-2 text-sm">
          {checks.map((c) => (
            <li key={c.label} className="flex items-center justify-between gap-3">
              <span className="text-slate-700">{c.label}</span>
              {passBadge(c.ok)}
            </li>
          ))}
        </ul>
      </div>
    </StudyToolShell>
  );
}
