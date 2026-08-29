import { describe, expect, it, vi } from "vitest";
import { appendToCodeBoard, updateCodeBoardBlock } from "@/lib/code-board-store";
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

describe("json-format helpers", () => {
  it("sorts keys recursively and extracts a path", async () => {
    const { sortJsonKeys, getJsonPath, jsonStats } = await import("@/lib/json-format");
    const sorted = sortJsonKeys({ z: 1, a: { d: 2, c: 3 } }) as { a: { c: number; d: number }; z: number };
    expect(Object.keys(sorted)).toEqual(["a", "z"]);
    expect(Object.keys(sorted.a)).toEqual(["c", "d"]);
    expect(getJsonPath({ tools: ["json"] }, "tools[0]")).toBe("json");
    expect(jsonStats({ a: { b: 1 } }).keys).toBe(2);
  });
});

describe("encode-decode extras", () => {
  it("round-trips hex and html entities", async () => {
    const { encodeHex, decodeHex, encodeHtmlEntities, decodeHtmlEntities, peekJwt } = await import(
      "@/lib/encode-decode"
    );
    expect(decodeHex(encodeHex("Hi"))).toBe("Hi");
    expect(decodeHtmlEntities(encodeHtmlEntities("<script>"))).toBe("<script>");
    const jwt =
      "eyJhbGciOiJub25lIn0.eyJzdWIiOiJrZSIsIm5hbWUiOiJFeHBsb3JlciJ9.sig";
    const peeked = JSON.parse(peekJwt(jwt)) as { payload: { sub: string } };
    expect(peeked.payload.sub).toBe("ke");
  });
});

describe("forum payload detect", () => {
  it("extracts json fences and base64 data urls", async () => {
    const { extractForumJsonPayloads, extractForumBase64Payloads } = await import(
      "@/lib/forum-payload-detect"
    );
    const json = extractForumJsonPayloads('See\n```json\n{"ok":true}\n```');
    expect(json[0]).toContain('"ok"');
    const b64 = extractForumBase64Payloads("data:text/plain;base64,SGVsbG8hSGVsbG8h");
    expect(b64[0]).toContain("SGVsbG8");
  });
});

describe("code-board update", () => {
  it("updates an existing user block", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      clear: () => store.clear(),
    });
    const id = appendToCodeBoard({ language: "python", title: "A", code: "print(1)" });
    expect(updateCodeBoardBlock(id, "print(2)")).toBe(true);
    expect(store.get("ke-code-board-v1")).toContain("print(2)");
  });
});

describe("write-convert return target", () => {
  it("stores a write-convert handoff", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("window", {});
    vi.stubGlobal("sessionStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => store.set(k, v),
      removeItem: (k: string) => store.delete(k),
    });
    preloadWriteToolDraft("write-convert", "Back from dual", "Title");
    const got = consumeWriteToolHandoff("write-convert");
    expect(got?.text).toBe("Back from dual");
  });
});
