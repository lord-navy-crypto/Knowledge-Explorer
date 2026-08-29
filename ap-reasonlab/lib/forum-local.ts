const DRAFT_KEY = "ke-forum-composer-draft";
const STARS_KEY = "ke-forum-starred-ids";
const SORT_KEY = "ke-forum-sort";

export type ForumSortMode = "newest" | "active" | "replies";

export type ForumComposerDraft = {
  title: string;
  body: string;
  postCategory: string;
};

function storage(): Storage | null {
  try {
    return (globalThis as { localStorage?: Storage }).localStorage ?? null;
  } catch {
    return null;
  }
}

export function loadForumComposerDraft(): ForumComposerDraft | null {
  const ls = storage();
  if (!ls) return null;
  try {
    const parsed = JSON.parse(ls.getItem(DRAFT_KEY) || "null") as ForumComposerDraft | null;
    if (!parsed || typeof parsed.title !== "string" || typeof parsed.body !== "string") return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveForumComposerDraft(draft: ForumComposerDraft) {
  storage()?.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function clearForumComposerDraft() {
  storage()?.removeItem(DRAFT_KEY);
}

export function loadForumStars(): string[] {
  const ls = storage();
  if (!ls) return [];
  try {
    const parsed = JSON.parse(ls.getItem(STARS_KEY) || "[]") as unknown;
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === "string") : [];
  } catch {
    return [];
  }
}

export function toggleForumStar(id: string): string[] {
  const next = loadForumStars();
  const i = next.indexOf(id);
  if (i >= 0) next.splice(i, 1);
  else next.push(id);
  storage()?.setItem(STARS_KEY, JSON.stringify(next));
  return next;
}

export function isForumSortMode(value: string | null | undefined): value is ForumSortMode {
  return value === "newest" || value === "active" || value === "replies";
}

export function loadForumSort(): ForumSortMode {
  const raw = storage()?.getItem(SORT_KEY);
  return isForumSortMode(raw) ? raw : "newest";
}

export function saveForumSort(sort: ForumSortMode) {
  if (!isForumSortMode(sort)) return;
  storage()?.setItem(SORT_KEY, sort);
}
