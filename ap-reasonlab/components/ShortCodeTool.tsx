"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

const KEY = "ke-short-codes-v2";
const LEGACY_KEY = "ke-short-codes-v1";

type Entry = {
  code: string;
  /** Primary URL or note text */
  target: string;
  /** Optional display title for the preset */
  title: string;
  /** When true and target is http(s), show an embed window on lookup */
  showWindow: boolean;
  createdAt: number;
};

function makeCode(len = 6): string {
  const alphabet = "abcdefghijkmnopqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}

function isHttpUrl(value: string) {
  return /^https?:\/\//i.test(value.trim());
}

function normalizeEntry(raw: Partial<Entry> & { target?: string; code?: string }): Entry | null {
  if (!raw?.code || !raw?.target) return null;
  return {
    code: String(raw.code),
    target: String(raw.target),
    title: String(raw.title || ""),
    showWindow: Boolean(raw.showWindow),
    createdAt: Number(raw.createdAt) || Date.now(),
  };
}

export default function ShortCodeTool() {
  const [target, setTarget] = useState("https://ap-webside.vercel.app/english/toefl/speaking");
  const [title, setTitle] = useState("TOEFL Speaking lane");
  const [customCode, setCustomCode] = useState("");
  const [showWindow, setShowWindow] = useState(true);
  const [entries, setEntries] = useState<Entry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [lookup, setLookup] = useState("");
  const [filter, setFilter] = useState("");
  const [hint, setHint] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY) || localStorage.getItem(LEGACY_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as Array<Partial<Entry>>;
      const next = parsed.map(normalizeEntry).filter(Boolean) as Entry[];
      setEntries(next);
      if (!localStorage.getItem(KEY) && next.length) {
        localStorage.setItem(KEY, JSON.stringify(next));
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(KEY, JSON.stringify(entries));
  }, [entries, mounted]);

  const found = useMemo(
    () => entries.find((e) => e.code.toLowerCase() === lookup.trim().toLowerCase()) || null,
    [entries, lookup]
  );

  const filtered = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.code.toLowerCase().includes(q) ||
        e.title.toLowerCase().includes(q) ||
        e.target.toLowerCase().includes(q)
    );
  }, [entries, filter]);

  function createCode() {
    const t = target.trim();
    if (!t) return;
    let code = customCode.trim().toLowerCase().replace(/[^a-z0-9-]/g, "") || makeCode();
    if (!code) code = makeCode();
    if (entries.some((e) => e.code === code)) {
      setHint(`Code “${code}” already exists — pick another or clear custom code.`);
      return;
    }
    setEntries((prev) =>
      [
        {
          code,
          target: t,
          title: title.trim(),
          showWindow: showWindow && isHttpUrl(t),
          createdAt: Date.now(),
        },
        ...prev,
      ].slice(0, 80)
    );
    setCustomCode("");
    setHint(`Saved preset ${code}`);
    window.setTimeout(() => setHint(""), 2000);
  }

  function exportJson() {
    const blob = new Blob([JSON.stringify(entries, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ke-short-codes.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function importJson(file: File | null) {
    if (!file) return;
    try {
      const text = await file.text();
      const parsed = JSON.parse(text) as Array<Partial<Entry>>;
      const next = parsed.map(normalizeEntry).filter(Boolean) as Entry[];
      setEntries((prev) => {
        const map = new Map(prev.map((e) => [e.code, e]));
        for (const e of next) map.set(e.code, e);
        return [...map.values()].slice(0, 80);
      });
      setHint(`Imported ${next.length} preset${next.length === 1 ? "" : "s"}.`);
      window.setTimeout(() => setHint(""), 2000);
    } catch {
      setHint("Could not import JSON.");
    }
  }

  return (
    <StudyToolShell
      title="Short codes · saved presets"
      description="Create a short code that opens a saved link — and optionally an embed window — on this device. Generate once, reuse anytime. Export/import JSON to move presets between browsers."
      tip="Not a public short-link service — presets live in this browser only. Class tip: “Tools → Short codes → enter ab3k2q”."
    >
      <div className="card space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Create &amp; save a preset
        </p>
        <label className="block text-sm">
          Preset title (optional)
          <input
            className="input mt-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Speaking practice · Week 3"
          />
        </label>
        <label className="block text-sm">
          Link or note
          <input
            className="input mt-1"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            placeholder="https://… or a short classroom note"
          />
        </label>
        <label className="block text-sm">
          Custom code (optional)
          <input
            className="input mt-1 font-mono"
            value={customCode}
            onChange={(e) => setCustomCode(e.target.value)}
            placeholder="leave blank to auto-generate"
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={showWindow}
            onChange={(e) => setShowWindow(e.target.checked)}
            disabled={!isHttpUrl(target)}
          />
          Also open an embed window for this link (http/https only)
        </label>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary" onClick={createCode}>
            Generate &amp; save preset
          </button>
          <button type="button" className="btn-secondary" onClick={exportJson} disabled={!entries.length}>
            Export JSON
          </button>
          <label className="btn-secondary cursor-pointer">
            Import JSON
            <input
              type="file"
              accept="application/json,.json"
              className="sr-only"
              onChange={(e) => void importJson(e.target.files?.[0] || null)}
            />
          </label>
        </div>
        {hint ? <p className="text-xs text-emerald-700">{hint}</p> : null}
      </div>

      <div className="card space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Use a preset</p>
        <label className="block text-sm">
          Enter short code
          <input
            className="input mt-1 font-mono"
            value={lookup}
            onChange={(e) => setLookup(e.target.value)}
            placeholder="e.g. ab3k2q"
          />
        </label>
        {lookup.trim() ? (
          found ? (
            <div className="space-y-3 rounded-xl bg-emerald-50 px-3 py-3 text-sm text-emerald-950">
              <div>
                <p className="font-mono text-lg font-bold text-emerald-900">{found.code}</p>
                {found.title ? (
                  <p className="mt-1 font-semibold text-emerald-900">{found.title}</p>
                ) : null}
              </div>
              {isHttpUrl(found.target) ? (
                <a
                  className="inline-block break-all font-medium underline"
                  href={found.target}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open link ↗ {found.target}
                </a>
              ) : (
                <p className="break-all">{found.target}</p>
              )}
              {found.showWindow && isHttpUrl(found.target) ? (
                <div className="overflow-hidden rounded-xl border border-emerald-200 bg-white">
                  <div className="flex items-center justify-between gap-2 border-b border-emerald-100 bg-emerald-50/80 px-3 py-1.5 text-[11px] text-emerald-900">
                    <span>Preset window</span>
                    <a href={found.target} target="_blank" rel="noreferrer" className="underline">
                      Full tab
                    </a>
                  </div>
                  <iframe
                    title={found.title || found.code}
                    src={found.target}
                    className="h-[22rem] w-full bg-white"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                </div>
              ) : null}
            </div>
          ) : (
            <p className="text-sm text-amber-700">No match in this browser.</p>
          )
        ) : null}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <label className="block min-w-[12rem] flex-1 text-sm">
          Filter saved presets
          <input
            className="input mt-1"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search code, title, or link…"
          />
        </label>
        <span className="pt-5 text-xs tabular-nums text-slate-500">
          {filtered.length}/{entries.length}
        </span>
      </div>

      <ul className="space-y-2">
        {filtered.map((e) => (
          <li key={e.code} className="card flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="min-w-0">
              <p className="font-mono font-bold text-brand-700">{e.code}</p>
              {e.title ? <p className="text-xs font-medium text-slate-800">{e.title}</p> : null}
              <p className="break-all text-xs text-slate-600">{e.target}</p>
              {e.showWindow ? (
                <p className="mt-0.5 text-[11px] text-emerald-700">Includes embed window</p>
              ) : null}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                className="btn-secondary text-xs"
                onClick={() => {
                  setLookup(e.code);
                }}
              >
                Open preset
              </button>
              <button
                type="button"
                className="btn-secondary text-xs"
                onClick={() => void navigator.clipboard.writeText(e.code)}
              >
                Copy code
              </button>
              <button
                type="button"
                className="rounded-md border border-red-200 bg-red-50 px-2 py-1 text-[10px] font-semibold text-red-700"
                onClick={() => setEntries((prev) => prev.filter((x) => x.code !== e.code))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StudyToolShell>
  );
}
