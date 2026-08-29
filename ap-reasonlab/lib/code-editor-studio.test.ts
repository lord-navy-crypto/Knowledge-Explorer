import { describe, expect, it } from "vitest";
import { isCodeLangId, langIdFromFilename, codingAiPlaygroundHref } from "@/lib/code-editor-studio";

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
    expect(isCodeLangId("ruby")).toBe(true);
    expect(isCodeLangId("rust")).toBe(true);
    expect(isCodeLangId("fortran")).toBe(false);
    expect(langIdFromFilename("main.rs")).toBe("rust");
    expect(langIdFromFilename("main.go")).toBe("go");
    expect(codingAiPlaygroundHref("Rust")).toBe("/code/editor?lang=rust");
    expect(codingAiPlaygroundHref("HTML / CSS / JS")).toBe("/code/editor?lang=web");
  });
});
