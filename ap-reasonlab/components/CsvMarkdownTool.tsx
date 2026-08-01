"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    const next = src[i + 1];
    if (inQuotes) {
      if (ch === '"' && next === '"') {
        cell += '"';
        i++;
      } else if (ch === '"') {
        inQuotes = false;
      } else {
        cell += ch;
      }
      continue;
    }
    if (ch === '"') {
      inQuotes = true;
      continue;
    }
    if (ch === ",") {
      row.push(cell);
      cell = "";
      continue;
    }
    if (ch === "\n" || (ch === "\r" && next === "\n")) {
      row.push(cell);
      cell = "";
      if (row.some((c) => c.trim() !== "")) rows.push(row);
      row = [];
      if (ch === "\r") i++;
      continue;
    }
    if (ch === "\r") {
      row.push(cell);
      cell = "";
      if (row.some((c) => c.trim() !== "")) rows.push(row);
      row = [];
      continue;
    }
    cell += ch;
  }
  row.push(cell);
  if (row.some((c) => c.trim() !== "")) rows.push(row);
  return rows;
}

function escapeCell(value: string): string {
  const v = value.replace(/\r?\n/g, "<br>").trim();
  if (/[|`]/.test(v)) return v.replace(/\|/g, "\\|");
  return v;
}

function toMarkdownTable(rows: string[][]): string {
  if (!rows.length) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const normalized = rows.map((r) => {
    const copy = [...r];
    while (copy.length < width) copy.push("");
    return copy.map(escapeCell);
  });
  const header = normalized[0];
  const body = normalized.slice(1);
  const sep = header.map(() => "---");
  const lines = [
    `| ${header.join(" | ")} |`,
    `| ${sep.join(" | ")} |`,
    ...body.map((r) => `| ${r.join(" | ")} |`),
  ];
  return lines.join("\n");
}

export default function CsvMarkdownTool() {
  const [csv, setCsv] = useState("Topic,Formula,Notes\nNewton 2nd,F=ma,Net force\nIdeal gas,PV=nRT,Moles");
  const [error, setError] = useState("");
  const markdown = useMemo(() => {
    try {
      const rows = parseCsv(csv);
      if (!rows.length) return "";
      return toMarkdownTable(rows);
    } catch {
      return "";
    }
  }, [csv]);

  async function onFile(file: File | null) {
    if (!file) return;
    setError("");
    try {
      const text = await file.text();
      setCsv(text);
    } catch {
      setError("Could not read file.");
    }
  }

  return (
    <StudyToolShell
      title="CSV → Markdown table"
      description="Paste CSV or upload a .csv file, then copy a Markdown table for notes and dual-column editor."
      tip="First row becomes the header. Quoted commas are supported."
    >
      <div className="flex flex-wrap gap-2">
        <label className="btn-secondary cursor-pointer">
          Upload .csv
          <input
            type="file"
            accept=".csv,text/csv"
            className="sr-only"
            onChange={(e) => void onFile(e.target.files?.[0] || null)}
          />
        </label>
        <button
          type="button"
          className="btn-primary"
          disabled={!markdown}
          onClick={() => void navigator.clipboard.writeText(markdown)}
        >
          Copy Markdown
        </button>
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">CSV</span>
          <textarea
            className="input mt-1 min-h-[18rem] font-mono text-xs"
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Markdown</span>
          <textarea
            className="input mt-1 min-h-[18rem] font-mono text-xs"
            readOnly
            value={markdown}
          />
        </label>
      </div>
    </StudyToolShell>
  );
}
