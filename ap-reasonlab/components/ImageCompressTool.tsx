"use client";

import { useMemo, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Format = "image/jpeg" | "image/webp" | "image/png";

function formatBytes(n: number): string {
  if (!Number.isFinite(n) || n <= 0) return "0 B";
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function extFor(mime: Format): string {
  if (mime === "image/webp") return "webp";
  if (mime === "image/png") return "png";
  return "jpg";
}

export default function ImageCompressTool() {
  const [srcUrl, setSrcUrl] = useState("");
  const [outUrl, setOutUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [origBytes, setOrigBytes] = useState(0);
  const [outBytes, setOutBytes] = useState(0);
  const [maxWidth, setMaxWidth] = useState(1600);
  const [quality, setQuality] = useState(0.82);
  const [format, setFormat] = useState<Format>("image/jpeg");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [rawFile, setRawFile] = useState<File | null>(null);

  const savedPct = useMemo(() => {
    if (!origBytes || !outBytes) return null;
    const pct = Math.round((1 - outBytes / origBytes) * 100);
    return pct;
  }, [origBytes, outBytes]);

  async function processFile(file: File, nextMax: number, nextQ: number, nextFmt: Format) {
    setBusy(true);
    setError("");
    try {
      const bitmap = await createImageBitmap(file);
      const scale = Math.min(1, nextMax / Math.max(bitmap.width, 1));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Canvas not available.");
      ctx.drawImage(bitmap, 0, 0, w, h);
      bitmap.close();

      const blob: Blob = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (b) => (b ? resolve(b) : reject(new Error("Encode failed."))),
          nextFmt,
          nextFmt === "image/png" ? undefined : nextQ
        );
      });

      if (outUrl) URL.revokeObjectURL(outUrl);
      const url = URL.createObjectURL(blob);
      setOutUrl(url);
      setOutBytes(blob.size);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Compress failed.");
    } finally {
      setBusy(false);
    }
  }

  async function onFile(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Please choose an image file.");
      return;
    }
    if (srcUrl) URL.revokeObjectURL(srcUrl);
    if (outUrl) URL.revokeObjectURL(outUrl);
    const url = URL.createObjectURL(file);
    setSrcUrl(url);
    setOutUrl("");
    setRawFile(file);
    setFileName(file.name);
    setOrigBytes(file.size);
    setOutBytes(0);
    await processFile(file, maxWidth, quality, format);
  }

  async function reprocess(nextMax = maxWidth, nextQ = quality, nextFmt = format) {
    if (!rawFile) return;
    await processFile(rawFile, nextMax, nextQ, nextFmt);
  }

  function download() {
    if (!outUrl) return;
    const base = fileName.replace(/\.[^.]+$/, "") || "image";
    const a = document.createElement("a");
    a.href = outUrl;
    a.download = `${base}-compressed.${extFor(format)}`;
    a.click();
  }

  return (
    <StudyToolShell
      title="Image compress & convert"
      description="Shrink images, cap width, and export JPEG, WebP, or PNG. Files never leave this browser."
      tip="WebP usually wins on size. PNG ignores the quality slider (lossless)."
    >
      <div className="flex flex-wrap items-center gap-3">
        <label className="btn-primary cursor-pointer">
          Choose image
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={(e) => void onFile(e.target.files?.[0] || null)}
          />
        </label>
        {fileName ? <span className="text-sm text-slate-600">{fileName}</span> : null}
        <button type="button" className="btn-primary" disabled={!outUrl || busy} onClick={download}>
          Download
        </button>
      </div>

      <div className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Max width (px)</span>
          <input
            type="range"
            min={400}
            max={4000}
            step={50}
            value={maxWidth}
            className="mt-2 w-full"
            onChange={(e) => {
              const v = Number(e.target.value);
              setMaxWidth(v);
              void reprocess(v, quality, format);
            }}
          />
          <span className="text-xs text-slate-500">{maxWidth}px</span>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Quality</span>
          <input
            type="range"
            min={0.4}
            max={0.95}
            step={0.01}
            value={quality}
            disabled={format === "image/png"}
            className="mt-2 w-full"
            onChange={(e) => {
              const v = Number(e.target.value);
              setQuality(v);
              void reprocess(maxWidth, v, format);
            }}
          />
          <span className="text-xs text-slate-500">
            {format === "image/png" ? "n/a for PNG" : `${Math.round(quality * 100)}%`}
          </span>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Format</span>
          <select
            className="input mt-2"
            value={format}
            onChange={(e) => {
              const v = e.target.value as Format;
              setFormat(v);
              void reprocess(maxWidth, quality, v);
            }}
          >
            <option value="image/jpeg">JPEG</option>
            <option value="image/webp">WebP</option>
            <option value="image/png">PNG</option>
          </select>
        </label>
      </div>

      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {busy ? <p className="text-sm text-slate-500">Processing…</p> : null}

      {(srcUrl || outUrl) && (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Original · {formatBytes(origBytes)}
            </p>
            {srcUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={srcUrl} alt="Original" className="mt-2 max-h-80 w-full object-contain" />
            ) : null}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Result · {formatBytes(outBytes)}
              {savedPct != null ? (
                <span className={savedPct >= 0 ? " text-emerald-700" : " text-amber-700"}>
                  {" "}
                  ({savedPct >= 0 ? `−${savedPct}%` : `+${Math.abs(savedPct)}%`})
                </span>
              ) : null}
            </p>
            {outUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={outUrl} alt="Compressed" className="mt-2 max-h-80 w-full object-contain" />
            ) : null}
          </div>
        </div>
      )}
    </StudyToolShell>
  );
}
