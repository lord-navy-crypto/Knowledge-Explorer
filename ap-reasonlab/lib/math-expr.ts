/**
 * Safe expression evaluator for calculator / function plotter.
 * Supports + - * / ^ % parentheses, unary minus, 1–2 arg functions, and study constants.
 */

const CONSTANTS: Record<string, number> = {
  pi: Math.PI,
  π: Math.PI,
  e: Math.E,
  g: 9.8,
  c: 2.99792458e8,
  h: 6.62607015e-34,
  k: 1.380649e-23,
  na: 6.02214076e23,
  r: 8.314462618,
  eps0: 8.8541878128e-12,
  mu0: 1.25663706212e-6,
  gconst: 6.6743e-11,
  /** Elementary charge (C) */
  qe: 1.602176634e-19,
  /** Atomic mass unit (kg) */
  u: 1.6605390666e-27,
  /** Electron mass (kg) */
  me: 9.1093837015e-31,
  /** Proton mass (kg) */
  mp: 1.67262192369e-27,
  /** Avogadro alias */
  n_a: 6.02214076e23,
};

function factorial(n: number): number {
  if (!Number.isFinite(n) || n < 0 || Math.floor(n) !== n) throw new Error("n! needs non-negative integer");
  if (n > 170) throw new Error("n! overflow");
  let out = 1;
  for (let i = 2; i <= n; i += 1) out *= i;
  return out;
}

function nCr(n: number, r: number): number {
  if (r < 0 || n < 0 || Math.floor(n) !== n || Math.floor(r) !== r) throw new Error("nCr needs integers");
  if (r > n) return 0;
  r = Math.min(r, n - r);
  let out = 1;
  for (let i = 1; i <= r; i += 1) out = (out * (n - r + i)) / i;
  return out;
}

function nPr(n: number, r: number): number {
  if (r < 0 || n < 0 || Math.floor(n) !== n || Math.floor(r) !== r) throw new Error("nPr needs integers");
  if (r > n) return 0;
  let out = 1;
  for (let i = 0; i < r; i += 1) out *= n - i;
  return out;
}

const FUNCTIONS1: Record<string, (n: number) => number> = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  arcsin: Math.asin,
  arccos: Math.acos,
  arctan: Math.atan,
  sinh: Math.sinh,
  cosh: Math.cosh,
  tanh: Math.tanh,
  asinh: Math.asinh,
  acosh: Math.acosh,
  atanh: Math.atanh,
  sec: (n) => 1 / Math.cos(n),
  csc: (n) => 1 / Math.sin(n),
  cot: (n) => 1 / Math.tan(n),
  ln: Math.log,
  log: Math.log10,
  log10: Math.log10,
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  exp: Math.exp,
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  fact: factorial,
  sign: Math.sign,
  int: Math.trunc,
  frac: (n) => n - Math.trunc(n),
  deg: (n) => (n * 180) / Math.PI,
  rad: (n) => (n * Math.PI) / 180,
  /** Percent as fraction of 100 */
  percent: (n) => n / 100,
};

const FUNCTIONS2: Record<string, (a: number, b: number) => number> = {
  ncr: nCr,
  npr: nPr,
  min: Math.min,
  max: Math.max,
  atan2: Math.atan2,
  hypot: Math.hypot,
  pow: Math.pow,
  logb: (a, b) => Math.log(a) / Math.log(b),
  root: (a, b) => a ** (1 / b),
  mod: (a, b) => ((a % b) + b) % b,
  /** Polar → x: r,θ (radians) */
  ptx: (r, th) => r * Math.cos(th),
  /** Polar → y: r,θ (radians) */
  pty: (r, th) => r * Math.sin(th),
  /** Rectangular → r */
  rtr: (x, y) => Math.hypot(x, y),
  /** Rectangular → θ */
  rtth: (x, y) => Math.atan2(y, x),
};

type Tok =
  | { t: "num"; v: number }
  | { t: "id"; v: string }
  | { t: "op"; v: string }
  | { t: "lp" }
  | { t: "rp" }
  | { t: "comma" };

