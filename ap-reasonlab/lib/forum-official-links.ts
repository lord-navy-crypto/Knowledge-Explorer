import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import { getCodeLangOfficial } from "@/data/official-resources";

export type ForumOfficialLink = {
  label: string;
  href: string;
  kind: "code-lang" | "in-thread" | "suggested";
};

const LANG_TO_OFFICIAL_ID: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  typescript: "typescript",
  html: "web",
  sql: "sql",
  markdown: "markdown",
  java: "java",
  csharp: "csharp",
  c: "c",
  cpp: "cpp",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  r: "r",
  swift: "swift",
  kotlin: "kotlin",
};

/** Known official doc domains → display label */
const OFFICIAL_DOMAIN_HINTS: Array<{ test: RegExp; label: string }> = [
  { test: /developer\.mozilla\.org/i, label: "MDN" },
  { test: /docs\.python\.org|python\.org/i, label: "Python" },
  { test: /typescriptlang\.org/i, label: "TypeScript" },
  { test: /sqlite\.org/i, label: "SQLite" },
  { test: /oracle\.com.*java|dev\.java/i, label: "Java" },
  { test: /learn\.microsoft\.com|dotnet\.microsoft/i, label: "Microsoft / .NET" },
  { test: /cppreference\.com/i, label: "cppreference" },
  { test: /go\.dev|golang\.org/i, label: "Go" },
  { test: /rust-lang\.org|doc\.rust-lang/i, label: "Rust" },
  { test: /php\.net/i, label: "PHP" },
  { test: /ruby-lang\.org/i, label: "Ruby" },
  { test: /r-project\.org|cran\.r-project/i, label: "R" },
  { test: /swift\.org/i, label: "Swift" },
  { test: /kotlinlang\.org/i, label: "Kotlin" },
  { test: /apstudents\.collegeboard|apcentral\.collegeboard/i, label: "College Board AP" },
  { test: /ets\.org/i, label: "ETS" },
  { test: /commonmark\.org/i, label: "CommonMark" },
  { test: /w3\.org/i, label: "W3C" },
  { test: /pyodide\.org/i, label: "Pyodide" },
];

const TOPIC_SUGGESTIONS: Array<{ pattern: RegExp; langId: string; label: string }> = [
  { pattern: /\bpython\b/i, langId: "python", label: "Python docs" },
  { pattern: /\bjavascript\b|\bjs\b/i, langId: "javascript", label: "MDN JavaScript" },
  { pattern: /\btypescript\b|\bts\b/i, langId: "typescript", label: "TypeScript docs" },
  { pattern: /\bhtml\b|\bcss\b|\bweb dev/i, langId: "web", label: "MDN Learn Web" },
  { pattern: /\bsql\b|\bsqlite\b/i, langId: "sql", label: "SQLite docs" },
  { pattern: /\bjava\b(?!script)/i, langId: "java", label: "Java tutorials" },
  { pattern: /\bc#\b|\bcsharp\b|\bdotnet\b/i, langId: "csharp", label: "C# docs" },
  { pattern: /\bmarkdown\b|\bcommonmark\b/i, langId: "markdown", label: "CommonMark" },
  { pattern: /\bc\+\+\b|\bcpp\b/i, langId: "cpp", label: "C++ reference" },
  { pattern: /\bgolang\b|\bgo lang\b/i, langId: "go", label: "Go tour" },
  { pattern: /\brust\b/i, langId: "rust", label: "Rust Book" },
  { pattern: /\bphp\b/i, langId: "php", label: "PHP manual" },
  { pattern: /\bruby\b/i, langId: "ruby", label: "Ruby docs" },
  { pattern: /\bswift\b/i, langId: "swift", label: "Swift Book" },
  { pattern: /\bkotlin\b/i, langId: "kotlin", label: "Kotlin docs" },
];

function addLink(
  list: ForumOfficialLink[],
  seen: Set<string>,
  link: ForumOfficialLink
) {
  const key = link.href.toLowerCase();
  if (seen.has(key)) return;
  seen.add(key);
  list.push(link);
}

export function extractForumOfficialLinks(body: string): ForumOfficialLink[] {
  const links: ForumOfficialLink[] = [];
  const seen = new Set<string>();

  for (const block of extractForumCodeBlocks(body)) {
    const langId = LANG_TO_OFFICIAL_ID[block.language] || block.language;
    const official = getCodeLangOfficial(langId);
    const primary = official?.links[0];
    if (primary) {
      addLink(links, seen, {
        label: `${block.label} · ${primary.label}`,
        href: primary.href,
        kind: "code-lang",
      });
    }
  }

  const urlMatches = body.match(/https?:\/\/[^\s)>\]"']+/gi) || [];
  for (const raw of urlMatches) {
    const href = raw.replace(/[.,;:!?)]+$/, "");
    for (const hint of OFFICIAL_DOMAIN_HINTS) {
      if (hint.test.test(href)) {
        addLink(links, seen, {
          label: `${hint.label} (in thread)`,
          href,
          kind: "in-thread",
        });
        break;
      }
    }
  }

  for (const topic of TOPIC_SUGGESTIONS) {
    if (!topic.pattern.test(body)) continue;
    const official = getCodeLangOfficial(topic.langId);
    const primary = official?.links[0];
    if (primary) {
      addLink(links, seen, {
        label: `Suggested · ${topic.label}`,
        href: primary.href,
        kind: "suggested",
      });
    }
  }

  return links.slice(0, 10);
}
