"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { evalExpr, formatCalc } from "@/lib/math-expr";

type Range = { xmin: number; xmax: number; ymin: number; ymax: number };

const DEFAULT_RANGE: Range = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

const PRESETS = [
  { label: "sin(x)", y1: "sin(x)", y2: "" },
  { label: "x² − 4", y1: "x^2-4", y2: "" },
  { label: "sin & cos", y1: "sin(x)", y2: "cos(x)" },
  { label: "exp(-x²)", y1: "exp(-x^2)", y2: "" },
  { label: "abs(x)", y1: "abs(x)", y2: "x" },
  { label: "1/x", y1: "1/x", y2: "" },
  { label: "ln|x|", y1: "ln(abs(x))", y2: "" },
  { label: "x³ − x", y1: "x^3-x", y2: "" },
  { label: "sqrt(x)", y1: "sqrt(x)", y2: "" },
  { label: "e^x", y1: "exp(x)", y2: "" },
];

type Point = { x: number; y: number };

function sampleCurve(
  expression: string,
  range: Range,
  steps: number
): { points: Point[]; error?: string } {
  if (!expression.trim()) return { points: [] };
  const points: Point[] = [];
  try {
    for (let i = 0; i <= steps; i += 1) {
      const x = range.xmin + ((range.xmax - range.xmin) * i) / steps;
      try {
        const y = evalExpr(expression, { x, ans: 0 });
        points.push({ x, y: Number.isFinite(y) ? y : Number.NaN });
      } catch {
        points.push({ x, y: Number.NaN });
      }
    }
    return { points };
  } catch (err) {
    return { points: [], error: err instanceof Error ? err.message : "Plot error" };
  }
}

function autoRangeFromCurves(curves: Point[][]): Range | null {
  const ys: number[] = [];
  for (const curve of curves) {
    for (const point of curve) {
      if (Number.isFinite(point.y) && Math.abs(point.y) < 1e6) ys.push(point.y);
    }
  }
  if (ys.length < 2) return null;
  ys.sort((a, b) => a - b);
  const lo = ys[Math.floor(ys.length * 0.05)]!;
  const hi = ys[Math.floor(ys.length * 0.95)]!;
  const pad = Math.max(0.5, (hi - lo) * 0.15);
  return {
    xmin: -10,
    xmax: 10,
    ymin: lo - pad,
    ymax: hi + pad,
  };
}

