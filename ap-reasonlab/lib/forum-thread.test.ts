import { describe, expect, it } from "vitest";
import {
  forumPostHasCode,
  forumPostHasFiles,
  forumThreadMarkdown,
} from "@/lib/forum-thread";
import type { ManagedForumPost } from "@/lib/managed-types";

function post(partial: Partial<ManagedForumPost>): ManagedForumPost {
  return {
    id: "p1",
    title: "Gauss help",
    body: "How do I set this up?",
    author: "Ada",
    createdAt: 1,
    attachments: [],
    replies: [],
    ...partial,
  };
}

describe("forum thread helpers", () => {
  it("detects fenced code and files", () => {
    expect(forumPostHasCode(post({}))).toBe(false);
    expect(
      forumPostHasCode(post({ body: "See\n```python\nprint(1)\n```" }))
    ).toBe(true);
    expect(forumPostHasFiles(post({}))).toBe(false);
    expect(
      forumPostHasFiles(
        post({
            attachments: [{ id: "a1", name: "note.pdf", mime: "application/pdf", fileId: "f1", size: 12 }],
        })
      )
    ).toBe(true);
  });

  it("exports a markdown thread", () => {
    const md = forumThreadMarkdown(
      post({
        replies: [
          {
            id: "r1",
            author: "Bo",
            body: "Try Gauss's law.",
            createdAt: 2,
            attachments: [],
          },
        ],
      })
    );
    expect(md).toMatch(/# Gauss help/);
    expect(md).toMatch(/Try Gauss/);
  });
});
