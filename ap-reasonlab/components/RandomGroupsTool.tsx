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
  const [groupCount, setGroupCount] = useState(4);
  const [splitBy, setSplitBy] = useState<"size" | "count">("size");
  const [mode, setMode] = useState<"groups" | "pick">("groups");
  const [seed, setSeed] = useState(0);
  const [picked, setPicked] = useState("");
  const [exclude, setExclude] = useState("");
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState<string[]>([]);

  const names = useMemo(() => {
    const excluded = new Set(
      exclude
        .split(/\r?\n|,/)
        .map((s) => s.trim().toLowerCase())
        .filter(Boolean)
    );
    return raw
      .split(/\r?\n|,/)
      .map((s) => s.trim())
      .filter(Boolean)
      .filter((n) => !excluded.has(n.toLowerCase()));
  }, [raw, exclude]);

  const groups = useMemo(() => {
    void seed;
    const shuffled = shuffle(names);
    if (mode === "pick") return [];
    const out: string[][] = [];
    if (splitBy === "count") {
      const count = Math.max(1, Math.min(groupCount, shuffled.length || 1));
      for (let i = 0; i < count; i++) out.push([]);
      shuffled.forEach((name, i) => {
        out[i % count]!.push(name);
      });
    } else {
      const size = Math.max(1, groupSize);
      for (let i = 0; i < shuffled.length; i += size) out.push(shuffled.slice(i, i + size));
    }
    return out;
  }, [names, groupSize, groupCount, splitBy, mode, seed]);

  function pickOne() {
    if (!names.length) return;
    const choice = names[Math.floor(Math.random() * names.length)]!;
    setPicked(choice);
    setSeed((s) => s + 1);
    setHistory((h) => [choice, ...h].slice(0, 12));
  }

  function groupsText() {
    return groups.map((g, i) => `Group ${i + 1}: ${g.join(", ")}`).join("\n");
  }

  return (
    <StudyToolShell
      title="Random pick & groups"
      description="Paste a class list, then randomly pick one person or shuffle into groups by size or by number of teams. Nothing is uploaded."
      tip="One name per line (or comma-separated). Use Exclude for absent students. Reshuffle anytime for a new seating / project split."
    >
      <div className="flex flex-wrap gap-2">
        <button type="button" className={mode === "groups" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("groups")}>
          Make groups
        </button>
        <button type="button" className={mode === "pick" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("pick")}>
          Random pick
        </button>
        {mode === "groups" ? (
          <>
            <button type="button" className="btn-secondary" onClick={() => setSeed((s) => s + 1)}>
              Reshuffle
            </button>
            <button
              type="button"
              className="btn-secondary"
              disabled={!groups.length}
              onClick={() => {
                void navigator.clipboard.writeText(groupsText()).then(() => {
                  setCopied(true);
                  window.setTimeout(() => setCopied(false), 1500);
                });
              }}
            >
              {copied ? "Copied" : "Copy groups"}
            </button>
          </>
        ) : (
          <button type="button" className="btn-primary" onClick={pickOne}>
            Pick someone
          </button>
        )}
        <span className="self-center text-xs tabular-nums text-slate-500">
          {names.length} active name{names.length === 1 ? "" : "s"}
        </span>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm">
            <span className="font-medium">Names</span>
            <textarea className="input mt-1 min-h-[14rem]" value={raw} onChange={(e) => setRaw(e.target.value)} />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Exclude (absent / already picked)</span>
            <textarea
              className="input mt-1 min-h-[5rem]"
              value={exclude}
              onChange={(e) => setExclude(e.target.value)}
              placeholder="One name per line"
            />
          </label>
        </div>
        <div className="space-y-3">
          {mode === "groups" ? (
            <>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className={splitBy === "size" ? "btn-primary text-sm" : "btn-secondary text-sm"}
                  onClick={() => setSplitBy("size")}
                >
                  By group size
                </button>
                <button
                  type="button"
                  className={splitBy === "count" ? "btn-primary text-sm" : "btn-secondary text-sm"}
                  onClick={() => setSplitBy("count")}
                >
                  By # of groups
                </button>
              </div>
              {splitBy === "size" ? (
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
              ) : (
                <label className="block text-sm">
                  Number of groups
                  <input
                    type="number"
                    min={1}
                    className="input mt-1"
                    value={groupCount}
                    onChange={(e) => setGroupCount(Number(e.target.value) || 1)}
                  />
                </label>
              )}
              <div className="space-y-2">
                {groups.map((g, i) => (
                  <div key={i} className="card">
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      Group {i + 1} · {g.length}
                    </p>
                    <p className="mt-1 text-sm font-medium">{g.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="card text-center">
                <p className="text-xs font-semibold uppercase text-slate-500">Selected</p>
                <p className="mt-3 text-3xl font-bold text-brand-700">{picked || "—"}</p>
                {picked ? (
                  <button
                    type="button"
                    className="btn-ghost mt-3 text-sm"
                    onClick={() =>
                      setExclude((prev) =>
                        prev.trim() ? `${prev.trim()}\n${picked}` : picked
                      )
                    }
                  >
                    Move to exclude list
                  </button>
                ) : null}
              </div>
              {history.length ? (
                <div className="card">
                  <p className="text-xs font-semibold uppercase text-slate-500">Recent picks</p>
                  <p className="mt-2 text-sm text-slate-700">{history.join(" · ")}</p>
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </StudyToolShell>
  );
}
