/** Official free study resources (College Board, ETS, language docs). Not affiliated. */

export type OfficialLink = {
  href: string;
  label: string;
};

export type OfficialResourceBlock = {
  title: string;
  note: string;
  links: OfficialLink[];
};

const AP_STUDENTS = "https://apstudents.collegeboard.org/courses";
const AP_CENTRAL = "https://apcentral.collegeboard.org/courses";

/** College Board course path segment(s) keyed by site subject slug. */
const AP_COURSE_PATHS: Record<string, { students: string[]; central: string[]; labels?: string[] }> = {
  "physics-1": { students: ["ap-physics-1-algebra-based"], central: ["ap-physics-1"] },
  "physics-2": { students: ["ap-physics-2-algebra-based"], central: ["ap-physics-2"] },
  "physics-c-mechanics": {
    students: ["ap-physics-c-mechanics"],
    central: ["ap-physics-c-mechanics"],
  },
  "physics-c-e-and-m": {
    students: ["ap-physics-c-electricity-and-magnetism"],
    central: ["ap-physics-c-electricity-and-magnetism"],
  },
  "calculus-ab-bc": {
    students: ["ap-calculus-ab", "ap-calculus-bc"],
    central: ["ap-calculus-ab", "ap-calculus-bc"],
    labels: ["Calculus AB", "Calculus BC"],
  },
  statistics: { students: ["ap-statistics"], central: ["ap-statistics"] },
  chemistry: { students: ["ap-chemistry"], central: ["ap-chemistry"] },
  biology: { students: ["ap-biology"], central: ["ap-biology"] },
  psychology: { students: ["ap-psychology"], central: ["ap-psychology"] },
  "computer-science-a": {
    students: ["ap-computer-science-a"],
    central: ["ap-computer-science-a"],
  },
  "computer-science-principles": {
    students: ["ap-computer-science-principles"],
    central: ["ap-computer-science-principles"],
  },
  microeconomics: { students: ["ap-microeconomics"], central: ["ap-microeconomics"] },
  macroeconomics: { students: ["ap-macroeconomics"], central: ["ap-macroeconomics"] },
  "us-history": {
    students: ["ap-united-states-history"],
    central: ["ap-united-states-history"],
  },
  "world-history": {
    students: ["ap-world-history-modern"],
    central: ["ap-world-history-modern"],
  },
  "european-history": {
    students: ["ap-european-history"],
    central: ["ap-european-history"],
  },
  "english-language": {
    students: ["ap-english-language-and-composition"],
    central: ["ap-english-language-and-composition"],
  },
  "english-literature": {
    students: ["ap-english-literature-and-composition"],
    central: ["ap-english-literature-and-composition"],
  },
  "environmental-science": {
    students: ["ap-environmental-science"],
    central: ["ap-environmental-science"],
  },
  "human-geography": {
    students: ["ap-human-geography"],
    central: ["ap-human-geography"],
  },
};

export const AP_PROGRAM_OFFICIAL: OfficialResourceBlock = {
  title: "Official College Board AP resources",
  note: "Free course overviews, exam info, and AP Central teacher materials. This site is not affiliated with College Board.",
  links: [
    { href: "https://apstudents.collegeboard.org/", label: "AP Students" },
    { href: "https://apcentral.collegeboard.org/", label: "AP Central" },
    { href: "https://apstudents.collegeboard.org/getting-started", label: "Getting started" },
  ],
};

export function getApSubjectOfficial(slug: string, subjectName?: string): OfficialResourceBlock {
  const paths = AP_COURSE_PATHS[slug];
  const label = subjectName?.replace(/^AP\s+/, "") || "this course";
  if (!paths) {
    return {
      title: `Official ${label} resources`,
      note: "Browse College Board for the matching course page. This site is not affiliated with College Board.",
      links: [
        { href: "https://apstudents.collegeboard.org/course-index", label: "AP course index" },
        { href: "https://apcentral.collegeboard.org/", label: "AP Central" },
      ],
    };
  }

  const links: OfficialLink[] = [];
  paths.students.forEach((segment, i) => {
    const courseLabel = paths.labels?.[i] || label;
    links.push({
      href: `${AP_STUDENTS}/${segment}`,
      label: paths.students.length > 1 ? `AP Students · ${courseLabel}` : "AP Students course page",
    });
  });
  paths.central.forEach((segment, i) => {
    const courseLabel = paths.labels?.[i] || label;
    links.push({
      href: `${AP_CENTRAL}/${segment}`,
      label: paths.central.length > 1 ? `AP Central · ${courseLabel}` : "AP Central course page",
    });
  });

  return {
    title: `Official ${label} resources`,
    note: "College Board free course & exam pages for this subject. Unofficial study aid — not affiliated with College Board.",
    links,
  };
}

