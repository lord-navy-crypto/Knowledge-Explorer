/**
 * Unified Knowledge Explorer search engine.
 * Indexes built-in catalogs + live managed content for /search and AI site search.
 */
import { AP_CATALOG } from "@/data/ap-catalog";
import { getStaticSearchCorpus } from "@/lib/site-search-static-corpus";
import type { ManagedContent } from "@/lib/managed-types";

export type SiteSearchType =
  | "page"
  | "tool"
  | "subject"
  | "concept"
  | "formula"
  | "practice"
  | "guide"
  | "document"
  | "file"
  | "folder"
  | "english"
  | "code"
  | "forum"
  | "member"
  | "checklist"
  | "learning"
  | "content";

export type SiteSearchHit = {
  id: string;
  type: SiteSearchType | string;
  title: string;
  subject: string;
  detail: string;
  href: string;
  score: number;
};

export const SITE_SEARCH_TYPE_OPTIONS: Array<{ value: string; label: string }> = [
  { value: "all", label: "All types" },
  { value: "page", label: "Pages" },
  { value: "tool", label: "Tools" },
  { value: "subject", label: "AP subjects" },
  { value: "concept", label: "Concepts" },
  { value: "formula", label: "Formulas" },
  { value: "practice", label: "Practice" },
  { value: "guide", label: "Guides" },
  { value: "document", label: "Documents" },
  { value: "file", label: "Files" },
  { value: "folder", label: "Folders" },
  { value: "english", label: "English" },
  { value: "code", label: "Code" },
  { value: "forum", label: "Forum" },
  { value: "member", label: "Members" },
  { value: "learning", label: "Learning tips" },
  { value: "checklist", label: "Checklist" },
];

const STOPWORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "what",
  "when",
  "where",
  "which",
  "how",
  "why",
  "are",
  "was",
  "were",
  "have",
  "has",
  "had",
  "can",
  "could",
  "should",
  "would",
  "into",
  "about",
  "your",
  "you",
  "please",
  "help",
  "explain",
  "using",
  "use",
  "need",
  "want",
  "just",
  "like",
  "also",
  "than",
  "then",
  "them",
  "they",
  "their",
  "there",
  "here",
  "some",
  "any",
  "all",
  "each",
  "more",
  "most",
  "very",
  "much",
  "many",
  "does",
  "did",
  "not",
  "but",
  "out",
  "our",
  "its",
  "it's",
]);

/** Study content outranks pages/members for tutoring queries. */
const TYPE_BOOST: Record<string, number> = {
  concept: 3,
  formula: 3,
  practice: 2.5,
  guide: 2,
  document: 1.5,
  content: 1.5,
  english: 1.5,
  tool: 2.8,
  code: 1.2,
  subject: 1,
  learning: 1,
  file: 0.6,
  folder: 0.5,
  page: 0.4,
  member: 0.3,
  forum: 0.8,
  checklist: 0.5,
};

/** Never surface admin routes in public search. */
const BLOCKED_HREF_PREFIXES = ["/manage", "/admin"];

/** Short navigation queries — prefer tools/pages over incidental body mentions. */
const NAV_QUERY_TERMS = new Set([
  "calculator",
  "grapher",
  "explore",
  "flashcards",
  "toolbox",
  "hints",
  "forum",
  "search",
  "guide",
  "tools",
  "english",
  "code",
]);

const EXAM_QUERY_TERMS = new Set(["toefl", "sat", "ielts"]);

function tokenize(raw: string): string[] {
  const tokens = raw
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff+$/%.-]+/gi, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token));
  // Prefer content tokens; keep a few short ones if everything was stopworded.
  if (tokens.length === 0) {
    return raw
      .toLowerCase()
      .replace(/[^a-z0-9\u4e00-\u9fff+$/%.-]+/gi, " ")
      .split(/\s+/)
      .filter((token) => token.length >= 2)
      .slice(0, 32);
  }
  return tokens.slice(0, 32);
}

