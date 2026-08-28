import { describe, expect, it } from "vitest";
import { questionsForExam, questionsForSection } from "@/lib/english-question-bank";

describe("english question bank", () => {
  it("returns 90+ TOEFL and SAT questions on hubs", () => {
    expect(questionsForExam("toefl").length).toBeGreaterThanOrEqual(90);
    expect(questionsForExam("sat").length).toBeGreaterThanOrEqual(90);
  });

  it("filters TOEFL reading section skills", () => {
    const reading = questionsForSection("toefl", "reading");
    expect(reading.length).toBeGreaterThan(0);
    expect(reading.every((q) => q.skill.includes("Reading") || q.skill.includes("Grammar") || q.skill.includes("Words"))).toBe(
      true
    );
  });

  it("filters SAT mathematics section", () => {
    const math = questionsForSection("sat", "mathematics");
    expect(math.length).toBeGreaterThan(0);
    expect(math.some((q) => q.skill === "Algebra" || q.skill === "Linear equations")).toBe(true);
  });
});
