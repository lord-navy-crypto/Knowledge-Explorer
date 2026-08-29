import { describe, expect, it } from "vitest";
import { questionsForExam, questionsForSection } from "@/lib/english-question-bank";
import { SAT_ALL_SKILLS, TOEFL_ALL_SKILLS, remapEnglishSkill } from "@/lib/english-exam-format";

describe("english question bank", () => {
  it("returns 90+ TOEFL and SAT questions on hubs", () => {
    expect(questionsForExam("toefl").length).toBeGreaterThanOrEqual(90);
    expect(questionsForExam("sat").length).toBeGreaterThanOrEqual(90);
  });

  it("tags every item with an official TOEFL or SAT skill", () => {
    const toefl = new Set(TOEFL_ALL_SKILLS);
    const sat = new Set(SAT_ALL_SKILLS);
    expect(questionsForExam("toefl").every((q) => toefl.has(q.skill))).toBe(true);
    expect(questionsForExam("sat").every((q) => sat.has(q.skill))).toBe(true);
  });

  it("filters TOEFL reading to official ETS reading tasks", () => {
    const reading = questionsForSection("toefl", "reading");
    expect(reading.length).toBeGreaterThan(0);
    expect(
      reading.every(
        (q) =>
          q.skill === "Complete the Words" ||
          q.skill === "Read in Daily Life" ||
          q.skill === "Read an Academic Passage"
      )
    ).toBe(true);
  });

  it("filters SAT mathematics to College Board math domains", () => {
    const math = questionsForSection("sat", "mathematics");
    expect(math.length).toBeGreaterThan(0);
    expect(math.some((q) => q.skill === "Algebra")).toBe(true);
    expect(
      math.some(
        (q) =>
          q.skill === "Advanced Math" ||
          q.skill === "Geometry and Trigonometry" ||
          q.skill === "Problem-Solving and Data Analysis"
      )
    ).toBe(true);
  });

  it("gives every non-math item a stimulus passage", () => {
    const math = new Set([
      "Algebra",
      "Advanced Math",
      "Problem-Solving and Data Analysis",
      "Geometry and Trigonometry",
    ]);
    for (const q of questionsForExam("toefl")) {
      expect(q.passage?.trim().length ?? 0, q.id).toBeGreaterThan(0);
    }
    for (const q of questionsForExam("sat")) {
      if (math.has(q.skill)) continue;
      expect(q.passage?.trim().length ?? 0, q.id).toBeGreaterThan(0);
    }
  });

  it("leads SAT reading with short-passage Information and Ideas / Craft items", () => {
    const reading = questionsForSection("sat", "reading");
    expect(reading[0]?.id.startsWith("sat-auth-")).toBe(true);
    expect(reading[0]?.passage?.trim().length).toBeGreaterThan(20);
  });

  it("leads TOEFL reading with official-shaped items", () => {
    const reading = questionsForSection("toefl", "reading");
    expect(reading[0]?.id.startsWith("toefl-auth-")).toBe(true);
  });
});

describe("remapEnglishSkill", () => {
  it("maps legacy TOEFL and SAT labels onto official task names", () => {
    expect(remapEnglishSkill("Academic Reading", "toefl", "x")).toMatch(/Read /);
    expect(remapEnglishSkill("Listening inference", "toefl", "ab")).toMatch(/Listen/);
    expect(remapEnglishSkill("Transitions", "sat", "y")).toBe("Expression of Ideas");
    expect(remapEnglishSkill("Words in context", "sat", "z")).toBe("Craft and Structure");
    expect(remapEnglishSkill("Linear equations", "sat", "z")).toBe("Algebra");
  });
});
