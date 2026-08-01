/**
 * Educational Java → JavaScript transpile for CSA-style training.
 * Not a real JVM: students write Java-shaped code; the browser runs an
 * equivalent JS program for common intro patterns.
 */

import { normalizeJavaSource } from "@/lib/java-source";

export type JavaPracticeTranspile = {
  ok: boolean;
  js: string;
  warnings: string[];
  unsupported: string[];
};

const HEAVY_UNSUPPORTED: Array<{ re: RegExp; label: string }> = [
  { re: /\bpackage\s+/, label: "package" },
  { re: /\binterface\s+/, label: "interface" },
  { re: /\benum\s+/, label: "enum" },
  { re: /\btry\s*\{/, label: "try/catch" },
  { re: /\bthrow\s+/, label: "throw" },
  { re: /\bnew\s+File\b/, label: "File I/O" },
  { re: /\bArrayList\b|\bHashMap\b|\bLinkedList\b/, label: "Java collections" },
  { re: /\bextends\b|\bimplements\b/, label: "inheritance / implements" },
];

/** Pull the body of public static void main(...). */
export function extractJavaMainBody(source: string): string | null {
  const src = normalizeJavaSource(source);
  const marker = /public\s+static\s+void\s+main\s*\(\s*String\s*\[\s*\]\s*\w*\s*\)\s*\{/;
  const m = marker.exec(src);
  if (!m || m.index == null) return null;
  let i = m.index + m[0].length;
  let depth = 1;
  const start = i;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === "{") depth += 1;
    else if (ch === "}") depth -= 1;
    i += 1;
  }
  if (depth !== 0) return null;
  return src.slice(start, i - 1).trim();
}

function stripJavaComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");
}

function rewriteJavaishToJs(body: string): { code: string; notes: string[] } {
  const notes: string[] = [];
  let code = body;

  code = code.replace(/^\s*import\s+[\w.]+;\s*$/gm, "");

  // Enhanced for: for (int x : arr)
  code = code.replace(
    /for\s*\(\s*(?:final\s+)?(?:int|double|float|long|boolean|char|String|var)\s+(\w+)\s*:\s*([^)]+)\)/g,
    "for (const $1 of $2)"
  );

  // Classic for typed init
  code = code.replace(
    /for\s*\(\s*(?:final\s+)?(?:int|double|float|long|boolean|char|String)\s+/g,
    "for (let "
  );

  // new int[n]
  code = code.replace(
    /new\s+(?:int|double|float|long|boolean)\s*\[\s*([^\]]+)\s*\]/g,
    "Array($1).fill(0)"
  );
  code = code.replace(/new\s+String\s*\[\s*([^\]]+)\s*\]/g, "Array($1).fill('')");

  // int[] a = {1, 2, 3};
  code = code.replace(
    /(?:final\s+)?(?:int|double|float|long|boolean|char|String)\s*\[\s*\]\s+(\w+)\s*=\s*\{([^;]*)\}\s*;/g,
    (_full, name: string, inner: string) => `let ${name} = [${inner}];`
  );

  // Typed assign / declare
  code = code.replace(
    /\b(?:final\s+)?(?:int|double|float|long|boolean|char|byte|short|String)\s+(\w+)\s*=/g,
    "let $1 ="
  );
  code = code.replace(
    /\b(?:final\s+)?(?:int|double|float|long|boolean|char|byte|short|String)\s+(\w+)\s*;/g,
    "let $1;"
  );
  code = code.replace(
    /\b(?:final\s+)?(?:int|double|float|long|boolean|char|String)\s*\[\s*\]\s+(\w+)\s*;/g,
    "let $1;"
  );

  code = code.replace(/new\s+Scanner\s*\(\s*System\s*\.\s*in\s*\)/g, "new Scanner(__keStdin)");
  code = code.replace(/\bScanner\s+(\w+)\s*=/g, "let $1 =");

  if (/\.equals\s*\(/.test(code)) {
    notes.push("String.equals(x) ≈ === in practice mode.");
    code = code.replace(/(\w+)\s*\.\s*equals\s*\(\s*([^)]+)\s*\)/g, "($1 === $2)");
  }

  code = code.replace(/(\w+)\s*\.\s*length\s*\(\s*\)/g, "$1.length");
  code = code.replace(/(\w+)\s*\.\s*charAt\s*\(\s*([^)]+)\s*\)/g, "$1[$2]");

  return { code, notes };
}

function buildRunnerJs(mainBodyJs: string, stdin: string): string {
  const stdinJson = JSON.stringify(stdin ?? "");
  return `
const __keLogs = [];
const __keStdin = ${stdinJson};
const System = {
  out: {
    println: (...args) => { __keLogs.push(args.map(String).join("")); },
    print: (...args) => {
      if (!__keLogs.length) __keLogs.push("");
      __keLogs[__keLogs.length - 1] += args.map(String).join("");
    },
  },
};
class Scanner {
  constructor(text) {
    this._tokens = String(text || "").split(/\\s+/).filter(Boolean);
    this._i = 0;
    this._lines = String(text || "").split(/\\r?\\n/);
    this._li = 0;
  }
  hasNext() { return this._i < this._tokens.length; }
  next() {
    if (!this.hasNext()) throw new Error("Scanner: no more tokens (add Standard input)");
    return this._tokens[this._i++];
  }
  nextInt() { return parseInt(this.next(), 10); }
  nextDouble() { return parseFloat(this.next()); }
  nextLine() {
    if (this._li >= this._lines.length) return "";
    return this._lines[this._li++];
  }
}
try {
${mainBodyJs}
  return { ok: true, output: __keLogs.join("\\n") || "(no output)" };
} catch (err) {
  __keLogs.push(String(err && err.message ? err.message : err));
  return { ok: false, output: __keLogs.join("\\n") };
}
`.trim();
}

export function transpileJavaPractice(
  source: string,
  stdin = ""
): JavaPracticeTranspile {
  const raw = normalizeJavaSource(source);
  const warnings: string[] = [];
  const unsupported: string[] = [];

  for (const item of HEAVY_UNSUPPORTED) {
    if (item.re.test(raw)) unsupported.push(item.label);
  }

  const stripped = stripJavaComments(raw);
  const main = extractJavaMainBody(stripped);
  if (!main) {
    return {
      ok: false,
      js: "",
      warnings,
      unsupported: [
        ...unsupported,
        "Need public static void main(String[] args) { ... }",
      ],
    };
  }

  if (
    /(?:public|private|protected)\s+(?!static\s+void\s+main)(?:static\s+)?[\w<>,\[\]]+\s+\w+\s*\(/.test(
      stripped
    )
  ) {
    warnings.push(
      "Practice Run executes main() only. Extra methods/classes are for writing practice — Download .java for a real JDK."
    );
  }

  const { code, notes } = rewriteJavaishToJs(main);
  warnings.push(...notes);
  warnings.push("Practice Run trains Java syntax via a browser JS stand-in (not a real JVM).");

  return {
    ok: unsupported.length === 0,
    js: buildRunnerJs(code, stdin),
    warnings,
    unsupported,
  };
}

export function runJavaPracticeJs(jsFunctionBody: string): { ok: boolean; output: string } {
  // eslint-disable-next-line no-new-func
  const fn = new Function(jsFunctionBody);
  const result = fn() as { ok?: boolean; output?: string };
  return { ok: Boolean(result?.ok), output: String(result?.output ?? "") };
}
