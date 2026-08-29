import { describe, expect, it } from "vitest";
import { authenticSatQuestions } from "@/data/english-questions-authentic-sat";
import { authenticToeflQuestions } from "@/data/english-questions-authentic-toefl";
import { satQuestions, toeflQuestions } from "@/data/english-content";
import { getQuestionnaireById } from "@/data/questionnaires";
import { STUDY_TOOLS, listedStudyTools } from "@/data/study-tools";
import { ALL_CODE_LANGS } from "@/data/code-language-hub";
import { TOOL_CLUSTERS } from "@/data/tool-clusters";
import { brand } from "@/data/brand";

describe("personal site tools and stems", () => {
  it("lists Calc + Graph pad and hides merged calculator/grapher/pdf-compress cards", () => {
    const listed = listedStudyTools();
    expect(listed.some((t) => t.id === "math-pad")).toBe(true);
    expect(listed.some((t) => t.id === "calculator")).toBe(false);
    expect(listed.some((t) => t.id === "grapher")).toBe(false);
    expect(listed.some((t) => t.id === "pdf-compress")).toBe(false);
    expect(listed.some((t) => t.id === "pdf-tools")).toBe(true);
    expect(listed.some((t) => t.id === "image-crop")).toBe(false);
    expect(listed.some((t) => t.id === "image-compress")).toBe(true);
    const images = STUDY_TOOLS.find((t) => t.id === "image-compress");
    expect(images?.title).toMatch(/desk/i);
    const pad = STUDY_TOOLS.find((t) => t.id === "math-pad");
    expect(pad?.href).toContain("calculator");
  });

  it("points code languages at one editor with a language query", () => {
    expect(ALL_CODE_LANGS.length).toBeGreaterThanOrEqual(7);
    expect(ALL_CODE_LANGS.every((row) => row.href === `/code/${row.id}`)).toBe(true);
  });

  it("keeps math cluster on the fused pad and file lab on PDF desk", () => {
    const math = TOOL_CLUSTERS.find((c) => c.id === "math-science");
    expect(math?.toolIds[0]).toBe("math-pad");
    expect(math?.blurb).toMatch(/d\/dx|∫|calc lab|table|zeros|latex/i);
    const files = TOOL_CLUSTERS.find((c) => c.id === "file-lab");
    expect(files?.toolIds).toContain("pdf-tools");
  });

  it("frames Knowledge Explorer as a personal site with AP & English first", () => {
    expect(brand.tagline).toMatch(/AP & English/i);
    expect(brand.description).toMatch(/personal academic site/i);
  });

  it("gives SAT/TOEFL authentic items real stems, including the lab-notebook delete item", () => {
    const eoi6 = authenticSatQuestions.find((q) => q.id === "sat-auth-eoi-6");
    expect(eoi6?.passage).toMatch(/Lab notebooks/i);
    expect(eoi6?.passage).not.toMatch(/^Which /);
    expect(eoi6?.prompt).toMatch(/deleted/i);
    const shaped = satQuestions.find((q) => q.id === "sat-auth-eoi-6");
    expect(shaped?.passage).toMatch(/Lab notebooks|space opera/i);
    expect(authenticSatQuestions.some((q) => q.id === "sat-auth-ii-8")).toBe(true);
    expect(authenticToeflQuestions.some((q) => q.id === "toefl-auth-acad-6")).toBe(true);
    expect(toeflQuestions.some((q) => q.id === "toefl-auth-disc-4")).toBe(true);
  });

  it("adds full-stem AP sets whose prompts are more than a one-line wrapper", () => {
    const phys = getQuestionnaireById("phys1-full-stems-a");
    const calc = getQuestionnaireById("calc-full-stems-a");
    const macro = getQuestionnaireById("macro-full-stems-a");
    const geo = getQuestionnaireById("humgeo-full-stems-a");
    expect(phys && calc && macro && geo).toBeTruthy();
    const cart = phys!.items.find((i) => i.id === "p1-stem-frq-1");
    expect(cart?.prompt.split(/\s+/).length).toBeGreaterThan(40);
    expect(cart?.prompt).toMatch(/stick and move together/i);
    const tank = calc!.items.find((i) => i.id === "calc-stem-frq-1");
    expect(tank?.prompt).toMatch(/liters per minute/i);
    expect(tank?.prompt).toMatch(/\(a\)/i);
  });
});
