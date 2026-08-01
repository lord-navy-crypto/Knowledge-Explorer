"use client";

import { useEffect, useRef, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

export default function ImageCropTool() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [src, setSrc] = useState("");
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [mode, setMode] = useState<"crop" | "draw">("crop");
  const [drawing, setDrawing] = useState(false);
  const [crop, setCrop] = useState({ x: 40, y: 40, w: 200, h: 160 });
  const [drag, setDrag] = useState<{ ox: number; oy: number; sx: number; sy: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const maxW = 720;
    const scale = Math.min(1, maxW / img.width);
    canvas.width = Math.round(img.width * scale);
    canvas.height = Math.round(img.height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    if (mode === "crop") {
      ctx.fillStyle = "rgba(15,23,42,0.45)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.clearRect(crop.x, crop.y, crop.w, crop.h);
      ctx.drawImage(
        img,
        (crop.x / canvas.width) * img.width,
        (crop.y / canvas.height) * img.height,
        (crop.w / canvas.width) * img.width,
        (crop.h / canvas.height) * img.height,
        crop.x,
        crop.y,
        crop.w,
        crop.h
      );
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 2;
      ctx.strokeRect(crop.x, crop.y, crop.w, crop.h);
    }
  }, [img, crop, mode]);

  function onFile(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image.");
      return;
    }
    setError("");
    const url = URL.createObjectURL(file);
    setSrc(url);
    const image = new Image();
    image.onload = () => {
      setImg(image);
      setCrop({
        x: 20,
        y: 20,
        w: Math.min(240, Math.round(image.width * 0.5)),
        h: Math.min(180, Math.round(image.height * 0.5)),
      });
    };
    image.src = url;
  }

  function pointerPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * e.currentTarget.width,
      y: ((e.clientY - rect.top) / rect.height) * e.currentTarget.height,
    };
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    const p = pointerPos(e);
    if (mode === "crop") {
      setDrag({ ox: p.x, oy: p.y, sx: crop.x, sy: crop.y });
      return;
    }
    setDrawing(true);
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = "#ef4444";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
  }

  function onPointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    const p = pointerPos(e);
    if (mode === "crop" && drag) {
      const dx = p.x - drag.ox;
      const dy = p.y - drag.oy;
      const canvas = canvasRef.current;
      if (!canvas) return;
      setCrop((c) => ({
        ...c,
        x: Math.max(0, Math.min(canvas.width - c.w, drag.sx + dx)),
        y: Math.max(0, Math.min(canvas.height - c.h, drag.sy + dy)),
      }));
      return;
    }
    if (mode === "draw" && drawing) {
      const ctx = canvasRef.current?.getContext("2d");
      if (!ctx) return;
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    }
  }

  function onPointerUp() {
    setDrag(null);
    setDrawing(false);
  }

  function exportCrop() {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const out = document.createElement("canvas");
    const sx = (crop.x / canvas.width) * img.width;
    const sy = (crop.y / canvas.height) * img.height;
    const sw = (crop.w / canvas.width) * img.width;
    const sh = (crop.h / canvas.height) * img.height;
    out.width = Math.max(1, Math.round(sw));
    out.height = Math.max(1, Math.round(sh));
    const ctx = out.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, out.width, out.height);
    out.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "cropped.png";
      a.click();
    }, "image/png");
  }

  function exportCanvas() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "annotated.png";
      a.click();
    }, "image/png");
  }

  return (
    <StudyToolShell
      title="Image crop & annotate"
      description="Crop a region or draw simple red marks on an image, then download PNG. Local only."
      tip="Crop mode: drag the blue box. Draw mode: scribble highlights/arrows, then download the canvas."
    >
      <div className="flex flex-wrap gap-2">
        <label className="btn-primary cursor-pointer">
          Choose image
          <input type="file" accept="image/*" className="sr-only" onChange={(e) => onFile(e.target.files?.[0] || null)} />
        </label>
        <button type="button" className={mode === "crop" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("crop")}>
          Crop
        </button>
        <button type="button" className={mode === "draw" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("draw")}>
          Annotate
        </button>
        {mode === "crop" ? (
          <button type="button" className="btn-primary" disabled={!img} onClick={exportCrop}>
            Download crop
          </button>
        ) : (
          <button type="button" className="btn-primary" disabled={!img} onClick={exportCanvas}>
            Download annotated
          </button>
        )}
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {mode === "crop" && img ? (
        <div className="flex flex-wrap gap-3 text-sm">
          <label>
            Width{" "}
            <input
              type="range"
              min={40}
              max={canvasRef.current?.width || 400}
              value={crop.w}
              onChange={(e) => setCrop((c) => ({ ...c, w: Number(e.target.value) }))}
            />
          </label>
          <label>
            Height{" "}
            <input
              type="range"
              min={40}
              max={canvasRef.current?.height || 400}
              value={crop.h}
              onChange={(e) => setCrop((c) => ({ ...c, h: Number(e.target.value) }))}
            />
          </label>
        </div>
      ) : null}
      {src ? (
        <canvas
          ref={canvasRef}
          className="max-w-full touch-none rounded-xl border border-slate-200 bg-slate-50"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
        />
      ) : (
        <p className="card text-sm text-slate-500">No image loaded.</p>
      )}
    </StudyToolShell>
  );
}
