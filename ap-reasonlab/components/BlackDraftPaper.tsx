"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import StudyToolShell from "@/components/StudyToolShell";
import RichContent from "@/components/RichContent";

const STORAGE_KEY = "ke-black-draft-v1";

type DraftState = {
  notes: string;
  ink: string;
  brush: number;
  color: string;
};

const COLORS = ["#f8fafc", "#38bdf8", "#a78bfa", "#fbbf24", "#fb7185", "#4ade80"];

/**
 * Dual-blended black draft paper:
 * left = typed Markdown notes, right = high-DPI stylus/mouse canvas.
 */
export default function BlackDraftPaper() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [notes, setNotes] = useState("");
  const [brush, setBrush] = useState(3);
  const [color, setColor] = useState(COLORS[0]!);
  const [ink, setInk] = useState("pen");
  const [savedHint, setSavedHint] = useState("");
  const [showPreview, setShowPreview] = useState(true);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const rect = wrap.getBoundingClientRect();
    const w = Math.max(320, Math.floor(rect.width));
    const h = Math.max(420, Math.floor(rect.height));
    const prev = canvas.toDataURL();
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Restore previous strokes after resize when possible
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, w, h);
    };
    if (prev.startsWith("data:image")) img.src = prev;
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<DraftState> & { image?: string };
        if (parsed.notes) setNotes(parsed.notes);
        if (parsed.brush) setBrush(parsed.brush);
        if (parsed.color) setColor(parsed.color);
        if (parsed.ink) setInk(parsed.ink);
        if (parsed.image) {
          requestAnimationFrame(() => {
            resizeCanvas();
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;
            const img = new Image();
            img.onload = () => {
              const rect = canvas.getBoundingClientRect();
              ctx.drawImage(img, 0, 0, rect.width, rect.height);
            };
            img.src = String(parsed.image);
          });
          return;
        }
      }
    } catch {
      /* ignore */
    }
    requestAnimationFrame(resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    const onResize = () => resizeCanvas();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [resizeCanvas]);

  function pointFromEvent(event: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      pressure: event.pressure > 0 ? event.pressure : 0.5,
    };
  }

  function startDraw(event: React.PointerEvent<HTMLCanvasElement>) {
    event.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.setPointerCapture(event.pointerId);
    drawing.current = true;
    const p = pointFromEvent(event);
    last.current = p ? { x: p.x, y: p.y } : null;
  }

  function moveDraw(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const p = pointFromEvent(event);
    if (!ctx || !p || !last.current) return;
    const width = ink === "eraser" ? brush * 4 : brush * (0.55 + p.pressure);
    ctx.globalCompositeOperation = ink === "eraser" ? "destination-out" : "source-over";
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    last.current = { x: p.x, y: p.y };
  }

  function endDraw(event: React.PointerEvent<HTMLCanvasElement>) {
    drawing.current = false;
    last.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      /* ignore */
    }
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
  }

  function saveDraft() {
    const canvas = canvasRef.current;
    const payload = {
      notes,
      brush,
      color,
      ink,
      image: canvas?.toDataURL("image/png") || "",
      savedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    setSavedHint("Saved on this device.");
    window.setTimeout(() => setSavedHint(""), 2000);
  }

  function exportPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `ke-draft-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <StudyToolShell
      title="Black draft paper"
      description="Dual-blended dark desk: type Markdown notes on the left, draw with mouse or stylus on the right. Optimized for high-DPI screens and pen pressure."
      tip="Tip: use a stylus on Chromebook / Surface / iPad (Safari). Pressure thickens strokes. Everything stays in this browser until you export."
    >
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="btn-primary" onClick={saveDraft}>
          Save draft
        </button>
        <button type="button" className="btn-secondary" onClick={exportPng}>
          Export drawing PNG
        </button>
        <button type="button" className="btn-ghost" onClick={clearCanvas}>
          Clear drawing
        </button>
        <button
          type="button"
          className="btn-ghost"
          onClick={() => setShowPreview((v) => !v)}
        >
          {showPreview ? "Hide note preview" : "Show note preview"}
        </button>
        {savedHint ? <span className="text-xs text-emerald-700">{savedHint}</span> : null}
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-800">
            Typed notes
            <textarea
              className="mt-2 min-h-[22rem] w-full resize-y rounded-2xl border border-slate-700 bg-[#0b1220] px-4 py-3 font-mono text-sm leading-relaxed text-slate-100 outline-none ring-sky-400 focus:ring-2"
              placeholder="Write FRQ outlines, formulas ($F=ma$), checklists…"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </label>
          {showPreview && notes.trim() ? (
            <div className="max-h-64 overflow-auto rounded-2xl border border-slate-700 bg-[#111827] p-4 text-slate-100">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                Live preview
              </p>
              <RichContent className="text-sm text-slate-100">{notes}</RichContent>
            </div>
          ) : null}
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-700 bg-[#0b1220] p-3">
            <label className="text-xs text-slate-300">
              Brush
              <input
                type="range"
                min={1}
                max={24}
                value={brush}
                onChange={(e) => setBrush(Number(e.target.value))}
                className="ml-2 align-middle"
              />
              <span className="ml-1 text-slate-400">{brush}px</span>
            </label>
            <div className="flex gap-1">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  aria-label={`Ink ${c}`}
                  onClick={() => {
                    setColor(c);
                    setInk("pen");
                  }}
                  className={`h-7 w-7 rounded-full border-2 ${
                    color === c && ink === "pen" ? "border-white" : "border-transparent"
                  }`}
                  style={{ background: c }}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setInk("eraser")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                ink === "eraser"
                  ? "bg-slate-200 text-slate-900"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              Eraser
            </button>
          </div>

          <div
            ref={wrapRef}
            className="relative min-h-[28rem] overflow-hidden rounded-2xl border border-slate-700 bg-[radial-gradient(circle_at_20%_20%,#1e293b_0%,#020617_55%,#000_100%)] shadow-inner"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full touch-none cursor-crosshair"
              onPointerDown={startDraw}
              onPointerMove={moveDraw}
              onPointerUp={endDraw}
              onPointerCancel={endDraw}
              onPointerLeave={endDraw}
            />
          </div>
          <p className="text-xs text-slate-500">
            Drawing uses devicePixelRatio scaling (capped at 2.5×) for sharper lines on retina /
            high-DPI displays without overloading weak GPUs.
          </p>
        </div>
      </div>
    </StudyToolShell>
  );
}
