import type { OfficialLink } from "@/data/official-resources";
import { getCodeLangOfficial } from "@/data/official-resources";

export type CodeLangFamily = {
  id: string;
  label: string;
  blurb: string;
  langs: CodeLangCard[];
};

export type CodeLangCard = {
  id: string;
  title: string;
  href: string;
  runKind: "browser" | "practice";
  description: string;
  /** Primary official doc link shown on the card. */
  official?: OfficialLink;
};

function primaryOfficial(langId: string): OfficialLink | undefined {
  const block = getCodeLangOfficial(langId);
  return block?.links[0];
}

export const CODE_LANG_FAMILIES: CodeLangFamily[] = [
  {
    id: "scripting",
    label: "Scripting & data",
    blurb: "Python, SQL, and Markdown — great for AP CSP, stats, and notes.",
    langs: [
      {
        id: "python",
        title: "Python",
        href: "/code/python",
        runKind: "browser",
        description: "Pyodide in-browser + uploads.",
        official: primaryOfficial("python"),
      },
      {
        id: "sql",
        title: "SQL",
        href: "/code/sql",
        runKind: "browser",
        description: "Persistent SQLite session via sql.js.",
        official: primaryOfficial("sql"),
      },
      {
        id: "markdown",
        title: "Markdown",
        href: "/code/markdown",
        runKind: "browser",
        description: "Live Markdown + KaTeX preview.",
        official: primaryOfficial("markdown"),
      },
    ],
  },
  {
    id: "web-stack",
    label: "Web stack",
    blurb: "JavaScript, TypeScript, and HTML/CSS/JS preview.",
    langs: [
      {
        id: "javascript",
        title: "JavaScript",
        href: "/code/javascript",
        runKind: "browser",
        description: "Sandboxed console playground.",
        official: primaryOfficial("javascript"),
      },
      {
        id: "typescript",
        title: "TypeScript",
        href: "/code/typescript",
        runKind: "browser",
        description: "Transpile + run in-browser.",
        official: primaryOfficial("typescript"),
      },
      {
        id: "web",
        title: "Web / HTML",
        href: "/code/web",
        runKind: "browser",
        description: "Live HTML/CSS/JS preview.",
        official: primaryOfficial("web"),
      },
    ],
  },
  {
    id: "training",
    label: "Java & C# training",
    blurb: "Practice Run stand-ins — download real source for JDK / .NET.",
    langs: [
      {
        id: "java",
        title: "Java",
        href: "/code/java",
        runKind: "practice",
        description: "Practice Run (JS stand-in) + Download .java.",
        official: primaryOfficial("java"),
      },
      {
        id: "csharp",
        title: "C#",
        href: "/code/csharp",
        runKind: "practice",
        description: "Practice Run like Java + Download .cs.",
        official: primaryOfficial("csharp"),
      },
    ],
  },
  {
    id: "systems",
    label: "Systems & compiled",
    blurb: "C, C++, Go, and Rust — edit here, then download for a real compiler. Practice Run is a brace/quote check, not gcc/rustc.",
    langs: [
      {
        id: "c",
        title: "C",
        href: "/code/c",
        runKind: "practice",
        description: "Structure check + Download .c (not gcc).",
        official: primaryOfficial("c"),
      },
      {
        id: "cpp",
        title: "C++",
        href: "/code/cpp",
        runKind: "practice",
        description: "Structure check + Download .cpp (not clang++).",
        official: primaryOfficial("cpp"),
      },
      {
        id: "go",
        title: "Go",
        href: "/code/go",
        runKind: "practice",
        description: "Structure check + Download .go (not go run).",
        official: primaryOfficial("go"),
      },
      {
        id: "rust",
        title: "Rust",
        href: "/code/rust",
        runKind: "practice",
        description: "Structure check + Download .rs (not rustc).",
        official: primaryOfficial("rust"),
      },
    ],
  },
  {
    id: "more-langs",
    label: "More practice languages",
    blurb: "PHP, Ruby, R, Swift, and Kotlin — write and download; Practice Run checks structure, not runtime.",
    langs: [
      {
        id: "php",
        title: "PHP",
        href: "/code/php",
        runKind: "practice",
        description: "Structure check + Download .php.",
        official: primaryOfficial("php"),
      },
      {
        id: "ruby",
        title: "Ruby",
        href: "/code/ruby",
        runKind: "practice",
        description: "Structure check + Download .rb.",
        official: primaryOfficial("ruby"),
      },
      {
        id: "r",
        title: "R",
        href: "/code/r",
        runKind: "practice",
        description: "Structure check + Download .r.",
        official: primaryOfficial("r"),
      },
      {
        id: "swift",
        title: "Swift",
        href: "/code/swift",
        runKind: "practice",
        description: "Structure check + Download .swift.",
        official: primaryOfficial("swift"),
      },
      {
        id: "kotlin",
        title: "Kotlin",
        href: "/code/kotlin",
        runKind: "practice",
        description: "Structure check + Download .kt.",
        official: primaryOfficial("kotlin"),
      },
    ],
  },
];

export const ALL_CODE_LANGS = CODE_LANG_FAMILIES.flatMap((f) => f.langs);
