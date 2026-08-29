"use client";

import { useEffect, useMemo, useState } from "react";
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
import { ALL_CODE_LANGS, CODE_LANG_FAMILIES } from "@/data/code-language-hub";
import PracticeLangPlayground from "@/components/PracticeLangPlayground";
import { isPracticeLangId, PRACTICE_LANG_BY_ID } from "@/data/practice-langs";
import { PRACTICE_LANG_EXAMPLES } from "@/data/practice-lang-examples";
import { getCodeLangOfficial } from "@/data/official-resources";
import { standardSnippets } from "@/data/code-snippets";
import { jsExamples, tsExamples, sqlExamples, markdownExamples } from "@/data/easy-code-langs";
import { javaExamples } from "@/data/java-examples";
import { csharpExamples } from "@/data/csharp-examples";
import {
  importSourceIntoEditor,
  loadLastCodeLang,
  saveLastCodeLang,
  boardLang,
  CODE_IMPORT_ACCEPT,
} from "@/lib/code-editor-studio";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { classifyPaste } from "@/lib/code-paste-detect";
import { preloadEncodeDecode, preloadJsonFormatter, consumeCodeEditorPaste } from "@/lib/payload-handoff";
import { preloadForumComposer } from "@/lib/forum-local";
import JsonFormatterTool from "@/components/JsonFormatterTool";
import EncodeDecodeTool from "@/components/EncodeDecodeTool";
import CodeBoardTool from "@/components/CodeBoardTool";

const LANG_IDS = ALL_CODE_LANGS.map((lang) => lang.id);

function isLangId(value: string | null): value is string {
  return Boolean(value && LANG_IDS.includes(value));
}

type DeskTab = "editor" | "json" | "encode" | "board";

function parseDesk(raw: string | null): DeskTab {
  if (raw === "json" || raw === "encode" || raw === "board") return raw;
  return "editor";
}

const RELATED = [
  { href: "/tools/code-board", label: "Code board" },
  { href: "/tools/json-formatter", label: "JSON" },
  { href: "/tools/encode-decode", label: "Base64 / URL" },
  { href: "/tools/text-comparator", label: "Compare text" },
  { href: "/forum", label: "Forum" },
  { href: "/hints?tool=coding", label: "AI coding" },
];