export default function TIGrapher() {
  const searchParams = useSearchParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [y1, setY1] = useState(() => searchParams.get("y1") || "sin(x)");
  const [y2, setY2] = useState(() => searchParams.get("y2") || "");
  const [range, setRange] = useState<Range>(DEFAULT_RANGE);
  const [error, setError] = useState("");
  const [traceX, setTraceX] = useState(0);
  const [shade, setShade] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [hiRes, setHiRes] = useState(true);

  useEffect(() => {
    const fromY1 = searchParams.get("y1");
    const fromY2 = searchParams.get("y2");
    if (fromY1) setY1(fromY1);
    if (fromY2) setY2(fromY2);
  }, [searchParams]);

  const steps = hiRes ? 720 : 320;
  const curve1 = useMemo(() => sampleCurve(y1, range, steps), [y1, range, steps]);
  const curve2 = useMemo(() => sampleCurve(y2, range, steps), [y2, range, steps]);

  const tableRows = useMemo(() => {
    const rows: Array<{ x: string; y1: string; y2: string }> = [];
    const count = 15;
    for (let i = 0; i < count; i += 1) {
      const x = range.xmin + ((range.xmax - range.xmin) * i) / (count - 1);
      let v1 = "—";
      let v2 = "—";
      try {
        if (y1.trim()) v1 = formatCalc(evalExpr(y1, { x, ans: 0 }));
      } catch {
        v1 = "ERR";
      }
      try {
        if (y2.trim()) v2 = formatCalc(evalExpr(y2, { x, ans: 0 }));
      } catch {
        v2 = "ERR";
      }
      rows.push({ x: formatCalc(x), y1: v1, y2: v2 });
    }
    return rows;
  }, [range, y1, y2]);

  const traceY1 = useMemo(() => {
    try {
      return y1.trim() ? evalExpr(y1, { x: traceX, ans: 0 }) : Number.NaN;
    } catch {
      return Number.NaN;
    }
  }, [y1, traceX]);

  const traceY2 = useMemo(() => {
    try {
      return y2.trim() ? evalExpr(y2, { x: traceX, ans: 0 }) : Number.NaN;
    } catch {
      return Number.NaN;
    }
  }, [y2, traceX]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const raw = canvas.getContext("2d");
    if (!raw) return;
    const ctx: CanvasRenderingContext2D = raw;

    const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    const cssW = canvas.clientWidth;
    const cssH = canvas.clientHeight;
    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const { xmin, xmax, ymin, ymax } = range;
    const w = cssW;
    const h = cssH;
    const sx = (x: number) => ((x - xmin) / (xmax - xmin)) * w;
    const sy = (y: number) => h - ((y - ymin) / (ymax - ymin)) * h;

    const bg = getComputedStyle(document.documentElement).getPropertyValue("--ti-lcd").trim() || "#c5d4a1";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    ctx.strokeStyle = "rgba(40, 55, 20, 0.18)";
    ctx.lineWidth = 1;
    const xStep = niceStep(xmax - xmin);
    const yStep = niceStep(ymax - ymin);
    for (let gx = Math.ceil(xmin / xStep) * xStep; gx <= xmax; gx += xStep) {
      ctx.beginPath();
      ctx.moveTo(sx(gx), 0);
      ctx.lineTo(sx(gx), h);
      ctx.stroke();
    }
    for (let gy = Math.ceil(ymin / yStep) * yStep; gy <= ymax; gy += yStep) {
      ctx.beginPath();
      ctx.moveTo(0, sy(gy));
      ctx.lineTo(w, sy(gy));
      ctx.stroke();
    }

    ctx.strokeStyle = "#1f2a12";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(sx(xmin), sy(0));
    ctx.lineTo(sx(xmax), sy(0));
    ctx.moveTo(sx(0), sy(ymin));
    ctx.lineTo(sx(0), sy(ymax));
    ctx.stroke();

    ctx.fillStyle = "#1f2a12";
    ctx.font = "11px ui-monospace, monospace";
    ctx.fillText(`x ${formatCalc(xmin)}`, 6, Math.min(h - 6, Math.max(12, sy(0) - 6)));
    ctx.fillText(formatCalc(xmax), w - 40, Math.min(h - 6, Math.max(12, sy(0) - 6)));
    ctx.fillText(formatCalc(ymax), Math.min(w - 40, Math.max(4, sx(0) + 4)), 12);
    ctx.fillText(formatCalc(ymin), Math.min(w - 40, Math.max(4, sx(0) + 4)), h - 6);

    function drawCurve(points: Point[], color: string, fill: boolean) {
      if (fill && points.length > 1) {
        ctx.beginPath();
        let started = false;
        for (const point of points) {
          if (!Number.isFinite(point.y)) {
            started = false;
            continue;
          }
          const px = sx(point.x);
          const py = sy(point.y);
          if (!started) {
            ctx.moveTo(px, sy(0));
            ctx.lineTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        const last = points[points.length - 1];
        if (last) ctx.lineTo(sx(last.x), sy(0));
        ctx.closePath();
        if (color.startsWith("#")) ctx.fillStyle = `${color}33`;
        ctx.fill();
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      let started = false;
      for (const point of points) {
        if (!Number.isFinite(point.y) || point.y < ymin - 40 || point.y > ymax + 40) {
          started = false;
          continue;
        }
        const px = sx(point.x);
        const py = sy(point.y);
        if (!started) {
          ctx.moveTo(px, py);
          started = true;
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
    }

    const err = curve1.error || curve2.error || "";
    setError(err);
    drawCurve(curve1.points, "#0b3d1a", shade && !!y1.trim());
    if (y2.trim()) drawCurve(curve2.points, "#1d4ed8", false);

    ctx.strokeStyle = "rgba(185, 28, 28, 0.55)";
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(sx(traceX), 0);
    ctx.lineTo(sx(traceX), h);
    ctx.stroke();
    ctx.setLineDash([]);

    if (Number.isFinite(traceY1)) {
      ctx.fillStyle = "#b91c1c";
      ctx.beginPath();
      ctx.arc(sx(traceX), sy(traceY1), 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
    if (Number.isFinite(traceY2)) {
      ctx.fillStyle = "#1d4ed8";
      ctx.beginPath();
      ctx.arc(sx(traceX), sy(traceY2), 4.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }, [curve1, curve2, range, shade, traceX, traceY1, traceY2, y1, y2]);

  function niceStep(span: number): number {
    const raw = span / 8;
    const pow = 10 ** Math.floor(Math.log10(Math.max(raw, 1e-9)));
    const n = raw / pow;
    if (n < 1.5) return pow;
    if (n < 3.5) return 2 * pow;
    if (n < 7.5) return 5 * pow;
    return 10 * pow;
  }

  function zoom(factor: number) {
    setRange((prev) => {
      const mx = (prev.xmin + prev.xmax) / 2;
      const my = (prev.ymin + prev.ymax) / 2;
      const hx = ((prev.xmax - prev.xmin) / 2) * factor;
      const hy = ((prev.ymax - prev.ymin) / 2) * factor;
      return { xmin: mx - hx, xmax: mx + hx, ymin: my - hy, ymax: my + hy };
    });
  }

  function fitY() {
    const next = autoRangeFromCurves([curve1.points, curve2.points]);
    if (next) setRange((prev) => ({ ...prev, ymin: next.ymin, ymax: next.ymax }));
  }

  function exportPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `ke-graph-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function onCanvasClick(event: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    const x = range.xmin + ratio * (range.xmax - range.xmin);
    setTraceX(Math.round(x * 1000) / 1000);
  }

  return (
    <div className="ti-shell ti-shell--wide">
      <div className="ti-brand-row">
        <span className="ti-brand">KE Graph CE</span>
        <span className="ti-sub">Function plotter · hi-res · fit · export</span>
      </div>
      <div className="ti-layout">
        <div>
          <div className="ti-graph-controls">
            <label className="ti-field">
              Y1=
              <input
                className="ti-input"
                value={y1}
                onChange={(event) => setY1(event.target.value)}
                spellCheck={false}
                aria-label="First function of x"
              />
            </label>
            <label className="ti-field">
              Y2=
              <input
                className="ti-input"
                value={y2}
                onChange={(event) => setY2(event.target.value)}
                spellCheck={false}
                placeholder="optional second curve"
                aria-label="Second function of x"
              />
            </label>
            <div className="ti-range-grid">
              {(["xmin", "xmax", "ymin", "ymax"] as const).map((key) => (
                <label key={key} className="ti-field">
                  {key}
                  <input
                    className="ti-input"
                    type="number"
                    value={range[key]}
                    onChange={(event) =>
                      setRange((prev) => ({ ...prev, [key]: Number(event.target.value) }))
                    }
                  />
                </label>
              ))}
            </div>
            <div className="ti-graph-actions">
              <button type="button" className="ti-key" onClick={() => zoom(0.7)}>
                Zoom in
              </button>
              <button type="button" className="ti-key" onClick={() => zoom(1.4)}>
                Zoom out
              </button>
              <button type="button" className="ti-key" onClick={() => setRange(DEFAULT_RANGE)}>
                ZStandard
              </button>
              <button type="button" className="ti-key" onClick={fitY}>
                Fit Y
              </button>
              <button
                type="button"
                className={`ti-key ${shade ? "ti-key-2nd-on" : ""}`}
                onClick={() => setShade((value) => !value)}
              >
                Shade Y1
              </button>
              <button
                type="button"
                className={`ti-key ${showTable ? "ti-key-2nd-on" : ""}`}
                onClick={() => setShowTable((value) => !value)}
              >
                Table
              </button>
              <button
                type="button"
                className={`ti-key ${hiRes ? "ti-key-2nd-on" : ""}`}
                onClick={() => setHiRes((value) => !value)}
              >
                Hi-res
              </button>
              <button type="button" className="ti-key" onClick={exportPng}>
                Export PNG
              </button>
            </div>
            <div className="ti-presets">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="ti-preset"
                  onClick={() => {
                    setY1(preset.y1);
                    setY2(preset.y2);
                  }}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
          <canvas
            ref={canvasRef}
            className="ti-canvas ti-canvas--tall"
            aria-label="Function graph"
            onClick={onCanvasClick}
          />
          <div className="ti-trace">
            <label className="ti-field">
              Trace X=
              <input
                className="ti-input"
                type="number"
                step="0.1"
                value={traceX}
                onChange={(event) => setTraceX(Number(event.target.value))}
              />
            </label>
            <p className="ti-trace-readout">
              Y1= {Number.isFinite(traceY1) ? formatCalc(traceY1) : "—"}
              {y2.trim() ? ` · Y2= ${Number.isFinite(traceY2) ? formatCalc(traceY2) : "—"}` : ""}
            </p>
          </div>
          {error && <p className="ti-error">{error}</p>}
        </div>
        {showTable && (
          <aside className="ti-side">
            <h3 className="ti-side-title">Table</h3>
            <div className="ti-table-wrap">
              <table className="ti-table">
                <thead>
                  <tr>
                    <th>X</th>
                    <th>Y1</th>
                    <th>Y2</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr key={row.x}>
                      <td>
                        <button
                          type="button"
                          className="ti-table-x"
                          onClick={() => setTraceX(Number(row.x))}
                        >
                          {row.x}
                        </button>
                      </td>
                      <td>{row.y1}</td>
                      <td>{row.y2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ti-hint">Click the graph or an X cell to move the trace.</p>
          </aside>
        )}
      </div>
      <p className="ti-hint">
        Plots functions of x (not AI images). Supports abs, ln, exp, 1/x, nCr-style constants from
        the computer. Open from Calculator with → Graph.
      </p>
    </div>
  );
}
