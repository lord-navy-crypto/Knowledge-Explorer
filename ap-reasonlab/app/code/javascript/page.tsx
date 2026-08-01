"use client";

import Link from "next/link";
import JsPlayground from "@/components/JsPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { jsExamples } from "@/data/easy-code-langs";

export default function CodeJavaScriptPage() {
  return (
    <div className="space-y-6">
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">JavaScript</h1>
        <p className="mt-2 text-slate-600">
          Browser console playground. Keep reusable blocks in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          , or upload files below.
        </p>
      </div>

      <JsPlayground examples={jsExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-javascript"
        spaceKey="_root"
        spaceBasePath="/code/javascript"
        title="JavaScript · pictures, documents & files"
      />
    </div>
  );
}