function tokenize(input: string): Tok[] {
  const src = input
    .replace(/\s+/g, "")
    .replace(/·/g, "*")
    .replace(/×/g, "*")
    .replace(/÷/g, "/")
    .replace(/√/g, "sqrt");
  const out: Tok[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i]!;
    if (/[0-9.]/.test(ch)) {
      let k = i + 1;
      while (k < src.length && /[0-9.]/.test(src[k]!)) k += 1;
      if (k < src.length && /[eE]/.test(src[k]!)) {
        k += 1;
        if (k < src.length && /[+-]/.test(src[k]!)) k += 1;
        while (k < src.length && /[0-9]/.test(src[k]!)) k += 1;
      }
      const n = Number(src.slice(i, k));
      if (!Number.isFinite(n)) throw new Error("Bad number");
      out.push({ t: "num", v: n });
      i = k;
      continue;
    }
    if (/[A-Za-zπΠθΘ_]/.test(ch)) {
      let j = i + 1;
      while (j < src.length && /[A-Za-z0-9πΠθΘ_]/.test(src[j]!)) j += 1;
      out.push({ t: "id", v: src.slice(i, j).toLowerCase() });
      i = j;
      continue;
    }
    if ("+-*/^%!".includes(ch)) {
      out.push({ t: "op", v: ch });
      i += 1;
      continue;
    }
    if (ch === "(") {
      out.push({ t: "lp" });
      i += 1;
      continue;
    }
    if (ch === ")") {
      out.push({ t: "rp" });
      i += 1;
      continue;
    }
    if (ch === ",") {
      out.push({ t: "comma" });
      i += 1;
      continue;
    }
    throw new Error(`Unexpected “${ch}”`);
  }
  return out;
}

class Parser {
  private i = 0;
  constructor(
    private tokens: Tok[],
    private vars: Record<string, number>
  ) {}

  parse(): number {
    const value = this.expr();
    if (this.i < this.tokens.length) throw new Error("Unexpected trailing input");
    return value;
  }

  private peek(): Tok | undefined {
    return this.tokens[this.i];
  }

  private eat(): Tok {
    const tok = this.tokens[this.i++];
    if (!tok) throw new Error("Unexpected end");
    return tok;
  }

  private expr(): number {
    let left = this.term();
    while (this.peek()?.t === "op" && "+-".includes((this.peek() as { v: string }).v)) {
      const op = (this.eat() as { v: string }).v;
      const right = this.term();
      left = op === "+" ? left + right : left - right;
    }
    return left;
  }

  private term(): number {
    let left = this.power();
    while (this.peek()?.t === "op" && "*/%".includes((this.peek() as { v: string }).v)) {
      const op = (this.eat() as { v: string }).v;
      const right = this.power();
      if (op === "*") left *= right;
      else if (op === "/") left /= right;
      else left %= right;
    }
    return left;
  }

  private power(): number {
    const base = this.unary();
    if (this.peek()?.t === "op" && (this.peek() as { v: string }).v === "^") {
      this.eat();
      const exp = this.power();
      return base ** exp;
    }
    return base;
  }

  private unary(): number {
    if (this.peek()?.t === "op" && (this.peek() as { v: string }).v === "-") {
      this.eat();
      return -this.unary();
    }
    if (this.peek()?.t === "op" && (this.peek() as { v: string }).v === "+") {
      this.eat();
      return this.unary();
    }
    return this.postfix();
  }

  private postfix(): number {
    let value = this.primary();
    while (this.peek()?.t === "op" && (this.peek() as { v: string }).v === "!") {
      this.eat();
      value = factorial(value);
    }
    return value;
  }

  private primary(): number {
    const tok = this.peek();
    if (!tok) throw new Error("Expected value");
    if (tok.t === "num") {
      this.eat();
      return tok.v;
    }
    if (tok.t === "id") {
      this.eat();
      if (this.peek()?.t === "lp") {
        this.eat();
        const args: number[] = [];
        if (this.peek()?.t !== "rp") {
          args.push(this.expr());
          while (this.peek()?.t === "comma") {
            this.eat();
            args.push(this.expr());
          }
        }
        if (this.peek()?.t !== "rp") throw new Error("Missing )");
        this.eat();
        if (args.length === 1 && FUNCTIONS1[tok.v]) return FUNCTIONS1[tok.v]!(args[0]!);
        if (args.length === 2 && FUNCTIONS2[tok.v]) return FUNCTIONS2[tok.v]!(args[0]!, args[1]!);
        if (FUNCTIONS1[tok.v] || FUNCTIONS2[tok.v]) {
          throw new Error(`Wrong arity for ${tok.v}`);
        }
        throw new Error(`Unknown function ${tok.v}`);
      }
      if (tok.v in this.vars) return this.vars[tok.v]!;
      if (tok.v in CONSTANTS) return CONSTANTS[tok.v]!;
      throw new Error(`Unknown symbol ${tok.v}`);
    }
    if (tok.t === "lp") {
      this.eat();
      const value = this.expr();
      if (this.peek()?.t !== "rp") throw new Error("Missing )");
      this.eat();
      return value;
    }
    throw new Error("Expected value");
  }
}

