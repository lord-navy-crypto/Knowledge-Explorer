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

/** Approximate definite integral ∫_a^b f(x) dx (Simpson / trapezoid hybrid). */
export function numericIntegral(
  expression: string,
  a: number,
  b: number,
  vars: Record<string, number> = {},
  slices = 200
): number {
  if (a === b) return 0;
  const n = Math.max(2, slices - (slices % 2));
  const h = (b - a) / n;
  let sum = evalExpr(expression, { ...vars, x: a }) + evalExpr(expression, { ...vars, x: b });
  for (let i = 1; i < n; i += 1) {
    const x = a + i * h;
    const y = evalExpr(expression, { ...vars, x });
    sum += i % 2 === 0 ? 2 * y : 4 * y;
  }
  return (h / 3) * sum;
}

/** Find zeros of y=f(x) in [xmin,xmax] by sign-change bisection. */
export function findZeros(
  expression: string,
  xmin: number,
  xmax: number,
  vars: Record<string, number> = {},
  samples = 240
): number[] {
  const zeros: number[] = [];
  const step = (xmax - xmin) / samples;
  let prevX = xmin;
  let prevY: number | null = null;
  try {
    prevY = evalExpr(expression, { ...vars, x: xmin });
  } catch {
    prevY = null;
  }
  for (let i = 1; i <= samples; i += 1) {
    const x = xmin + i * step;
    let y: number | null = null;
    try {
      y = evalExpr(expression, { ...vars, x });
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
            fmid = evalExpr(expression, { ...vars, x: mid });
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
