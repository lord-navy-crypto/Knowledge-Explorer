"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import StudyToolShell from "@/components/StudyToolShell";

function downloadBytes(bytes: Uint8Array, name: string) {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  const blob = new Blob([copy], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

export default function PdfToolsTool() {
  const [mode, setMode] = useState<"merge" | "split">("merge");
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [range, setRange] = useState("1-");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  async function onSplitPick(file: File | null) {
    setSplitFile(file);
    setPageCount(0);
    setError("");
    setInfo("");
    if (!file) return;
    try {
      const doc = await PDFDocument.load(await file.arrayBuffer());
      const n = doc.getPageCount();
      setPageCount(n);
      setRange(`1-${n}`);
      setInfo(`${file.name} · ${n} page${n === 1 ? "" : "s"}`);
    } catch {
      setError("Could not read this PDF.");
      setSplitFile(null);
    }
  }

  async function mergePdfs() {
    if (mergeFiles.length < 2) {
      setError("Add at least two PDF files to merge.");
      return;
    }
    setBusy(true);
    setError("");
    setInfo("");
    try {
      const out = await PDFDocument.create();
      for (const file of mergeFiles) {
        const src = await PDFDocument.load(await file.arrayBuffer());
        const pages = await out.copyPages(src, src.getPageIndices());
        pages.forEach((p) => out.addPage(p));
      }
      const bytes = await out.save();
      downloadBytes(bytes, "merged.pdf");
      setInfo(`Merged ${mergeFiles.length} files · ${out.getPageCount()} pages.`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Merge failed.");
    } finally {
      setBusy(false);
    }
  }

  function parseRange(spec: string, total: number): number[] {
    const indices = new Set<number>();
    for (const part of spec.split(/[,;\s]+/).filter(Boolean)) {
      const m = part.match(/^(\d+)(?:-(\d*))?$/);
      if (!m) continue;
      let start = Number(m[1]);
      let end = m[2] === undefined ? start : m[2] === "" ? total : Number(m[2]);
      if (!Number.isFinite(start) || !Number.isFinite(end)) continue;
      if (start > end) [start, end] = [end, start];
      for (let i = start; i <= end; i++) {
        if (i >= 1 && i <= total) indices.add(i - 1);
      }
    }
    return [...indices].sort((a, b) => a - b);
  }

  async function splitPdf() {
    if (!splitFile) {
      setError("Choose a PDF to split.");
      return;
    }
    setBusy(true);
    setError("");
    setInfo("");
    try {
      const src = await PDFDocument.load(await splitFile.arrayBuffer());
      const total = src.getPageCount();
      const pages = parseRange(range, total);
      if (!pages.length) {
        setError("No valid pages in that range. Example: 1-3,5");
        return;
      }
      const out = await PDFDocument.create();
      const copied = await out.copyPages(src, pages);
      copied.forEach((p) => out.addPage(p));
      const bytes = await out.save();
      const base = splitFile.name.replace(/\.pdf$/i, "") || "extract";
      downloadBytes(bytes, `${base}-pages.pdf`);
      setInfo(`Extracted ${pages.length} page${pages.length === 1 ? "" : "s"}.`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Split failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <StudyToolShell
      title="PDF merge & split"
      description="Combine several PDFs into one, or extract a page range. Processing stays on this device."
      tip="Page numbers are 1-based. Range examples: 1-3 · 2,4,6 · 5- (from page 5 to end)."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["merge", "Merge PDFs"],
            ["split", "Split / extract"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => {
              setMode(id);
              setError("");
              setInfo("");
            }}
            className={
              mode === id
                ? "rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                : "rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200"
            }
          >
            {label}
          </button>
        ))}
      </div>

      {mode === "merge" ? (
        <div className="card space-y-4">
          <label className="btn-primary inline-flex cursor-pointer">
            Add PDF files
            <input
              type="file"
              accept="application/pdf,.pdf"
              multiple
              className="sr-only"
              onChange={(e) => {
                const list = Array.from(e.target.files || []);
                setMergeFiles((prev) => [...prev, ...list]);
                e.target.value = "";
              }}
            />
          </label>
          {mergeFiles.length > 0 ? (
            <ul className="space-y-1 text-sm text-slate-700">
              {mergeFiles.map((f, i) => (
                <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-2">
                  <span>
                    {i + 1}. {f.name}
                  </span>
                  <button
                    type="button"
                    className="text-xs text-slate-500 hover:text-red-600"
                    onClick={() => setMergeFiles((prev) => prev.filter((_, j) => j !== i))}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-500">No files yet. Order = merge order.</p>
          )}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn-primary"
              disabled={busy || mergeFiles.length < 2}
              onClick={() => void mergePdfs()}
            >
              {busy ? "Merging…" : "Merge & download"}
            </button>
            <button type="button" className="btn-ghost" onClick={() => setMergeFiles([])}>
              Clear list
            </button>
          </div>
        </div>
      ) : (
        <div className="card space-y-4">
          <label className="btn-primary inline-flex cursor-pointer">
            Choose PDF
            <input
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(e) => void onSplitPick(e.target.files?.[0] || null)}
            />
          </label>
          {splitFile ? (
            <p className="text-sm text-slate-600">
              {splitFile.name}
              {pageCount ? ` · ${pageCount} pages` : ""}
            </p>
          ) : null}
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Pages to keep</span>
            <input
              className="input mt-1"
              value={range}
              onChange={(e) => setRange(e.target.value)}
              placeholder="1-3,5"
            />
          </label>
          <button
            type="button"
            className="btn-primary"
            disabled={busy || !splitFile}
            onClick={() => void splitPdf()}
          >
            {busy ? "Extracting…" : "Extract & download"}
          </button>
        </div>
      )}

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {info ? <p className="text-sm text-emerald-700">{info}</p> : null}
    </StudyToolShell>
  );
}