export function evalExpr(expression: string, vars: Record<string, number> = {}): number {
  const trimmed = expression.trim();
  if (!trimmed) throw new Error("Empty expression");
  const normalizedVars: Record<string, number> = {};
  for (const [key, value] of Object.entries(vars)) {
    normalizedVars[key.toLowerCase()] = value;
  }
  const value = new Parser(tokenize(trimmed), normalizedVars).parse();
  if (!Number.isFinite(value)) throw new Error("Not a finite number");
  return value;
}

export function formatCalc(value: number, style: "auto" | "sci" | "fixed" = "auto"): string {
  if (!Number.isFinite(value)) return "Error";
  if (style === "sci") return value.toExponential(6);
  if (style === "fixed") return (Math.round(value * 1e10) / 1e10).toFixed(6).replace(/\.?0+$/, "");
  const abs = Math.abs(value);
  if (abs !== 0 && (abs >= 1e10 || abs < 1e-6)) return value.toExponential(6);
  const rounded = Math.round(value * 1e10) / 1e10;
  return String(rounded);
}

/** Numeric derivative f'(x) via central difference. */
export function numericDerivative(
  expression: string,
  x: number,
  vars: Record<string, number> = {},
  h = 1e-5
): number {
  const left = evalExpr(expression, { ...vars, x: x - h });
  const right = evalExpr(expression, { ...vars, x: x + h });
  return (right - left) / (2 * h);
}

/** Numeric second derivative f''(x) via central second difference. */
export function numericSecondDerivative(
  expression: string,
  x: number,
  vars: Record<string, number> = {},
  h = 1e-4
): number {
  const yp = evalAtX(expression, x + h, vars);
  const y = evalAtX(expression, x, vars);
  const ym = evalAtX(expression, x - h, vars);
  return (yp - 2 * y + ym) / (h * h);
}

/** Grapher-friendly tangent line y = f'(x0)(x − x0) + f(x0). */
export function tangentLineExpression(
  expression: string,
  x0: number,
  vars: Record<string, number> = {}
): string {
  const y0 = evalAtX(expression, x0, vars);
  const m = numericDerivative(expression, x0, vars);
  return `${formatCalc(m)}*(x-(${formatCalc(x0)}))+(${formatCalc(y0)})`;
}

/** Average value of f on [a, b]: (1/(b−a)) ∫_a^b f(x) dx. */
export function averageValue(
  expression: string,
  a: number,
  b: number,
  vars: Record<string, number> = {}
): number {
  if (a === b) throw new Error("average value needs a < b (or b < a)");
  return numericIntegral(expression, a, b, vars) / (b - a);
}

export type RiemannMethod = "left" | "right" | "mid";

/** Riemann sum on [a, b] with n subintervals (max 5000). */
export function riemannSum(
  expression: string,
  a: number,
  b: number,
  n: number,
  method: RiemannMethod = "mid",
  vars: Record<string, number> = {}
): number {
  const slices = Math.trunc(n);
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(slices)) {
    throw new Error("Riemann bounds and n must be finite");
  }
  if (slices < 1) throw new Error("Riemann n must be ≥ 1");
  if (slices > 5000) throw new Error("Riemann n too large (max 5000)");
  const h = (b - a) / slices;
  let sum = 0;
  for (let i = 0; i < slices; i += 1) {
    const x =
      method === "left" ? a + i * h : method === "right" ? a + (i + 1) * h : a + (i + 0.5) * h;
    sum += evalAtX(expression, x, vars);
  }
  return sum * h;
}

