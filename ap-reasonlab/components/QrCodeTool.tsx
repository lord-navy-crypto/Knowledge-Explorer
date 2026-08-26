"use client";

import { useEffect, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

type Ecc = "L" | "M" | "Q" | "H";

export default function QrCodeTool() {
  const [text, setText] = useState("https://ap-webside.vercel.app");
  const [size, setSize] = useState(256);
  const [ecc, setEcc] = useState<Ecc>("M");
  const [dark, setDark] = useState("#0f172a");
  const [light, setLight] = useState("#ffffff");
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      const value = text.trim();
      if (!value) {
        setDataUrl("");
        setError("");
        return;
      }
      setBusy(true);
      setError("");
      try {
        const QR = await import("qrcode");
        const url = await QR.toDataURL(value, {
          width: size,
          margin: 2,
          errorCorrectionLevel: ecc,
          color: { dark, light },
        });
        if (!cancelled) setDataUrl(url);
      } catch (caught) {
        if (!cancelled) {
          setDataUrl("");
          setError(caught instanceof Error ? caught.message : "Could not generate QR.");
        }
      } finally {
        if (!cancelled) setBusy(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [text, size, ecc, dark, light]);

  function download() {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qr-code.png";
    a.click();
  }

  async function copyPng() {
    if (!dataUrl) return;
    try {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      if (typeof ClipboardItem !== "undefined" && navigator.clipboard?.write) {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1500);
      } else {
        setError("Clipboard image copy not supported — download PNG instead.");
      }
    } catch {
      setError("Could not copy QR image.");
    }
  }

  return (
    <StudyToolShell
      title="QR code"
      description="Turn a URL or short text into a QR code you can download or copy as PNG. Choose size, colors, and error-correction level — all local."
      tip="Keep the text short for reliable scanning. Higher ECC (Q/H) survives more damage but needs denser modules."
    >
      <label className="block text-sm">
        <span className="font-medium text-slate-700">Text or URL</span>
        <textarea
          className="input mt-1 min-h-[6rem]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="https://…"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Size: {size}px</span>
          <input
            type="range"
            min={128}
            max={512}
            step={16}
            value={size}
            className="mt-2 w-full"
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Error correction</span>
          <select
            className="input mt-2"
            value={ecc}
            onChange={(e) => setEcc(e.target.value as Ecc)}
          >
            <option value="L">L (~7%)</option>
            <option value="M">M (~15%)</option>
            <option value="Q">Q (~25%)</option>
            <option value="H">H (~30%)</option>
          </select>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Dark modules</span>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="color"
              value={dark}
              onChange={(e) => setDark(e.target.value)}
              className="h-9 w-12 cursor-pointer rounded border border-slate-200"
            />
            <input className="input font-mono text-xs" value={dark} onChange={(e) => setDark(e.target.value)} />
          </div>
        </label>
        <label className="block text-sm">
          <span className="font-medium text-slate-700">Light modules</span>
          <div className="mt-2 flex items-center gap-2">
            <input
              type="color"
              value={light}
              onChange={(e) => setLight(e.target.value)}
              className="h-9 w-12 cursor-pointer rounded border border-slate-200"
            />
            <input className="input font-mono text-xs" value={light} onChange={(e) => setLight(e.target.value)} />
          </div>
        </label>
      </div>

      <div className="flex flex-wrap items-start gap-6">
        <div className="flex h-72 w-72 items-center justify-center rounded-2xl border border-slate-200 bg-white p-4">
          {dataUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={dataUrl} alt="QR code preview" className="max-h-full max-w-full" />
          ) : (
            <p className="text-sm text-slate-500">{busy ? "Generating…" : "Enter text to generate"}</p>
          )}
        </div>
        <div className="space-y-3">
          <button type="button" className="btn-primary" disabled={!dataUrl} onClick={download}>
            Download PNG
          </button>
          <button type="button" className="btn-secondary" disabled={!dataUrl} onClick={() => void copyPng()}>
            {copied ? "Copied" : "Copy image"}
          </button>
          <button
            type="button"
            className="btn-ghost"
            disabled={!text.trim()}
            onClick={() => void navigator.clipboard.writeText(text.trim())}
          >
            Copy source text
          </button>
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
          <p className="max-w-xs text-xs text-slate-500">
            {text.trim().length} characters · ECC {ecc}
          </p>
        </div>
      </div>
    </StudyToolShell>
  );
}
