/**
 * Rewrite AP questionnaire source exports into official College Board exam shape.
 * Run from ap-reasonlab: npx tsx scripts/persist-ap-official-shape.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Questionnaire } from "../lib/types";
import { shapeApQuestionnaires } from "../lib/ap-exam-format";
import { apCedPractice } from "../data/ap-ced-practice";
import { apHumanitiesSetE } from "../data/ap-humanities-set-e";
import { apPracticeSetD } from "../data/ap-practice-set-d";
import { apHumanitiesSetC, apHumanitiesSetD } from "../data/ap-humanities-set-c-d";
import { apPracticeExpansion } from "../data/ap-practice-expansion";
import { apPracticeSetB } from "../data/ap-practice-set-b";
import { apPracticeSetC } from "../data/ap-practice-set-c";
import { apPracticeBySubject } from "../data/ap-practice-by-subject";
import { humanitiesQuestionnaires } from "../data/ap-humanities-practice";
import { statsQuestionnaires } from "../data/ap-stats";
import { macroQuestionnaires } from "../data/ap-macro";
import { microQuestionnaires } from "../data/ap-micro";
import { physics2Questionnaires } from "../data/ap-physics2";

const root = path.dirname(fileURLToPath(import.meta.url));
const data = path.join(root, "../data");

function findArrayEnd(source: string, openIndex: number): number {
  let depth = 0;
  let inStr: string | null = null;
  let escape = false;
  for (let i = openIndex; i < source.length; i += 1) {
    const c = source[i]!;
    if (inStr) {
      if (escape) {
        escape = false;
        continue;
      }
      if (c === "\\") {
        escape = true;
        continue;
      }
      if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") {
      inStr = c;
      continue;
    }
    if (c === "[") depth += 1;
    if (c === "]") {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }
  throw new Error(`Unbalanced array starting at ${openIndex}`);
}

function replaceExport(filePath: string, exportName: string, sets: Questionnaire[]) {
  const source = readFileSync(filePath, "utf8");
  const needle = `export const ${exportName}`;
  const start = source.indexOf(needle);
  if (start < 0) throw new Error(`Missing ${exportName} in ${filePath}`);
  const eq = source.indexOf("=", start);
  const open = source.indexOf("[", eq);
  if (open < 0) throw new Error(`No array for ${exportName}`);
  const close = findArrayEnd(source, open);
  let end = close;
  if (source[end] === ";") end += 1;
  const next = `${source.slice(0, start)}${needle}: Questionnaire[] = ${JSON.stringify(sets, null, 2)};${source.slice(end)}`;
  writeFileSync(filePath, next);
}

function file(name: string) {
  return path.join(data, name);
}

function extractInlineQuestionnaires() {
  const qPath = file("questionnaires.ts");
  let source = readFileSync(qPath, "utf8");
  if (source.includes("apInlineQuestionnaires")) return false;

  const marker = "export const questionnaires: Questionnaire[] = shapeApQuestionnaires([";
  const start = source.indexOf(marker);
  const spread = source.indexOf("  ...microQuestionnaires");
  if (start < 0 || spread < 0) throw new Error("Could not locate inline questionnaires");
  const inline = source.slice(start + marker.length, spread);
  writeFileSync(
    file("ap-questionnaires-inline.ts"),
    `import { Questionnaire } from "@/lib/types";

/** Inline generated sets — rewritten into official AP exam shape. */
export const apInlineQuestionnaires: Questionnaire[] = [
${inline}
];
`
  );
  source = source.replace(
    'import { shapeApQuestionnaires } from "@/lib/ap-exam-format";',
    'import { apInlineQuestionnaires } from "@/data/ap-questionnaires-inline";\nimport { shapeApQuestionnaires } from "@/lib/ap-exam-format";'
  );
  source = source.replace(`${marker}${inline}`, `${marker}\n  ...apInlineQuestionnaires,\n  `);
  writeFileSync(qPath, source);
  return true;
}

extractInlineQuestionnaires();

replaceExport(file("ap-ced-practice.ts"), "apCedPractice", shapeApQuestionnaires(apCedPractice));
replaceExport(file("ap-humanities-set-e.ts"), "apHumanitiesSetE", shapeApQuestionnaires(apHumanitiesSetE));
replaceExport(file("ap-practice-set-d.ts"), "apPracticeSetD", shapeApQuestionnaires(apPracticeSetD));
replaceExport(file("ap-humanities-set-c-d.ts"), "apHumanitiesSetC", shapeApQuestionnaires(apHumanitiesSetC));
replaceExport(file("ap-humanities-set-c-d.ts"), "apHumanitiesSetD", shapeApQuestionnaires(apHumanitiesSetD));
replaceExport(file("ap-practice-expansion.ts"), "apPracticeExpansion", shapeApQuestionnaires(apPracticeExpansion));
replaceExport(file("ap-practice-set-b.ts"), "apPracticeSetB", shapeApQuestionnaires(apPracticeSetB));
replaceExport(file("ap-practice-set-c.ts"), "apPracticeSetC", shapeApQuestionnaires(apPracticeSetC));
replaceExport(file("ap-practice-by-subject.ts"), "apPracticeBySubject", shapeApQuestionnaires(apPracticeBySubject));
replaceExport(file("ap-humanities-practice.ts"), "humanitiesQuestionnaires", shapeApQuestionnaires(humanitiesQuestionnaires));
replaceExport(file("ap-stats.ts"), "statsQuestionnaires", shapeApQuestionnaires(statsQuestionnaires));
replaceExport(file("ap-macro.ts"), "macroQuestionnaires", shapeApQuestionnaires(macroQuestionnaires));
replaceExport(file("ap-micro.ts"), "microQuestionnaires", shapeApQuestionnaires(microQuestionnaires));
replaceExport(file("ap-physics2.ts"), "physics2Questionnaires", shapeApQuestionnaires(physics2Questionnaires));

void import("../data/ap-questionnaires-inline").then((mod) => {
  replaceExport(
    file("ap-questionnaires-inline.ts"),
    "apInlineQuestionnaires",
    shapeApQuestionnaires(mod.apInlineQuestionnaires)
  );
  console.log("Wrote official exam-shape AP questionnaire exports.");
});
