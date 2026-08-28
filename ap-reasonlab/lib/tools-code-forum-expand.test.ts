import { describe, expect, it, vi } from "vitest";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import { resolveForumPostCategory } from "@/lib/forum-api";

describe("code-board-store", () => {
  it("appends a block id", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      clear: () => store.clear(),
    });
    const id = appendToCodeBoard({
      language: "python",
      title: "Demo",
      code: "print(1)",
    });
    expect(id).toMatch(/^cb-/);
    expect(store.get("ke-code-board-v1")).toContain("print(1)");
  });
});

describe("forum-code-blocks", () => {
  it("extracts fenced python blocks", () => {
    const blocks = extractForumCodeBlocks("Here:\n```python\nprint('hi')\n```");
    expect(blocks).toHaveLength(1);
    expect(blocks[0]?.language).toBe("python");
    expect(blocks[0]?.code).toContain("print");
  });
});

describe("tool clusters", () => {
  it("includes json formatter in code workbench", async () => {
    const { TOOL_CLUSTERS } = await import("@/data/tool-clusters");
    const code = TOOL_CLUSTERS.find((c) => c.id === "code-workbench");
    expect(code?.toolIds).toContain("json-formatter");
  });
});
