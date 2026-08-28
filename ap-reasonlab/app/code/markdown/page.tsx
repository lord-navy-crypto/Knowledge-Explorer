"use client";

import Link from "next/link";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";
import { getCodeLangOfficial } from "@/data/official-resources";
import MarkdownPlayground from "@/components/MarkdownPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { markdownExamples } from "@/data/easy-code-langs";

export default function CodeMarkdownPage() {
  const official = getCodeLangOfficial("markdown");
  return (
    <div className="space-y-6">
      <TrackToolboxVisit href="/code/markdown" title="Markdown" />
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">Markdown</h1>
        <p className="mt-2 text-slate-600">
          Live Markdown + math preview for notes and lab write-ups. Save reusable notes in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
      </div>

      {official ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      <MarkdownPlayground examples={markdownExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-markdown"
        spaceKey="_root"
        spaceBasePath="/code/markdown"
        title="Markdown · pictures, documents & files"
      />
    </div>
  );
}
