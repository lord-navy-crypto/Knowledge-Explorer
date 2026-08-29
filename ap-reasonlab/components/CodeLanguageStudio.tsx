"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import PythonPlayground from "@/components/PythonPlayground";
import JsPlayground from "@/components/JsPlayground";
import TsPlayground from "@/components/TsPlayground";
import SqlPlayground from "@/components/SqlPlayground";
import HtmlPlayground from "@/components/HtmlPlayground";
import MarkdownPlayground from "@/components/MarkdownPlayground";
import JavaPlayground from "@/components/JavaPlayground";
import CsharpPlayground from "@/components/CsharpPlayground";
import { ALL_CODE_LANGS } from "@/data/code-language-hub";
import { getCodeLangOfficial } from "@/data/official-resources";
import { standardSnippets } from "@/data/code-snippets";
import { jsExamples, tsExamples, sqlExamples, markdownExamples } from "@/data/easy-code-langs";
import { javaExamples } from "@/data/java-examples";
import { csharpExamples } from "@/data/csharp-examples";

const LANG_IDS = ALL_CODE_LANGS.map((lang) => lang.id);

function isLangId(value: string | null): value is string {
  return Boolean(value && LANG_IDS.includes(value));
}

export default function CodeLanguageStudio({ initialLang = "python" }: { initialLang?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromUrl = searchParams.get("lang");
  const lang = isLangId(fromUrl) ? fromUrl : isLangId(initialLang) ? initialLang : "python";
  const meta = ALL_CODE_LANGS.find((row) => row.id === lang) ?? ALL_CODE_LANGS[0]!;
  const official = getCodeLangOfficial(lang);
  const href = `/code/editor?lang=${lang}`;

  const playground = useMemo(() => {
    if (lang === "python") {
      const snippets = standardSnippets.filter((s) => s.language === "python");
      return (
        <PythonPlayground
          examples={snippets.map((item) => ({ id: item.id, title: item.title, code: item.code }))}
        />
      );
    }
    if (lang === "javascript") return <JsPlayground examples={jsExamples} />;
    if (lang === "typescript") return <TsPlayground examples={tsExamples} />;
    if (lang === "sql") return <SqlPlayground examples={sqlExamples} />;
    if (lang === "web") {
      const snippets = standardSnippets.filter((s) => s.language === "html");
      return (
        <HtmlPlayground
          examples={snippets.map((item) => ({ id: item.id, title: item.title, code: item.code }))}
        />
      );
    }
    if (lang === "markdown") return <MarkdownPlayground examples={markdownExamples} />;
    if (lang === "java") return <JavaPlayground examples={javaExamples} />;
    if (lang === "csharp") return <CsharpPlayground examples={csharpExamples} />;
    return null;
  }, [lang]);

  return (
    <div className="space-y-6">
      <TrackToolboxVisit href={href} title={meta.title} />
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">{meta.title} editor</h1>
          <p className="mt-2 max-w-2xl text-slate-600">
            One editor: pick a language here, import a file below, or keep snippets in the{" "}
            <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
              code block adder
            </Link>
            . {meta.description}
          </p>
        </div>
        <label className="block text-sm font-medium text-slate-700">
          Language
          <select
            className="input mt-1 min-w-[12rem]"
            value={lang}
            onChange={(event) => router.replace(`/code/editor?lang=${event.target.value}`)}
          >
            {ALL_CODE_LANGS.map((row) => (
              <option key={row.id} value={row.id}>
                {row.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      {official ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      {playground}

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea={`code-${lang}`}
        spaceKey="_root"
        spaceBasePath={href}
        title={`${meta.title} · pictures, documents & files`}
      />
    </div>
  );
}
