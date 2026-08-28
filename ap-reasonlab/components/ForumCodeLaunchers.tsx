"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { extractForumCodeBlocks } from "@/lib/forum-code-blocks";
import { preloadPlaygroundDraft } from "@/lib/code-draft-bridge";
import { appendToCodeBoard } from "@/lib/code-board-store";
import ForumOfficialLinks from "@/components/ForumOfficialLinks";

export default function ForumCodeLaunchers({ body }: { body: string }) {
  const router = useRouter();
  const blocks = useMemo(() => extractForumCodeBlocks(body), [body]);

  if (!blocks.length) return <ForumOfficialLinks body={body} />;

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
              Run {block.label} in playground
            </button>
            <button
              type="button"
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              onClick={() => {
                appendToCodeBoard({
                  language: block.language,
                  title: `Forum ${block.label} snippet`,
                  code: block.code,
                  comment: "Saved from Forum",
                });
              }}
            >
              Save to code board
            </button>
          </div>
        ))}
      </div>
      <ForumOfficialLinks body={body} />
    </div>
  );
}
