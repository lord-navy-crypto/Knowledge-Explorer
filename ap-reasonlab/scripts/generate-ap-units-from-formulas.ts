/**
 * Scaffold AP unit content from formula sheets — validates structure for editors.
 * Run: npx tsx scripts/generate-ap-units-from-formulas.ts
 */
import { formulas } from "../data/formulas";
import { concepts } from "../data/content";

const subjects = [
  "AP Physics 1",
  "AP Calculus AB/BC",
  "AP Chemistry",
  "AP Biology",
  "AP US History",
  "AP English Language",
] as const;

for (const subject of subjects) {
  const subjectFormulas = formulas.filter((f) => f.subject === subject);
  const subjectConcepts = concepts.filter((c) => c.subject === subject);
  console.log(
    `${subject}: ${subjectConcepts.length} concepts · ${subjectFormulas.length} formulas`
  );
  if (subjectFormulas.length === 0) {
    console.warn(`  ⚠ No formulas indexed for ${subject}`);
  }
}

console.log("\nTip: add concepts in data/ap-expanded.ts or data/content.ts,");
console.log("formulas in data/formulas.ts, and generated sets in data/questionnaires.ts.");