function escapeRegex(raw: string): string {
  return raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasWord(text: string, token: string): boolean {
  if (!token) return false;
  const re = new RegExp(`(?:^|[^a-z0-9])${escapeRegex(token)}(?:[^a-z0-9]|$)`, "i");
  return re.test(text);
}

function scoreFields(
  tokens: string[],
  title: string,
  body: string,
  href = ""
): number {
  if (tokens.length === 0) return 0;
  const titleText = title.toLowerCase();
  const bodyText = body.toLowerCase();
  const hrefText = href.toLowerCase();
  let score = 0;
  let titleWordHits = 0;
  let bodyWordHits = 0;

  for (const token of tokens) {
    if (hasWord(titleText, token)) {
      score += 8;
      titleWordHits += 1;
    } else if (titleText.includes(token)) {
      score += 3;
    }
    if (hasWord(bodyText, token)) {
      score += 0.75;
      bodyWordHits += 1;
    } else if (bodyText.includes(token)) {
      score += 0.25;
    }
    if (hrefText.includes(token)) score += 10;
  }

  const phrase = tokens.join(" ");
  if (phrase.length >= 2) {
    if (titleText.includes(phrase)) score += 12;
    else if (bodyText.includes(phrase)) score += 4;
    if (hrefText.includes(phrase.replace(/\s+/g, ""))) score += 6;
  }

  if (titleWordHits === tokens.length) score += 14;
  else if (titleWordHits > 0 && bodyWordHits === 0) score += 6;
  else if (bodyWordHits > 0 && titleWordHits === 0) score -= 2;

  const normalizedTitle = titleText.replace(/[^a-z0-9]+/g, " ").trim();
  const normalizedQuery = tokens.join(" ");
  if (normalizedTitle === normalizedQuery) score += 20;

  return Math.max(0, score);
}

function isNavQuery(tokens: string[]): boolean {
  if (tokens.length === 0 || tokens.length > 2) return false;
  return tokens.every((token) => NAV_QUERY_TERMS.has(token));
}

function isExamQuery(tokens: string[]): boolean {
  return tokens.some((token) => EXAM_QUERY_TERMS.has(token));
}

function navTypeBoosts(): Partial<Record<string, number>> {
  return {
    tool: 5,
    page: 4.5,
    guide: 2.5,
    english: 2,
    subject: 1.5,
    concept: 0.35,
    formula: 0.35,
    practice: 0.5,
    member: 0.2,
    file: 0.3,
    folder: 0.3,
  };
}

function examTypeBoosts(): Partial<Record<string, number>> {
  return {
    english: 5,
    guide: 2.5,
    practice: 2,
    page: 1.2,
    concept: 0.6,
    formula: 0.4,
  };
}

function isBlockedHref(href: string): boolean {
  const path = href.split("?")[0] || href;
  return BLOCKED_HREF_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

function clip(text: string, max = 220): string {
  const cleaned = String(text || "")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1)}…`;
}

/**
 * For long articles, prefer a window that contains the most query tokens
 * instead of always returning the opening paragraph.
 */
function bestClip(text: string, tokens: string[], max: number): string {
  const cleaned = String(text || "").replace(/\s+/g, " ").trim();
  if (!cleaned) return "";
  if (cleaned.length <= max) return cleaned;
  if (tokens.length === 0) return clip(cleaned, max);

  const lower = cleaned.toLowerCase();
  let bestStart = 0;
  let bestScore = -1;
  const step = Math.max(40, Math.floor(max / 4));
  for (let start = 0; start < cleaned.length; start += step) {
    const window = lower.slice(start, start + max);
    let score = 0;
    for (const token of tokens) {
      if (window.includes(token)) score += 1;
    }
    if (score > bestScore) {
      bestScore = score;
      bestStart = start;
    }
    if (start + max >= cleaned.length) break;
  }
  const slice = cleaned.slice(bestStart, bestStart + max);
  const prefix = bestStart > 0 ? "…" : "";
  const suffix = bestStart + max < cleaned.length ? "…" : "";
  return `${prefix}${slice}${suffix}`;
}

function pushHit(
  bag: Map<string, SiteSearchHit>,
  hit: Omit<SiteSearchHit, "score"> & { score: number }
) {
  if (hit.score <= 0) return;
  const key = `${hit.type}:${hit.id}`;
  const prev = bag.get(key);
  if (!prev || hit.score > prev.score) bag.set(key, hit);
}

function subjectHref(subjectId: string, subjects: ManagedContent["subjects"] | undefined) {
  const managed = subjects?.find((s) => s.id === subjectId);
  if (managed?.slug) return `/ap/${managed.slug}`;
  const catalog = AP_CATALOG.find((s) => s.id === subjectId || s.slug === subjectId);
  if (catalog) return `/ap/${catalog.slug}`;
  return `/ap/${encodeURIComponent(subjectId)}`;
}

/**
 * Full-site search across built-in catalogs and optional live managed content.
 */
export function searchSiteEngine(
  query: string,
  managed?: Partial<ManagedContent> | null,
  options?: {
    type?: string;
    limit?: number;
    detailMax?: number;
    /** Soft per-type score multipliers (merged over TYPE_BOOST). */
    typeBoosts?: Partial<Record<string, number>>;
  }
): SiteSearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const typeFilter = options?.type && options.type !== "all" ? options.type : null;
  const limit = Math.max(1, Math.min(options?.limit ?? 80, 200));
  const detailMax = Math.max(120, Math.min(options?.detailMax ?? 220, 2400));
  const boosts = { ...TYPE_BOOST, ...(options?.typeBoosts || {}) };
  const navQuery = isNavQuery(tokens);
  const examQuery = isExamQuery(tokens);
  if (navQuery) Object.assign(boosts, navTypeBoosts());
  else if (examQuery) Object.assign(boosts, examTypeBoosts());
  const bag = new Map<string, SiteSearchHit>();
  const subjects = managed?.subjects || [];
  const excerpt = (text: string) => bestClip(text, tokens, detailMax);

  // —— Built-in catalogs (cached corpus, scored per query) ——
  for (const entry of getStaticSearchCorpus()) {
    if (isBlockedHref(entry.href)) continue;
    pushHit(bag, {
      id: entry.id,
      type: entry.type,
      title: entry.title,
      subject: entry.subject,
      detail: excerpt(entry.body) || entry.detail,
      href: entry.href,
      score: scoreFields(tokens, entry.title, entry.body, entry.href),
    });
  }

  // —— Managed AP subjects ——
  for (const subject of subjects) {
    if (!subject.enabled) continue;
    pushHit(bag, {
      id: subject.id,
      type: "subject",
      title: subject.name,
      subject: "Managed",
      detail: clip(subject.description || subject.shortName || ""),
      href: `/ap/${subject.slug}`,
      score: scoreFields(
        tokens,
        `${subject.name} ${subject.shortName || ""}`,
        subject.description || ""
      ),
    });
  }

  // —— Managed concepts ——
  for (const item of managed?.concepts || []) {
    const keyPoints = Array.isArray((item as { keyPoints?: string[] }).keyPoints)
      ? (item as { keyPoints?: string[] }).keyPoints!.join(" ")
      : "";
    pushHit(bag, {
      id: item.id,
      type: "concept",
      title: item.title,
      subject: item.subject || "AP",
      detail: excerpt(item.summary || ""),
      href: `/concepts/${item.id}`,
      score: scoreFields(
        tokens,
        item.title,
        `${item.subject || ""} ${item.summary || ""} ${keyPoints}`
      ),
    });
  }

  // —— Managed formulas ——
  for (const item of managed?.formulas || []) {
    pushHit(bag, {
      id: item.id,
      type: "formula",
      title: item.name,
      subject: item.subject || "AP",
      detail: excerpt(item.content || item.expression || ""),
      href: `/formulas?subject=${encodeURIComponent(item.subject || "AP")}`,
      score: scoreFields(
        tokens,
        item.name,
        `${item.subject || ""} ${item.expression || ""} ${item.content || ""}`
      ),
    });
  }

  // —— Managed practice / questionnaires ——
  for (const item of managed?.questionnaires || []) {
    const itemsText = (item.items || [])
      .map((q) => `${q.prompt || ""} ${(q.hints || []).join(" ")}`)
      .join(" ");
    pushHit(bag, {
      id: item.id,
      type: "practice",
      title: item.title,
      subject: item.subject || "AP",
      detail: excerpt(item.description || itemsText),
      href: `/questionnaires/${item.id}`,
      score: scoreFields(
        tokens,
        item.title,
        `${item.subject || ""} ${item.description || ""} ${itemsText}`
      ),
    });
  }

  // —— Managed members ——
  for (const member of managed?.members || []) {
    pushHit(bag, {
      id: member.id,
      type: "member",
      title: member.name,
      subject: "Partner",
      detail: clip(member.note || ""),
      href: "/partners",
      score: scoreFields(tokens, member.name, member.note || ""),
    });
  }

  // —— Managed documents / files / folders / forum / contentItems / topics ——
  for (const item of managed?.documents || []) {
    pushHit(bag, {
      id: item.id,
      type: "document",
      title: item.title,
      subject: item.area || item.category || "Document",
      detail: excerpt(item.content),
      href: item.area === "materials" || item.area === "learning"
        ? item.area === "materials"
          ? "/forum?tab=shared"
          : "/forum?tab=box"
        : item.area
          ? `/${item.area}`
          : "/forum",
      score: scoreFields(
        tokens,
        item.title,
        `${item.category} ${item.area || ""} ${item.space || ""} ${item.content}`
      ),
    });
  }
  for (const item of managed?.files || []) {
    pushHit(bag, {
      id: item.id,
      type: "file",
      title: item.name,
      subject: item.area || "Files",
      detail: clip(`${item.mime || "file"}${item.note ? ` · ${item.note}` : ""}`),
      href: item.area ? `/${item.area}` : "/#page-media",
      score: scoreFields(
        tokens,
        item.name,
        `${item.mime || ""} ${item.note || ""} ${item.area || ""} ${item.space || ""}`
      ),
    });
  }
  for (const item of managed?.folders || []) {
    pushHit(bag, {
      id: item.id,
      type: "folder",
      title: item.title,
      subject: item.area || "Folders",
      detail: clip(item.note || "File folder"),
      href: item.area ? `/${item.area}` : "/ap",
      score: scoreFields(tokens, item.title, `${item.area} ${item.space || ""} ${item.note || ""}`),
    });
  }
  for (const item of managed?.forumPosts || []) {
    const replies = (item.replies || []).map((r) => r.body).join(" ");
    pushHit(bag, {
      id: item.id,
      type: "forum",
      title: item.title,
      subject: item.author || "Forum",
      detail: excerpt(item.body),
      href: "/forum",
      score: scoreFields(tokens, item.title, `${item.author} ${item.body} ${replies}`),
    });
  }
  for (const item of managed?.contentItems || []) {
    if (item.deletedAt || item.status !== "published") continue;
    const name =
      subjects.find((s) => s.id === item.subjectId)?.name ||
      AP_CATALOG.find((s) => s.id === item.subjectId)?.name ||
      item.subjectId;
    pushHit(bag, {
      id: item.id,
      type: item.type || "content",
      title: item.title,
      subject: name,
      detail: excerpt(item.content),
      href: subjectHref(item.subjectId, subjects),
      score: scoreFields(
        tokens,
        item.title,
        `${name} ${item.type} ${(item.tags || []).join(" ")} ${item.content}`
      ),
    });
  }
  for (const item of managed?.topics || []) {
    pushHit(bag, {
      id: item.id,
      type: "concept",
      title: item.title,
      subject: item.subject,
      detail: excerpt(item.summary || "Topic"),
      href: `/concepts/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject} ${item.summary || ""}`),
    });
  }

  let hits = Array.from(bag.values())
    .filter((hit) => !isBlockedHref(hit.href))
    .map((hit) => ({
      ...hit,
      score: hit.score * (boosts[hit.type] ?? 1),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.title.localeCompare(b.title);
    });
  if (typeFilter) hits = hits.filter((hit) => hit.type === typeFilter);
  return hits.slice(0, limit);
}