export const SAT_HUB_OFFICIAL: OfficialResourceBlock = {
  title: "Official SAT practice",
  note: "Use College Board / Bluebook for official practice. This site is not affiliated with College Board.",
  links: [
    {
      href: "https://satsuite.collegeboard.org/practice/student-question-bank",
      label: "Student Question Bank",
    },
    {
      href: "https://satsuite.collegeboard.org/practice/practice-tests",
      label: "Bluebook & practice tests",
    },
    {
      href: "https://satsuite.collegeboard.org/sat",
      label: "SAT Suite overview",
    },
  ],
};

export const TOEFL_HUB_OFFICIAL: OfficialResourceBlock = {
  title: "Official TOEFL resources",
  note: "Use ETS for current format and official preparation. This site is not affiliated with ETS.",
  links: [
    {
      href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
      label: "ETS test content",
    },
    {
      href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
      label: "ETS preparation",
    },
    {
      href: "https://www.ets.org/toefl.html",
      label: "ETS TOEFL home",
    },
  ],
};

/** Per SAT/TOEFL lane — keyed by `${examId}:${sectionId}`. */
const EXAM_SECTION_OFFICIAL: Record<string, OfficialResourceBlock> = {
  "sat:english": {
    title: "Official SAT Reading & Writing",
    note: "College Board Digital SAT R&W practice (Expression of Ideas / conventions overlap).",
    links: [
      {
        href: "https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing",
        label: "What's on Reading & Writing",
      },
      {
        href: "https://satsuite.collegeboard.org/practice/student-question-bank",
        label: "Student Question Bank",
      },
    ],
  },
  "sat:grammar": {
    title: "Official SAT Conventions practice",
    note: "Standard English Conventions sit inside Digital SAT Reading and Writing.",
    links: [
      {
        href: "https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing",
        label: "Reading & Writing domains",
      },
      {
        href: "https://satsuite.collegeboard.org/practice/student-question-bank",
        label: "Student Question Bank",
      },
    ],
  },
  "sat:reading": {
    title: "Official SAT Reading practice",
    note: "Information & Ideas / Craft & Structure on the Digital SAT.",
    links: [
      {
        href: "https://satsuite.collegeboard.org/sat/whats-on-the-test/reading-writing",
        label: "Reading & Writing overview",
      },
      {
        href: "https://satsuite.collegeboard.org/practice/practice-tests",
        label: "Official practice tests",
      },
    ],
  },
  "sat:mathematics": {
    title: "Official SAT Math practice",
    note: "Algebra, Advanced Math, Problem-Solving & Data Analysis, Geometry & Trigonometry.",
    links: [
      {
        href: "https://satsuite.collegeboard.org/sat/whats-on-the-test/math",
        label: "What's on SAT Math",
      },
      {
        href: "https://satsuite.collegeboard.org/practice/student-question-bank",
        label: "Student Question Bank",
      },
      {
        href: "https://bluebook.collegeboard.org/",
        label: "Bluebook app",
      },
    ],
  },
  "toefl:reading": {
    title: "Official TOEFL Reading",
    note: "ETS describes current Reading task types and free prep options.",
    links: [
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
        label: "TOEFL iBT content",
      },
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
        label: "ETS prepare",
      },
    ],
  },
  "toefl:listening": {
    title: "Official TOEFL Listening",
    note: "Official Listening format and prep from ETS.",
    links: [
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
        label: "TOEFL iBT content",
      },
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
        label: "ETS prepare",
      },
    ],
  },
  "toefl:writing": {
    title: "Official TOEFL Writing",
    note: "Official Writing tasks and sample materials from ETS.",
    links: [
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
        label: "TOEFL iBT content",
      },
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
        label: "ETS prepare",
      },
    ],
  },
  "toefl:speaking": {
    title: "Official TOEFL Speaking",
    note: "Official Speaking format and prep from ETS.",
    links: [
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
        label: "TOEFL iBT content",
      },
      {
        href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
        label: "ETS prepare",
      },
    ],
  },
};

