"use client";

import Link from "next/link";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";
import { getCodeLangOfficial } from "@/data/official-resources";
import CsharpPlayground from "@/components/CsharpPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { csharpExamples } from "@/data/csharp-examples";

export default function CodeCsharpPage() {
  const official = getCodeLangOfficial("csharp");
  return (
    <div className="space-y-6">
      <TrackToolboxVisit href="/code/csharp" title="C#" />
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">C#</h1>
        <p className="mt-2 text-slate-600">
          C-series training without real .NET: write C#,{" "}
          <strong>Practice Run</strong> in the browser (same idea as Java). Download{" "}
          <code className="rounded bg-slate-100 px-1">.cs</code> for Visual Studio /{" "}
          <code className="rounded bg-slate-100 px-1">dotnet</code>. Templates also in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
      </div>

      {official ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      <CsharpPlayground examples={csharpExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-csharp"
        spaceKey="_root"
        spaceBasePath="/code/csharp"
        title="C# · pictures, documents & files"
      />
    </div>
  );
}
