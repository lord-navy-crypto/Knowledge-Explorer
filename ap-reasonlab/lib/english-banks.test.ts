import { describe, expect, it } from "vitest";
import { toeflQuestions, satQuestions } from "@/data/english-content";

describe("english question banks", () => {
  it("has at least 80 TOEFL and 80 SAT questions", () => {
    expect(toeflQuestions.length).toBeGreaterThanOrEqual(80);
    expect(satQuestions.length).toBeGreaterThanOrEqual(80);
  });
});
