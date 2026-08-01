"use client";

import { useEffect, useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

const KEY = "ke-short-codes-v1";

type Entry = { code: string; target: string; createdAt: number };

function makeCode(len = 6): string {
  const alphabet = "abcdefghijkmnopqrstuvwxyz23456789";
  let out = "";
  for (let i = 0; i < len; i++) out += alphabet[Math.floor(Math.random() * alphabet.length)];
  return out;
}

export default function ShortCodeTool() {
  const [target, setTarget] = useState("https://ap-webside.vercel.app/forum");
  const [entries, setEntries] = useState<Entry[]>([]);
  const [mounted, setMounted] = useState(false);
  const [lookup, setLookup] = useState("");

  useEffect(() => {
    setMounted(true);
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setEntries(JSON.parse(raw) as Entry[]);
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

  function createCode() {
    const t = target.trim();
    if (!t) return;
    let code = makeCode();
    while (entries.some((e) => e.code === code)) code = makeCode();
    setEntries((prev) => [{ code, target: t, createdAt: Date.now() }, ...prev].slice(0, 80));
  }

  return (
    <StudyToolShell
      title="Short codes (local)"
      description="Make short mnemonic codes that map to a URL or note on this device. Share the code verbally; recipients look it up here."
      tip="Not a public short-link service — codes live in this browser’s localStorage only. Great for class: “open Tools → Short codes → enter ab3k2q”."
    >
      <div className="card space-y-3">
        <label className="block text-sm">
          Target URL or text
          <input className="input mt-1" value={target} onChange={(e) => setTarget(e.target.value)} />
        </label>
        <button type="button" className="btn-primary" onClick={createCode}>
          Generate code
        </button>
      </div>

      <div className="card space-y-3">
        <label className="block text-sm">
          Look up a code
          <input className="input mt-1 font-mono" value={lookup} onChange={(e) => setLookup(e.target.value)} placeholder="e.g. ab3k2q" />
        </label>
        {lookup.trim() ? (
          found ? (
            <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
              <p className="font-mono font-bold">{found.code}</p>
              {/^https?:\/\//i.test(found.target) ? (
                <a className="mt-1 inline-block break-all underline" href={found.target} target="_blank" rel="noreferrer">
                  {found.target}
                </a>
              ) : (
                <p className="mt-1 break-all">{found.target}</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-amber-700">No match in this browser.</p>
          )
        ) : null}
      </div>

      <ul className="space-y-2">
        {entries.map((e) => (
          <li key={e.code} className="card flex flex-wrap items-center justify-between gap-2 text-sm">
            <div>
              <p className="font-mono font-bold text-brand-700">{e.code}</p>
              <p className="break-all text-xs text-slate-600">{e.target}</p>
            </div>
            <div className="flex gap-2">
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
