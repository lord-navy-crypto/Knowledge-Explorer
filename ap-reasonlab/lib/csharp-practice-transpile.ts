/**
 * Educational C# → JavaScript transpile for intro / CSA-adjacent training.
 * Same quality tier as Java Practice Run — not a real CLR / .NET runtime.
 */

import { normalizeCsharpSource } from "@/lib/csharp-source";

export type CsharpPracticeTranspile = {
  ok: boolean;
  js: string;
  warnings: string[];
  unsupported: string[];
};

const HEAVY_UNSUPPORTED: Array<{ re: RegExp; label: string }> = [
  { re: /\bnamespace\s+/, label: "namespace" },
  { re: /\busing\s+(?!System\b)/, label: "using (beyond System)" },
  { re: /\binterface\s+/, label: "interface" },
  { re: /\benum\s+/, label: "enum" },
  { re: /\btry\s*\{/, label: "try/catch" },
  { re: /\basync\b|\bawait\b/, label: "async/await" },
  { re: /\bLINQ\b|\.Where\s*\(|\.Select\s*\(/, label: "LINQ" },
  { re: /\bList\s*<|\bDictionary\s*</, label: "generic collections" },
  { re: /\bclass\s+\w+\s*:\s*/, label: "inheritance" },
];

/** Extract body of static void Main / static void Main(string[] args). */
export function extractCsharpMainBody(source: string): string | null {
  const src = normalizeCsharpSource(source);
  const marker =
    /(?:public\s+)?static\s+void\s+Main\s*\(\s*(?:string\s*\[\s*\]\s*\w*)?\s*\)\s*\{/;
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

function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "");
}

function rewriteCsharpishToJs(body: string): { code: string; notes: string[] } {
  const notes: string[] = [];
  let code = body;

  code = code.replace(/^\s*using\s+[\w.]+;\s*$/gm, "");

  // foreach (int x in arr)
  code = code.replace(
    /foreach\s*\(\s*(?:var|int|double|float|long|bool|char|string)\s+(\w+)\s+in\s+([^)]+)\)/g,
    "for (const $1 of $2)"
  );

  // for (int i = 0;
  code = code.replace(
    /for\s*\(\s*(?:var|int|double|float|long|bool|char|string)\s+/g,
    "for (let "
  );

  // new int[n]
  code = code.replace(
    /new\s+(?:int|double|float|long|bool)\s*\[\s*([^\]]+)\s*\]/g,
    "Array($1).fill(0)"
  );
  code = code.replace(/new\s+string\s*\[\s*([^\]]+)\s*\]/g, "Array($1).fill('')");

  // int[] a = {1,2,3};
  code = code.replace(
    /(?:int|double|float|long|bool|char|string)\s*\[\s*\]\s+(\w+)\s*=\s*\{([^;]*)\}\s*;/g,
    (_full, name: string, inner: string) => `let ${name} = [${inner}];`
  );

  // Typed decls
  code = code.replace(
    /\b(?:var|int|double|float|long|bool|char|string|byte|short)\s+(\w+)\s*=/g,
    "let $1 ="
  );
  code = code.replace(
    /\b(?:int|double|float|long|bool|char|string|byte|short)\s+(\w+)\s*;/g,
    "let $1;"
  );

  // Console + Parse helpers (shim functions avoid nested-paren bugs)
  code = code.replace(/Console\s*\.\s*WriteLine\s*\(/g, "Console.WriteLine(");
  code = code.replace(/Console\s*\.\s*Write\s*\(/g, "Console.Write(");
  code = code.replace(/Console\s*\.\s*ReadLine\s*\(\s*\)/g, "Console.ReadLine()");
  code = code.replace(/\bint\s*\.\s*Parse\s*\(/g, "__keIntParse(");
  code = code.replace(/\b(?:double|float)\s*\.\s*Parse\s*\(/g, "__keFloatParse(");

  // string equality
  if (/\.Equals\s*\(/.test(code)) {
    notes.push("string.Equals(x) ≈ === in practice mode.");
    code = code.replace(/(\w+)\s*\.\s*Equals\s*\(\s*([^)]+)\s*\)/g, "($1 === $2)");
  }

  code = code.replace(/(\w+)\s*\.\s*Length\b/g, "$1.length");
  code = code.replace(/(\w+)\s*\.\s*Length\s*\(\s*\)/g, "$1.length");

  // bool literals
  code = code.replace(/\btrue\b/g, "true").replace(/\bfalse\b/g, "false");

  return { code, notes };
}

function buildRunnerJs(mainBodyJs: string, stdin: string): string {
  const stdinJson = JSON.stringify(stdin ?? "");
  return `
const __keLogs = [];
const __keLines = String(${stdinJson} || "").split(/\\r?\\n/);
let __keLi = 0;
const Console = {
  WriteLine: (...args) => { __keLogs.push(args.map(String).join("")); },
  Write: (...args) => {
    if (!__keLogs.length) __keLogs.push("");
    __keLogs[__keLogs.length - 1] += args.map(String).join("");
  },
  ReadLine: () => {
    if (__keLi >= __keLines.length) return "";
    return __keLines[__keLi++];
  },
};
function __keIntParse(x) { return parseInt(String(x), 10); }
function __keFloatParse(x) { return parseFloat(String(x)); }
try {
${mainBodyJs}
  return { ok: true, output: __keLogs.join("\\n") || "(no output)" };
} catch (err) {
  __keLogs.push(String(err && err.message ? err.message : err));
  return { ok: false, output: __keLogs.join("\\n") };
}
`.trim();
}

export function transpileCsharpPractice(
  source: string,
  stdin = ""
): CsharpPracticeTranspile {
  const raw = normalizeCsharpSource(source);
  const warnings: string[] = [];
  const unsupported: string[] = [];

  for (const item of HEAVY_UNSUPPORTED) {
    if (item.re.test(raw)) unsupported.push(item.label);
  }

  const stripped = stripComments(raw);
  const main = extractCsharpMainBody(stripped);
  if (!main) {
    return {
      ok: false,
      js: "",
      warnings,
      unsupported: [
        ...unsupported,
        "Need static void Main() or static void Main(string[] args) { ... }",
      ],
    };
  }

  if (
    /(?:public|private|protected)\s+(?!static\s+void\s+Main)(?:static\s+)?[\w<>,\[\]]+\s+\w+\s*\(/.test(
      stripped
    )
  ) {
    warnings.push(
      "Practice Run executes Main() only. Extra methods/classes → Download .cs for real .NET."
    );
  }

  const { code, notes } = rewriteCsharpishToJs(main);
  warnings.push(...notes);
  warnings.push("Practice Run trains C# syntax via a browser JS stand-in (not real .NET).");

  return {
    ok: unsupported.length === 0,
    js: buildRunnerJs(code, stdin),
    warnings,
    unsupported,
  };
}

export function runCsharpPracticeJs(jsFunctionBody: string): { ok: boolean; output: string } {
  // eslint-disable-next-line no-new-func
  const fn = new Function(jsFunctionBody);
  const result = fn() as { ok?: boolean; output?: string };
  return { ok: Boolean(result?.ok), output: String(result?.output ?? "") };
}
