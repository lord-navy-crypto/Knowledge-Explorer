import { describe, expect, it, vi, beforeEach } from "vitest";
import { NextRequest } from "next/server";
import { emptyManagedContent } from "@/lib/managed-types";

const loadManagedContent = vi.fn();
const saveManagedContent = vi.fn(async (content: unknown) => content);

vi.mock("@/lib/managed-store", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/managed-store")>();
  return {
    ...actual,
    loadManagedContent: (...args: unknown[]) => loadManagedContent(...args),
    saveManagedContent: (content: unknown) => saveManagedContent(content),
  };
});

vi.mock("@/lib/auth", () => ({
  getContentEditorLevel: vi.fn(async () => null),
  getGithubTokenFromCookie: vi.fn(async () => ""),
  setGithubTokenCookie: vi.fn(),
}));

describe("Forum API with mocked storage", () => {
  beforeEach(() => {
    loadManagedContent.mockReset();
    saveManagedContent.mockReset();
    loadManagedContent.mockResolvedValue(emptyManagedContent());
  });

  it("returns 404 for reply to missing post when storage loads", async () => {
    const { POST } = await import("@/app/api/edit/route");
    const req = new NextRequest("http://localhost/api/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-forwarded-for": `forum-mock-${Date.now()}`,
      },
      body: JSON.stringify({
        action: "add_forum_reply",
        item: {
          author: "Alex",
          postId: "missing-post-id",
          body: "A short reply",
        },
      }),
    });
    const res = await POST(req);
    expect(res.status).toBe(404);
    const data = await res.json();
    expect(data.error).toMatch(/Post not found/i);
  });
});
