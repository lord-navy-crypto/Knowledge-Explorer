import { ENGLISH_RELATED } from "@/data/english-related-tools";

export type SiteRelatedPack = {
  title: string;
  toolIds: readonly string[];
  externalIds: readonly string[];
};

const ALWAYS_SHORT_CODE = "short-code";

function withShortCode(pack: {
  title: string;
  toolIds: readonly string[];
  externalIds: readonly string[];
}): SiteRelatedPack {
  const rest = pack.toolIds.filter((id) => id !== ALWAYS_SHORT_CODE);
  return {
    title: pack.title,
    toolIds: [ALWAYS_SHORT_CODE, ...rest],
    externalIds: [...pack.externalIds],
  };
}

/** Area packs — every pack includes Short codes · presets. */
export const SITE_RELATED_PACKS = {
  home: withShortCode({
    title: "Site · related tools",
    toolIds: ["ai", "focus-desk", "exam-countdown", "qr-code"],
    externalIds: ["ap-central", "ets-toefl", "desmos"],
  }),
  ap: withShortCode({
    title: "AP · related tools",
    toolIds: ["ai", "formula-board", "latex", "calculator", "grapher", "flashcards", "mistake-notebook"],
    externalIds: ["ap-central", "desmos", "phet"],
  }),
  concepts: withShortCode({
    title: "Concepts · related tools",
    toolIds: ["ai", "flashcards", "formula-board", "latex", "reading-highlight"],
    externalIds: ["ap-central", "khan"],
  }),
  formulas: withShortCode({
    title: "Formulas · related tools",
    toolIds: ["formula-board", "latex", "calculator", "grapher", "units", "sci-notation"],
    externalIds: ["desmos", "wolfram-alpha"],
  }),
  practice: withShortCode({
    title: "Practice · related tools",
    toolIds: ["ai", "exam-countdown", "focus-desk", "mistake-notebook", "word-count"],
    externalIds: ["ap-central", "sat-practice"],
  }),
  english: withShortCode({ ...ENGLISH_RELATED.hub }),
  "english-vocabulary": withShortCode({ ...ENGLISH_RELATED.vocabulary }),
  "english-grammar": withShortCode({ ...ENGLISH_RELATED.grammar }),
  "english-toefl-reading": withShortCode({ ...ENGLISH_RELATED["toefl-reading"] }),
  "english-toefl-listening": withShortCode({ ...ENGLISH_RELATED["toefl-listening"] }),
  "english-toefl-writing": withShortCode({ ...ENGLISH_RELATED["toefl-writing"] }),
  "english-toefl-speaking": withShortCode({ ...ENGLISH_RELATED["toefl-speaking"] }),
  "english-sat": withShortCode({
    title: "SAT · related tools",
    toolIds: ["reading-highlight", "paraphrase", "vocab-book", "word-count"],
    externalIds: ["sat-practice", "cambridge-dictionary"],
  }),
  code: withShortCode({
    title: "Code · related tools",
    toolIds: ["ai", "code-board", "text-diff", "markdown-plain"],
    externalIds: ["mdn", "python-docs", "stackoverflow"],
  }),
  tools: withShortCode({
    title: "Toolbox · related links",
    toolIds: ["ai", "focus-desk", "qr-code", "external-hub"],
    externalIds: ["ap-central", "desmos", "cambridge-dictionary"],
  }),
  "tools-math": withShortCode({
    title: "Math tools · related",
    toolIds: ["calculator", "grapher", "latex", "formula-board", "units", "vector-resolve"],
    externalIds: ["desmos", "wolfram-alpha"],
  }),
  "tools-english": withShortCode({
    title: "English tools · related",
    toolIds: ["vocab-book", "dictation", "speech-to-text", "paraphrase", "reading-highlight"],
    externalIds: ["cambridge-dictionary", "oxford-learner"],
  }),
  "tools-files": withShortCode({
    title: "File lab · related",
    toolIds: ["pdf-tools", "markdown-pdf", "word-pdf", "csv-markdown", "batch-rename"],
    externalIds: [],
  }),
  hints: withShortCode({
    title: "AI Toolbox · related",
    toolIds: ["calculator", "grapher", "formula-board", "latex", "focus-desk"],
    externalIds: ["ap-central", "desmos"],
  }),
  forum: withShortCode({
    title: "Forum · related tools",
    toolIds: ["ai", "qr-code", "text-comparator", "random-groups"],
    externalIds: [],
  }),
  academic: withShortCode({
    title: "Academic · related tools",
    toolIds: ["ai", "reading-highlight", "draft", "word-count", "markdown-pdf"],
    externalIds: ["khan"],
  }),
  guide: withShortCode({
    title: "Guide · related tools",
    toolIds: ["ai", "focus-desk", "exam-countdown", "flashcards"],
    externalIds: ["ap-central"],
  }),
  default: withShortCode({
    title: "Related toolbox links",
    toolIds: ["ai", "focus-desk", "qr-code"],
    externalIds: ["ap-central", "desmos"],
  }),
} as const satisfies Record<string, SiteRelatedPack>;

