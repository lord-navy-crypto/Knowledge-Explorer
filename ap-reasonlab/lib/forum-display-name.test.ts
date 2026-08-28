import { describe, expect, it } from "vitest";
import { parseForumDiscussionCategory } from "@/components/ForumDiscussions";

describe("parseForumDiscussionCategory", () => {
  it("maps beta-feedback tag", () => {
    expect(parseForumDiscussionCategory("beta-feedback")).toBe("beta-feedback");
    expect(parseForumDiscussionCategory("beta")).toBe("beta-feedback");
  });

  it("defaults to all", () => {
    expect(parseForumDiscussionCategory(null)).toBe("all");
    expect(parseForumDiscussionCategory("")).toBe("all");
  });
});