/** Approximate definite integral ∫_a^b f(x) dx (Simpson). */
export function numericIntegralFn(fn: (x: number) => number, a: number, b: number, slices = 200): number {
  if (a === b) return 0;
  const n = Math.max(2, slices - (slices % 2));
  const h = (b - a) / n;
  let sum = fn(a) + fn(b);
  for (let i = 1; i < n; i += 1) {
    const x = a + i * h;
    const y = fn(x);
    sum += i % 2 === 0 ? 2 * y : 4 * y;
  }
  return (h / 3) * sum;
}

/** Approximate definite integral ∫_a^b f(x) dx (Simpson / trapezoid hybrid). */
export function numericIntegral(
  expression: string,
  a: number,
  b: number,
  vars: Record<string, number> = {},
  slices = 200
): number {
  return numericIntegralFn((x) => evalExpr(expression, { ...vars, x }), a, b, slices);
}

/** Trapezoidal rule on [a, b] with n subintervals (max 5000). */
export function trapezoidSum(
  expression: string,
  a: number,
  b: number,
  n: number,
  vars: Record<string, number> = {}
): number {
  const slices = Math.trunc(n);
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(slices)) {
    throw new Error("Trapezoid bounds and n must be finite");
  }
  if (slices < 1) throw new Error("Trapezoid n must be ≥ 1");
  if (slices > 5000) throw new Error("Trapezoid n too large (max 5000)");
  const h = (b - a) / slices;
  let sum = (evalAtX(expression, a, vars) + evalAtX(expression, b, vars)) / 2;
  for (let i = 1; i < slices; i += 1) {
    sum += evalAtX(expression, a + i * h, vars);
  }
  return sum * h;
}

/** Simpson's rule on [a, b] with n subintervals (n forced even, max 5000). */
export function simpsonSum(
  expression: string,
  a: number,
  b: number,
  n: number,
  vars: Record<string, number> = {}
): number {
  const slices = Math.trunc(n);
  if (slices < 2) throw new Error("Simpson n must be ≥ 2");
  if (slices > 5000) throw new Error("Simpson n too large (max 5000)");
  return numericIntegral(expression, a, b, vars, slices);
}

/** Arc length of y=f(x) on [a, b]: ∫ sqrt(1+(f')²) dx. */
export function arcLength(
  expression: string,
  a: number,
  b: number,
  vars: Record<string, number> = {}
): number {
  if (a === b) return 0;
  return numericIntegralFn((x) => {
    const fp = numericDerivative(expression, x, vars);
    return Math.sqrt(1 + fp * fp);
  }, a, b);
}

/** Evaluate f at a point (default variable x). */
export function evalAtX(expression: string, x: number, vars: Record<string, number> = {}): number {
  return evalExpr(expression, { ...vars, x });
}

/** Discrete sum Σ_{n=n0}^{n1} f(n). Uses n, i, and x as the index. */
export function numericSum(expression: string, n0: number, n1: number, vars: Record<string, number> = {}): number {
  const start = Math.trunc(n0);
  const end = Math.trunc(n1);
  if (!Number.isFinite(start) || !Number.isFinite(end)) throw new Error("sum bounds must be finite");
  if (end < start) return 0;
  if (end - start > 10_000) throw new Error("sum too many terms (max 10000)");
  let total = 0;
  for (let n = start; n <= end; n += 1) {
    total += evalExpr(expression, { ...vars, n, i: n, x: n });
  }
  return total;
}

export type ValueTableRow = { x: number; y: number | null };

/** Table of values for f(x) on [xmin, xmax] with a positive step (max 200 rows). */
export function valueTable(
  expression: string,
  xmin: number,
  xmax: number,
  step: number,
  vars: Record<string, number> = {}
): ValueTableRow[] {
  if (!Number.isFinite(xmin) || !Number.isFinite(xmax) || !Number.isFinite(step)) {
    throw new Error("table bounds and step must be finite");
  }
  if (!(step > 0)) throw new Error("step must be positive");
  if (xmax < xmin) throw new Error("xmax must be ≥ xmin");
  const n = Math.min(200, Math.floor((xmax - xmin) / step) + 1);
  const rows: ValueTableRow[] = [];
  for (let i = 0; i < n; i += 1) {
    const x = xmin + i * step;
    try {
      const y = evalAtX(expression, x, vars);
      rows.push({ x, y: Number.isFinite(y) ? y : null });
    } catch {
      rows.push({ x, y: null });
    }
  }
  return rows;
}

