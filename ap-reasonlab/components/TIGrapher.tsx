"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  evalExpr,
  findIntersections,
  findZeros,
  formatCalc,
  numericDerivative,
  numericIntegral,
} from "@/lib/math-expr";
import { openToolboxWithPrefill } from "@/lib/ai-toolbox-prefill";

type Range = { xmin: number; xmax: number; ymin: number; ymax: number };
type GraphMode = "function" | "parametric" | "polar";

const DEFAULT_RANGE: Range = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };
const TRIG_RANGE: Range = {
  xmin: -2 * Math.PI,
  xmax: 2 * Math.PI,
  ymin: -2,
  ymax: 2,
};

const PRESETS: Array<{
  label: string;
  mode?: GraphMode;
  y1?: string;
  y2?: string;
  y3?: string;
  xt?: string;
  yt?: string;
  r?: string;
  range?: Range;
}> = [
  { label: "sin(x)", y1: "sin(x)", y2: "", range: TRIG_RANGE },
  { label: "x² − 4", y1: "x^2-4", y2: "" },
  { label: "sin & cos", y1: "sin(x)", y2: "cos(x)", range: TRIG_RANGE },
  { label: "exp(-x²)", y1: "exp(-x^2)", y2: "" },
  { label: "x³ − x", y1: "x^3-x", y2: "", y3: "3x^2-1" },
  { label: "1/x", y1: "1/x", y2: "" },
  { label: "ln|x|", y1: "ln(abs(x))", y2: "" },
  { label: "abs", y1: "abs(x)", y2: "x" },
  { label: "e^x", y1: "exp(x)", y2: "" },
  {
    label: "logistic",
    y1: "1/(1+exp(-x))",
    y2: "",
    range: { xmin: -8, xmax: 8, ymin: -0.2, ymax: 1.2 },
  },
  {
    label: "sin(x)/x",
    y1: "sin(x)/x",
    y2: "",
    range: { xmin: -4 * Math.PI, xmax: 4 * Math.PI, ymin: -0.4, ymax: 1.2 },
  },
  {
    label: "projectile",
    y1: "-0.5*x^2+4*x",
    y2: "",
    range: { xmin: -1, xmax: 9, ymin: -2, ymax: 10 },
  },
  {
    label: "circle (param)",
    mode: "parametric",
    xt: "5*cos(t)",
    yt: "5*sin(t)",
    range: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 },
  },
  {
    label: "rose (polar)",
    mode: "polar",
    r: "3*cos(2*θ)",
    range: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 },
  },
  {
    label: "cardioid",
    mode: "polar",
    r: "2*(1+cos(θ))",
    range: { xmin: -1, xmax: 5, ymin: -3.5, ymax: 3.5 },
  },
];

type Point = { x: number; y: number };
const COLORS = ["#0b3d1a", "#1d4ed8", "#b45309", "#7c3aed"];

