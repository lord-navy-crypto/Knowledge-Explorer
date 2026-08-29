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
      "Four daily-practice lanes plus an in-site bank shaped like the current ETS TOEFL iBT: Complete the Words, Read in Daily Life, Read an Academic Passage; four listening tasks; Build a Sentence, Write an Email, Academic Discussion; Listen and Repeat and Take an Interview. Original items — not real ETS questions.",
    sections: [
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description:
          "Official-shaped reading: Complete the Words, campus/daily notices, and short academic passages. Upload extra articles below.",
        spaceKey: "toefl-reading",
        href: "/english/toefl/reading",
      },
      {
        id: "listening",
        title: "Listening",
        short: "L",
        description:
          "Official-shaped listening: choose a response, conversation, announcement, and academic talk (transcripts stand in for audio). Upload extra scripts below.",
        spaceKey: "toefl-listening",
        href: "/english/toefl/listening",
      },
      {
        id: "writing",
        title: "Writing",
        short: "W",
        description:
          "Official-shaped writing: Build a Sentence, Write an Email, and Write for an Academic Discussion. Upload prompts and model essays below.",
        spaceKey: "toefl-writing",
        href: "/english/toefl/writing",
      },
      {
        id: "speaking",
        title: "Speaking",
        short: "S",
        description:
          "Official-shaped speaking: Listen and Repeat and Take an Interview. Shadow dialogues with the model voice below.",
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
      "Digital SAT folders plus original MCQs: each Reading and Writing item pairs a short passage with one question (Information and Ideas, Craft and Structure, Standard English Conventions, Expression of Ideas). Math covers Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry. Not real College Board items.",
    sections: [
      {
        id: "english",
        title: "English",
        short: "E",
        description:
          "Expression of Ideas: revise short drafts to meet a stated rhetorical goal (Digital SAT R&W).",
        spaceKey: "sat-english",
        href: "/english/sat/english",
      },
      {
        id: "grammar",
        title: "Grammar",
        short: "G",
        description:
          "Standard English Conventions: edit short texts for sentence structure, usage, and punctuation.",
        spaceKey: "sat-grammar",
        href: "/english/sat/grammar",
      },
      {
        id: "reading",
        title: "Reading",
        short: "R",
        description:
          "Information and Ideas plus Craft and Structure: one short passage (or pair) per question, as on the Digital SAT.",
        spaceKey: "sat-reading",
        href: "/english/sat/reading",
      },
      {
        id: "mathematics",
        title: "Mathematics",
        short: "M",
        description:
          "Algebra, Advanced Math, Problem-Solving and Data Analysis, and Geometry and Trigonometry.",
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