/** Newton–Raphson root of f(x) = 0 starting at x0. */
export function newtonRoot(
  expression: string,
  x0: number,
  vars: Record<string, number> = {},
  maxIter = 40
): number {
  if (!Number.isFinite(x0)) throw new Error("Newton needs a finite guess");
  let x = x0;
  for (let i = 0; i < maxIter; i += 1) {
    const y = evalAtX(expression, x, vars);
    const yp = numericDerivative(expression, x, vars);
    if (!Number.isFinite(y) || !Number.isFinite(yp)) throw new Error("Newton: f or f′ not finite");
    if (Math.abs(yp) < 1e-12) throw new Error("Newton: derivative ≈ 0");
    const next = x - y / yp;
    if (!Number.isFinite(next)) throw new Error("Newton diverged");
    if (Math.abs(next - x) < 1e-10) return next;
    x = next;
  }
  return x;
}

/** Find zeros of a numeric function in [xmin,xmax] by sign-change bisection. */
export function findZerosFn(
  fn: (x: number) => number,
  xmin: number,
  xmax: number,
  samples = 240
): number[] {
  const zeros: number[] = [];
  const step = (xmax - xmin) / samples;
  let prevX = xmin;
  let prevY: number | null = null;
  try {
    prevY = fn(xmin);
  } catch {
    prevY = null;
  }
  for (let i = 1; i <= samples; i += 1) {
    const x = xmin + i * step;
    let y: number | null = null;
    try {
      y = fn(x);
    } catch {
      y = null;
    }
    if (prevY !== null && y !== null && Number.isFinite(prevY) && Number.isFinite(y)) {
      if (prevY === 0) zeros.push(prevX);
      else if (prevY * y < 0) {
        let lo = prevX;
        let hi = x;
        let flo = prevY;
        for (let k = 0; k < 40; k += 1) {
          const mid = (lo + hi) / 2;
          let fmid: number;
          try {
            fmid = fn(mid);
          } catch {
            break;
          }
          if (!Number.isFinite(fmid)) break;
          if (flo * fmid <= 0) {
            hi = mid;
          } else {
            lo = mid;
            flo = fmid;
          }
        }
        zeros.push((lo + hi) / 2);
      }
    }
    prevX = x;
    prevY = y;
  }
  return zeros.filter((z, i, arr) => i === 0 || Math.abs(z - arr[i - 1]!) > step * 0.4);
}

/** Find zeros of y=f(x) in [xmin,xmax] by sign-change bisection. */
export function findZeros(
  expression: string,
  xmin: number,
  xmax: number,
  vars: Record<string, number> = {},
  samples = 240
): number[] {
  return findZerosFn((x) => evalExpr(expression, { ...vars, x }), xmin, xmax, samples);
}

export type Extremum = { x: number; y: number; kind: "min" | "max" | "critical" };

/** Critical points of y=f(x) where f' changes sign; classified with f''. */
export function findExtrema(
  expression: string,
  xmin: number,
  xmax: number,
  vars: Record<string, number> = {}
): Extremum[] {
  const crit = findZerosFn((x) => numericDerivative(expression, x, vars), xmin, xmax);
  return crit.map((x) => {
    const y = evalAtX(expression, x, vars);
    const fpp = numericSecondDerivative(expression, x, vars);
    const kind: Extremum["kind"] = fpp > 1e-6 ? "min" : fpp < -1e-6 ? "max" : "critical";
    return { x, y, kind };
  });
}

/** Inflection candidates where f'' changes sign. */
export function findInflections(
  expression: string,
  xmin: number,
  xmax: number,
  vars: Record<string, number> = {}
): Array<{ x: number; y: number }> {
  return findZerosFn((x) => numericSecondDerivative(expression, x, vars), xmin, xmax).map((x) => ({
    x,
    y: evalAtX(expression, x, vars),
  }));
}

export type EulerRow = { x: number; y: number };

