import { describe, expect, it } from "vitest";
import { toeflQuestions, satQuestions } from "@/data/english-content";

describe("english question banks", () => {
  it("has at least 90 TOEFL and 90 SAT questions", () => {
    expect(toeflQuestions.length).toBeGreaterThanOrEqual(90);
    expect(satQuestions.length).toBeGreaterThanOrEqual(90);
  });
});
