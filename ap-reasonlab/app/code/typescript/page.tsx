"use client";

import Link from "next/link";
import TsPlayground from "@/components/TsPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { tsExamples } from "@/data/easy-code-langs";

export default function CodeTypeScriptPage() {
  return (
    <div className="space-y-6">
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">TypeScript</h1>
        <p className="mt-2 text-slate-600">
          Transpile + run in the browser. Save templates in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
      </div>

      <TsPlayground examples={tsExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-typescript"
        spaceKey="_root"
        spaceBasePath="/code/typescript"
        title="TypeScript · pictures, documents & files"
      />
    </div>
  );
}
