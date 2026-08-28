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
    { id: "home", title: "Home · Knowledge Explorer", subject: "Site", detail: "Knowledge Explorer · Knowledge Explorer portal", href: "/" },
    { id: "explore-ap-english", title: "AP & English", subject: "Site", detail: "Knowledge Explorer box — AP subjects and English", href: "/explore/ap-english" },
    { id: "explore-tools-code", title: "Convenient Tools & Code", subject: "Site", detail: "Knowledge Explorer box — tools and coding", href: "/explore/tools-code" },
    { id: "explore-workshops", title: "Simulation & Download", subject: "Site", detail: "Simulation Workshop and Download (GitHub)", href: "/explore/workshops" },
    { id: "explore-simulation", title: "Simulation Workshop", subject: "Site", detail: "Research simulation labs on GitHub", href: "/explore/simulation-workshop" },
    { id: "explore-download", title: "Download", subject: "Site", detail: "Chrono, RADIA, VAMPIRE Shell builders on GitHub", href: "/explore/download" },
    { id: "gh-vampire", title: "VAMPIRE Apple Silicon Builder", subject: "Download", detail: "Native arm64 VAMPIRE builder", href: "https://github.com/lord-navy-crypto/VAMPIRE-Apple-Silicon-Builder" },
    { id: "gh-chrono", title: "Chrono Modal Universal2 Builder", subject: "Download", detail: "macOS Shell builder for Chrono Modal", href: "https://github.com/lord-navy-crypto/chrono-modal-macos-universal2-builder" },
    { id: "gh-radia-install", title: "RADIA Universal2 Installer", subject: "Download", detail: "macOS Shell installer for RADIA", href: "https://github.com/lord-navy-crypto/lord-navy-crypto-radia-universal2-macos-installer" },
    { id: "gh-monte-carlo", title: "Random Walk Monte Carlo Studio", subject: "Simulation", detail: "Random walk and Monte Carlo lab", href: "https://github.com/lord-navy-crypto/Random_Walk_Monte_Carlo_Studio" },
    { id: "gh-ising", title: "Ising Monte Carlo Lab", subject: "Simulation", detail: "Ising model Monte Carlo workbench", href: "https://github.com/lord-navy-crypto/Ising-Monte-Carlo-Lab" },
    { id: "gh-radia-magnet", title: "RADIA Magnet Studio", subject: "Simulation", detail: "RADIA insertion-device modelling", href: "https://github.com/lord-navy-crypto/radia-magnet-studio" },
    { id: "gh-radia-radiation", title: "RADIA Radiation Studio", subject: "Simulation", detail: "Trajectory and radiation scans", href: "https://github.com/lord-navy-crypto/simulator-radiation-planfotm" },
    { id: "gh-chaos", title: "Nonlinear Dynamics Chaos Lab", subject: "Simulation", detail: "Driven pendula and chaos lab", href: "https://github.com/lord-navy-crypto/NONLINEAR_DYNAMICS_CHAOS_LAB_" },
    { id: "gh-oscillation", title: "Oscillation Numerical Integration Lab", subject: "Simulation", detail: "Oscillators and integrators", href: "https://github.com/lord-navy-crypto/OSCILLATION_NUMERICAL_INTEGRATION_LAB" },
    { id: "gh-numerical", title: "Numerical Error Analysis Studio", subject: "Simulation", detail: "Floating-point and Taylor error lab", href: "https://github.com/lord-navy-crypto/numerical-methods" },
    { id: "search", title: "Search", subject: "Site", detail: "Full-site search", href: "/search" },
    { id: "about", title: "About", subject: "Site", detail: "About Knowledge Explorer", href: "/about" },
    { id: "partners", title: "Partners", subject: "Site", detail: "Knowledge Explorer roster", href: "/partners" },
    { id: "guide", title: "Site Guide", subject: "Tools", detail: "Developer deploy and setup guide", href: "/guide" },
    {
      id: "user-guide",
      title: "User Guide",
      subject: "Help",
      detail: "Walkthrough of AP, English, AI Toolbox, tools, workshops, and forum",
      href: "/user-guide",
    },
    {
      id: "manage-guide",
      title: "Manage Guide",
      subject: "Admin",
      detail: "Editor workflow — unlock, Manage, uploads, publish (locked until login)",
      href: "/manage-guide",
    },
    { id: "manage", title: "Manage", subject: "Admin", detail: "Manage content", href: "/manage" },
    { id: "hints", title: "AI Toolbox", subject: "Tools", detail: "Hints, AI for AP guides, calculator, grapher, Local AI", href: "/hints" },
    {
      id: "ai-for-ap",
      title: "AI for AP (in Toolbox)",
      subject: "Study Skills",
      detail: "Safe AI tutor workflows, guides, generate practice",
      href: "/hints?section=ai-for-ap",
    },
    { id: "forum", title: "Forum", subject: "Community", detail: "Discussions, shared library, My box", href: "/forum" },
    { id: "forum-shared", title: "Shared library", subject: "Community", detail: "Public materials in Forum", href: "/forum?tab=shared" },
    { id: "forum-box", title: "My box", subject: "Community", detail: "Private notes and pictures in Forum", href: "/forum?tab=box" },
    { id: "learning-box", title: "My box (Private Learning Box)", subject: "Community", detail: "Private notes and pictures", href: "/forum?tab=box" },
    { id: "code", title: "Code Resource", subject: "Code", detail: "Python, Java, web folders", href: "/code" },
    { id: "tools", title: "Convenient Tools", subject: "Tools", detail: "Everyday study utilities hub", href: "/tools" },
    { id: "word-pdf", title: "Word → PDF", subject: "Tools", detail: "Convert docx and save as PDF", href: "/tools/word-pdf" },
    { id: "image-compress", title: "Image compress", subject: "Tools", detail: "Compress and convert images", href: "/tools/image-compress" },
    { id: "image-crop", title: "Image crop & annotate", subject: "Tools", detail: "Crop and mark images", href: "/tools/image-crop" },
    { id: "pdf-tools", title: "PDF merge & split", subject: "Tools", detail: "Combine or extract PDF pages", href: "/tools/pdf-tools" },
    { id: "pdf-compress", title: "PDF compress", subject: "Tools", detail: "Light PDF rebuild shrink", href: "/tools/pdf-compress" },
    { id: "csv-markdown", title: "CSV → Markdown", subject: "Tools", detail: "CSV to Markdown table", href: "/tools/csv-markdown" },
    { id: "markdown-plain", title: "Markdown plain text", subject: "Tools", detail: "Markdown and plain text convert", href: "/tools/markdown-plain" },
    { id: "batch-rename", title: "Batch rename", subject: "Tools", detail: "Rename file copies locally", href: "/tools/batch-rename" },
    { id: "word-count", title: "Word count", subject: "Tools", detail: "Words characters reading time", href: "/tools/word-count" },
    { id: "focus-desk", title: "Tomato focus desk", subject: "Tools", detail: "Pomodoro with white pink brown soft rain noise beds", href: "/tools/focus-desk" },
    { id: "mistake-notebook", title: "Mistake notebook", subject: "Tools", detail: "Log wrong answers locally", href: "/tools/mistake-notebook" },
    { id: "exam-countdown", title: "Exam countdown", subject: "Tools", detail: "Days until exams", href: "/tools/exam-countdown" },
    { id: "formula-board", title: "Formula board", subject: "Tools", detail: "Copy common STEM formulas", href: "/tools/formula-board" },
    { id: "code-board", title: "Long code block adder", subject: "Tools", detail: "Common long code blocks with comments", href: "/tools/code-board" },
    { id: "code-hub", title: "Code Resource", subject: "Code", detail: "Python JS TS Web SQL Markdown Java C# playgrounds", href: "/code" },
    { id: "code-csharp", title: "C# practice editor", subject: "Code", detail: "C# training Practice Run in browser", href: "/code/csharp" },
    { id: "code-java", title: "Java practice editor", subject: "Code", detail: "Java training Practice Run in browser", href: "/code/java" },
    { id: "code-js", title: "JavaScript playground", subject: "Code", detail: "Run JavaScript in the browser", href: "/code/javascript" },
    { id: "code-ts", title: "TypeScript playground", subject: "Code", detail: "Transpile and run TypeScript", href: "/code/typescript" },
    { id: "code-sql", title: "SQL playground", subject: "Code", detail: "SQLite sql.js in the browser", href: "/code/sql" },
    { id: "code-md", title: "Markdown playground", subject: "Code", detail: "Live Markdown and math preview", href: "/code/markdown" },
    { id: "sci-notation", title: "Scientific notation", subject: "Tools", detail: "Sig figs and scientific form", href: "/tools/sci-notation" },
    { id: "vector-resolve", title: "Vector components", subject: "Tools", detail: "Resolve 2D vectors", href: "/tools/vector-resolve" },
    { id: "vocab-book", title: "Vocab book", subject: "Tools", detail: "English vocabulary flash cards", href: "/tools/vocab-book" },
    { id: "speech-to-text", title: "Speech to text", subject: "Tools", detail: "Mic, record, or upload audio to English text", href: "/tools/speech-to-text" },
    { id: "dictation", title: "Dictation", subject: "Tools", detail: "Listen and type practice", href: "/tools/dictation" },
    { id: "paraphrase", title: "Paraphrase compare", subject: "Tools", detail: "Compare rewrite overlap", href: "/tools/paraphrase" },
    { id: "reading-highlight", title: "Reading highlights", subject: "Tools", detail: "Highlight passages with notes", href: "/tools/reading-highlight" },
    { id: "text-comparator", title: "Text-to-text comparator", subject: "Tools", detail: "Left vs right paste — match or highlight differences", href: "/tools/text-comparator" },
    { id: "text-diff", title: "Text diff", subject: "Tools", detail: "Compare two text drafts", href: "/tools/text-diff" },
    { id: "random-groups", title: "Random groups", subject: "Tools", detail: "Pick names or make groups", href: "/tools/random-groups" },
    { id: "short-code", title: "Short codes", subject: "Tools", detail: "Local short codes for links", href: "/tools/short-code" },
    { id: "color-contrast", title: "Color & contrast", subject: "Tools", detail: "WCAG contrast checker", href: "/tools/color-contrast" },
    { id: "qr-code", title: "QR code", subject: "Tools", detail: "Generate downloadable QR", href: "/tools/qr-code" },
    { id: "external-tools", title: "External connections & tools", subject: "Tools", detail: "Off-site AP, math, science, English, coding links", href: "/tools/external" },
    { id: "word-import", title: "Word → Markdown", subject: "Tools", detail: "Extract Markdown from docx", href: "/tools/word-import" },
    { id: "markdown-pdf", title: "Markdown → PDF", subject: "Tools", detail: "Print Markdown as PDF", href: "/tools/markdown-pdf" },
    { id: "english", title: "English Learning", subject: "English", detail: "TOEFL SAT vocabulary writing", href: "/english" },
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
  for (const q of [...toeflQuestions, ...satQuestions]) {
    pushHit(bag, {
      id: q.id,
      type: "english",
      title: `${q.skill}: ${q.prompt.slice(0, 60)}…`,
      subject: "English practice",
      detail: clip(q.explanation),
      href: q.id.startsWith("toefl") ? "/english/toefl" : "/english/sat",
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
      href: "/forum?tab=box",
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
