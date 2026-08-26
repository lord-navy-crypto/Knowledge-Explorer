/**
 * Casio ClassWiz–class helpers for KE calculator modes:
 * COMPLEX, MATRIX, VECTOR, BASE-N, EQN, STAT(2-var), DIST.
 */

export type Complex = { re: number; im: number };

export function c(re: number, im = 0): Complex {
  return { re, im };
}

export function cAdd(a: Complex, b: Complex): Complex {
  return { re: a.re + b.re, im: a.im + b.im };
}

export function cSub(a: Complex, b: Complex): Complex {
  return { re: a.re - b.re, im: a.im - b.im };
}

export function cMul(a: Complex, b: Complex): Complex {
  return { re: a.re * b.re - a.im * b.im, im: a.re * b.im + a.im * b.re };
}

export function cDiv(a: Complex, b: Complex): Complex {
  const d = b.re * b.re + b.im * b.im;
  if (d === 0) throw new Error("Complex ÷0");
  return { re: (a.re * b.re + a.im * b.im) / d, im: (a.im * b.re - a.re * b.im) / d };
}

export function cAbs(a: Complex): number {
  return Math.hypot(a.re, a.im);
}

export function cArg(a: Complex): number {
  return Math.atan2(a.im, a.re);
}

export function cConj(a: Complex): Complex {
  return { re: a.re, im: -a.im };
}

export function formatComplex(z: Complex, digits = 6): string {
  const r = (n: number) => {
    const x = Math.round(n * 10 ** digits) / 10 ** digits;
    return String(x);
  };
  if (Math.abs(z.im) < 1e-12) return r(z.re);
  if (Math.abs(z.re) < 1e-12) return `${r(z.im)}i`;
  const sign = z.im >= 0 ? "+" : "−";
  return `${r(z.re)} ${sign} ${r(Math.abs(z.im))}i`;
}

/** Parse "a+bi" / "a-bi" / "bi" / "a". */
export function parseComplex(raw: string): Complex {
  const s = raw.replace(/\s+/g, "").replace(/j/gi, "i").replace(/−/g, "-");
  if (!s) throw new Error("Empty complex");
  if (!/[iI]/.test(s)) return { re: Number(s), im: 0 };
  const m = s.match(/^([+-]?\d*\.?\d+(?:e[+-]?\d+)?)?([+-]\d*\.?\d+(?:e[+-]?\d+)?)?i$/i);
  if (m) {
    const re = m[1] ? Number(m[1]) : 0;
    let imPart = m[2] ?? (m[1] && s.endsWith("i") && !m[2] ? "" : "");
    // forms: 3+4i, 4i, -2i, 3-4i
  }
  // Robust split on last +/− before i
  const cleaned = s.replace(/^\+/, "");
  if (/^[+-]?\d*\.?\d+(?:e[+-]?\d+)?i$/i.test(cleaned)) {
    const n = cleaned.replace(/i$/i, "");
    const im = n === "" || n === "+" ? 1 : n === "-" ? -1 : Number(n);
    return { re: 0, im };
  }
  const idx = Math.max(cleaned.lastIndexOf("+"), cleaned.lastIndexOf("-", 1));
  if (idx <= 0) throw new Error("Bad complex");
  const re = Number(cleaned.slice(0, idx));
  let imStr = cleaned.slice(idx).replace(/i$/i, "");
  if (imStr === "+" || imStr === "") imStr = "+1";
  if (imStr === "-") imStr = "-1";
  return { re, im: Number(imStr) };
}

export type Matrix = number[][];

export function matAdd(a: Matrix, b: Matrix): Matrix {
  if (a.length !== b.length || a[0]!.length !== b[0]!.length) throw new Error("Matrix size");
  return a.map((row, i) => row.map((v, j) => v + b[i]![j]!));
}

export function matMul(a: Matrix, b: Matrix): Matrix {
  if (a[0]!.length !== b.length) throw new Error("Matrix size");
  const out: Matrix = Array.from({ length: a.length }, () => Array(b[0]!.length).fill(0));
  for (let i = 0; i < a.length; i += 1) {
    for (let k = 0; k < b.length; k += 1) {
      for (let j = 0; j < b[0]!.length; j += 1) {
        out[i]![j]! += a[i]![k]! * b[k]![j]!;
      }
    }
  }
  return out;
}

export function matDet2(m: Matrix): number {
  if (m.length !== 2 || m[0]!.length !== 2) throw new Error("Need 2×2");
  return m[0]![0]! * m[1]![1]! - m[0]![1]! * m[1]![0]!;
}

export function matDet3(m: Matrix): number {
  if (m.length !== 3 || m[0]!.length !== 3) throw new Error("Need 3×3");
  const [[a, b, c], [d, e, f], [g, h, i]] = m as [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ];
  return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
}

