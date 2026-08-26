"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

function parseDelimited(text: string, delimiter: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;
  const src = text.replace(/^\uFEFF/, "");
  const delim = delimiter === "\\t" ? "\t" : delimiter;
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
    if (ch === delim) {
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

function toMarkdownTable(rows: string[][], hasHeader: boolean): string {
  if (!rows.length) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const normalized = rows.map((r) => {
    const copy = [...r];
    while (copy.length < width) copy.push("");
    return copy.map(escapeCell);
  });
  let header: string[];
  let body: string[][];
  if (hasHeader) {
    header = normalized[0];
    body = normalized.slice(1);
  } else {
    header = Array.from({ length: width }, (_, i) => `Col ${i + 1}`);
    body = normalized;
  }
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
  const [delimiter, setDelimiter] = useState("," as "," | ";" | "\\t");
  const [hasHeader, setHasHeader] = useState(true);
  const [copied, setCopied] = useState(false);

  const rows = useMemo(() => {
    try {
      return parseDelimited(csv, delimiter);
    } catch {
      return [];
    }
  }, [csv, delimiter]);

  const markdown = useMemo(() => {
    if (!rows.length) return "";
    return toMarkdownTable(rows, hasHeader);
  }, [rows, hasHeader]);

  async function onFile(file: File | null) {
    if (!file) return;
    setError("");
    try {
      const text = await file.text();
      setCsv(text);
      if (file.name.toLowerCase().endsWith(".tsv") || text.includes("\t")) {
        setDelimiter("\\t");
      }
    } catch {
      setError("Could not read file.");
    }
  }

  function downloadMd() {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table.md";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <StudyToolShell
      title="CSV → Markdown table"
      description="Paste CSV/TSV or upload a file, pick a delimiter, then copy a Markdown table for notes and dual-column editor."
      tip="First row becomes the header (toggleable). Quoted commas are supported."
    >
      <div className="flex flex-wrap items-center gap-2">
        <label className="btn-secondary cursor-pointer">
          Upload .csv / .tsv
          <input
            type="file"
            accept=".csv,.tsv,text/csv,text/tab-separated-values"
            className="sr-only"
            onChange={(e) => void onFile(e.target.files?.[0] || null)}
          />
        </label>
        <button
          type="button"
          className="btn-primary"
          disabled={!markdown}
          onClick={() => {
            void navigator.clipboard.writeText(markdown).then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1500);
            });
          }}
        >
          {copied ? "Copied" : "Copy Markdown"}
        </button>
        <button type="button" className="btn-secondary" disabled={!markdown} onClick={downloadMd}>
          Download .md
        </button>
        <label className="text-sm">
          Delimiter{" "}
          <select
            className="input ml-1 inline-block w-auto py-1"
            value={delimiter}
            onChange={(e) => setDelimiter(e.target.value as "," | ";" | "\\t")}
          >
            <option value=",">Comma</option>
            <option value=";">Semicolon</option>
            <option value="\\t">Tab</option>
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={hasHeader}
            onChange={(e) => setHasHeader(e.target.checked)}
          />
          First row is header
        </label>
        {rows.length ? (
          <span className="text-xs tabular-nums text-slate-500">
            {rows.length} rows · {Math.max(...rows.map((r) => r.length), 0)} cols
          </span>
        ) : null}
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <div className="grid gap-4 lg:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">CSV / TSV</span>
          <textarea
            className="input mt-1 min-h-[18rem] font-mono text-xs"
            value={csv}
            onChange={(e) => setCsv(e.target.value)}
          />
        </label>
        <div className="space-y-3">
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Markdown</span>
            <textarea
              className="input mt-1 min-h-[10rem] font-mono text-xs"
              readOnly
              value={markdown}
            />
          </label>
          {rows.length > 0 ? (
            <div className="max-h-56 overflow-auto rounded-xl border border-slate-200">
              <table className="min-w-full text-left text-xs">
                <tbody>
                  {rows.slice(0, 12).map((r, i) => (
                    <tr key={i} className={i === 0 && hasHeader ? "bg-slate-50 font-semibold" : ""}>
                      {r.map((c, j) => (
                        <td key={j} className="border-b border-slate-100 px-2 py-1">
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {rows.length > 12 ? (
                <p className="px-2 py-1 text-[11px] text-slate-500">Showing first 12 rows…</p>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </StudyToolShell>
  );
}
