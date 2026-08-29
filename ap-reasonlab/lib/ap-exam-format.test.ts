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
});