export function matInv2(m: Matrix): Matrix {
  const det = matDet2(m);
  if (Math.abs(det) < 1e-12) throw new Error("Singular");
  return [
    [m[1]![1]! / det, -m[0]![1]! / det],
    [-m[1]![0]! / det, m[0]![0]! / det],
  ];
}

export function formatMatrix(m: Matrix): string {
  return m.map((row) => row.map((v) => Number(v.toPrecision(6)).toString()).join("\t")).join("\n");
}

export function solveLinear2(
  a1: number,
  b1: number,
  c1: number,
  a2: number,
  b2: number,
  c2: number
): { x: number; y: number } {
  const det = a1 * b2 - a2 * b1;
  if (Math.abs(det) < 1e-12) throw new Error("No unique solution");
  return { x: (c1 * b2 - c2 * b1) / det, y: (a1 * c2 - a2 * c1) / det };
}

/** Quadratic ax²+bx+c=0 */
export function solveQuadratic(a: number, b: number, c0: number): { x1: Complex; x2: Complex } {
  if (Math.abs(a) < 1e-14) throw new Error("a≈0");
  const disc = b * b - 4 * a * c0;
  if (disc >= 0) {
    const s = Math.sqrt(disc);
    return { x1: c((-b + s) / (2 * a)), x2: c((-b - s) / (2 * a)) };
  }
  const s = Math.sqrt(-disc);
  return {
    x1: { re: -b / (2 * a), im: s / (2 * a) },
    x2: { re: -b / (2 * a), im: -s / (2 * a) },
  };
}

export type TwoVarStats = {
  n: number;
  meanX: number;
  meanY: number;
  sx: number;
  sy: number;
  r: number;
  a: number; // y = a + bx
  b: number;
};

export function twoVarStats(xs: number[], ys: number[]): TwoVarStats {
  if (xs.length !== ys.length || xs.length < 2) throw new Error("Need paired lists n≥2");
  const n = xs.length;
  const sumX = xs.reduce((a, b) => a + b, 0);
  const sumY = ys.reduce((a, b) => a + b, 0);
  const meanX = sumX / n;
  const meanY = sumY / n;
  let sxx = 0;
  let syy = 0;
  let sxy = 0;
  for (let i = 0; i < n; i += 1) {
    const dx = xs[i]! - meanX;
    const dy = ys[i]! - meanY;
    sxx += dx * dx;
    syy += dy * dy;
    sxy += dx * dy;
  }
  const sx = Math.sqrt(sxx / (n - 1));
  const sy = Math.sqrt(syy / (n - 1));
  const r = sxx === 0 || syy === 0 ? 0 : sxy / Math.sqrt(sxx * syy);
  const b = sxx === 0 ? 0 : sxy / sxx;
  const a = meanY - b * meanX;
  return { n, meanX, meanY, sx, sy, r, a, b };
}

export function toBase(n: number, base: 2 | 8 | 10 | 16): string {
  if (!Number.isFinite(n) || !Number.isInteger(n)) throw new Error("BASE-N needs integer");
  const sign = n < 0 ? "-" : "";
  const abs = Math.abs(n);
  if (base === 10) return sign + String(abs);
  return sign + abs.toString(base).toUpperCase();
}

export function fromBase(raw: string, base: 2 | 8 | 10 | 16): number {
  const s = raw.trim().replace(/\s+/g, "");
  const sign = s.startsWith("-") ? -1 : 1;
  const body = s.replace(/^-/, "");
  const n = parseInt(body, base);
  if (!Number.isFinite(n)) throw new Error("Bad BASE-N");
  return sign * n;
}

/** Standard normal PDF */
export function normalPdf(x: number, mu = 0, sigma = 1): number {
  const z = (x - mu) / sigma;
  return Math.exp(-0.5 * z * z) / (sigma * Math.sqrt(2 * Math.PI));
}

/** Approximate Φ(z) via Abramowitz–Stegun */
export function normalCdf(x: number, mu = 0, sigma = 1): number {
  const z = (x - mu) / sigma;
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp((-z * z) / 2);
  const p =
    d *
    t *
    (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
}

export function binomialPmf(n: number, k: number, p: number): number {
  if (k < 0 || k > n) return 0;
  // nCk * p^k * (1-p)^(n-k)
  let c = 1;
  for (let i = 1; i <= k; i += 1) c = (c * (n - k + i)) / i;
  return c * p ** k * (1 - p) ** (n - k);
}

export function binomialCdf(n: number, k: number, p: number): number {
  let s = 0;
  for (let i = 0; i <= k; i += 1) s += binomialPmf(n, i, p);
  return s;
}

export function engNotation(n: number): string {
  if (!Number.isFinite(n) || n === 0) return String(n);
  const exp = Math.floor(Math.log10(Math.abs(n)) / 3) * 3;
  const mant = n / 10 ** exp;
  return `${Number(mant.toPrecision(6))}×10^${exp}`;
}
