import { describe, expect, it, vi } from "vitest";
import {
  clearForumComposerDraft,
  clearForumReplyDraft,
  loadForumComposerDraft,
  loadForumReplyDraft,
  loadForumSort,
  loadForumStars,
  preloadForumComposer,
  saveForumComposerDraft,
  saveForumReplyDraft,
  saveForumSort,
  toggleForumStar,
} from "@/lib/forum-local";

describe("forum local drafts and stars", () => {
  it("round-trips a composer draft and starred ids", () => {
    const store = new Map<string, string>();
    vi.stubGlobal("localStorage", {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => {
        store.set(k, v);
      },
      removeItem: (k: string) => {
        store.delete(k);
      },
    });
    expect(loadForumComposerDraft()).toBeNull();
    saveForumComposerDraft({ title: "Help with Gauss", body: "How do I…", postCategory: "questions" });
    expect(loadForumComposerDraft()?.title).toMatch(/Gauss/);
    clearForumComposerDraft();
    expect(loadForumComposerDraft()).toBeNull();

    expect(loadForumStars()).toEqual([]);
    expect(toggleForumStar("p1")).toEqual(["p1"]);
    expect(toggleForumStar("p1")).toEqual([]);

    expect(loadForumSort()).toBe("newest");
    saveForumSort("replies");
    expect(loadForumSort()).toBe("replies");
    saveForumSort("active");
    expect(loadForumSort()).toBe("active");

    expect(loadForumReplyDraft("t1")).toBe("");
    saveForumReplyDraft("t1", "> quoted");
    expect(loadForumReplyDraft("t1")).toBe("> quoted");
    clearForumReplyDraft("t1");
    expect(loadForumReplyDraft("t1")).toBe("");

    preloadForumComposer({ title: "From editor", body: "```python\nprint(1)\n```", postCategory: "questions" });
    expect(loadForumComposerDraft()?.title).toMatch(/editor/);
  });
});
