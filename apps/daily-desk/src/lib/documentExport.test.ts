import { describe, expect, it } from "vitest";
import { markdownToDocx, parseMarkdownBlocks } from "./documentExport";

describe("document editing and export", () => {
  it("recognizes headings, lists, quotes and text without deleting content", () => {
    const blocks=parseMarkdownBlocks("# Report\n- First item\n> A note\nRegular paragraph");
    expect(blocks.map(b=>b.kind)).toEqual(["heading","list","quote","paragraph"]);
    expect(blocks[0].level).toBe(1);
  });
  it("generates a Word document ZIP package", async () => {
    const bytes=await markdownToDocx("# Hello\nA test document");
    expect(bytes.length).toBeGreaterThan(500);
    expect(bytes[0]).toBe(0x50);
    expect(bytes[1]).toBe(0x4b);
  });
});
