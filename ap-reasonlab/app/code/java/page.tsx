"use client";

import Link from "next/link";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import { getCodeLangOfficial } from "@/data/official-resources";
import JavaPlayground from "@/components/JavaPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { javaExamples } from "@/data/java-examples";

export default function CodeJavaPage() {
  const official = getCodeLangOfficial("java");
  return (
    <div className="space-y-6">
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">Java</h1>
        <p className="mt-2 text-slate-600">
          Java training without a real JVM: write Java, then{" "}
          <strong>Practice Run</strong> maps a CSA-style subset to JavaScript in the browser. Copy
          or download <code className="rounded bg-slate-100 px-1">.java</code> for IntelliJ / JDK.
          Keep templates in the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
      </div>

      {official ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      <JavaPlayground examples={javaExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-java"
        spaceKey="_root"
        spaceBasePath="/code/java"
        title="Java · pictures, documents & files"
      />
    </div>
  );
}
