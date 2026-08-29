import { describe, expect, it } from "vitest";
import { classifyPaste } from "@/lib/code-paste-detect";

describe("code paste detect", () => {
  it("extracts a python fence", () => {
    const hit = classifyPaste("See:\n```python\nprint(1)\n```");
    expect(hit.kind).toBe("fence");
    expect(hit.language).toBe("python");
    expect(hit.body).toContain("print");
  });

  it("extracts a rust fence into the rust editor lang", () => {
    const hit = classifyPaste("See:\n```rust\nfn main() {}\n```");
    expect(hit.kind).toBe("fence");
    expect(hit.language).toBe("rust");
    expect(hit.body).toContain("fn main");
  });

  it("pretty-prints JSON objects", () => {
    const hit = classifyPaste('{"ok":true,"n":1}');
    expect(hit.kind).toBe("json");
    expect(hit.body).toContain("\n");
    expect(hit.body).toContain('"ok"');
  });

  it("flags long base64", () => {
    const hit = classifyPaste("SGVsbG8gS25vd2xlZGdlIEV4cGxvcmVyISE=");
    expect(hit.kind).toBe("base64");
  });

  it("keeps plain source as plain", () => {
    const hit = classifyPaste("def f(x):\n  return x");
    expect(hit.kind).toBe("plain");
    expect(hit.body).toMatch(/def f/);
  });
});
