import { describe, expect, it } from "vitest";
import { isCodeLangId, langIdFromFilename } from "@/lib/code-editor-studio";

describe("code editor studio", () => {
  it("maps file extensions to in-editor languages", () => {
    expect(langIdFromFilename("solve.py")).toBe("python");
    expect(langIdFromFilename("app.ts")).toBe("typescript");
    expect(langIdFromFilename("Main.java")).toBe("java");
    expect(langIdFromFilename("index.html")).toBe("web");
    expect(langIdFromFilename("data.json")).toBe("javascript");
    expect(langIdFromFilename("readme")).toBeNull();
  });

  it("accepts hub language ids", () => {
    expect(isCodeLangId("python")).toBe(true);
    expect(isCodeLangId("web")).toBe(true);
    expect(isCodeLangId("ruby")).toBe(false);
  });
});
