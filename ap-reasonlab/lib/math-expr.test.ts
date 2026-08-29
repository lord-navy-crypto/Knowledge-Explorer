import { describe, expect, it } from "vitest";
import {
  averageValue,
  evalAtX,
  evalExpr,
  findZeros,
  newtonRoot,
  numericDerivative,
  numericIntegral,
  numericSecondDerivative,
  numericSum,
  riemannSum,
  tangentLineExpression,
  valueTable,
} from "@/lib/math-expr";

describe("math-expr calc lab", () => {
  it("evaluates polynomials and trig", () => {
    expect(evalExpr("2*x+1", { x: 3 })).toBe(7);
    expect(evalAtX("x^2", 4)).toBe(16);
  });

  it("approximates derivative and definite integral", () => {
    expect(numericDerivative("x^2", 3)).toBeCloseTo(6, 4);
    expect(numericIntegral("3*x^2", 0, 2)).toBeCloseTo(8, 3);
  });

  it("sums an arithmetic series", () => {
    expect(numericSum("n", 1, 10)).toBe(55);
    expect(numericSum("n^2", 1, 3)).toBe(14);
  });

  it("builds a table of values and finds zeros", () => {
    const rows = valueTable("x^2-1", -1, 1, 1);
    expect(rows.map((r) => r.y)).toEqual([0, -1, 0]);
    const zeros = findZeros("x^2-1", -2, 2);
    expect(zeros.some((z) => Math.abs(z + 1) < 1e-4)).toBe(true);
    expect(zeros.some((z) => Math.abs(z - 1) < 1e-4)).toBe(true);
  });

  it("Newton-refines a root of x^2-2", () => {
    expect(newtonRoot("x^2-2", 1.4)).toBeCloseTo(Math.sqrt(2), 6);
  });

  it("second derivative, average value, tangent, and Riemann", () => {
    expect(numericSecondDerivative("x^2", 3)).toBeCloseTo(2, 2);
    expect(averageValue("x", 0, 2)).toBeCloseTo(1, 4);
    const tangent = tangentLineExpression("x^2", 1);
    expect(tangent).toContain("x");
    expect(evalExpr(tangent, { x: 1 })).toBeCloseTo(1, 4);
    expect(riemannSum("x", 0, 2, 4, "mid")).toBeCloseTo(2, 2);
    expect(riemannSum("x", 0, 2, 4, "left")).toBeLessThan(riemannSum("x", 0, 2, 4, "right"));
  });
});
