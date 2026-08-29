"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import { extractForumBase64Payloads, extractForumJsonPayloads } from "@/lib/forum-payload-detect";
import { codeEditorDeskHref, preloadPlaygroundDraft } from "@/lib/code-draft-bridge";
import { appendToCodeBoard } from "@/lib/code-board-store";
import { preloadEncodeDecode, preloadJsonFormatter } from "@/lib/payload-handoff";
import ForumOfficialLinks from "@/components/ForumOfficialLinks";

export default function ForumCodeLaunchers({ body }: { body: string }) {
  const router = useRouter();
  const blocks = useMemo(() => extractForumCodeBlocks(body), [body]);
  const jsonBlocks = useMemo(() => extractForumJsonPayloads(body), [body]);
  const b64Blocks = useMemo(() => extractForumBase64Payloads(body), [body]);
  const [saved, setSaved] = useState<string>("");

  const hasAnything = blocks.length || jsonBlocks.length || b64Blocks.length;
  if (!hasAnything) return <ForumOfficialLinks body={body} />;

  function saveBlock(language: (typeof blocks)[number]["language"], code: string, label: string) {
    appendToCodeBoard({
      language,
      title: `Forum ${label} snippet`,
      code,
      comment: "Saved from Forum",
    });
    setSaved(`${label} saved`);
    window.setTimeout(() => setSaved(""), 2500);
  }

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {blocks.map((block, index) => (
          <div key={`${block.language}-${index}`} className="flex flex-wrap gap-1.5">
            <button
              type="button"
              className="rounded-md border border-emerald-300 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-900 hover:bg-emerald-100"
              onClick={() => {
                const href = preloadPlaygroundDraft(block.language, block.code);
                if (href) router.push(href);
              }}
            >
              Run {block.label} in editor
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => saveBlock(block.language, block.code, block.label)}
            >
              Save to code board
            </button>
          </div>
        ))}
        {blocks.length > 1 ? (
          <button
            type="button"
            className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            onClick={() => {
              blocks.forEach((block, index) => {
                appendToCodeBoard({
                  language: block.language,
                  title: `Forum ${block.label} snippet ${index + 1}`,
                  code: block.code,
                  comment: "Saved from Forum (all)",
                });
              });
              setSaved(`${blocks.length} snippets saved`);
              window.setTimeout(() => setSaved(""), 2500);
            }}
          >
            Save all to board
          </button>
        ) : null}
        {jsonBlocks.map((payload, index) => (
          <button
            key={`json-${index}`}
            type="button"
            className="rounded-md border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-950 hover:bg-amber-100"
            onClick={() => {
              preloadJsonFormatter(payload);
              router.push(codeEditorDeskHref("json"));
            }}
          >
            Format JSON {jsonBlocks.length > 1 ? index + 1 : ""} on editor
          </button>
        ))}
        {b64Blocks.map((payload, index) => (
          <button
            key={`b64-${index}`}
            type="button"
            className="rounded-md border border-sky-300 bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-950 hover:bg-sky-100"
            onClick={() => {
              preloadEncodeDecode(payload, "base64-decode");
              router.push(codeEditorDeskHref("encode"));
            }}
          >
            Decode Base64 {b64Blocks.length > 1 ? index + 1 : ""} on editor
          </button>
        ))}
      </div>
      {saved ? (
        <p className="text-xs text-emerald-700">
          {saved}.{" "}
          <Link href={codeEditorDeskHref("board")} className="font-medium underline">
            Open code board on editor →
          </Link>
        </p>
      ) : null}
      <ForumOfficialLinks body={body} />
    </div>
  );
}
