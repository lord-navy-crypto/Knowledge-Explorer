"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";

const ASPECTS: Array<{ id: string; label: string; ratio: number | null }> = [
  { id: "free", label: "Free", ratio: null },
  { id: "1", label: "1:1", ratio: 1 },
  { id: "4-3", label: "4:3", ratio: 4 / 3 },
  { id: "16-9", label: "16:9", ratio: 16 / 9 },
  { id: "3-2", label: "3:2", ratio: 3 / 2 },
];

const PEN_COLORS = ["#ef4444", "#2563eb", "#16a34a", "#f59e0b", "#ffffff"];

export default function ImageCropTool() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const historyRef = useRef<ImageData[]>([]);
  const [src, setSrc] = useState("");
  const [img, setImg] = useState<HTMLImageElement | null>(null);
  const [mode, setMode] = useState<"crop" | "draw">("crop");
  const [drawing, setDrawing] = useState(false);
  const [crop, setCrop] = useState({ x: 40, y: 40, w: 200, h: 160 });
  const [drag, setDrag] = useState<{ ox: number; oy: number; sx: number; sy: number } | null>(null);
  const [error, setError] = useState("");
  const [aspectId, setAspectId] = useState("free");
  const [penColor, setPenColor] = useState(PEN_COLORS[0]!);
  const [penWidth, setPenWidth] = useState(3);
  const [rotation, setRotation] = useState(0);

  const redraw = useCallback(() => {
    if (!img || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const maxW = 720;
    const rad = ((rotation % 360) * Math.PI) / 180;
    const rotated = Math.abs(rotation % 180) === 90;
    const baseW = rotated ? img.height : img.width;
    const baseH = rotated ? img.width : img.height;
    const scale = Math.min(1, maxW / baseW);
    canvas.width = Math.round(baseW * scale);
    canvas.height = Math.round(baseH * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rad);
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.restore();

    if (mode === "crop") {
      ctx.fillStyle = "rgba(15,23,42,0.45)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      ctx.rect(crop.x, crop.y, crop.w, crop.h);
      ctx.clip();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      ctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
      ctx.strokeStyle = "#2563eb";
      ctx.lineWidth = 2;
      ctx.strokeRect(crop.x, crop.y, crop.w, crop.h);
    }
  }, [img, crop, mode, rotation]);

  useEffect(() => {
    redraw();
  }, [redraw]);

  function onFile(file: File | null) {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setError("Choose an image.");
      return;
    }
    setError("");
    historyRef.current = [];
    setRotation(0);
    const url = URL.createObjectURL(file);
    setSrc(url);
    const image = new Image();
    image.onload = () => {
      setImg(image);
      const maxW = 720;
      const scale = Math.min(1, maxW / image.width);
      const cw = Math.round(image.width * scale);
      const ch = Math.round(image.height * scale);
      setCrop({
        x: 20,
        y: 20,
        w: Math.min(240, Math.round(cw * 0.5)),
        h: Math.min(180, Math.round(ch * 0.5)),
      });
    };
    image.src = url;
  }

  function applyAspect(id: string, nextW?: number) {
    setAspectId(id);
    const ratio = ASPECTS.find((a) => a.id === id)?.ratio ?? null;
    if (ratio == null || !canvasRef.current) return;
    setCrop((c) => {
      const w = nextW ?? c.w;
      const h = Math.max(40, Math.round(w / ratio));
      const canvas = canvasRef.current!;
      return {
        ...c,
        w: Math.min(w, canvas.width),
        h: Math.min(h, canvas.height),
        x: Math.max(0, Math.min(c.x, canvas.width - Math.min(w, canvas.width))),
        y: Math.max(0, Math.min(c.y, canvas.height - Math.min(h, canvas.height))),
      };
    });
  }

  function pointerPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * e.currentTarget.width,
      y: ((e.clientY - rect.top) / rect.height) * e.currentTarget.height,
    };
  }

  function pushUndo() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    try {
      historyRef.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
      if (historyRef.current.length > 25) historyRef.current.shift();
    } catch {
      /* ignore */
    }
  }

  function undoDraw() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const snap = historyRef.current.pop();
    if (!canvas || !ctx || !snap) {
      redraw();
      return;
    }
    ctx.putImageData(snap, 0, 0);
  }

  function onPointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    const p = pointerPos(e);
    if (mode === "crop") {
      setDrag({ ox: p.x, oy: p.y, sx: crop.x, sy: crop.y });
      return;
    }
    pushUndo();
    setDrawing(true);
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    ctx.strokeStyle = penColor;
    ctx.lineWidth = penWidth;
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
    // Export from original image using crop relative to display, accounting for rotation via canvas snapshot
    const out = document.createElement("canvas");
    out.width = Math.max(1, Math.round(crop.w));
    out.height = Math.max(1, Math.round(crop.h));
    const ctx = out.getContext("2d");
    if (!ctx) return;
    // Snapshot current display (includes rotation) then crop
    const temp = document.createElement("canvas");
    temp.width = canvas.width;
    temp.height = canvas.height;
    const tctx = temp.getContext("2d");
    if (!tctx) return;
    const rad = ((rotation % 360) * Math.PI) / 180;
    const rotated = Math.abs(rotation % 180) === 90;
    const baseW = rotated ? img.height : img.width;
    const scale = Math.min(1, 720 / baseW);
    const drawW = Math.round(img.width * scale);
    const drawH = Math.round(img.height * scale);
    tctx.translate(temp.width / 2, temp.height / 2);
    tctx.rotate(rad);
    tctx.drawImage(img, -drawW / 2, -drawH / 2, drawW, drawH);
    ctx.drawImage(temp, crop.x, crop.y, crop.w, crop.h, 0, 0, out.width, out.height);
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
      description="Crop with aspect presets, rotate, or annotate with colored pens — then download PNG. Local only."
      tip="Crop mode: drag the blue box. Draw mode: choose pen color/size, scribble, undo strokes, then download."
    >
      <div className="flex flex-wrap gap-2">
        <label className="btn-primary cursor-pointer">
          Choose image
          <input type="file" accept="image/*" className="sr-only" onChange={(e) => onFile(e.target.files?.[0] || null)} />
        </label>
        <button type="button" className={mode === "crop" ? "btn-primary" : "btn-secondary"} onClick={() => setMode("crop")}>
          Crop
        </button>
        <button
          type="button"
          className={mode === "draw" ? "btn-primary" : "btn-secondary"}
          onClick={() => {
            setMode("draw");
            historyRef.current = [];
            // Force clean draw base
            window.requestAnimationFrame(() => {
              redraw();
            });
          }}
        >
          Annotate
        </button>
        <button
          type="button"
          className="btn-secondary"
          disabled={!img}
          onClick={() => setRotation((r) => (r + 90) % 360)}
        >
          Rotate 90°
        </button>
        {mode === "crop" ? (
          <button type="button" className="btn-primary" disabled={!img} onClick={exportCrop}>
            Download crop
          </button>
        ) : (
          <>
            <button type="button" className="btn-secondary" disabled={!img} onClick={undoDraw}>
              Undo stroke
            </button>
            <button type="button" className="btn-primary" disabled={!img} onClick={exportCanvas}>
              Download annotated
            </button>
          </>
        )}
      </div>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      {mode === "crop" && img ? (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex flex-wrap gap-1">
            {ASPECTS.map((a) => (
              <button
                key={a.id}
                type="button"
                className={
                  aspectId === a.id
                    ? "rounded-md bg-brand-600 px-2 py-1 text-xs font-semibold text-white"
                    : "rounded-md bg-white px-2 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
                }
                onClick={() => applyAspect(a.id)}
              >
                {a.label}
              </button>
            ))}
          </div>
          <label>
            Width{" "}
            <input
              type="range"
              min={40}
              max={canvasRef.current?.width || 400}
              value={crop.w}
              onChange={(e) => {
                const w = Number(e.target.value);
                const ratio = ASPECTS.find((a) => a.id === aspectId)?.ratio ?? null;
                if (ratio != null) applyAspect(aspectId, w);
                else setCrop((c) => ({ ...c, w }));
              }}
            />
          </label>
          {aspectId === "free" ? (
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
          ) : null}
        </div>
      ) : null}
      {mode === "draw" && img ? (
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <div className="flex gap-1">
            {PEN_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                aria-label={`Pen ${c}`}
                className={`h-7 w-7 rounded-full border-2 ${penColor === c ? "border-slate-900" : "border-slate-200"}`}
                style={{ background: c }}
                onClick={() => setPenColor(c)}
              />
            ))}
          </div>
          <label>
            Pen {penWidth}px{" "}
            <input
              type="range"
              min={1}
              max={16}
              value={penWidth}
              onChange={(e) => setPenWidth(Number(e.target.value))}
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
