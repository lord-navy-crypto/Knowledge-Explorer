/**
 * Unified Knowledge Explorer search engine.
 * Indexes built-in catalogs + live managed content for /search and AI site search.
 */
import { AP_CATALOG } from "@/data/ap-catalog";
import { concepts, practiceQuestions } from "@/data/content";
import { formulas } from "@/data/formulas";
import { questionnaires } from "@/data/questionnaires";
import { keyConceptGuides } from "@/data/key-concepts";
import {
  academicVocabulary,
  englishAreas,
  ieltsQuestions,
  satQuestions,
  sentencePatterns,
  toeflQuestions,
} from "@/data/english-content";
import { standardSnippets } from "@/data/code-snippets";
import { starterLearningMaterials } from "@/data/starter-learning";
import { checklistItems } from "@/data/checklist";
import { trueJetMembers } from "@/data/brand";
import { SITE_SECTION_FOLDERS } from "@/lib/site-media-map";
import type { ManagedContent } from "@/lib/managed-types";

export type SiteSearchType =
  | "page"
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

function scoreFields(tokens: string[], title: string, body: string): number {
  if (tokens.length === 0) return 0;
  const titleText = title.toLowerCase();
  const bodyText = body.toLowerCase();
  let score = 0;
  let titleHits = 0;
  for (const token of tokens) {
    if (titleText.includes(token)) {
      score += 4;
      titleHits += 1;
    }
    if (bodyText.includes(token)) score += 1;
  }
  const phrase = tokens.join(" ");
  if (phrase.length >= 2) {
    if (titleText.includes(phrase)) score += 8;
    else if (bodyText.includes(phrase)) score += 3;
  }
  // Soft preference for title matches on short common queries.
  if (titleHits > 0) score += titleHits;
  return score;
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
  options?: { type?: string; limit?: number; detailMax?: number }
): SiteSearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const typeFilter = options?.type && options.type !== "all" ? options.type : null;
  const limit = Math.max(1, Math.min(options?.limit ?? 80, 200));
  const detailMax = Math.max(120, Math.min(options?.detailMax ?? 220, 2400));
  const bag = new Map<string, SiteSearchHit>();
  const subjects = managed?.subjects || [];
  const excerpt = (text: string) => bestClip(text, tokens, detailMax);

  // —— Site pages / sections ——
  for (const section of SITE_SECTION_FOLDERS) {
    for (const page of section.pages) {
      const title = page.label;
      const body = `${section.label} ${page.href} ${page.area} ${page.space}`;
      pushHit(bag, {
        id: `${section.id}-${page.area}-${page.space}`,
        type: "page",
        title,
        subject: section.label,
        detail: clip(`Open ${page.href}`),
        href: page.href,
        score: scoreFields(tokens, title, body),
      });
    }
  }

  const staticPages = [
    { id: "home", title: "Home", subject: "Site", detail: "Knowledge Explorer home", href: "/" },
    { id: "search", title: "Search", subject: "Site", detail: "Full-site search", href: "/search" },
    { id: "about", title: "About", subject: "Site", detail: "About Knowledge Explorer", href: "/about" },
    { id: "partners", title: "Partners", subject: "Site", detail: "Knowledge Explorer roster", href: "/partners" },
    { id: "guide", title: "Site Guide", subject: "Tools", detail: "How to use the site", href: "/guide" },
    { id: "manage", title: "Manage", subject: "Admin", detail: "Manage content", href: "/manage" },
    { id: "hints", title: "AI Toolbox", subject: "Tools", detail: "Hints, AI for AP guides, calculator, grapher, Local AI", href: "/hints" },
    {
      id: "ai-for-ap",
      title: "AI for AP (in Toolbox)",
      subject: "Study Skills",
      detail: "Safe AI tutor workflows, guides, generate practice",
      href: "/hints?section=ai-for-ap",
    },
    { id: "forum", title: "Forum", subject: "Community", detail: "Tips and questions", href: "/forum" },
    { id: "academic", title: "Academic Platform", subject: "Academic", detail: "Learning Box and shared materials", href: "/academic" },
    { id: "learning-box", title: "Private Learning Box", subject: "Academic", detail: "Private notes and pictures", href: "/learning-box" },
    { id: "code", title: "Code Resource", subject: "Code", detail: "Python, Java, web folders", href: "/code" },
    { id: "tools", title: "Tools", subject: "Tools", detail: "Study tools hub", href: "/tools" },
    { id: "english", title: "English Learning", subject: "English", detail: "TOEFL IELTS SAT vocabulary writing", href: "/english" },
    { id: "ap", title: "AP Subject Library", subject: "AP", detail: "Choose an AP subject", href: "/ap" },
    { id: "concepts", title: "Concepts", subject: "AP", detail: "Topic and concept library", href: "/concepts" },
    { id: "formulas", title: "Formulas", subject: "AP", detail: "Formula sheets by subject", href: "/formulas" },
    { id: "practice", title: "Practice", subject: "AP", detail: "Practice and questionnaires", href: "/practice" },
    { id: "key-concepts", title: "Key Concepts", subject: "AP", detail: "Guides and concept checks", href: "/key-concepts" },
  ];
  for (const page of staticPages) {
    pushHit(bag, {
      ...page,
      type: "page",
      score: scoreFields(tokens, page.title, `${page.subject} ${page.detail} ${page.href}`),
    });
  }

  // —— AP subjects ——
  for (const subject of AP_CATALOG) {
    pushHit(bag, {
      id: subject.id,
      type: "subject",
      title: subject.name,
      subject: subject.group,
      detail: clip(subject.description),
      href: `/ap/${subject.slug}`,
      score: scoreFields(
        tokens,
        `${subject.name} ${subject.shortName}`,
        `${subject.group} ${subject.description}`
      ),
    });
  }
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

  // —— Concepts ——
  for (const item of concepts) {
    pushHit(bag, {
      id: item.id,
      type: "concept",
      title: item.title,
      subject: item.subject,
      detail: excerpt(item.summary),
      href: `/concepts/${item.id}`,
      score: scoreFields(
        tokens,
        item.title,
        `${item.subject} ${item.summary} ${(item.keyPoints || []).join(" ")}`
      ),
    });
  }
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

  // —— Formulas ——
  for (const item of formulas) {
    pushHit(bag, {
      id: item.id,
      type: "formula",
      title: item.name,
      subject: item.subject,
      detail: excerpt(item.content || `${item.expression} · ${item.unit || ""}`),
      href: `/formulas?subject=${encodeURIComponent(item.subject)}`,
      score: scoreFields(
        tokens,
        item.name,
        `${item.subject} ${item.expression || ""} ${item.content || ""} ${item.unit || ""} ${item.variables || ""}`
      ),
    });
  }
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

  // —— Practice / questionnaires / drills ——
  for (const item of questionnaires) {
    const itemsText = (item.items || [])
      .map((q) => `${q.prompt || ""} ${(q.hints || []).join(" ")}`)
      .join(" ");
    pushHit(bag, {
      id: item.id,
      type: "practice",
      title: item.title,
      subject: item.subject,
      detail: excerpt(item.description || itemsText),
      href: `/questionnaires/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject} ${item.description || ""} ${itemsText}`),
    });
  }
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
  for (const item of practiceQuestions) {
    pushHit(bag, {
      id: item.id,
      type: "practice",
      title: item.question.slice(0, 80),
      subject: item.subject,
      detail: excerpt(item.question),
      href: `/practice?subject=${encodeURIComponent(item.subject)}`,
      score: scoreFields(
        tokens,
        item.question,
        `${item.subject} ${item.topic} ${(item.hints || []).join(" ")}`
      ),
    });
  }

  // —— Key concept guides ——
  for (const item of keyConceptGuides) {
    const qText = (item.conceptQuestions || []).map((q) => q.prompt).join(" ");
    pushHit(bag, {
      id: item.id,
      type: "guide",
      title: item.title,
      subject: item.subject,
      detail: excerpt(item.introduction),
      href: `/key-concepts?subject=${encodeURIComponent(item.subject)}`,
      score: scoreFields(
        tokens,
        item.title,
        `${item.subject} ${item.introduction} ${(item.howToUseAI || []).join(" ")} ${qText}`
      ),
    });
  }

  // —— English ——
  for (const area of englishAreas) {
    pushHit(bag, {
      id: area.href,
      type: "english",
      title: area.title,
      subject: "English",
      detail: clip(area.description),
      href: area.href,
      score: scoreFields(tokens, area.title, area.description),
    });
  }
  for (const word of academicVocabulary) {
    pushHit(bag, {
      id: `vocab-${word.word}`,
      type: "english",
      title: word.word,
      subject: "Vocabulary",
      detail: clip(`${word.meaning} · ${word.example}`),
      href: "/english/vocabulary",
      score: scoreFields(
        tokens,
        word.word,
        `${word.family} ${word.meaning} ${word.collocation} ${word.example}`
      ),
    });
  }
  for (const pattern of sentencePatterns) {
    pushHit(bag, {
      id: `pattern-${pattern.title}`,
      type: "english",
      title: pattern.title,
      subject: "Grammar",
      detail: clip(`${pattern.pattern} ${pattern.example}`),
      href: "/english/grammar",
      score: scoreFields(tokens, pattern.title, `${pattern.pattern} ${pattern.example}`),
    });
  }
  for (const q of [...toeflQuestions, ...ieltsQuestions, ...satQuestions]) {
    pushHit(bag, {
      id: q.id,
      type: "english",
      title: `${q.skill}: ${q.prompt.slice(0, 60)}…`,
      subject: "English practice",
      detail: clip(q.explanation),
      href: q.id.startsWith("toefl")
        ? "/english/toefl"
        : q.id.startsWith("ielts")
          ? "/english/ielts"
          : "/english/sat",
      score: scoreFields(
        tokens,
        q.skill,
        `${q.prompt} ${q.choices.join(" ")} ${q.explanation}`
      ),
    });
  }

  // —— Code ——
  for (const snip of standardSnippets) {
    pushHit(bag, {
      id: snip.id,
      type: "code",
      title: snip.title,
      subject: snip.language,
      detail: clip(snip.description),
      href: "/code",
      score: scoreFields(tokens, snip.title, `${snip.language} ${snip.description} ${snip.code}`),
    });
  }

  // —— Learning starters / checklist ——
  starterLearningMaterials.forEach((item, index) => {
    pushHit(bag, {
      id: `learning-${index}`,
      type: "learning",
      title: item.title,
      subject: item.category,
      detail: clip(item.content),
      href: "/learning-box",
      score: scoreFields(tokens, item.title, `${item.category} ${item.content}`),
    });
  });
  for (const item of checklistItems) {
    pushHit(bag, {
      id: item.id,
      type: "checklist",
      title: item.title,
      subject: "Checklist",
      detail: clip(item.description || ""),
      href: item.link?.startsWith("/") ? item.link : "/checklist",
      score: scoreFields(tokens, item.title, item.description || ""),
    });
  }

  // —— Members ——
  for (const member of trueJetMembers) {
    pushHit(bag, {
      id: member.github,
      type: "member",
      title: member.name,
      subject: member.role,
      detail: clip(member.org || "Knowledge Explorer"),
      href: "/partners",
      score: scoreFields(tokens, member.name, `${member.role} ${member.org || ""} ${member.github}`),
    });
  }
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
      href: item.area ? `/${item.area}` : "/academic",
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
    .map((hit) => ({
      ...hit,
      score: hit.score * (TYPE_BOOST[hit.type] ?? 1),
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.title.localeCompare(b.title);
    });
  if (typeFilter) hits = hits.filter((hit) => hit.type === typeFilter);
  return hits.slice(0, limit);
}
