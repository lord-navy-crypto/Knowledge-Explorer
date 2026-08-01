"use client";

import { useEffect, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

export default function QrCodeTool() {
  const [text, setText] = useState("https://ap-webside.vercel.app");
  const [size, setSize] = useState(256);
  const [dataUrl, setDataUrl] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

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
          errorCorrectionLevel: "M",
          color: { dark: "#0f172a", light: "#ffffff" },
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
  }, [text, size]);

  function download() {
    if (!dataUrl) return;
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "qr-code.png";
    a.click();
  }

  return (
    <StudyToolShell
      title="QR code"
      description="Turn a URL or short text into a QR code you can download as PNG. Generated locally in this browser."
      tip="Keep the text short for reliable scanning. Best for sharing a study link or resource."
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

      <label className="block max-w-xs text-sm">
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
          {error ? <p className="text-sm text-red-700">{error}</p> : null}
        </div>
      </div>
    </StudyToolShell>
  );
}