const MATH_TOOL_PATHS =
  /\/tools\/(calculator|grapher|latex|formula-board|units|sci-notation|vector-resolve)/;
const ENGLISH_TOOL_PATHS =
  /\/tools\/(vocab-book|dictation|speech-to-text|paraphrase|reading-highlight)/;
const FILE_TOOL_PATHS =
  /\/tools\/(pdf|markdown|word|csv|batch-rename)/;

/** Paths that should not show the related bar (auth / heavy admin chrome). */
export function shouldHideRelatedBar(pathname: string): boolean {
  const p = pathname.replace(/\/$/, "") || "/";
  return (
    p === "/login" ||
    p === "/register" ||
    p.startsWith("/admin") ||
    p === "/tools/short-code" // already on the presets tool
  );
}

/** Resolve related toolbox pack from the current pathname. */
export function relatedPackForPath(pathname: string): SiteRelatedPack {
  const p = pathname.replace(/\/$/, "") || "/";

  if (p === "/") return SITE_RELATED_PACKS.home;
  if (p.startsWith("/explore")) return SITE_RELATED_PACKS.home;

  if (p.startsWith("/english/toefl/reading")) return SITE_RELATED_PACKS["english-toefl-reading"];
  if (p.startsWith("/english/toefl/listening")) return SITE_RELATED_PACKS["english-toefl-listening"];
  if (p.startsWith("/english/toefl/writing")) return SITE_RELATED_PACKS["english-toefl-writing"];
  if (p.startsWith("/english/toefl/speaking")) return SITE_RELATED_PACKS["english-toefl-speaking"];
  if (p.startsWith("/english/toefl")) return SITE_RELATED_PACKS.english;
  if (p.startsWith("/english/sat")) return SITE_RELATED_PACKS["english-sat"];
  if (p.startsWith("/english/vocabulary")) return SITE_RELATED_PACKS["english-vocabulary"];
  if (p.startsWith("/english/grammar")) return SITE_RELATED_PACKS["english-grammar"];
  if (p.startsWith("/english")) return SITE_RELATED_PACKS.english;

  if (p.startsWith("/ap")) return SITE_RELATED_PACKS.ap;
  if (p.startsWith("/concepts") || p.startsWith("/key-concepts")) return SITE_RELATED_PACKS.concepts;
  if (p.startsWith("/formulas")) return SITE_RELATED_PACKS.formulas;
  if (p.startsWith("/practice") || p.startsWith("/questionnaires")) return SITE_RELATED_PACKS.practice;

  if (p.startsWith("/code")) return SITE_RELATED_PACKS.code;
  if (p.startsWith("/hints") || p.startsWith("/ai-for-ap") || p.startsWith("/ai-developer"))
    return SITE_RELATED_PACKS.hints;
  if (p.startsWith("/forum")) return SITE_RELATED_PACKS.forum;
  if (p.startsWith("/academic")) return SITE_RELATED_PACKS.academic;
  if (p.startsWith("/guide") || p.startsWith("/checklist") || p.startsWith("/learning-box"))
    return SITE_RELATED_PACKS.guide;

  if (MATH_TOOL_PATHS.test(p)) return SITE_RELATED_PACKS["tools-math"];
  if (ENGLISH_TOOL_PATHS.test(p)) return SITE_RELATED_PACKS["tools-english"];
  if (FILE_TOOL_PATHS.test(p)) return SITE_RELATED_PACKS["tools-files"];
  if (p.startsWith("/tools")) return SITE_RELATED_PACKS.tools;

  return SITE_RELATED_PACKS.default;
}
