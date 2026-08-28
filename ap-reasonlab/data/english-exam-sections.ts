/** Exam subject folders for practice-question files (not skills/vocab). */

export type EnglishExamId = "toefl" | "sat";

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
      "Four daily-practice lanes plus an in-site MCQ bank. Upload reading, listening, writing, and speaking materials; use built-in multiple-choice practice by skill.",
    sections: [
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description: "Upload TOEFL articles for reading practice — no questions attached.",
        spaceKey: "toefl-reading",
        href: "/english/toefl/reading",
      },
      {
        id: "listening",
        title: "Listening",
        short: "L",
        description: "Upload listening materials, then replay scripts with machine voice.",
        spaceKey: "toefl-listening",
        href: "/english/toefl/listening",
      },
      {
        id: "writing",
        title: "Writing",
        short: "W",
        description: "Upload writing prompts (题目) and model essays (范文).",
        spaceKey: "toefl-writing",
        href: "/english/toefl/writing",
      },
      {
        id: "speaking",
        title: "Speaking",
        short: "S",
        description: "Paste dialogues and shadow line-by-line with model pronunciation.",
        spaceKey: "toefl-speaking",
        href: "/english/toefl/speaking",
      },
    ],
  },
  sat: {
    id: "sat",
    title: "SAT",
    hubHref: "/english/sat",
    blurb:
      "Four subject folders plus an in-site MCQ bank (120+ questions). Upload practice files per subject or use built-in multiple-choice sets filtered by skill.",
    sections: [
      {
        id: "english",
        title: "English",
        short: "E",
        description: "General English practice sets, rhetoric, and expression-of-ideas materials.",
        spaceKey: "sat-english",
        href: "/english/sat/english",
      },
      {
        id: "grammar",
        title: "Grammar",
        short: "G",
        description: "Standard English conventions, usage, punctuation, and sentence structure.",
        spaceKey: "sat-grammar",
        href: "/english/sat/grammar",
      },
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description: "Passages, information & ideas, craft & structure, and reading practice sets.",
        spaceKey: "sat-reading",
        href: "/english/sat/reading",
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
