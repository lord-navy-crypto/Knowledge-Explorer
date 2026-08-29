import { describe, expect, it } from "vitest";
import { satQuestions, toeflQuestions } from "@/data/english-content";
import { SAT_ALL_SKILLS, TOEFL_ALL_SKILLS } from "@/lib/english-exam-format";
import { getQuestionnaireById } from "@/data/questionnaires";

describe("english question banks", () => {
  it("has at least 90 TOEFL and 90 SAT questions", () => {
    expect(toeflQuestions.length).toBeGreaterThanOrEqual(90);
    expect(satQuestions.length).toBeGreaterThanOrEqual(90);
  });

  it("uses official exam skill labels only", () => {
    const toefl = new Set(TOEFL_ALL_SKILLS);
    const sat = new Set(SAT_ALL_SKILLS);
    expect(toeflQuestions.every((q) => toefl.has(q.skill))).toBe(true);
    expect(satQuestions.every((q) => sat.has(q.skill))).toBe(true);
  });
});

describe("AP English exam-format sets", () => {
  it("ships Language MCQ + three FRQ types", () => {
    const set = getQuestionnaireById("aplang-exam-format-a");
    expect(set).toBeTruthy();
    const mcq = set!.items.filter((i) => i.format === "mcq");
    const frq = set!.items.filter((i) => i.format === "frq_half");
    expect(mcq.length).toBeGreaterThanOrEqual(6);
    expect(mcq.every((i) => (i.choices?.length ?? 0) === 4)).toBe(true);
    expect(frq.length).toBe(3);
    expect(set!.items.some((i) => /Question 1 Synthesis/i.test(i.conceptIntro || ""))).toBe(true);
    expect(set!.items.some((i) => /Rhetorical Analysis/i.test(i.conceptIntro || ""))).toBe(true);
    expect(set!.items.some((i) => /Question 3 Argument/i.test(i.conceptIntro || ""))).toBe(true);
  });

  it("ships Literature poetry/prose MCQ + three FRQ types", () => {
    const set = getQuestionnaireById("aplit-exam-format-a");
    expect(set).toBeTruthy();
    const mcq = set!.items.filter((i) => i.format === "mcq");
    const frq = set!.items.filter((i) => i.format === "frq_half");
    expect(mcq.length).toBeGreaterThanOrEqual(6);
    expect(mcq.every((i) => (i.choices?.length ?? 0) === 4)).toBe(true);
    expect(frq.length).toBe(3);
    expect(set!.items.some((i) => /literary argument/i.test(i.conceptIntro || ""))).toBe(true);
  });
});
