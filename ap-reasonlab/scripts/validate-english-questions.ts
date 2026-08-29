import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { satQuestions, toeflQuestions } from "../data/english-content";

const root = path.dirname(fileURLToPath(import.meta.url));

function loadExtra() {
  const file = path.join(root, "../data/english-questions-extra.ts");
  const extended = path.join(root, "../data/english-questions-curated-extended.ts");
  const source = readFileSync(file, "utf8");
  const extendedSource = readFileSync(extended, "utf8");
  const toeflCount = (source.match(/id: "toefl-extra-|"id": "toefl-extra-/g) || []).length;
  const satCount = (source.match(/id: "sat-extra-|"id": "sat-extra-/g) || []).length;
  const extToefl = (extendedSource.match(/toefl-curated-ext-/g) || []).length;
  const extSat = (extendedSource.match(/sat-curated-ext-/g) || []).length;
  return { toeflCount, satCount, extToefl, extSat };
}

function validateBank(label: string, items: typeof toeflQuestions) {
  const ids = new Set<string>();
  for (const item of items) {
    if (ids.has(item.id)) throw new Error(`${label}: duplicate id ${item.id}`);
    ids.add(item.id);
    if (item.id.includes("batch3")) throw new Error(`${label}: batch3 template id still present: ${item.id}`);
    if (item.prompt.includes("[Batch 3")) throw new Error(`${label}: batch3 template prompt in ${item.id}`);
    if (typeof item.prompt !== "string" || !item.prompt.trim()) {
      throw new Error(`${label}: empty or invalid prompt in ${item.id}`);
    }
    if (!Array.isArray(item.choices) || item.choices.length !== 4) {
      throw new Error(`${label}: ${item.id} must have 4 choices`);
    }
    if (item.answer < 0 || item.answer > 3) throw new Error(`${label}: invalid answer in ${item.id}`);
    if (!item.explanation.trim()) throw new Error(`${label}: missing explanation in ${item.id}`);
  }
}

validateBank("TOEFL", toeflQuestions);
validateBank("SAT", satQuestions);

const extra = loadExtra();
if (extra.toeflCount < 40) throw new Error(`Expected at least 40 extra TOEFL questions, got ${extra.toeflCount}`);
if (extra.satCount < 40) throw new Error(`Expected at least 40 extra SAT questions, got ${extra.satCount}`);
if (extra.extToefl < 31) throw new Error(`Expected at least 31 curated-ext TOEFL questions, got ${extra.extToefl}`);
if (extra.extSat < 31) throw new Error(`Expected at least 31 curated-ext SAT questions, got ${extra.extSat}`);
if (toeflQuestions.length < 120) throw new Error(`Expected at least 120 TOEFL questions total, got ${toeflQuestions.length}`);
if (satQuestions.length < 120) throw new Error(`Expected at least 120 SAT questions total, got ${satQuestions.length}`);

console.log(
  `OK · TOEFL ${toeflQuestions.length} · SAT ${satQuestions.length} · extra ${extra.toeflCount}+${extra.satCount} · curated-ext ${extra.extToefl}+${extra.extSat}`
);