export function getExamSectionOfficial(
  examId: string,
  sectionId: string
): OfficialResourceBlock | null {
  return EXAM_SECTION_OFFICIAL[`${examId}:${sectionId}`] || null;
}

export const CODE_LANG_OFFICIAL: Record<string, OfficialResourceBlock> = {
  python: {
    title: "Official Python resources",
    note: "Start with the official tutorial and language reference.",
    links: [
      { href: "https://docs.python.org/3/tutorial/", label: "Python tutorial" },
      { href: "https://docs.python.org/3/", label: "Python docs" },
      { href: "https://www.python.org/", label: "python.org" },
    ],
  },
  javascript: {
    title: "Official JavaScript resources",
    note: "MDN is the standard web reference for JavaScript.",
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
        label: "MDN JS Guide",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        label: "MDN JavaScript",
      },
      { href: "https://tc39.es/ecma262/", label: "ECMAScript spec" },
    ],
  },
  typescript: {
    title: "Official TypeScript resources",
    note: "TypeScript Handbook and playground from the language team.",
    links: [
      { href: "https://www.typescriptlang.org/docs/", label: "TypeScript Handbook" },
      { href: "https://www.typescriptlang.org/play", label: "TS Playground" },
      { href: "https://www.typescriptlang.org/", label: "typescriptlang.org" },
    ],
  },
  web: {
    title: "Official Web / HTML resources",
    note: "MDN Learn Web Development is the free standard path.",
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
        label: "MDN Learn Web",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        label: "MDN HTML",
      },
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        label: "MDN CSS",
      },
    ],
  },
  sql: {
    title: "Official SQL resources",
    note: "This playground uses SQLite in the browser — start with SQLite docs.",
    links: [
      { href: "https://www.sqlite.org/docs.html", label: "SQLite docs" },
      { href: "https://www.sqlite.org/lang.html", label: "SQLite SQL language" },
      {
        href: "https://www.postgresql.org/docs/current/tutorial.html",
        label: "PostgreSQL tutorial",
      },
    ],
  },
  markdown: {
    title: "Official Markdown resources",
    note: "CommonMark is the widely used Markdown specification.",
    links: [
      { href: "https://commonmark.org/", label: "CommonMark" },
      { href: "https://commonmark.org/help/", label: "CommonMark help" },
      { href: "https://www.markdownguide.org/", label: "Markdown Guide" },
    ],
  },
  java: {
    title: "Official Java resources",
    note: "Oracle Java Tutorials and language docs.",
    links: [
      {
        href: "https://docs.oracle.com/javase/tutorial/",
        label: "Oracle Java Tutorials",
      },
      {
        href: "https://docs.oracle.com/en/java/javase/",
        label: "Java SE documentation",
      },
      { href: "https://dev.java/learn/", label: "dev.java Learn" },
    ],
  },
  csharp: {
    title: "Official C# resources",
    note: "Microsoft Learn is the official C# / .NET learning path.",
    links: [
      {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        label: "C# documentation",
      },
      {
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/tour/",
        label: "C# tour",
      },
      {
        href: "https://dotnet.microsoft.com/learn/csharp",
        label: "Learn C# (.NET)",
      },
    ],
  },
};

export function getCodeLangOfficial(langId: string): OfficialResourceBlock | null {
  return CODE_LANG_OFFICIAL[langId] || null;
}

export const CODE_HUB_OFFICIAL: OfficialResourceBlock = {
  title: "Official coding docs",
  note: "Jump to language tutorials and references. Open a language page for more focused links.",
  links: [
    { href: "https://docs.python.org/3/tutorial/", label: "Python tutorial" },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
      label: "MDN JavaScript",
    },
    { href: "https://www.typescriptlang.org/docs/", label: "TypeScript docs" },
    {
      href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      label: "C# docs",
    },
  ],
};
