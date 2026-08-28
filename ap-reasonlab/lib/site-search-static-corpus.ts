/**
 * Built-in search corpus — built once per process, scored per query.
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
import { listedStudyTools, STUDY_TOOL_CATEGORIES } from "@/data/study-tools";
import { USER_GUIDE_SECTIONS } from "@/data/user-guide";
import { SITE_SECTION_FOLDERS } from "@/lib/site-media-map";

export type StaticCorpusRow = {
  id: string;
  type: string;
  title: string;
  subject: string;
  detail: string;
  href: string;
  body: string;
};

let cachedCorpus: StaticCorpusRow[] | null = null;

const CORE_STATIC_PAGES: Array<Omit<StaticCorpusRow, "body">> = [
  { id: "home", type: "page", title: "Home · Knowledge Explorer", subject: "Site", detail: "Knowledge Explorer portal", href: "/" },
  { id: "explore-ap-english", type: "page", title: "AP & English", subject: "Site", detail: "AP subjects and English hub box", href: "/explore/ap-english" },
  { id: "explore-tools-code", type: "page", title: "Convenient Tools & Code", subject: "Site", detail: "Tools and coding hub box", href: "/explore/tools-code" },
  { id: "explore-workshops", type: "page", title: "Simulation & Download", subject: "Site", detail: "Simulation Workshop and Download", href: "/explore/workshops" },
  { id: "explore-simulation", type: "page", title: "Simulation Workshop", subject: "Site", detail: "Research simulation labs on GitHub", href: "/explore/simulation-workshop" },
  { id: "explore-download", type: "page", title: "Download", subject: "Site", detail: "macOS Shell builders on GitHub", href: "/explore/download" },
  { id: "search", type: "page", title: "Search", subject: "Site", detail: "Full-site search", href: "/search" },
  { id: "about", type: "page", title: "About", subject: "Site", detail: "About Knowledge Explorer", href: "/about" },
  { id: "disclaimer", type: "page", title: "Disclaimer", subject: "Site", detail: "Copyright and study-use notices", href: "/disclaimer" },
  { id: "partners", type: "page", title: "Partners", subject: "Site", detail: "Knowledge Explorer roster", href: "/partners" },
  { id: "guide", type: "page", title: "Site Guide", subject: "Tools", detail: "Developer deploy and setup guide", href: "/guide" },
  { id: "user-guide", type: "page", title: "User Guide", subject: "Help", detail: "Full site walkthrough for students", href: "/user-guide" },
  { id: "hints", type: "page", title: "AI Toolbox", subject: "Tools", detail: "Hints, calculator, grapher, Local AI", href: "/hints" },
  { id: "ai-for-ap", type: "page", title: "AI for AP (in Toolbox)", subject: "Study Skills", detail: "Safe AI tutor workflows", href: "/hints?section=ai-for-ap" },
  { id: "forum", type: "page", title: "Forum", subject: "Community", detail: "Discussions, shared library, My box", href: "/forum" },
  { id: "forum-shared", type: "page", title: "Shared library", subject: "Community", detail: "Public materials in Forum", href: "/forum?tab=shared" },
  { id: "forum-box", type: "page", title: "My box", subject: "Community", detail: "Private notes and pictures", href: "/forum?tab=box" },
  { id: "code", type: "page", title: "Code Resource", subject: "Code", detail: "Python, Java, web playgrounds", href: "/code" },
  { id: "tools", type: "page", title: "Convenient Tools", subject: "Tools", detail: "Everyday study utilities hub", href: "/tools" },
  { id: "english", type: "page", title: "English Learning", subject: "English", detail: "TOEFL SAT vocabulary writing", href: "/english" },
  { id: "ap", type: "page", title: "AP Subject Library", subject: "AP", detail: "Choose an AP subject", href: "/ap" },
  { id: "concepts", type: "page", title: "Concepts", subject: "AP", detail: "Topic and concept library", href: "/concepts" },
  { id: "formulas", type: "page", title: "Formulas", subject: "AP", detail: "Formula sheets by subject", href: "/formulas" },
  { id: "practice", type: "page", title: "Practice", subject: "AP", detail: "Practice and questionnaires", href: "/practice" },
  { id: "key-concepts", type: "page", title: "Key Concepts", subject: "AP", detail: "Guides and concept checks", href: "/key-concepts" },
  { id: "concepts-hub", type: "page", title: "Concepts topic folders", subject: "AP", detail: "Browse subject folders; pair with Key guides", href: "/concepts" },
  { id: "ap-writing-frameworks", type: "page", title: "AP writing frameworks", subject: "Humanities", detail: "DBQ LEQ rhetorical analysis essay frames", href: "/ap/writing-frameworks" },
  { id: "gh-vampire", type: "page", title: "VAMPIRE Apple Silicon Builder", subject: "Download", detail: "Native arm64 VAMPIRE builder", href: "https://github.com/lord-navy-crypto/VAMPIRE-Apple-Silicon-Builder" },
  { id: "gh-monte-carlo", type: "page", title: "Random Walk Monte Carlo Studio", subject: "Simulation", detail: "Monte Carlo lab on GitHub", href: "https://github.com/lord-navy-crypto/Random_Walk_Monte_Carlo_Studio" },
  { id: "gh-ising", type: "page", title: "Ising Monte Carlo Lab", subject: "Simulation", detail: "Ising model workbench", href: "https://github.com/lord-navy-crypto/Ising-Monte-Carlo-Lab" },
];

function row(
  partial: Omit<StaticCorpusRow, "body"> & { body?: string }
): StaticCorpusRow {
  const body =
    partial.body ||
    `${partial.title} ${partial.subject} ${partial.detail} ${partial.href}`;
  return { ...partial, body };
}

export function getStaticSearchCorpus(): StaticCorpusRow[] {
  if (cachedCorpus) return cachedCorpus;

  const rows: StaticCorpusRow[] = [];

  for (const section of SITE_SECTION_FOLDERS) {
    for (const page of section.pages) {
      rows.push(
        row({
          id: `${section.id}-${page.area}-${page.space}`,
          type: "page",
          title: page.label,
          subject: section.label,
          detail: `Open ${page.href}`,
          href: page.href,
          body: `${section.label} ${page.label} ${page.href} ${page.area} ${page.space}`,
        })
      );
    }
  }

  for (const page of CORE_STATIC_PAGES) {
    rows.push(row(page));
  }

  const categoryLabel = Object.fromEntries(
    STUDY_TOOL_CATEGORIES.map((c) => [c.id, c.label])
  );
  for (const tool of listedStudyTools()) {
    rows.push(
      row({
        id: `tool-${tool.id}`,
        type: "page",
        title: tool.title,
        subject: categoryLabel[tool.category] || "Tools",
        detail: tool.blurb,
        href: tool.href,
        body: `${tool.title} ${tool.blurb} ${tool.category} ${tool.href}`,
      })
    );
  }

  for (const section of USER_GUIDE_SECTIONS) {
    const steps = (section.steps || []).join(" ");
    const conversation = (section.conversation || []).map((c) => c.text).join(" ");
    rows.push(
      row({
        id: `user-guide-${section.id}`,
        type: "guide",
        title: `User Guide · ${section.title}`,
        subject: "Help",
        detail: section.preview,
        href: `/user-guide#guide-${section.id}`,
        body: `${section.title} ${section.preview} ${section.body || ""} ${steps} ${conversation}`,
      })
    );
  }

  for (const subject of AP_CATALOG) {
    rows.push(
      row({
        id: subject.id,
        type: "subject",
        title: subject.name,
        subject: subject.group,
        detail: subject.description,
        href: `/ap/${subject.slug}`,
        body: `${subject.name} ${subject.shortName} ${subject.group} ${subject.description}`,
      })
    );
  }

  for (const item of concepts) {
    rows.push(
      row({
        id: item.id,
        type: "concept",
        title: item.title,
        subject: item.subject,
        detail: `${item.summary} · Also see Key guides`,
        href: `/concepts/${item.id}`,
        body: `${item.title} ${item.subject} ${item.summary} ${(item.keyPoints || []).join(" ")} key guides concepts topic`,
      })
    );
  }

  for (const item of formulas) {
    rows.push(
      row({
        id: item.id,
        type: "formula",
        title: item.name,
        subject: item.subject,
        detail: item.content || `${item.expression} · ${item.unit || ""}`,
        href: `/formulas?subject=${encodeURIComponent(item.subject)}`,
        body: `${item.name} ${item.subject} ${item.expression || ""} ${item.content || ""} ${item.unit || ""} ${item.variables || ""}`,
      })
    );
  }

  for (const item of questionnaires) {
    const itemsText = (item.items || [])
      .map((q) => `${q.prompt || ""} ${(q.hints || []).join(" ")}`)
      .join(" ");
    rows.push(
      row({
        id: item.id,
        type: "practice",
        title: item.title,
        subject: item.subject,
        detail: item.description || itemsText,
        href: `/questionnaires/${item.id}`,
        body: `${item.title} ${item.subject} ${item.description || ""} ${itemsText}`,
      })
    );
  }

  for (const item of practiceQuestions) {
    rows.push(
      row({
        id: item.id,
        type: "practice",
        title: item.question.slice(0, 80),
        subject: item.subject,
        detail: item.question,
        href: `/practice?subject=${encodeURIComponent(item.subject)}`,
        body: `${item.question} ${item.subject} ${item.topic} ${(item.hints || []).join(" ")}`,
      })
    );
  }

  for (const item of keyConceptGuides) {
    const qText = (item.conceptQuestions || []).map((q) => q.prompt).join(" ");
    rows.push(
      row({
        id: item.id,
        type: "guide",
        title: item.title,
        subject: item.subject,
        detail: `${item.introduction} · See also Concepts topic folders`,
        href: `/key-concepts/${item.id}`,
        body: `${item.title} ${item.subject} ${item.introduction} ${(item.howToUseAI || []).join(" ")} ${qText} concepts topic folders`,
      })
    );
  }

  for (const area of englishAreas) {
    rows.push(
      row({
        id: area.href,
        type: "english",
        title: area.title,
        subject: "English",
        detail: area.description,
        href: area.href,
        body: `${area.title} ${area.description}`,
      })
    );
  }

  for (const word of academicVocabulary) {
    rows.push(
      row({
        id: `vocab-${word.word}`,
        type: "english",
        title: word.word,
        subject: "Vocabulary",
        detail: `${word.meaning} · ${word.example}`,
        href: "/english/vocabulary",
        body: `${word.word} ${word.family} ${word.meaning} ${word.collocation} ${word.example}`,
      })
    );
  }

  for (const pattern of sentencePatterns) {
    rows.push(
      row({
        id: `pattern-${pattern.title}`,
        type: "english",
        title: pattern.title,
        subject: "Grammar",
        detail: `${pattern.pattern} ${pattern.example}`,
        href: "/english/grammar",
        body: `${pattern.title} ${pattern.pattern} ${pattern.example}`,
      })
    );
  }

  for (const q of [...toeflQuestions, ...satQuestions]) {
    rows.push(
      row({
        id: q.id,
        type: "english",
        title: `${q.skill}: ${q.prompt.slice(0, 60)}…`,
        subject: "English practice",
        detail: q.explanation,
        href: q.id.startsWith("toefl") ? "/english/toefl" : "/english/sat",
        body: `${q.skill} ${q.prompt} ${q.choices.join(" ")} ${q.explanation}`,
      })
    );
  }

  for (const snip of standardSnippets) {
    rows.push(
      row({
        id: snip.id,
        type: "code",
        title: snip.title,
        subject: snip.language,
        detail: snip.description,
        href: "/code",
        body: `${snip.title} ${snip.language} ${snip.description} ${snip.code}`,
      })
    );
  }

  starterLearningMaterials.forEach((item, index) => {
    rows.push(
      row({
        id: `learning-${index}`,
        type: "learning",
        title: item.title,
        subject: item.category,
        detail: item.content,
        href: "/forum?tab=box",
        body: `${item.title} ${item.category} ${item.content}`,
      })
    );
  });

  for (const item of checklistItems) {
    rows.push(
      row({
        id: item.id,
        type: "checklist",
        title: item.title,
        subject: "Checklist",
        detail: item.description || "",
        href: item.link?.startsWith("/") ? item.link : "/checklist",
        body: `${item.title} ${item.description || ""}`,
      })
    );
  }

  for (const member of trueJetMembers) {
    rows.push(
      row({
        id: member.github,
        type: "member",
        title: member.name,
        subject: member.role,
        detail: member.org || "Knowledge Explorer",
        href: "/partners",
        body: `${member.name} ${member.role} ${member.org || ""} ${member.github}`,
      })
    );
  }

  cachedCorpus = rows;
  return rows;
}

/** Test helper — reset module cache between tests. */
export function resetStaticSearchCorpusCache() {
  cachedCorpus = null;
}