export default function CodeLanguageStudio({ initialLang = "python" }: { initialLang?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromUrl = searchParams.get("lang");
  const [importNonce, setImportNonce] = useState(0);
  const [note, setNote] = useState("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [pasteBox, setPasteBox] = useState("");
  const desk = parseDesk(searchParams.get("desk"));
  const lang = isLangId(fromUrl)
    ? fromUrl
    : isLangId(initialLang)
      ? initialLang
      : "python";
  const meta = ALL_CODE_LANGS.find((row) => row.id === lang) ?? ALL_CODE_LANGS[0]!;
  const official = getCodeLangOfficial(lang);
  const href = `/code/editor?lang=${lang}`;

  function setDesk(next: DeskTab) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", lang);
    if (next === "editor") params.delete("desk");
    else params.set("desk", next);
    router.replace(`/code/editor?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    if (!fromUrl && typeof window !== "undefined") {
      const last = loadLastCodeLang(lang);
      if (last !== lang) router.replace(`/code/editor?lang=${last}`);
    }
  }, [fromUrl, lang, router]);

  useEffect(() => {
    saveLastCodeLang(lang);
  }, [lang]);

  useEffect(() => {
    const handed = consumeCodeEditorPaste();
    if (handed) {
      setPasteBox(handed);
      setNote("Loaded from Text comparator or another tool. Apply paste to send it into the editor.");
    }
  }, []);

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
    if (isPracticeLangId(lang)) {
      return (
        <PracticeLangPlayground
          key={lang}
          spec={PRACTICE_LANG_BY_ID[lang]}
          examples={PRACTICE_LANG_EXAMPLES[lang]}
        />
      );
    }
    return null;
  }, [lang, importNonce]);

  const classified = useMemo(() => classifyPaste(pasteBox), [pasteBox]);

  async function onImportFile(file: File | null) {
    if (!file) return;
    const text = await file.text();
    const next = importSourceIntoEditor(file.name, text, lang);
    setNote(`Imported ${file.name} into ${next.lang}.`);
    setImportNonce((n) => n + 1);
    if (next.lang !== lang) router.replace(`/code/editor?lang=${next.lang}`);
  }

  function applyPaste() {
    const hit = classifyPaste(pasteBox);
    if (!hit.body) {
      setNote("Paste some code, JSON, a Markdown fence, or Base64 first.");
      return;
    }
    if (hit.kind === "json") preloadJsonFormatter(hit.body);
    if (hit.kind === "base64") preloadEncodeDecode(hit.body, "base64-decode");
    const filename =
      hit.kind === "fence" && hit.language
        ? `paste.${hit.language === "web" ? "html" : hit.language}`
        : hit.kind === "json"
          ? "data.json"
          : "paste.txt";
    const next = importSourceIntoEditor(filename, hit.body, hit.language || lang);
    setNote(
      hit.kind === "json"
        ? `JSON detected — loaded into ${next.lang}. Open JSON formatter from Related if you need pretty-print.`
        : hit.kind === "base64"
          ? `Base64 detected — loaded into ${next.lang}. Open Base64 / URL to decode.`
          : hit.kind === "fence"
            ? `Fenced ${hit.language} loaded into the editor.`
            : `Pasted into ${next.lang}.`
    );
    setImportNonce((n) => n + 1);
    if (next.lang !== lang) router.replace(`/code/editor?lang=${next.lang}`);
  }

  function postPasteToForum() {
    const hit = classifyPaste(pasteBox);
    const code = hit.body || pasteBox.trim();
    if (!code) {
      setNote("Paste a snippet first, then post it to Forum.");
      return;
    }
    const fenceLang = hit.language === "web" ? "html" : hit.language || (lang === "web" ? "html" : lang);
    const body =
      hit.kind === "fence"
        ? pasteBox.trim()
        : "```" + fenceLang + "\n" + code + "\n```";
    preloadForumComposer({
      title: `${meta.title} snippet`,
      body,
      postCategory: "questions",
    });
    router.push("/forum");
  }

  function savePasteToBoard() {
    const hit = classifyPaste(pasteBox);
    const code = hit.body || pasteBox.trim();
    if (!code) {
      setNote("Paste a snippet first, then save it to the code board.");
      return;
    }
    const language = boardLang(hit.language || lang);
    appendToCodeBoard({
      language,
      title: `${meta.title} paste`,
      code,
      comment: "Saved from one editor paste / detect",
    });
    setNote("Saved to the Code board tab.");
    setDesk("board");
  }

  async function copyPermalink() {
    const url = `${window.location.origin}${href}`;
    await navigator.clipboard.writeText(url);
    setCopiedLink(true);
    window.setTimeout(() => setCopiedLink(false), 1500);
  }

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
            One editor: pick a language here (including C, Go, Rust, and more), import a file, or keep snippets on the{" "}
            <button
              type="button"
              className="font-medium text-brand-700 underline"
              onClick={() => setDesk("board")}
            >
              Code board
            </button>{" "}
            tab. {meta.description}
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-2">
          <label className="block text-sm font-medium text-slate-700">
            Language
            <select
              className="input mt-1 min-w-[12rem]"
              value={lang}
              onChange={(event) => {
                const params = new URLSearchParams(searchParams.toString());
                params.set("lang", event.target.value);
                router.replace(`/code/editor?${params.toString()}`);
              }}
            >
              {CODE_LANG_FAMILIES.map((family) => (
                <optgroup key={family.id} label={family.label}>
                  {family.langs.map((row) => (
                    <option key={row.id} value={row.id}>
                      {row.title}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </label>
          <label className="btn-secondary cursor-pointer text-sm">
            Import file
            <input
              type="file"
              className="sr-only"
              accept={CODE_IMPORT_ACCEPT}
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                e.target.value = "";
                void onImportFile(file);
              }}
            />
          </label>
          <button type="button" className="btn-secondary text-sm" onClick={() => void copyPermalink()}>
            {copiedLink ? "Link copied" : "Copy editor link"}
          </button>
        </div>
      </div>

      {note ? <p className="text-sm text-emerald-800">{note}</p> : null}

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Paste / detect</p>
        <p className="mt-1 text-sm text-slate-600">
          Drop a Markdown fence, JSON object, Base64 blob, or plain source. JSON and Base64 also prime
          the matching Convenient Tools.
        </p>
        <textarea
          className="input mt-2 min-h-[5.5rem] font-mono text-sm"
          value={pasteBox}
          onChange={(e) => setPasteBox(e.target.value)}
          placeholder={'```python\nprint(1)\n```  or  {"ok":true}'}
          spellCheck={false}
        />
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <button type="button" className="btn-primary text-xs" onClick={applyPaste}>
            Apply paste
          </button>
          <button type="button" className="btn-secondary text-xs" onClick={postPasteToForum}>
            Post to Forum
          </button>
          <button type="button" className="btn-secondary text-xs" onClick={savePasteToBoard}>
            Save to code board
          </button>
          {classified.kind === "json" ? (
            <button
              type="button"
              className="btn-secondary text-xs"
              onClick={() => {
                preloadJsonFormatter(classified.body);
                setDesk("json");
              }}
            >
              Open JSON on this desk
            </button>
          ) : null}
          {classified.kind === "base64" ? (
            <button
              type="button"
              className="btn-secondary text-xs"
              onClick={() => {
                preloadEncodeDecode(classified.body, "base64-decode");
                setDesk("encode");
              }}
            >
              Open Base64 on this desk
            </button>
          ) : null}
          {classified.kind !== "plain" && classified.body ? (
            <span className="text-xs text-slate-500">Detected: {classified.kind}</span>
          ) : null}
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {RELATED.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-brand-300 hover:text-brand-800"
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["editor", "Editor"],
            ["json", "JSON"],
            ["encode", "Base64 / URL"],
            ["board", "Code board"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setDesk(id)}
            className={
              desk === id
                ? "rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white"
                : "rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200"
            }
          >
            {label}
          </button>
        ))}
      </div>

      {official && desk === "editor" ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      {desk === "editor" ? <div key={`${lang}-${importNonce}`}>{playground}</div> : null}
      {desk === "json" ? <JsonFormatterTool embedded /> : null}
      {desk === "encode" ? <EncodeDecodeTool embedded /> : null}
      {desk === "board" ? <CodeBoardTool embedded /> : null}

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
