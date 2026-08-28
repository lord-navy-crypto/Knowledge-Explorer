export type ForumPostInput = {
  author?: unknown;
  title?: unknown;
  body?: unknown;
  attachments?: unknown;
};

export type ForumReplyInput = {
  author?: unknown;
  body?: unknown;
  postId?: unknown;
  attachments?: unknown;
};

export function validateForumPostInput(item: ForumPostInput):
  | { ok: true; author: string; title: string; body: string }
  | { ok: false; error: string } {
  const author = String(item.author || "").trim();
  const title = String(item.title || "").trim();
  const body = String(item.body || "").trim();
  if (author.length < 2 || author.length > 40) {
    return { ok: false, error: "Display name must be 2–40 characters" };
  }
  if (!title || title.length > 120) {
    return { ok: false, error: "Title must be 1–120 characters" };
  }
  if (!body || body.length > 8_000) {
    return { ok: false, error: "Post must be 1–8,000 characters" };
  }
  return { ok: true, author, title, body };
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
