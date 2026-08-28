import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { satQuestions, toeflQuestions } from "../data/english-content";

const root = path.dirname(fileURLToPath(import.meta.url));

function loadExtra() {
  const file = path.join(root, "../data/english-questions-extra.ts");
  const batch3 = path.join(root, "../data/english-questions-batch3.ts");
  const source = readFileSync(file, "utf8");
  const batch3Source = readFileSync(batch3, "utf8");
  const toeflCount = (source.match(/id: "toefl-extra-/g) || []).length;
  const satCount = (source.match(/id: "sat-extra-/g) || []).length;
  const batch3Toefl = (batch3Source.match(/"id": "toefl-batch3-/g) || []).length;
  const batch3Sat = (batch3Source.match(/"id": "sat-batch3-/g) || []).length;
  return { toeflCount, satCount, batch3Toefl, batch3Sat };
}

function validateBank(label: string, items: typeof toeflQuestions) {
  const ids = new Set<string>();
  for (const item of items) {
    if (ids.has(item.id)) throw new Error(`${label}: duplicate id ${item.id}`);
    ids.add(item.id);
    if (!item.prompt.trim()) throw new Error(`${label}: empty prompt in ${item.id}`);
    if (item.choices.length !== 4) throw new Error(`${label}: ${item.id} must have 4 choices`);
    if (item.answer < 0 || item.answer > 3) throw new Error(`${label}: invalid answer in ${item.id}`);
    if (!item.explanation.trim()) throw new Error(`${label}: missing explanation in ${item.id}`);
  }
}

validateBank("TOEFL", toeflQuestions);
validateBank("SAT", satQuestions);

const extra = loadExtra();
if (extra.toeflCount < 40) throw new Error(`Expected at least 40 extra TOEFL questions, got ${extra.toeflCount}`);
if (extra.satCount < 40) throw new Error(`Expected at least 40 extra SAT questions, got ${extra.satCount}`);
if (extra.batch3Toefl < 31) throw new Error(`Expected at least 31 batch3 TOEFL questions, got ${extra.batch3Toefl}`);
if (extra.batch3Sat < 31) throw new Error(`Expected at least 31 batch3 SAT questions, got ${extra.batch3Sat}`);
if (toeflQuestions.length < 80) throw new Error(`Expected at least 80 TOEFL questions total, got ${toeflQuestions.length}`);
if (satQuestions.length < 80) throw new Error(`Expected at least 80 SAT questions total, got ${satQuestions.length}`);

console.log(
  `OK · TOEFL ${toeflQuestions.length} · SAT ${satQuestions.length} · extra ${extra.toeflCount}+${extra.satCount} · batch3 ${extra.batch3Toefl}+${extra.batch3Sat}`
);
