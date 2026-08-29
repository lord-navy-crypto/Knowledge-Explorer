/**
 * Stem quality audit: real 题干 vs wrapper-only / missing / garbled.
 * npx tsx scripts/audit-stems-and-markup.ts
 */
import { satQuestions, toeflQuestions } from "../data/english-content";
import { questionnaires } from "../data/questionnaires";
import { practiceQuestions } from "../data/ap-practice-drills";

const MATH = new Set([
  "Algebra",
  "Advanced Math",
  "Problem-Solving and Data Analysis",
  "Geometry and Trigonometry",
]);

const WRAPPER_ONLY = [
  /Identify the relevant principle/,
  /List known quantities and the unknown/,
  /Set up the derivative, integral, or limit/,
  /Writer's goal: revise the draft for a stated rhetorical goal/,
  /Draft under revision: Reforms happened recently/,
  /Which detail best supports a claim that .+ reforms/,
];

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function hasGarbled(s: string): string[] {
  const hits: string[] = [];
  if (/�|\uFFFD/.test(s)) hits.push("replacement-char");
  if (/Ã.|Â.|â€/.test(s)) hits.push("mojibake");
  if (/\$\$[^$]{0,40}\$\$/.test(s) && /\\frac\{[^}]*$/.test(s)) hits.push("unclosed-frac");
  if (/\\int_[^\\]*\(t\),dt/.test(s) || /\\omega\(t\),dt/.test(s)) hits.push("comma-dt");
  if (/\\hat\{n\},dA/.test(s) || /\\hat n,dA/.test(s)) hits.push("comma-dA");
  if (/\$d\\vec\{A\}=\\hat\{n\},dA/.test(s)) hits.push("bad-dA");
  if (/\\\\frac|\\\\int|\\\\vec/.test(s) && !/\$/.test(s) && /prompt|summary/.test("x")) {
    /* skip */
  }
  if (/\$\$\s*\$\$/.test(s)) hits.push("empty-math");
  if (/\{\s*\\?\s*$/.test(s)) hits.push("unclosed-brace");
  return hits;
}

type Row = { id: string; kind: string; detail: string };
const rows: Row[] = [];

function add(id: string, kind: string, detail: string) {
  rows.push({ id, kind, detail: detail.slice(0, 160) });
}

for (const q of toeflQuestions) {
  if (!q.prompt?.trim()) add(q.id, "toefl-empty-stem", "");
  if (wordCount(q.prompt) < 3) add(q.id, "toefl-tiny-stem", q.prompt);
  if (!MATH.has(q.skill) && !q.passage?.trim() && q.skill !== "Complete the Words") {
    add(q.id, "toefl-no-passage", q.skill);
  }
  for (const g of hasGarbled(`${q.prompt}\n${q.passage || ""}`)) add(q.id, `toefl-garbled-${g}`, q.prompt);
}

for (const q of satQuestions) {
  if (!q.prompt?.trim()) add(q.id, "sat-empty-stem", "");
  if (wordCount(q.prompt) < 3) add(q.id, "sat-tiny-stem", q.prompt);
  if (!MATH.has(q.skill) && !q.passage?.trim()) add(q.id, "sat-no-passage", q.skill);
  for (const w of WRAPPER_ONLY) {
    if (w.test(`${q.passage || ""}\n${q.prompt}`)) add(q.id, "sat-wrapper", q.passage || q.prompt);
  }
  for (const g of hasGarbled(`${q.prompt}\n${q.passage || ""}`)) add(q.id, `sat-garbled-${g}`, q.prompt);
}

let apEmpty = 0;
let apTiny = 0;
let apWrapperStem = 0;
for (const set of questionnaires.filter((s) => s.subject.startsWith("AP "))) {
  for (const item of set.items) {
    const p = item.prompt?.trim() || "";
    if (!p) {
      apEmpty += 1;
      add(`${set.id}/${item.id}`, "ap-empty-stem", set.subject);
      continue;
    }
    const withoutParts = p
      .replace(/\n+\([a-c]\)[^\n]*/gi, "")
      .replace(/Documents \(original[\s\S]*?(?=\n\nPrompt:)/, "")
      .replace(/^Prompt:\s*/m, "")
      .trim();
    const stemWords = wordCount(withoutParts);
    if (stemWords < 6) {
      apTiny += 1;
      add(`${set.id}/${item.id}`, "ap-tiny-stem", withoutParts || p.slice(0, 80));
    }
    if (WRAPPER_ONLY.some((w) => w.test(p)) && stemWords < 12) {
      apWrapperStem += 1;
      add(`${set.id}/${item.id}`, "ap-wrapper-only", p.slice(0, 80));
    }
    for (const g of hasGarbled(p)) add(`${set.id}/${item.id}`, `ap-garbled-${g}`, p.slice(0, 80));
  }
}

for (const q of practiceQuestions) {
  if (!q.question?.trim()) add(q.id, "drill-empty", "");
  const withoutParts = q.question.replace(/\n+\([a-c]\)[^\n]*/gi, "").trim();
  if (q.format !== "mcq" && wordCount(withoutParts) < 6) add(q.id, "drill-tiny", withoutParts);
}

const byKind = new Map<string, Row[]>();
for (const r of rows) {
  const list = byKind.get(r.kind) || [];
  list.push(r);
  byKind.set(r.kind, list);
}

console.log("=== STEM AUDIT ===");
console.log({
  toefl: toeflQuestions.length,
  sat: satQuestions.length,
  apEmpty,
  apTiny,
  apWrapperStem,
  totalIssues: rows.length,
});
console.log("\n=== BY KIND ===");
for (const [kind, list] of [...byKind.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${kind}: ${list.length}`);
  for (const r of list.slice(0, 8)) console.log(`  ${r.id} :: ${r.detail}`);
  if (list.length > 8) console.log(`  … ${list.length - 8} more`);
}
