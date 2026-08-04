/**
 * Manual fixture runner for AI LaTeX accuracy (A/B/C).
 * Usage: npx --yes tsx scripts/check-ai-latex.ts
 */
import { runAiLatexAccuracyFixtures } from "../lib/ai-latex-accuracy";

const fails = runAiLatexAccuracyFixtures();
if (fails.length) {
  console.error("AI LaTeX fixtures failed:", fails.join(", "));
  process.exit(1);
}
console.log("AI LaTeX fixtures passed.");
