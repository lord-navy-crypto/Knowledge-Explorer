import type { ForumPostCategory } from "@/lib/managed-types";

export type ForumPostInput = {
  author?: unknown;
  title?: unknown;
  body?: unknown;
  attachments?: unknown;
  category?: unknown;
};

export type ForumReplyInput = {
  author?: unknown;
  body?: unknown;
  postId?: unknown;
  attachments?: unknown;
};

const FORUM_CATEGORIES = new Set(["questions", "resources", "announcements", "beta-feedback"]);

export function validateForumPostInput(item: ForumPostInput):
  | { ok: true; author: string; title: string; body: string; category?: ForumPostCategory }
  | { ok: false; error: string } {
  const author = String(item.author || "").trim();
  const title = String(item.title || "").trim();
  const body = String(item.body || "").trim();
  const rawCat = String(item.category || "").trim();
  const category = FORUM_CATEGORIES.has(rawCat)
    ? (rawCat as ForumPostCategory)
    : undefined;
  if (author.length < 2 || author.length > 40) {
    return { ok: false, error: "Display name must be 2–40 characters" };
  }
  if (!title || title.length > 120) {
    return { ok: false, error: "Title must be 1–120 characters" };
  }
  if (!body || body.length > 8_000) {
    return { ok: false, error: "Post must be 1–8,000 characters" };
  }
  return { ok: true, author, title, body, category };
}

export function validateForumReplyInput(item: ForumReplyInput):
  | { ok: true; author: string; body: string; postId: string }
  | { ok: false; error: string } {
  const author = String(item.author || "").trim();
  const body = String(item.body || "").trim();
  const postId = String(item.postId || "").trim();
  if (!postId) return { ok: false, error: "Post id required" };
  if (author.length < 2 || author.length > 40) {
    return { ok: false, error: "Display name must be 2–40 characters" };
  }
  if (!body || body.length > 4_000) {
    return { ok: false, error: "Reply must be 1–4,000 characters" };
  }
  return { ok: true, author, body, postId };
}

export function forumPostMatchesCategory(
  post: { title: string; body: string; category?: ForumPostCategory },
  category: ForumPostCategory
): boolean {
  if (post.category) return post.category === category;
  if (category === "questions") {
    return /question|\?|help|how|why|what/i.test(`${post.title} ${post.body}`);
  }
  if (category === "resources") {
    return /resource|share|note|link|material|pdf|guide|tip/i.test(`${post.title} ${post.body}`);
  }
  if (category === "announcements") {
    return /announce|update|news|notice|important/i.test(`${post.title} ${post.body}`);
  }
  if (category === "beta-feedback") {
    return /#beta-feedback|\[beta feedback\]/i.test(`${post.title} ${post.body}`);
  }
  return false;
}
