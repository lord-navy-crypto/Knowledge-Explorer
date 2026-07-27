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

function tokenize(raw: string): string[] {
  return raw
    .toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fff+$/%.-]+/gi, " ")
    .split(/\s+/)
    .filter((token) => token.length >= 2)
    .slice(0, 32);
}

function scoreFields(tokens: string[], title: string, body: string): number {
  if (tokens.length === 0) return 0;
  const titleText = title.toLowerCase();
  const bodyText = body.toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (titleText.includes(token)) score += 4;
    if (bodyText.includes(token)) score += 1;
  }
  const phrase = tokens.join(" ");
  if (phrase.length >= 2) {
    if (titleText.includes(phrase)) score += 6;
    else if (bodyText.includes(phrase)) score += 2;
  }
  return score;
}

function clip(text: string, max = 220): string {
  const cleaned = String(text || "")
    .replace(/\s+/g, " ")
    .trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1)}…`;
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
  options?: { type?: string; limit?: number }
): SiteSearchHit[] {
  const tokens = tokenize(query);
  if (tokens.length === 0) return [];

  const typeFilter = options?.type && options.type !== "all" ? options.type : null;
  const limit = Math.max(1, Math.min(options?.limit ?? 80, 200));
  const bag = new Map<string, SiteSearchHit>();
  const subjects = managed?.subjects || [];

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
    { id: "hints", title: "AI Toolbox", subject: "Tools", detail: "Hints, calculator, grapher, Local AI", href: "/hints" },
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
      detail: clip(item.summary),
      href: `/concepts/${item.id}`,
      score: scoreFields(
        tokens,
        item.title,
        `${item.subject} ${item.summary} ${(item.keyPoints || []).join(" ")}`
      ),
    });
  }
  for (const item of managed?.concepts || []) {
    pushHit(bag, {
      id: item.id,
      type: "concept",
      title: item.title,
      subject: item.subject || "AP",
      detail: clip(item.summary || ""),
      href: `/concepts/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject || ""} ${item.summary || ""}`),
    });
  }

  // —— Formulas ——
  for (const item of formulas) {
    pushHit(bag, {
      id: item.id,
      type: "formula",
      title: item.name,
      subject: item.subject,
      detail: clip(item.content || `${item.expression} · ${item.unit || ""}`),
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
      detail: clip(item.content || item.expression || ""),
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
      detail: clip(item.description || ""),
      href: `/questionnaires/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject} ${item.description || ""} ${itemsText}`),
    });
  }
  for (const item of managed?.questionnaires || []) {
    pushHit(bag, {
      id: item.id,
      type: "practice",
      title: item.title,
      subject: item.subject || "AP",
      detail: clip(item.description || ""),
      href: `/questionnaires/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject || ""} ${item.description || ""}`),
    });
  }
  for (const item of practiceQuestions) {
    pushHit(bag, {
      id: item.id,
      type: "practice",
      title: item.question.slice(0, 80),
      subject: item.subject,
      detail: clip(item.question),
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
      detail: clip(item.introduction),
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
      detail: clip(item.content),
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
      detail: clip(item.body),
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
      detail: clip(item.content),
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
      detail: clip(item.summary || "Topic"),
      href: `/concepts/${item.id}`,
      score: scoreFields(tokens, item.title, `${item.subject} ${item.summary || ""}`),
    });
  }

  let hits = Array.from(bag.values()).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return a.title.localeCompare(b.title);
  });
  if (typeFilter) hits = hits.filter((hit) => hit.type === typeFilter);
  return hits.slice(0, limit);
}
