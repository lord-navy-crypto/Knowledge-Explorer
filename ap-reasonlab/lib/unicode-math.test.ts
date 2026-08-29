import { describe, expect, it } from "vitest";
import {
  normalizeAuthoredText,
  normalizeAiDialogueText,
  repairCommonLatexSpacing,
} from "@/lib/unicode-math";

describe("repairCommonLatexSpacing", () => {
  it("turns comma-dt and comma-dA into thin-space differentials", () => {
    expect(repairCommonLatexSpacing("\\omega(t),dt")).toBe("\\omega(t)\\,dt");
    expect(repairCommonLatexSpacing("\\alpha(t),dt")).toBe("\\alpha(t)\\,dt");
    expect(repairCommonLatexSpacing("\\hat{n},dA")).toBe("\\hat{n}\\,dA");
    expect(repairCommonLatexSpacing("d\\vec{A}=\\hat{n},dA")).toContain("\\hat{n}\\,dA");
    expect(repairCommonLatexSpacing("\\int_{t_i}^{t_f}\\omega(t),dt")).toContain("\\,dt");
    expect(repairCommonLatexSpacing("\\int_0^6 A(t),dt")).toContain("\\,dt");
    expect(repairCommonLatexSpacing("y,dy=(x^2+1),dx")).toContain("\\,dy");
    expect(repairCommonLatexSpacing("y,dy=(x^2+1),dx")).toContain("\\,dx");
    expect(repairCommonLatexSpacing("r^2,d\\theta")).toContain("\\,d\\theta");
    expect(repairCommonLatexSpacing("\\lambda,d\\ell")).toContain("\\,d\\ell");
  });

  it("runs during authored-text and AI-dialogue normalize", () => {
    expect(normalizeAuthoredText("$d\\vec{A}=\\hat{n},dA$")).toContain("\\,dA");
    expect(normalizeAiDialogueText("$$\\theta_f-\\theta_i=\\int_{t_i}^{t_f}\\omega(t),dt$$")).toContain(
      "\\,dt"
    );
  });
});
