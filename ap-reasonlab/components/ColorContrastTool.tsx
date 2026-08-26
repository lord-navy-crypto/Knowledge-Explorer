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

function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0"))
      .join("")
  );
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

const PRESETS: Array<{ label: string; fg: string; bg: string }> = [
  { label: "Slate on paper", fg: "#0f172a", bg: "#f8fafc" },
  { label: "Ink on cream", fg: "#1c1917", bg: "#faf7f2" },
  { label: "White on navy", fg: "#f8fafc", bg: "#0f172a" },
  { label: "Brand on white", fg: "#1d4ed8", bg: "#ffffff" },
  { label: "Muted gray", fg: "#64748b", bg: "#ffffff" },
];

/** Nudge FG toward black or white until AA normal text passes (or give up). */
function suggestFgForBg(bg: string, preferDark = true): string | null {
  const bgRgb = hexToRgb(bg);
  if (!bgRgb) return null;
  const targets = preferDark
    ? [
        [15, 23, 42],
        [0, 0, 0],
        [30, 41, 59],
      ]
    : [
        [248, 250, 252],
        [255, 255, 255],
        [226, 232, 240],
      ];
  for (const [r, g, b] of targets) {
    const hex = rgbToHex(r!, g!, b!);
    const ratio = contrastRatio(hex, bg);
    if (ratio != null && ratio >= 4.5) return hex;
  }
  // Binary search mix toward black/white
  const end = preferDark ? [0, 0, 0] : [255, 255, 255];
  let lo = 0;
  let hi = 1;
  let best: string | null = null;
  for (let i = 0; i < 12; i++) {
    const t = (lo + hi) / 2;
    const hex = rgbToHex(
      bgRgb.r + (end[0]! - bgRgb.r) * t,
      bgRgb.g + (end[1]! - bgRgb.g) * t,
      bgRgb.b + (end[2]! - bgRgb.b) * t
    );
    const ratio = contrastRatio(hex, bg);
    if (ratio != null && ratio >= 4.5) {
      best = hex;
      hi = t;
    } else {
      lo = t;
    }
  }
  return best;
}

export default function ColorContrastTool() {
  const [fg, setFg] = useState("#0f172a");
  const [bg, setBg] = useState("#f8fafc");
  const [copied, setCopied] = useState(false);
  const ratio = useMemo(() => contrastRatio(fg, bg), [fg, bg]);

  const checks = ratio
    ? [
        { label: "Normal text AA (4.5:1)", ok: ratio >= 4.5 },
        { label: "Large text AA (3:1)", ok: ratio >= 3 },
        { label: "Normal text AAA (7:1)", ok: ratio >= 7 },
        { label: "Large text AAA (4.5:1)", ok: ratio >= 4.5 },
      ]
    : [];

  const suggestion = useMemo(() => {
    if (ratio != null && ratio >= 4.5) return null;
    const dark = suggestFgForBg(bg, true);
    const light = suggestFgForBg(bg, false);
    return { dark, light };
  }, [bg, ratio]);

  function copyCss() {
    const css = `color: ${fg};\nbackground-color: ${bg};`;
    void navigator.clipboard.writeText(css).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <StudyToolShell
      title="Color & contrast"
      description="Pick foreground and background colors and check WCAG contrast for readable slides and notes. Presets and AA suggestions included."
      tip="Large text ≈ 18pt+ or 14pt bold. Aim for AA at minimum on study materials."
    >
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="btn-secondary text-sm"
          onClick={() => {
            setFg(bg);
            setBg(fg);
          }}
        >
          Swap colors
        </button>
        <button type="button" className="btn-secondary text-sm" onClick={copyCss}>
          {copied ? "Copied" : "Copy CSS"}
        </button>
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600 hover:border-brand-300"
            onClick={() => {
              setFg(p.fg);
              setBg(p.bg);
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

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
        <p className="text-3xl font-bold">Knowledge Explorer</p>
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
        {suggestion && (suggestion.dark || suggestion.light) ? (
          <div className="rounded-xl border border-amber-200 bg-amber-50/70 px-3 py-2 text-sm text-amber-950">
            <p className="font-medium">AA suggestion for this background</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestion.dark ? (
                <button
                  type="button"
                  className="btn-secondary text-xs"
                  onClick={() => setFg(suggestion.dark!)}
                >
                  Use {suggestion.dark}
                </button>
              ) : null}
              {suggestion.light ? (
                <button
                  type="button"
                  className="btn-secondary text-xs"
                  onClick={() => setFg(suggestion.light!)}
                >
                  Use {suggestion.light}
                </button>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </StudyToolShell>
  );
}
