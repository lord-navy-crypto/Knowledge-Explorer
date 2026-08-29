"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import StudyToolShell from "@/components/StudyToolShell";

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

type Result = {
  name: string;
  before: number;
  after: number;
  pages: number;
  url: string;
};

export default function PdfCompressTool({ embedded = false }: { embedded?: boolean }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");
  const [stripMeta, setStripMeta] = useState(true);
  const [autoDownload, setAutoDownload] = useState(true);
  const [result, setResult] = useState<Result | null>(null);

  async function onFile(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError("");
    setInfo("");
    setName(file.name);
    if (result?.url) URL.revokeObjectURL(result.url);
    setResult(null);
    try {
      const original = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(original, { ignoreEncryption: true });
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, src.getPageIndices());
      pages.forEach((p) => out.addPage(p));
      if (!stripMeta) {
        out.setTitle(src.getTitle() || file.name);
        const author = src.getAuthor();
        if (author) out.setAuthor(author);
        const subject = src.getSubject();
        if (subject) out.setSubject(subject);
      }
      const bytes = await out.save({ useObjectStreams: true });
      const copy = new Uint8Array(bytes.byteLength);
      copy.set(bytes);
      const blob = new Blob([copy], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const next: Result = {
        name: file.name.replace(/\.pdf$/i, "") + "-slim.pdf",
        before: original.byteLength,
        after: copy.byteLength,
        pages: out.getPageCount(),
        url,
      };
      setResult(next);
      const saved = original.byteLength - copy.byteLength;
      setInfo(
        `${formatBytes(original.byteLength)} → ${formatBytes(copy.byteLength)} (${
          saved >= 0 ? `−${formatBytes(saved)}` : `+${formatBytes(-saved)}`
        }) · ${out.getPageCount()} pages. Browser recompress is modest — heavily image-based PDFs may barely shrink.`
      );
      if (autoDownload) {
        const a = document.createElement("a");
        a.href = url;
        a.download = next.name;
        a.click();
      }
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Compress failed");
    } finally {
      setBusy(false);
    }
  }

  function downloadResult() {
    if (!result) return;
    const a = document.createElement("a");
    a.href = result.url;
    a.download = result.name;
    a.click();
  }

  const body = (
    <>
      <div className="flex flex-wrap items-center gap-3">
        <label className="btn-primary inline-flex cursor-pointer">
          {busy ? "Working…" : "Choose PDF"}
          <input
            type="file"
            accept="application/pdf,.pdf"
            className="sr-only"
            disabled={busy}
            onChange={(e) => void onFile(e.target.files?.[0] || null)}
          />
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={stripMeta}
            onChange={(e) => setStripMeta(e.target.checked)}
          />
          Strip title / author metadata
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <input
            type="checkbox"
            checked={autoDownload}
            onChange={(e) => setAutoDownload(e.target.checked)}
          />
          Auto-download result
        </label>
        {result ? (
          <button type="button" className="btn-secondary" onClick={downloadResult}>
            Download again
          </button>
        ) : null}
      </div>
      {name ? <p className="text-sm text-slate-600">{name}</p> : null}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {info ? <p className="card text-sm text-emerald-800">{info}</p> : null}
      {result ? (
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Before</p>
            <p className="mt-1 text-lg font-semibold tabular-nums">{formatBytes(result.before)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">After</p>
            <p className="mt-1 text-lg font-semibold tabular-nums">{formatBytes(result.after)}</p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Saved</p>
            <p className="mt-1 text-lg font-semibold tabular-nums text-emerald-700">
              {result.before >= result.after
                ? `−${formatBytes(result.before - result.after)}`
                : `+${formatBytes(result.after - result.before)}`}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );

  if (embedded) {
    return <div className="card space-y-4">{body}</div>;
  }

  return (
    <StudyToolShell
      title="PDF compress (light)"
      description="Rebuild a PDF in the browser to trim unused objects. Optionally strip metadata. Best for text-heavy files; image scans may not shrink much."
      tip="For aggressive photo PDF shrinking, compress images first (Image compress) then rebuild, or use merge/split to drop pages."
    >
      {body}
    </StudyToolShell>
  );
}
