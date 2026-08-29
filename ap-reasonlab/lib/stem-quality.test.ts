import { describe, expect, it } from "vitest";
import { questionnaires } from "@/data/questionnaires";
import { satQuestions, toeflQuestions } from "@/data/english-content";

const WRAPPER_ONLY = [
  /Identify the relevant principle/,
  /List known quantities and the unknown/,
  /Set up the derivative, integral, or limit/,
];

function wordCount(s: string): number {
  return s.trim().split(/\s+/).filter(Boolean).length;
}

function stemOf(prompt: string): string {
  return prompt
    .replace(/\n+\([a-c]\)[^\n]*/gi, "")
    .replace(/Documents \(original[\s\S]*?(?=\n\nPrompt:)/, "")
    .replace(/^Prompt:\s*/m, "")
    .trim();
}

function garbledHits(s: string): string[] {
  const hits: string[] = [];
  if (/�|\uFFFD/.test(s)) hits.push("replacement-char");
  if (/Ã.|Â.|â€/.test(s)) hits.push("mojibake");
  if (/(?<!\\),d(t|x|y|A|m)\b/.test(s) || /(?<!\\),d\\theta/.test(s)) hits.push("comma-dt");
  if (/\$\$\$/.test(s)) hits.push("triple-dollar");
  return hits;
}

describe("AP + English stem quality", () => {
  it("keeps SAT/TOEFL prompts as real stems without garble", () => {
    expect(toeflQuestions.length).toBeGreaterThan(150);
    expect(satQuestions.length).toBeGreaterThan(150);
    for (const q of [...toeflQuestions, ...satQuestions]) {
      expect(wordCount(q.prompt), q.id).toBeGreaterThanOrEqual(3);
      expect(garbledHits(`${q.prompt}\n${q.passage || ""}`), q.id).toEqual([]);
    }
  });

  it("expands AP stems past one-line wrappers and repairs comma-differentials", () => {
    const tiny: string[] = [];
    const wrap: string[] = [];
    const garbled: string[] = [];
    for (const set of questionnaires.filter((s) => s.subject.startsWith("AP "))) {
      for (const item of set.items) {
        const p = item.prompt?.trim() || "";
        const id = `${set.id}/${item.id}`;
        if (!p) {
          tiny.push(id);
          continue;
        }
        const words = wordCount(stemOf(p));
        if (words < 6) tiny.push(id);
        if (WRAPPER_ONLY.some((w) => w.test(p)) && words < 12) wrap.push(id);
        const hits = garbledHits(p);
        if (hits.length) garbled.push(`${id}:${hits.join(",")}`);
      }
    }
    expect(tiny, tiny.join(", ")).toEqual([]);
    expect(wrap, wrap.join(", ")).toEqual([]);
    expect(garbled, garbled.join(", ")).toEqual([]);
  });
});