function sampleY(
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
        const y = evalExpr(expression, { x, t: x, θ: x, theta: x, ans: 0 });
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

function sampleParametric(
  xt: string,
  yt: string,
  tmin: number,
  tmax: number,
  steps: number
): { points: Point[]; error?: string } {
  if (!xt.trim() || !yt.trim()) return { points: [] };
  const points: Point[] = [];
  try {
    for (let i = 0; i <= steps; i += 1) {
      const t = tmin + ((tmax - tmin) * i) / steps;
      try {
        const x = evalExpr(xt, { t, x: t, θ: t, theta: t, ans: 0 });
        const y = evalExpr(yt, { t, x: t, θ: t, theta: t, ans: 0 });
        points.push({
          x: Number.isFinite(x) ? x : Number.NaN,
          y: Number.isFinite(y) ? y : Number.NaN,
        });
      } catch {
        points.push({ x: Number.NaN, y: Number.NaN });
      }
    }
    return { points };
  } catch (err) {
    return { points: [], error: err instanceof Error ? err.message : "Plot error" };
  }
}

function samplePolar(
  rExpr: string,
  steps: number
): { points: Point[]; error?: string } {
  if (!rExpr.trim()) return { points: [] };
  const points: Point[] = [];
  try {
    for (let i = 0; i <= steps; i += 1) {
      const th = (2 * Math.PI * i) / steps;
      try {
        const r = evalExpr(rExpr, { θ: th, theta: th, t: th, x: th, ans: 0 });
        if (!Number.isFinite(r)) {
          points.push({ x: Number.NaN, y: Number.NaN });
          continue;
        }
        points.push({ x: r * Math.cos(th), y: r * Math.sin(th) });
      } catch {
        points.push({ x: Number.NaN, y: Number.NaN });
      }
    }
    return { points };
  } catch (err) {
    return { points: [], error: err instanceof Error ? err.message : "Plot error" };
  }
}

function autoRangeFromCurves(curves: Point[][], keepX?: Range): Range | null {
  const ys: number[] = [];
  const xs: number[] = [];
  for (const curve of curves) {
    for (const point of curve) {
      if (Number.isFinite(point.y) && Math.abs(point.y) < 1e6) ys.push(point.y);
      if (Number.isFinite(point.x) && Math.abs(point.x) < 1e6) xs.push(point.x);
    }
  }
  if (ys.length < 2) return null;
  ys.sort((a, b) => a - b);
  const lo = ys[Math.floor(ys.length * 0.05)]!;
  const hi = ys[Math.floor(ys.length * 0.95)]!;
  const pad = Math.max(0.5, (hi - lo) * 0.15);
  if (keepX) {
    return { xmin: keepX.xmin, xmax: keepX.xmax, ymin: lo - pad, ymax: hi + pad };
  }
  if (xs.length < 2) {
    return { xmin: -10, xmax: 10, ymin: lo - pad, ymax: hi + pad };
  }
  xs.sort((a, b) => a - b);
  const xlo = xs[Math.floor(xs.length * 0.02)]!;
  const xhi = xs[Math.floor(xs.length * 0.98)]!;
  const xpad = Math.max(0.5, (xhi - xlo) * 0.1);
  return { xmin: xlo - xpad, xmax: xhi + xpad, ymin: lo - pad, ymax: hi + pad };
}

function niceStep(span: number): number {
  const raw = span / 8;
  const pow = 10 ** Math.floor(Math.log10(Math.max(raw, 1e-9)));
  const n = raw / pow;
  if (n < 1.5) return pow;
  if (n < 3.5) return 2 * pow;
  if (n < 7.5) return 5 * pow;
  return 10 * pow;
}

export default function TIGrapher() {
  const searchParams = useSearchParams();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dragRef = useRef<{ x: number; y: number; range: Range } | null>(null);

  const [mode, setMode] = useState<GraphMode>("function");
  const [y1, setY1] = useState(() => searchParams.get("y1") || "sin(x)");
  const [y2, setY2] = useState(() => searchParams.get("y2") || "");
  const [y3, setY3] = useState("");
  const [y4, setY4] = useState("");
  const [xt, setXt] = useState("5*cos(t)");
  const [yt, setYt] = useState("5*sin(t)");
  const [rExpr, setRExpr] = useState("2*(1+cos(θ))");
  const [tmin, setTmin] = useState(0);
  const [tmax, setTmax] = useState(2 * Math.PI);
  const [range, setRange] = useState<Range>(DEFAULT_RANGE);
  const [error, setError] = useState("");
  const [traceX, setTraceX] = useState(0);
  const [shade, setShade] = useState(true);
  const [shadeBetween, setShadeBetween] = useState(false);
  const [showDeriv, setShowDeriv] = useState(false);
  const [showTable, setShowTable] = useState(true);
  const [hiRes, setHiRes] = useState(true);
  const [showGrid, setShowGrid] = useState(true);
  const [showTangent, setShowTangent] = useState(false);
  const [intA, setIntA] = useState(-1);
  const [intB, setIntB] = useState(1);
  const [showIntegral, setShowIntegral] = useState(false);
  const [analysis, setAnalysis] = useState("");

  useEffect(() => {
    const fromY1 = searchParams.get("y1");
    const fromY2 = searchParams.get("y2");
    if (fromY1) setY1(fromY1);
    if (fromY2) setY2(fromY2);
  }, [searchParams]);

  const steps = hiRes ? 720 : 320;

  const curves = useMemo(() => {
    if (mode === "parametric") {
      return [sampleParametric(xt, yt, tmin, tmax, steps)];
    }
    if (mode === "polar") {
      return [samplePolar(rExpr, steps)];
    }
    return [y1, y2, y3, y4].map((expr) => sampleY(expr, range, steps));
  }, [mode, xt, yt, tmin, tmax, rExpr, y1, y2, y3, y4, range, steps]);

  const derivCurve = useMemo(() => {
    if (mode !== "function" || !showDeriv || !y1.trim()) return { points: [] as Point[] };
    const points: Point[] = [];
    for (let i = 0; i <= steps; i += 1) {
      const x = range.xmin + ((range.xmax - range.xmin) * i) / steps;
      try {
        const y = numericDerivative(y1, x);
        points.push({ x, y: Number.isFinite(y) ? y : Number.NaN });
      } catch {
        points.push({ x, y: Number.NaN });
      }
    }
    return { points };
  }, [mode, showDeriv, y1, range, steps]);

  const tableRows = useMemo(() => {
    if (mode !== "function") return [];
    const rows: Array<{ x: string; y1: string; y2: string; y3: string }> = [];
    const count = 15;
    for (let i = 0; i < count; i += 1) {
      const x = range.xmin + ((range.xmax - range.xmin) * i) / (count - 1);
      const cell = (expr: string) => {
        if (!expr.trim()) return "—";
        try {
          return formatCalc(evalExpr(expr, { x, ans: 0 }));
        } catch {
          return "ERR";
        }
      };
      rows.push({
        x: formatCalc(x),
        y1: cell(y1),
        y2: cell(y2),
        y3: cell(y3),
      });
    }
    return rows;
  }, [mode, range, y1, y2, y3]);

  const traceY1 = useMemo(() => {
    if (mode !== "function" || !y1.trim()) return Number.NaN;
    try {
      return evalExpr(y1, { x: traceX, ans: 0 });
    } catch {
      return Number.NaN;
    }
  }, [mode, y1, traceX]);

  const traceDeriv = useMemo(() => {
    if (mode !== "function" || !y1.trim()) return Number.NaN;
    try {
      return numericDerivative(y1, traceX);
    } catch {
      return Number.NaN;
    }
  }, [mode, y1, traceX]);

  const integralValue = useMemo(() => {
    if (!showIntegral || mode !== "function" || !y1.trim()) return Number.NaN;
    try {
      return numericIntegral(y1, intA, intB);
    } catch {
      return Number.NaN;
    }
  }, [showIntegral, mode, y1, intA, intB]);

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

    const bg =
      getComputedStyle(document.documentElement).getPropertyValue("--ti-lcd").trim() || "#c5d4a1";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    if (showGrid) {
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

    function drawCurve(points: Point[], color: string, fill: boolean, a?: number, b?: number) {
      if (fill && points.length > 1) {
        ctx.beginPath();
        let started = false;
        for (const point of points) {
          if (!Number.isFinite(point.y)) {
            started = false;
            continue;
          }
          if (a !== undefined && b !== undefined && (point.x < a || point.x > b)) {
            if (started) {
              ctx.lineTo(sx(point.x), sy(0));
              started = false;
            }
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
        const last = points.filter((p) => Number.isFinite(p.y)).at(-1);
        if (last && started) ctx.lineTo(sx(last.x), sy(0));
        ctx.closePath();
        ctx.fillStyle = `${color}33`;
        ctx.fill();
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      let started = false;
      for (const point of points) {
        if (!Number.isFinite(point.y) || !Number.isFinite(point.x)) {
          started = false;
          continue;
        }
        if (point.y < ymin - 40 || point.y > ymax + 40) {
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

    /** Shade region where Y1 ≥ Y2 between the two sampled curves. */
    function drawShadeBetween(upper: Point[], lower: Point[], color: string) {
      if (upper.length < 2 || lower.length < 2) return;
      const n = Math.min(upper.length, lower.length);
      let band: Array<{ x: number; y1: number; y2: number }> = [];
      const flush = () => {
        if (band.length < 2) {
          band = [];
          return;
        }
        ctx.beginPath();
        ctx.moveTo(sx(band[0]!.x), sy(band[0]!.y1));
        for (let i = 1; i < band.length; i += 1) {
          ctx.lineTo(sx(band[i]!.x), sy(band[i]!.y1));
        }
        for (let i = band.length - 1; i >= 0; i -= 1) {
          ctx.lineTo(sx(band[i]!.x), sy(band[i]!.y2));
        }
        ctx.closePath();
        ctx.fillStyle = `${color}44`;
        ctx.fill();
        band = [];
      };
      for (let i = 0; i < n; i += 1) {
        const a = upper[i]!;
        const b = lower[i]!;
        if (!Number.isFinite(a.y) || !Number.isFinite(b.y) || a.y < b.y) {
          flush();
          continue;
        }
        band.push({ x: a.x, y1: a.y, y2: b.y });
      }
      flush();
    }

    const err = curves.map((c) => c.error).find(Boolean) || "";
    setError(err);

    if (mode === "function") {
      const exprs = [y1, y2, y3, y4];
      if (shadeBetween && y1.trim() && y2.trim() && curves[0] && curves[1]) {
        drawShadeBetween(curves[0].points, curves[1].points, COLORS[0]!);
      }
      curves.forEach((curve, i) => {
        if (!exprs[i]?.trim()) return;
        const fill =
          (shade && !shadeBetween && i === 0 && !showIntegral) ||
          (showIntegral && i === 0);
        drawCurve(
          curve.points,
          COLORS[i]!,
          fill,
          showIntegral && i === 0 ? Math.min(intA, intB) : undefined,
          showIntegral && i === 0 ? Math.max(intA, intB) : undefined
        );
      });
      if (showDeriv) drawCurve(derivCurve.points, "#be123c", false);

      if (showTangent && Number.isFinite(traceY1) && Number.isFinite(traceDeriv)) {
        const m = traceDeriv;
        const b = traceY1 - m * traceX;
        const x0 = xmin;
        const x1 = xmax;
        ctx.strokeStyle = "rgba(185, 28, 28, 0.85)";
        ctx.lineWidth = 1.5;
        ctx.setLineDash([6, 4]);
        ctx.beginPath();
        ctx.moveTo(sx(x0), sy(m * x0 + b));
        ctx.lineTo(sx(x1), sy(m * x1 + b));
        ctx.stroke();
        ctx.setLineDash([]);
      }

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
    } else {
      curves.forEach((curve, i) => drawCurve(curve.points, COLORS[i]!, false));
    }
  }, [
    curves,
    derivCurve,
    range,
    shade,
    shadeBetween,
    showDeriv,
    showGrid,
    showIntegral,
    showTangent,
    traceX,
    traceY1,
    traceDeriv,
    intA,
    intB,
    mode,
    y1,
    y2,
    y3,
    y4,
  ]);

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
    const next = autoRangeFromCurves(
      [...curves.map((c) => c.points), ...(showDeriv ? [derivCurve.points] : [])],
      mode === "function" ? range : undefined
    );
    if (next) setRange(next);
  }

  function exportPng() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `ke-graph-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function clientToWorld(clientX: number, clientY: number) {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const rx = (clientX - rect.left) / rect.width;
    const ry = (clientY - rect.top) / rect.height;
    return {
      x: range.xmin + rx * (range.xmax - range.xmin),
      y: range.ymax - ry * (range.ymax - range.ymin),
    };
  }

  function onPointerDown(event: React.PointerEvent<HTMLCanvasElement>) {
    dragRef.current = {
      x: event.clientX,
      y: event.clientY,
      range: { ...range },
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: React.PointerEvent<HTMLCanvasElement>) {
    if (!dragRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const base = dragRef.current.range;
    const dxPx = event.clientX - dragRef.current.x;
    const dyPx = event.clientY - dragRef.current.y;
    const dx = (dxPx / rect.width) * (base.xmax - base.xmin);
    const dy = (dyPx / rect.height) * (base.ymax - base.ymin);
    setRange({
      xmin: base.xmin - dx,
      xmax: base.xmax - dx,
      ymin: base.ymin + dy,
      ymax: base.ymax + dy,
    });
  }

  function onPointerUp(event: React.PointerEvent<HTMLCanvasElement>) {
    if (dragRef.current && mode === "function") {
      const moved =
        Math.hypot(event.clientX - dragRef.current.x, event.clientY - dragRef.current.y) > 6;
      if (!moved) {
        const world = clientToWorld(event.clientX, event.clientY);
        if (world) setTraceX(Math.round(world.x * 1000) / 1000);
      }
    }
    dragRef.current = null;
  }

  function runZeros() {
    if (!y1.trim()) return;
    try {
      const zs = findZeros(y1, range.xmin, range.xmax);
      if (!zs.length) setAnalysis("No zeros found in window.");
      else {
        setAnalysis(`Zeros of Y1: ${zs.map((z) => formatCalc(z)).join(", ")}`);
        setTraceX(zs[0]!);
      }
    } catch (err) {
      setAnalysis(err instanceof Error ? err.message : "Zero finder error");
    }
  }

  function runIntersect() {
    if (!y1.trim() || !y2.trim()) {
      setAnalysis("Need Y1 and Y2 for intersection.");
      return;
    }
    try {
      const pts = findIntersections(y1, y2, range.xmin, range.xmax);
      if (!pts.length) setAnalysis("No intersections in window.");
      else {
        setAnalysis(
          `Y1 ∩ Y2: ${pts.map((p) => `(${formatCalc(p.x)}, ${formatCalc(p.y)})`).join("; ")}`
        );
        setTraceX(pts[0]!.x);
      }
    } catch (err) {
      setAnalysis(err instanceof Error ? err.message : "Intersect error");
    }
  }

  /** Sample Y1 across the window, then locally refine extrema. */
  function askAiAboutY1(focus: "features" | "zeros" | "integral" = "features") {
    const expr = y1.trim();
    if (!expr) return;
    const focusLine =
      focus === "zeros"
        ? "Focus on zeros / roots: how to find and verify them from the formula and graph."
        : focus === "integral"
          ? "Focus on definite-integral reasoning over the visible window (setup + meaning). Do not dump a graded numeric answer unless I already computed one to check."
          : "Derive / explain the formula, key features (zeros, extrema, asymptotes), and how to reason about the graph.";
    openToolboxWithPrefill({
      category: "ap",
      apTask: "formula-derive",
      prompt: [
        "Analyze this grapher Y1 function (special feature from KE Grapher).",
        `Focus: ${focus}`,
        `Y1 = ${expr}`,
        y2.trim() ? `Y2 = ${y2.trim()}` : "",
        `Window: x∈[${range.xmin}, ${range.xmax}], y∈[${range.ymin}, ${range.ymax}]`,
        focusLine,
      ]
        .filter(Boolean)
        .join("\n"),
    });
  }

  function askAiAboutAnalysis() {
    if (!analysis.trim()) return;
    openToolboxWithPrefill({
      category: "ap",
      apTask: "formula-derive",
      prompt: [
        "Interpret this grapher analysis result (special feature).",
        `Y1 = ${y1.trim() || "(empty)"}`,
        y2.trim() ? `Y2 = ${y2.trim()}` : "",
        `Analysis: ${analysis}`,
        "Explain what the zeros / max / min / intersections mean and how to verify them.",
      ]
        .filter(Boolean)
        .join("\n"),
    });
  }

  /** Sample Y1 across the window, then locally refine extrema. */
  function runMaxMin() {
    if (!y1.trim()) {
      setAnalysis("Need Y1 for max/min.");
      return;
    }
    try {
      const samples = 320;
      const step = (range.xmax - range.xmin) / samples;
      let maxX = range.xmin;
      let minX = range.xmin;
      let maxY = -Infinity;
      let minY = Infinity;
      const ys: Array<{ x: number; y: number }> = [];
      for (let i = 0; i <= samples; i += 1) {
        const x = range.xmin + i * step;
        try {
          const y = evalExpr(y1, { x, ans: 0 });
          if (!Number.isFinite(y)) continue;
          ys.push({ x, y });
          if (y > maxY) {
            maxY = y;
            maxX = x;
          }
          if (y < minY) {
            minY = y;
            minX = x;
          }
        } catch {
          /* skip */
        }
      }
      if (!ys.length) {
        setAnalysis("No finite Y1 values in window.");
        return;
      }

      function refine(seedX: number, wantMax: boolean): { x: number; y: number } {
        let bestX = seedX;
        let bestY = evalExpr(y1, { x: seedX, ans: 0 });
        let h = step;
        for (let pass = 0; pass < 8; pass += 1) {
          const candidates = [bestX - h, bestX, bestX + h];
          for (const x of candidates) {
            if (x < range.xmin || x > range.xmax) continue;
            try {
              const y = evalExpr(y1, { x, ans: 0 });
              if (!Number.isFinite(y)) continue;
              if (wantMax ? y > bestY : y < bestY) {
                bestY = y;
                bestX = x;
              }
            } catch {
              /* skip */
            }
          }
          h *= 0.4;
        }
        return { x: bestX, y: bestY };
      }

      const mx = refine(maxX, true);
      const mn = refine(minX, false);
      setAnalysis(
        `Y1 max ≈ (${formatCalc(mx.x)}, ${formatCalc(mx.y)}) · min ≈ (${formatCalc(mn.x)}, ${formatCalc(mn.y)})`
      );
      setTraceX(mx.x);
    } catch (err) {
      setAnalysis(err instanceof Error ? err.message : "Max/Min error");
    }
  }

  return (
    <div className="ti-shell ti-shell--wide">
      <div className="ti-brand-row">
        <span className="ti-brand">KE Graph CE</span>
        <span className="ti-sub">
          Function · parametric · polar · max/min · shade Y1≥Y2 · zeros · integral
        </span>
      </div>
      <div className="ti-layout">
        <div>
          <div className="ti-graph-controls">
            <div className="ti-presets" style={{ marginBottom: "0.4rem" }}>
              {(
                [
                  ["function", "Y= f(x)"],
                  ["parametric", "Parametric"],
                  ["polar", "Polar"],
                ] as const
              ).map(([id, label]) => (
                <button
                  key={id}
                  type="button"
                  className={`ti-preset ${mode === id ? "ti-key-2nd-on" : ""}`}
                  onClick={() => setMode(id)}
                >
                  {label}
                </button>
              ))}
            </div>

            {mode === "function" && (
              <>
                {(
                  [
                    ["Y1", y1, setY1],
                    ["Y2", y2, setY2],
                    ["Y3", y3, setY3],
                    ["Y4", y4, setY4],
                  ] as const
                ).map(([label, value, setter]) => (
                  <label key={label} className="ti-field">
                    {label}=
                    <input
                      className="ti-input"
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      spellCheck={false}
                      placeholder={label === "Y1" ? "sin(x)" : "optional"}
                    />
                  </label>
                ))}
                <div className="ti-presets" style={{ marginTop: "0.25rem" }}>
                  <button
                    type="button"
                    className="ti-preset"
                    disabled={!y1.trim()}
                    title="Ask AI about Y1 features"
                    onClick={() => askAiAboutY1("features")}
                  >
                    Ask AI · Y1
                  </button>
                  <button
                    type="button"
                    className="ti-preset"
                    disabled={!y1.trim()}
                    title="Ask AI about zeros"
                    onClick={() => askAiAboutY1("zeros")}
                  >
                    AI zeros
                  </button>
                  <button
                    type="button"
                    className="ti-preset"
                    disabled={!y1.trim()}
                    title="Ask AI about integral setup"
                    onClick={() => askAiAboutY1("integral")}
                  >
                    AI ∫
                  </button>
                </div>
              </>
            )}

            {mode === "parametric" && (
              <>
                <label className="ti-field">
                  X(t)=
                  <input className="ti-input" value={xt} onChange={(e) => setXt(e.target.value)} spellCheck={false} />
                </label>
                <label className="ti-field">
                  Y(t)=
                  <input className="ti-input" value={yt} onChange={(e) => setYt(e.target.value)} spellCheck={false} />
                </label>
                <div className="ti-range-grid">
                  <label className="ti-field">
                    tmin
                    <input className="ti-input" type="number" value={tmin} onChange={(e) => setTmin(Number(e.target.value))} />
                  </label>
                  <label className="ti-field">
                    tmax
                    <input className="ti-input" type="number" value={tmax} onChange={(e) => setTmax(Number(e.target.value))} />
                  </label>
                </div>
              </>
            )}

            {mode === "polar" && (
              <label className="ti-field">
                r(θ)=
                <input
                  className="ti-input"
                  value={rExpr}
                  onChange={(e) => setRExpr(e.target.value)}
                  spellCheck={false}
                  placeholder="2*(1+cos(θ))"
                />
              </label>
            )}

            <div className="ti-range-grid">
              {(["xmin", "xmax", "ymin", "ymax"] as const).map((key) => (
                <label key={key} className="ti-field">
                  {key}
                  <input
                    className="ti-input"
                    type="number"
                    value={range[key]}
                    onChange={(e) => setRange((prev) => ({ ...prev, [key]: Number(e.target.value) }))}
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
              <button type="button" className="ti-key" onClick={() => setRange(TRIG_RANGE)}>
                ZTrig
              </button>
              <button type="button" className="ti-key" onClick={fitY}>
                Fit
              </button>
              <button
                type="button"
                className={`ti-key ${showGrid ? "ti-key-2nd-on" : ""}`}
                onClick={() => setShowGrid((v) => !v)}
              >
                Grid
              </button>
              {mode === "function" && (
                <>
                  <button
                    type="button"
                    className={`ti-key ${shade ? "ti-key-2nd-on" : ""}`}
                    onClick={() => {
                      setShade((v) => !v);
                      if (!shade) setShadeBetween(false);
                    }}
                  >
                    Shade Y1
                  </button>
                  <button
                    type="button"
                    className={`ti-key ${shadeBetween ? "ti-key-2nd-on" : ""}`}
                    onClick={() => {
                      setShadeBetween((v) => !v);
                      if (!shadeBetween) setShade(false);
                    }}
                  >
                    Shade Y1≥Y2
                  </button>
                  <button
                    type="button"
                    className={`ti-key ${showDeriv ? "ti-key-2nd-on" : ""}`}
                    onClick={() => setShowDeriv((v) => !v)}
                  >
                    Y1′
                  </button>
                  <button
                    type="button"
                    className={`ti-key ${showTangent ? "ti-key-2nd-on" : ""}`}
                    onClick={() => setShowTangent((v) => !v)}
                  >
                    Tangent
                  </button>
                  <button type="button" className="ti-key" onClick={runZeros}>
                    Zeros
                  </button>
                  <button type="button" className="ti-key" onClick={runMaxMin}>
                    Max/Min
                  </button>
                  <button type="button" className="ti-key" onClick={runIntersect}>
                    Intersect
                  </button>
                  <button
                    type="button"
                    className={`ti-key ${showIntegral ? "ti-key-2nd-on" : ""}`}
                    onClick={() => setShowIntegral((v) => !v)}
                  >
                    ∫ Y1
                  </button>
                </>
              )}
              <button
                type="button"
                className={`ti-key ${showTable ? "ti-key-2nd-on" : ""}`}
                onClick={() => setShowTable((v) => !v)}
              >
                Table
              </button>
              <button
                type="button"
                className={`ti-key ${hiRes ? "ti-key-2nd-on" : ""}`}
                onClick={() => setHiRes((v) => !v)}
              >
                Hi-res
              </button>
              <button type="button" className="ti-key" onClick={exportPng}>
                Export PNG
              </button>
            </div>

            {mode === "function" && showIntegral && (
              <div className="ti-range-grid">
                <label className="ti-field">
                  ∫ from a=
                  <input className="ti-input" type="number" value={intA} onChange={(e) => setIntA(Number(e.target.value))} />
                </label>
                <label className="ti-field">
                  to b=
                  <input className="ti-input" type="number" value={intB} onChange={(e) => setIntB(Number(e.target.value))} />
                </label>
                <p className="ti-trace-readout">
                  ∫ₐᵇ Y1 ≈ {Number.isFinite(integralValue) ? formatCalc(integralValue) : "—"}
                </p>
              </div>
            )}

            <div className="ti-presets">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className="ti-preset"
                  onClick={() => {
                    if (preset.mode) setMode(preset.mode);
                    else setMode("function");
                    if (preset.y1 !== undefined) setY1(preset.y1);
                    if (preset.y2 !== undefined) setY2(preset.y2);
                    if (preset.y3 !== undefined) setY3(preset.y3);
                    if (preset.xt) setXt(preset.xt);
                    if (preset.yt) setYt(preset.yt);
                    if (preset.r) setRExpr(preset.r);
                    if (preset.range) setRange(preset.range);
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
            style={{ touchAction: "none", cursor: "grab" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          />

          {mode === "function" && (
            <div className="ti-trace">
              <label className="ti-field">
                Trace X=
                <input
                  className="ti-input"
                  type="number"
                  step="0.1"
                  value={traceX}
                  onChange={(e) => setTraceX(Number(e.target.value))}
                />
              </label>
              <p className="ti-trace-readout">
                Y1= {Number.isFinite(traceY1) ? formatCalc(traceY1) : "—"}
                {showDeriv || showTangent
                  ? ` · Y1′= ${Number.isFinite(traceDeriv) ? formatCalc(traceDeriv) : "—"}`
                  : ""}
              </p>
            </div>
          )}
          {analysis && (
            <div className="ti-presets" style={{ marginTop: "0.35rem" }}>
              <p className="ti-hint" style={{ flex: "1 1 100%" }}>
                {analysis}
              </p>
              {(analysis.includes("Zeros") ||
                analysis.includes("max") ||
                analysis.includes("min") ||
                analysis.includes("∩")) && (
                <button
                  type="button"
                  className="ti-preset"
                  title="Ask AI about this analysis"
                  onClick={askAiAboutAnalysis}
                >
                  Ask AI
                </button>
              )}
            </div>
          )}
          {error && <p className="ti-error">{error}</p>}
        </div>

        {showTable && mode === "function" && (
          <aside className="ti-side">
            <h3 className="ti-side-title">Table</h3>
            <div className="ti-table-wrap">
              <table className="ti-table">
                <thead>
                  <tr>
                    <th>X</th>
                    <th>Y1</th>
                    <th>Y2</th>
                    <th>Y3</th>
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
                      <td>{row.y3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="ti-hint">Drag graph to pan · click to trace · Zeros / Intersect / ∫ for Calc.</p>
          </aside>
        )}
      </div>
      <p className="ti-hint">
        AP Calculus: Y1′ (numeric derivative), tangent, zeros, max/min, intersect, definite integral
        shade, Shade Y1≥Y2. Physics / Precalc: parametric & polar · logistic / sinc / projectile
        presets. Drag to pan the window.
      </p>
    </div>
  );
}
