"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import StudyToolShell from "@/components/StudyToolShell";

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

export default function PdfCompressTool() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");
  const [name, setName] = useState("");

  async function onFile(file: File | null) {
    if (!file) return;
    setBusy(true);
    setError("");
    setInfo("");
    setName(file.name);
    try {
      const original = new Uint8Array(await file.arrayBuffer());
      const src = await PDFDocument.load(original, { ignoreEncryption: true });
      // Rebuild: drop unused objects / use object streams — light client-side shrink.
      const out = await PDFDocument.create();
      const pages = await out.copyPages(src, src.getPageIndices());
      pages.forEach((p) => out.addPage(p));
      out.setTitle(src.getTitle() || file.name);
      const bytes = await out.save({ useObjectStreams: true });
      const copy = new Uint8Array(bytes.byteLength);
      copy.set(bytes);
      const blob = new Blob([copy], { type: "application/pdf" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = file.name.replace(/\.pdf$/i, "") + "-slim.pdf";
      a.click();
      const saved = original.byteLength - copy.byteLength;
      setInfo(
        `${formatBytes(original.byteLength)} → ${formatBytes(copy.byteLength)} (${
          saved >= 0 ? `−${formatBytes(saved)}` : `+${formatBytes(-saved)}`
        }). Browser recompress is modest — heavily image-based PDFs may barely shrink.`
      );
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Compress failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <StudyToolShell
      title="PDF compress (light)"
      description="Rebuild a PDF in the browser to trim unused objects. Best for text-heavy files; image scans may not shrink much."
      tip="For aggressive photo PDF shrinking, compress images first (Image compress) then rebuild, or use merge/split to drop pages."
    >
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
      {name ? <p className="text-sm text-slate-600">{name}</p> : null}
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {info ? <p className="card text-sm text-emerald-800">{info}</p> : null}
    </StudyToolShell>
  );
}
