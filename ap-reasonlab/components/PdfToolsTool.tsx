"use client";

import { useEffect, useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import StudyToolShell from "@/components/StudyToolShell";
import PdfCompressTool from "@/components/PdfCompressTool";

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
  const [mode, setMode] = useState<"merge" | "split" | "rotate" | "compress">("merge");
  const [mergeFiles, setMergeFiles] = useState<File[]>([]);
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [rotateFile, setRotateFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [rotatePages, setRotatePages] = useState(0);
  const [range, setRange] = useState("1-");
  const [rotateRange, setRotateRange] = useState("1-");
  const [angle, setAngle] = useState<90 | 180 | 270>(90);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [splitEach, setSplitEach] = useState(false);

  useEffect(() => {
    const next = new URLSearchParams(window.location.search).get("mode");
    if (next === "split" || next === "rotate" || next === "compress" || next === "merge") {
      setMode(next);
    }
  }, []);

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

  async function onRotatePick(file: File | null) {
    setRotateFile(file);
    setRotatePages(0);
    setError("");
    setInfo("");
    if (!file) return;
    try {
      const doc = await PDFDocument.load(await file.arrayBuffer());
      const n = doc.getPageCount();
      setRotatePages(n);
      setRotateRange(`1-${n}`);
      setInfo(`${file.name} · ${n} page${n === 1 ? "" : "s"}`);
    } catch {
      setError("Could not read this PDF.");
      setRotateFile(null);
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
      const base = splitFile.name.replace(/\.pdf$/i, "") || "extract";
      if (splitEach) {
        for (const pageIdx of pages) {
          const out = await PDFDocument.create();
          const [copied] = await out.copyPages(src, [pageIdx]);
          out.addPage(copied);
          const bytes = await out.save();
          downloadBytes(bytes, `${base}-p${pageIdx + 1}.pdf`);
        }
        setInfo(`Downloaded ${pages.length} single-page PDF${pages.length === 1 ? "" : "s"}.`);
      } else {
        const out = await PDFDocument.create();
        const copied = await out.copyPages(src, pages);
        copied.forEach((p) => out.addPage(p));
        const bytes = await out.save();
        downloadBytes(bytes, `${base}-pages.pdf`);
        setInfo(`Extracted ${pages.length} page${pages.length === 1 ? "" : "s"}.`);
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Split failed.");
    } finally {
      setBusy(false);
    }
  }

  async function rotatePdf() {
    if (!rotateFile) {
      setError("Choose a PDF to rotate.");
      return;
    }
    setBusy(true);
    setError("");
    setInfo("");
    try {
      const src = await PDFDocument.load(await rotateFile.arrayBuffer());
      const total = src.getPageCount();
      const pages = parseRange(rotateRange, total);
      if (!pages.length) {
        setError("No valid pages in that range.");
        return;
      }
      const pageList = src.getPages();
      for (const idx of pages) {
        const page = pageList[idx];
        if (!page) continue;
        const current = page.getRotation().angle;
        page.setRotation(degrees((current + angle) % 360));
      }
      const bytes = await src.save();
      const base = rotateFile.name.replace(/\.pdf$/i, "") || "rotated";
      downloadBytes(bytes, `${base}-rotated.pdf`);
      setInfo(`Rotated ${pages.length} page${pages.length === 1 ? "" : "s"} by ${angle}°.`);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Rotate failed.");
    } finally {
      setBusy(false);
    }
  }

  function moveMerge(i: number, dir: -1 | 1) {
    setMergeFiles((prev) => {
      const next = [...prev];
      const j = i + dir;
      if (j < 0 || j >= next.length) return prev;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
  }

  return (
    <StudyToolShell
      title="PDF desk"
      description="Merge, split, rotate, or lightly compress PDFs. Processing stays on this device — import files here, then download."
      tip="Page numbers are 1-based. Range examples: 1-3 · 2,4,6 · 5- (from page 5 to end). Compress rebuilds the file; photo scans may barely shrink."
    >
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["merge", "Merge PDFs"],
            ["split", "Split / extract"],
            ["rotate", "Rotate pages"],
            ["compress", "Compress"],
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
                  <span className="flex shrink-0 gap-2">
                    <button
                      type="button"
                      className="text-xs text-slate-500 hover:text-brand-700"
                      onClick={() => moveMerge(i, -1)}
                      disabled={i === 0}
                    >
                      ↑
                    </button>
                    <button
                      type="button"
                      className="text-xs text-slate-500 hover:text-brand-700"
                      onClick={() => moveMerge(i, 1)}
                      disabled={i === mergeFiles.length - 1}
                    >
                      ↓
                    </button>
                    <button
                      type="button"
                      className="text-xs text-slate-500 hover:text-red-600"
                      onClick={() => setMergeFiles((prev) => prev.filter((_, j) => j !== i))}
                    >
                      Remove
                    </button>
                  </span>
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
      ) : mode === "split" ? (
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
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={splitEach}
              onChange={(e) => setSplitEach(e.target.checked)}
            />
            Download each selected page as its own PDF
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
      ) : mode === "rotate" ? (
        <div className="card space-y-4">
          <label className="btn-primary inline-flex cursor-pointer">
            Choose PDF
            <input
              type="file"
              accept="application/pdf,.pdf"
              className="sr-only"
              onChange={(e) => void onRotatePick(e.target.files?.[0] || null)}
            />
          </label>
          {rotateFile ? (
            <p className="text-sm text-slate-600">
              {rotateFile.name}
              {rotatePages ? ` · ${rotatePages} pages` : ""}
            </p>
          ) : null}
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Pages to rotate</span>
            <input
              className="input mt-1"
              value={rotateRange}
              onChange={(e) => setRotateRange(e.target.value)}
              placeholder="1-"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium text-slate-700">Angle</span>
            <select
              className="input mt-1 max-w-xs"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value) as 90 | 180 | 270)}
            >
              <option value={90}>90° clockwise</option>
              <option value={180}>180°</option>
              <option value={270}>270° (90° counter-clockwise)</option>
            </select>
          </label>
          <button
            type="button"
            className="btn-primary"
            disabled={busy || !rotateFile}
            onClick={() => void rotatePdf()}
          >
            {busy ? "Rotating…" : "Rotate & download"}
          </button>
        </div>
      ) : (
        <PdfCompressTool embedded />
      )}

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {info ? <p className="text-sm text-emerald-700">{info}</p> : null}
    </StudyToolShell>
  );
}
