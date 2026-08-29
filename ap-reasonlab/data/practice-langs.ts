import type { CodeBoardLanguage } from "@/data/code-board";

export type PracticeLangSpec = {
  id: Exclude<CodeBoardLanguage, "other" | "html" | "python" | "javascript" | "typescript" | "sql" | "markdown" | "java" | "csharp">;
  title: string;
  ext: string;
  filename: string;
  fence: string;
  storageKey: string;
  hashComments: boolean;
  readyMessage: string;
};

/** In-editor practice languages (structure check + download — not a compiler). */
export const PRACTICE_LANGS: PracticeLangSpec[] = [
  {
    id: "c",
    title: "C",
    ext: "c",
    filename: "main.c",
    fence: "c",
    storageKey: "ke-code-c-draft",
    hashComments: false,
    readyMessage:
      "C practice editor ready.\n\nPractice Run checks braces and quotes only — not gcc.\nDownload main.c and compile locally.",
  },
  {
    id: "cpp",
    title: "C++",
    ext: "cpp",
    filename: "main.cpp",
    fence: "cpp",
    storageKey: "ke-code-cpp-draft",
    hashComments: false,
    readyMessage:
      "C++ practice editor ready.\n\nPractice Run checks braces and quotes only — not a C++ compiler.\nDownload main.cpp for clang++ / g++.",
  },
  {
    id: "go",
    title: "Go",
    ext: "go",
    filename: "main.go",
    fence: "go",
    storageKey: "ke-code-go-draft",
    hashComments: false,
    readyMessage:
      "Go practice editor ready.\n\nPractice Run checks braces and quotes only — not `go run`.\nDownload main.go for the Go toolchain.",
  },
  {
    id: "rust",
    title: "Rust",
    ext: "rs",
    filename: "main.rs",
    fence: "rust",
    storageKey: "ke-code-rust-draft",
    hashComments: false,
    readyMessage:
      "Rust practice editor ready.\n\nPractice Run checks braces and quotes only — not rustc.\nDownload main.rs for cargo / rustc.",
  },
  {
    id: "php",
    title: "PHP",
    ext: "php",
    filename: "index.php",
    fence: "php",
    storageKey: "ke-code-php-draft",
    hashComments: true,
    readyMessage:
      "PHP practice editor ready.\n\nPractice Run checks braces and quotes only — not `php`.\nDownload index.php for a local PHP runtime.",
  },
  {
    id: "ruby",
    title: "Ruby",
    ext: "rb",
    filename: "main.rb",
    fence: "ruby",
    storageKey: "ke-code-ruby-draft",
    hashComments: true,
    readyMessage:
      "Ruby practice editor ready.\n\nPractice Run checks quotes / leftover braces — not `ruby`.\nDownload main.rb for a local Ruby runtime.",
  },
  {
    id: "r",
    title: "R",
    ext: "r",
    filename: "script.r",
    fence: "r",
    storageKey: "ke-code-r-draft",
    hashComments: true,
    readyMessage:
      "R practice editor ready.\n\nPractice Run checks quotes and leftover braces — not Rscript.\nDownload script.r for R / RStudio.",
  },
  {
    id: "swift",
    title: "Swift",
    ext: "swift",
    filename: "main.swift",
    fence: "swift",
    storageKey: "ke-code-swift-draft",
    hashComments: false,
    readyMessage:
      "Swift practice editor ready.\n\nPractice Run checks braces and quotes only — not swiftc.\nDownload main.swift for Xcode / Swift.",
  },
  {
    id: "kotlin",
    title: "Kotlin",
    ext: "kt",
    filename: "Main.kt",
    fence: "kotlin",
    storageKey: "ke-code-kotlin-draft",
    hashComments: false,
    readyMessage:
      "Kotlin practice editor ready.\n\nPractice Run checks braces and quotes only — not kotlinc.\nDownload Main.kt for IntelliJ / kotlinc.",
  },
];

export const PRACTICE_LANG_BY_ID = Object.fromEntries(PRACTICE_LANGS.map((row) => [row.id, row])) as Record<
  PracticeLangSpec["id"],
  PracticeLangSpec
>;

export function isPracticeLangId(value: string | null | undefined): value is PracticeLangSpec["id"] {
  return Boolean(value && value in PRACTICE_LANG_BY_ID);
}
