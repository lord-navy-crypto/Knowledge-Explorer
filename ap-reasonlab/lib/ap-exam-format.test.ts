import { describe, expect, it } from "vitest";
import { questionnaires } from "@/data/questionnaires";
import { AP_EXAM_BLUEPRINT } from "@/lib/ap-exam-format";

describe("AP official exam-format pass", () => {
  it("labels every AP-subject item with an exam section", () => {
    const apSets = questionnaires.filter((q) => q.subject.startsWith("AP "));
    expect(apSets.length).toBeGreaterThan(50);
    for (const set of apSets) {
      for (const item of set.items) {
        expect(item.examSection, `${set.id}/${item.id}`).toBeTruthy();
      }
    }
  });

  it("converts leftover concept_check items on AP subjects into FRQ-shaped prompts", () => {
    const leftover = questionnaires
      .filter((q) => q.subject.startsWith("AP "))
      .flatMap((q) => q.items)
      .filter((i) => i.format === "concept_check");
    expect(leftover).toHaveLength(0);
  });

  it("converts leftover fill_blank and open items on AP subjects into FRQ-shaped prompts", () => {
    const leftover = questionnaires
      .filter((q) => q.subject.startsWith("AP "))
      .flatMap((q) => q.items)
      .filter((i) => i.format === "fill_blank" || i.format === "open");
    expect(leftover).toHaveLength(0);
  });

  it("keeps four-choice MCQs", () => {
    const mcq = questionnaires.flatMap((q) => q.items).filter((i) => i.format === "mcq");
    expect(mcq.length).toBeGreaterThan(100);
    expect(mcq.every((i) => (i.choices?.length ?? 0) === 4)).toBe(true);
  });

  it("adds exam-format sets for core AP subjects", () => {
    const ids = [
      "phys1-exam-format-a",
      "chem-exam-format-a",
      "bio-exam-format-a",
      "calc-exam-format-a",
      "stats-exam-format-a",
      "apush-exam-format-a",
      "csa-exam-format-a",
    ];
    for (const id of ids) {
      expect(questionnaires.some((q) => q.id === id), id).toBe(true);
    }
  });

  it("documents official blueprints for every AP course on the site", () => {
    const subjects = [...new Set(questionnaires.map((q) => q.subject).filter((s) => s.startsWith("AP ")))];
    for (const subject of subjects) {
      expect(AP_EXAM_BLUEPRINT[subject], subject).toBeTruthy();
    }
  });

  it("gives history FRQs labeled DBQ original documents and part (a)/(b)", () => {
    const dbq = questionnaires
      .filter((q) => /History/.test(q.subject))
      .flatMap((q) => q.items)
      .filter((i) => /DBQ/i.test(i.examSection || "") || /DBQ/i.test(i.conceptIntro || ""));
    expect(dbq.length).toBeGreaterThan(0);
    for (const item of dbq) {
      expect(item.prompt, item.id).toMatch(/Doc(?:ument)?\s*1\b|Documents \(original/i);
      expect(item.prompt, item.id).toMatch(/\(\s*a\s*\)|\ba\)\s+/i);
    }
  });

  it("rewrites leftover one-line FRQs into labeled parts", () => {
    const frq = questionnaires
      .filter((q) => q.subject.startsWith("AP "))
      .flatMap((q) => q.items)
      .filter((i) => i.format === "frq_half");
    expect(frq.length).toBeGreaterThan(50);
    const withParts = frq.filter((i) => /\(\s*a\s*\)|\ba\)\s+/i.test(i.prompt));
    expect(withParts.length / frq.length).toBeGreaterThan(0.8);
  });

  it("has no concept_check left in AP questionnaire source files", async () => {
    const { readFileSync } = await import("node:fs");
    const { fileURLToPath } = await import("node:url");
    const path = await import("node:path");
    const data = path.join(path.dirname(fileURLToPath(import.meta.url)), "../data");
    const files = [
      "ap-ced-practice.ts",
      "ap-practice-set-b.ts",
      "ap-practice-set-c.ts",
      "ap-practice-set-d.ts",
      "ap-humanities-set-c-d.ts",
      "ap-humanities-set-e.ts",
      "ap-questionnaires-inline.ts",
      "ap-practice-by-subject.ts",
    ];
    for (const name of files) {
      const source = readFileSync(path.join(data, name), "utf8");
      expect(source.includes("concept_check"), name).toBe(false);
    }
  });

  it("adds a stimulus to history MCQs", () => {
    const mcq = questionnaires
      .filter((q) => /History/.test(q.subject))
      .flatMap((q) => q.items)
      .filter((i) => i.format === "mcq");
    expect(mcq.length).toBeGreaterThan(0);
    expect(mcq.every((i) => /Stimulus \(original\)|excerpt|Source/i.test(i.prompt))).toBe(true);
  });
});
