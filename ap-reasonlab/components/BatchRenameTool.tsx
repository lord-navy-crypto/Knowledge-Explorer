"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Row = { id: string; original: string; file?: File };

export default function BatchRenameTool() {
  const [rows, setRows] = useState<Row[]>([]);
  const [prefix, setPrefix] = useState("note-");
  const [start, setStart] = useState(1);
  const [pad, setPad] = useState(2);
  const [keepExt, setKeepExt] = useState(true);

  const preview = useMemo(
    () =>
      rows.map((row, index) => {
        const ext = keepExt && row.original.includes(".") ? `.${row.original.split(".").pop()}` : "";
        const num = String(start + index).padStart(Math.max(1, pad), "0");
        return { ...row, next: `${prefix}${num}${ext}` };
      }),
    [rows, prefix, start, pad, keepExt]
  );

  async function downloadOne(row: { file?: File; next: string; original: string }) {
    if (!row.file) {
      await navigator.clipboard.writeText(preview.map((p) => `${p.original} → ${p.next}`).join("\n"));
      return;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(row.file);
    a.download = row.next;
    a.click();
  }

  return (
    <StudyToolShell
      title="Batch rename export"
      description="Pick files, preview a numbered naming pattern, then download copies with new names. Mapping stays local."
      tip="Browsers cannot rename files on disk in place — this downloads renamed copies. Use Copy map if you only need the name list."
    >
      <div className="flex flex-wrap gap-2">
        <label className="btn-primary cursor-pointer">
          Choose files
          <input
            type="file"
            multiple
            className="sr-only"
            onChange={(e) => {
              const files = Array.from(e.target.files || []);
              setRows(files.map((f, i) => ({ id: `${f.name}-${i}`, original: f.name, file: f })));
              e.target.value = "";
            }}
          />
        </label>
        <button
          type="button"
          className="btn-secondary"
          disabled={!preview.length}
          onClick={() => void navigator.clipboard.writeText(preview.map((p) => `${p.original}\t${p.next}`).join("\n"))}
        >
          Copy map
        </button>
        <button
          type="button"
          className="btn-primary"
          disabled={!preview.length}
          onClick={() => {
            preview.forEach((row, i) => {
              window.setTimeout(() => void downloadOne(row), i * 120);
            });
          }}
        >
          Download renamed copies
        </button>
      </div>

      <div className="card grid gap-3 sm:grid-cols-4">
        <label className="block text-sm">
          Prefix
          <input className="input mt-1" value={prefix} onChange={(e) => setPrefix(e.target.value)} />
        </label>
        <label className="block text-sm">
          Start #
          <input type="number" className="input mt-1" value={start} onChange={(e) => setStart(Number(e.target.value) || 1)} />
        </label>
        <label className="block text-sm">
          Zero pad
          <input type="number" className="input mt-1" min={1} max={6} value={pad} onChange={(e) => setPad(Number(e.target.value) || 1)} />
        </label>
        <label className="flex items-center gap-2 pt-6 text-sm">
          <input type="checkbox" checked={keepExt} onChange={(e) => setKeepExt(e.target.checked)} />
          Keep extension
        </label>
      </div>

      <ul className="card space-y-1 font-mono text-xs">
        {preview.map((p) => (
          <li key={p.id}>
            {p.original} → <span className="font-semibold text-brand-700">{p.next}</span>
          </li>
        ))}
        {!preview.length ? <li className="font-sans text-sm text-slate-500">No files selected.</li> : null}
      </ul>
    </StudyToolShell>
  );
}
