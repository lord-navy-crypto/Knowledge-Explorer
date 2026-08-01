/** Exam subject folders for practice-question files (not skills/vocab). */

export type EnglishExamId = "toefl" | "ielts" | "sat";

export type EnglishExamSection = {
  id: string;
  title: string;
  short: string;
  description: string;
  /** Storage space under folderArea="english" */
  spaceKey: string;
  href: string;
};

export type EnglishExamConfig = {
  id: EnglishExamId;
  title: string;
  hubHref: string;
  blurb: string;
  sections: readonly EnglishExamSection[];
};

export const englishExamConfigs: Record<EnglishExamId, EnglishExamConfig> = {
  toefl: {
    id: "toefl",
    title: "TOEFL",
    hubHref: "/english/toefl",
    blurb:
      "Four subject folders for practice questions. Open a subject to upload into that folder — Reading goes to Reading, and so on.",
    sections: [
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description: "Passages, academic vocabulary in context, and reading practice sets.",
        spaceKey: "toefl-reading",
        href: "/english/toefl/reading",
      },
      {
        id: "listening",
        title: "Listening",
        short: "L",
        description: "Lectures, conversations, and listening practice sets.",
        spaceKey: "toefl-listening",
        href: "/english/toefl/listening",
      },
      {
        id: "writing",
        title: "Writing",
        short: "W",
        description: "Integrated and academic writing prompts and model outlines.",
        spaceKey: "toefl-writing",
        href: "/english/toefl/writing",
      },
      {
        id: "speaking",
        title: "Speaking",
        short: "S",
        description: "Independent and integrated speaking prompts and timing notes.",
        spaceKey: "toefl-speaking",
        href: "/english/toefl/speaking",
      },
    ],
  },
  ielts: {
    id: "ielts",
    title: "IELTS",
    hubHref: "/english/ielts",
    blurb:
      "Four subject folders (Listening, Reading, Writing, Speaking) for practice questions. Open a subject to file materials in that folder.",
    sections: [
      {
        id: "listening",
        title: "Listening",
        short: "L",
        description: "Section recordings, transcripts, and listening practice sets.",
        spaceKey: "ielts-listening",
        href: "/english/ielts/listening",
      },
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description: "Passage sets, question types, and reading practice packs.",
        spaceKey: "ielts-reading",
        href: "/english/ielts/reading",
      },
      {
        id: "writing",
        title: "Writing",
        short: "W",
        description: "Task 1 / Task 2 prompts, outlines, and marked samples.",
        spaceKey: "ielts-writing",
        href: "/english/ielts/writing",
      },
      {
        id: "speaking",
        title: "Speaking",
        short: "S",
        description: "Part 1–3 cue cards, timing plans, and speaking notes.",
        spaceKey: "ielts-speaking",
        href: "/english/ielts/speaking",
      },
    ],
  },
  sat: {
    id: "sat",
    title: "SAT",
    hubHref: "/english/sat",
    blurb:
      "Three subject folders — English, Literature, and Mathematics — for practice questions. Open a subject to upload into that folder.",
    sections: [
      {
        id: "english",
        title: "English",
        short: "E",
        description: "Grammar, rhetoric, and Reading & Writing–style English practice.",
        spaceKey: "sat-english",
        href: "/english/sat/english",
      },
      {
        id: "literature",
        title: "Literature",
        short: "Lit",
        description: "Literary passages, analysis prompts, and literature practice sets.",
        spaceKey: "sat-literature",
        href: "/english/sat/literature",
      },
      {
        id: "mathematics",
        title: "Mathematics",
        short: "M",
        description: "Algebra, advanced math, and problem-solving practice sets.",
        spaceKey: "sat-mathematics",
        href: "/english/sat/mathematics",
      },
    ],
  },
};

export function getExamConfig(exam: EnglishExamId): EnglishExamConfig {
  return englishExamConfigs[exam];
}

export function getExamSection(
  exam: EnglishExamId,
  sectionId: string
): EnglishExamSection | undefined {
  return englishExamConfigs[exam].sections.find((s) => s.id === sectionId);
}

/** Flat list of all exam section spaces for media map / search. */
export function allEnglishExamSectionSpaces() {
  return (Object.values(englishExamConfigs) as EnglishExamConfig[]).flatMap((exam) =>
    exam.sections.map((s) => ({
      area: "english" as const,
      space: s.spaceKey,
      label: `${exam.title} · ${s.title}`,
      href: s.href,
    }))
  );
}
