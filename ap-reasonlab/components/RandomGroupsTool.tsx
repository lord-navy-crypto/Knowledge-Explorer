"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function shuffle<T>(list: T[]): T[] {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function RandomGroupsTool() {
  const [raw, setRaw] = useState("Alex\nBlake\nCasey\nDrew\nEden\nFinn\nGray\nHarper");
  const [groupSize, setGroupSize] = useState(2);
  const [mode, setMode] = useState<"groups" | "pick">("groups");
  const [seed, setSeed] = useState(0);
  const [picked, setPicked] = useState("");

  const names = useMemo(
    () =>
      raw
        .split(/\r?\n|,/)
        .map((s) => s.trim())
        .filter(Boolean),
    [raw]
  );

  const groups = useMemo(() => {
    void seed;
    const shuffled = shuffle(names);
    if (mode === "pick") return [];
    const size = Math.max(1, groupSize);
    const out: string[][] = [];
    for (let i = 0; i < shuffled.length; i += size) out.push(shuffled.slice(i, i + size));
    return out;
  }, [names, groupSize, mode, seed]);

  function pickOne() {
    if (!names.length) return;
    const choice = names[Math.floor(Math.random() * names.length)];
    setPicked(choice);
    setSeed((s) => s + 1);
  }

  return (
    <StudyToolShell
      title="Random pick & groups"
      description="Paste a class list, then randomly pick one person or shuffle into groups. Nothing is uploaded."
      tip="One name per line (or comma-separated). Reshuffle anytime for a new seating / project split."
    >
      <div className="flex flex-wrap gap-2">
        <button type="button" className={mode === "groups" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("groups")}>
          Make groups
        </button>
        <button type="button" className={mode === "pick" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("pick")}>
          Random pick
        </button>
        {mode === "groups" ? (
          <button type="button" className="btn-secondary" onClick={() => setSeed((s) => s + 1)}>
            Reshuffle
          </button>
        ) : (
          <button type="button" className="btn-primary" onClick={pickOne}>
            Pick someone
          </button>
        )}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium">Names</span>
          <textarea className="input mt-1 min-h-[16rem]" value={raw} onChange={(e) => setRaw(e.target.value)} />
        </label>
        <div className="space-y-3">
          {mode === "groups" ? (
            <>
              <label className="block text-sm">
                People per group
                <input
                  type="number"
                  min={1}
                  className="input mt-1"
                  value={groupSize}
                  onChange={(e) => setGroupSize(Number(e.target.value) || 1)}
                />
              </label>
              <div className="space-y-2">
                {groups.map((g, i) => (
                  <div key={i} className="card">
                    <p className="text-xs font-semibold uppercase text-slate-500">Group {i + 1}</p>
                    <p className="mt-1 text-sm font-medium">{g.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="card text-center">
              <p className="text-xs font-semibold uppercase text-slate-500">Selected</p>
              <p className="mt-3 text-3xl font-bold text-brand-700">{picked || "—"}</p>
            </div>
          )}
        </div>
      </div>
    </StudyToolShell>
  );
}
