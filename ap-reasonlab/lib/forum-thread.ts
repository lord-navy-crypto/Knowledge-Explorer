import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import type { ManagedForumPost } from "@/lib/managed-types";

export type ForumPayloadFilter = "all" | "code" | "files";

export function isForumPayloadFilter(value: string | null | undefined): value is ForumPayloadFilter {
  return value === "all" || value === "code" || value === "files";
}

export function forumPostHasCode(post: ManagedForumPost): boolean {
  const bodies = [post.body, ...(post.replies || []).map((r) => r.body)];
  return bodies.some((body) => extractForumCodeBlocks(body).length > 0);
}

export function forumPostHasFiles(post: ManagedForumPost): boolean {
  if ((post.attachments || []).length > 0) return true;
  return (post.replies || []).some((r) => (r.attachments || []).length > 0);
}

export function forumThreadMarkdown(post: ManagedForumPost): string {
  const replies = (post.replies || [])
    .map((r) => `### ${r.author}\n\n${r.body.trim()}`)
    .join("\n\n");
  return [`# ${post.title}`, `*${post.author}*`, post.body.trim(), replies ? `---\n\n${replies}` : ""]
    .filter(Boolean)
    .join("\n\n");
}

export function forumAskAiPrompt(post: ManagedForumPost): string {
  const excerpt = post.body.trim().slice(0, 2500);
  return [
    "A student posted this Forum thread. Help them with original-practice guidance (do not paste copyrighted exam text).",
    `Title: ${post.title}`,
    `Author: ${post.author}`,
    excerpt,
  ].join("\n\n");
}
