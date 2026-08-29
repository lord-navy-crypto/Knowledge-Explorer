import { describe, expect, it } from "vitest";
import { checkPracticeSource } from "@/lib/practice-lang-check";
import { PRACTICE_LANGS } from "@/data/practice-langs";
import { ALL_CODE_LANGS } from "@/data/code-language-hub";
import { codeLangSearchHaystack } from "@/lib/toolbox-search";
import { playgroundHref } from "@/lib/code-draft-bridge";
import { boardLang } from "@/lib/code-editor-studio";

describe("practice language structure check", () => {
  it("passes balanced C-like source and fails unmatched braces", () => {
    const ok = checkPracticeSource("int main() { return 0; }\n");
    expect(ok.ok).toBe(true);
    expect(ok.notes.join(" ")).toMatch(/not a compiler/i);

    const bad = checkPracticeSource("int main() { return 0;\n");
    expect(bad.ok).toBe(false);
    expect(bad.issues.some((item) => item.includes("{"))).toBe(true);
  });

  it("does not treat #include as a comment", () => {
    const result = checkPracticeSource("#include <stdio.h>\nint main(void) { return 0; }\n");
    expect(result.ok).toBe(true);
  });

  it("strips hash comments when asked", () => {
    const result = checkPracticeSource("a = [1, 2, 3]\n# leftover {\nputs a.sum\n", {
      hashComments: true,
    });
    expect(result.ok).toBe(true);
  });
});

describe("practice languages on the one editor", () => {
  it("keeps original hub langs and adds practice langs with bookmark hrefs", () => {
    const ids = ALL_CODE_LANGS.map((row) => row.id);
    expect(ids.slice(0, 8)).toEqual([
      "python",
      "sql",
      "markdown",
      "javascript",
      "typescript",
      "web",
      "java",
      "csharp",
    ]);
    expect(PRACTICE_LANGS.every((row) => ids.includes(row.id))).toBe(true);
    expect(ALL_CODE_LANGS.every((row) => row.href === `/code/${row.id}`)).toBe(true);
  });

  it("maps practice langs to the one editor, not a fake compiler page", () => {
    expect(playgroundHref("c")).toBe("/code/editor?lang=c");
    expect(playgroundHref("kotlin")).toBe("/code/editor?lang=kotlin");
    expect(boardLang("rust")).toBe("rust");
    expect(boardLang("web")).toBe("html");
  });

  it("keeps python out of new-language search copy", () => {
    const extraHrefs = new Set(PRACTICE_LANGS.map((row) => `/code/${row.id}`));
    for (const row of codeLangSearchHaystack()) {
      if (!extraHrefs.has(row.href)) continue;
      expect(row.title.toLowerCase()).not.toMatch(/\bpython\b/);
      expect(row.body.toLowerCase()).not.toMatch(/\bpython\b/);
    }
  });
});