/** Euler method for dy/dx = f(x,y). */
export function eulerMethod(
  dydxExpr: string,
  x0: number,
  y0: number,
  h: number,
  steps: number,
  vars: Record<string, number> = {}
): EulerRow[] {
  const n = Math.trunc(steps);
  if (!Number.isFinite(x0) || !Number.isFinite(y0) || !Number.isFinite(h)) {
    throw new Error("Euler needs finite x0, y0, and h");
  }
  if (n < 1) throw new Error("Euler steps must be ≥ 1");
  if (n > 500) throw new Error("Euler steps too large (max 500)");
  if (h === 0) throw new Error("Euler step h cannot be 0");
  const rows: EulerRow[] = [{ x: x0, y: y0 }];
  let x = x0;
  let y = y0;
  for (let i = 0; i < n; i += 1) {
    const slope = evalExpr(dydxExpr, { ...vars, x, y });
    if (!Number.isFinite(slope)) throw new Error("Euler: dy/dx not finite");
    y += h * slope;
    x += h;
    rows.push({ x, y });
  }
  return rows;
}

/** Find intersections of two y=f(x) curves in window. */
export function findIntersections(
  expr1: string,
  expr2: string,
  xmin: number,
  xmax: number,
  vars: Record<string, number> = {}
): Array<{ x: number; y: number }> {
  const diff = `(${expr1})-(${expr2})`;
  return findZeros(diff, xmin, xmax, vars).map((x) => {
    const y = evalExpr(expr1, { ...vars, x });
    return { x, y };
  });
}

export type OneVarStats = {
  n: number;
  mean: number;
  sum: number;
  sumSq: number;
  sx: number;
  sigma: number;
  min: number;
  max: number;
  median: number;
  q1: number;
  q3: number;
};

export function oneVarStats(values: number[]): OneVarStats {
  const xs = values.filter((v) => Number.isFinite(v));
  if (!xs.length) throw new Error("List is empty");
  const n = xs.length;
  const sorted = [...xs].sort((a, b) => a - b);
  const sum = xs.reduce((a, b) => a + b, 0);
  const sumSq = xs.reduce((a, b) => a + b * b, 0);
  const mean = sum / n;
  const variancePop = sumSq / n - mean * mean;
  const varianceSamp = n > 1 ? (sumSq - (sum * sum) / n) / (n - 1) : 0;
  const percentile = (p: number) => {
    const idx = (sorted.length - 1) * p;
    const lo = Math.floor(idx);
    const hi = Math.ceil(idx);
    if (lo === hi) return sorted[lo]!;
    return sorted[lo]! * (hi - idx) + sorted[hi]! * (idx - lo);
  };
  return {
    n,
    mean,
    sum,
    sumSq,
    sx: Math.sqrt(Math.max(0, varianceSamp)),
    sigma: Math.sqrt(Math.max(0, variancePop)),
    min: sorted[0]!,
    max: sorted[n - 1]!,
    median: percentile(0.5),
    q1: percentile(0.25),
    q3: percentile(0.75),
  };
}

export const MATH_CONSTANTS = CONSTANTS;

/**
 * Heuristic: does this plain / LaTeX expression look like a function of x
 * suitable for the Grapher Y1 handoff?
 */
export function looksLikeFunctionOfX(expr: string): boolean {
  const raw = expr.trim();
  if (!raw || raw.length > 180) return false;
  // Strip LaTeX commands so "\approx" / "\max" do not count as variable x.
  const plain = raw
    .replace(/\\[a-zA-Z]+\*?/g, " ")
    .replace(/[{}^_]/g, " ")
    .replace(/\s+/g, " ");
  if (!/\bx\b/i.test(plain)) return false;
  // Need some operator / known function — not just the letter x alone.
  return /[+\-*/^=()]|sin|cos|tan|log|ln|exp|sqrt|abs|\d/i.test(plain);
}

/** Best-effort LaTeX → grapher-friendly ascii for simple f(x) plots. */
export function latexToGrapherY1(latex: string): string | null {
  if (!looksLikeFunctionOfX(latex)) return null;
  let s = latex.trim();
  s = s.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)");
  s = s.replace(/\\sqrt\{([^{}]+)\}/g, "sqrt($1)");
  s = s.replace(/\\left|\\right/g, "");
  s = s.replace(/\\(sin|cos|tan|ln|log|exp|abs)\b/gi, "$1");
  s = s.replace(/\\cdot|\\times|\\,/g, "*");
  s = s.replace(/\\pi\b/gi, "pi");
  s = s.replace(/[{}]/g, "");
  s = s.replace(/\s+/g, "");
  if (/\\|[^ -\u007f]/.test(s)) return null;
  if (!looksLikeFunctionOfX(s)) return null;
  return s;
}
