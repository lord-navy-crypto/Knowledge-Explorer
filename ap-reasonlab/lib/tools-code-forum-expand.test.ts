import { describe, expect, it, vi } from "vitest";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import { extractForumOfficialLinks } from "@/lib/forum-official-links";
import { encodeBase64, decodeBase64, encodeUriComponent, decodeUriComponent } from "@/lib/encode-decode";
import { preloadWriteToolDraft, consumeWriteToolHandoff } from "@/lib/write-tool-handoff";

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
    expect(code?.toolIds).toContain("encode-decode");
  });

  it("includes write-convert wizard in write cluster", async () => {
    const { TOOL_CLUSTERS } = await import("@/data/tool-clusters");
    const write = TOOL_CLUSTERS.find((c) => c.id === "write-convert");
    expect(write?.toolIds[0]).toBe("write-convert");
  });
});

describe("encode-decode", () => {
  it("round-trips base64 utf-8", () => {
    const raw = "Hello 🎓";
    expect(decodeBase64(encodeBase64(raw))).toBe(raw);
  });

  it("encodes url components", () => {
    expect(decodeUriComponent(encodeUriComponent("a b&c"))).toBe("a b&c");
  });
});

describe("write-tool-handoff", () => {
  it("stores and consumes handoff once", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {});
    vi.stubGlobal("sessionStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => store.set(k, v),
      removeItem: (k: string) => store.delete(k),
    });
    preloadWriteToolDraft("dual", "Draft text", "Title");
    const got = consumeWriteToolHandoff("dual");
    expect(got?.text).toBe("Draft text");
    expect(consumeWriteToolHandoff("dual")).toBeNull();
  });

  it("loads draft handoff into draft target", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {});
    vi.stubGlobal("sessionStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => store.set(k, v),
      removeItem: (k: string) => store.delete(k),
    });
    preloadWriteToolDraft("draft", "# Outline\n\n- Point one");
    const got = consumeWriteToolHandoff("draft");
    expect(got?.text).toContain("Outline");
  });
});

describe("forum-official-links", () => {
  it("suggests python docs for python threads", () => {
    const links = extractForumOfficialLinks("How do I use python lists?");
    expect(links.some((l) => l.href.includes("python.org") || l.href.includes("docs.python"))).toBe(
      true
    );
  });

  it("links code blocks to official docs", () => {
    const links = extractForumOfficialLinks("```python\nprint(1)\n```");
    expect(links.some((l) => l.kind === "code-lang")).toBe(true);
  });
});
