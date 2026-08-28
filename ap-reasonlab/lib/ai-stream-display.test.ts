import { describe, expect, it } from "vitest";
import { proseFromPartialJson } from "@/lib/ai-stream-display";

describe("proseFromPartialJson", () => {
  it("returns plain text when not JSON", () => {
    expect(proseFromPartialJson("Hello world")).toBe("Hello world");
  });

  it("extracts partial reply field", () => {
    expect(proseFromPartialJson('{"reply": "Explain force')).toBe("Explain force");
  });

  it("extracts partial feedback field", () => {
    expect(proseFromPartialJson('{"feedback": "Good thesis')).toBe("Good thesis");
  });

  it("unescapes newlines in partial strings", () => {
    expect(proseFromPartialJson('{"reply": "Line one\\nLine two')).toBe("Line one\nLine two");
  });

  it("extracts first hint from partial hints array", () => {
    const partial = '{"hints": ["Identify the concept", "List knowns';
    expect(proseFromPartialJson(partial)).toBe("Identify the concept");
  });

  it("returns empty string for incomplete object with no known keys", () => {
    expect(proseFromPartialJson('{"equations": [')).toBe("");
  });
});
