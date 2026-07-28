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
  sinh: Math.sinh,
  cosh: Math.cosh,
  tanh: Math.tanh,
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
    if (/[A-Za-zπ_]/.test(ch)) {
      let j = i + 1;
      while (j < src.length && /[A-Za-z0-9π_]/.test(src[j]!)) j += 1;
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

export const MATH_CONSTANTS = CONSTANTS;
