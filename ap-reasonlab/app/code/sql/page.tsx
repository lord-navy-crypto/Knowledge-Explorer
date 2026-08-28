"use client";

import Link from "next/link";
import OfficialResourceLinks from "@/components/OfficialResourceLinks";
import TrackToolboxVisit from "@/components/TrackToolboxVisit";
import { getCodeLangOfficial } from "@/data/official-resources";
import SqlPlayground from "@/components/SqlPlayground";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { sqlExamples } from "@/data/easy-code-langs";

export default function CodeSqlPage() {
  const official = getCodeLangOfficial("sql");
  return (
    <div className="space-y-6">
      <TrackToolboxVisit href="/code/sql" title="SQL" />
      <Link href="/code" className="text-sm text-brand-600 hover:underline">
        ← Back to Code Resource
      </Link>
      <div>
        <h1 className="text-3xl font-bold">SQL</h1>
        <p className="mt-2 text-slate-600">
          In-browser SQLite (sql.js). Each run uses a fresh memory database. Keep query templates in
          the{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          .
        </p>
      </div>

      {official ? <OfficialResourceLinks block={official} tone="slate" /> : null}

      <SqlPlayground examples={sqlExamples} />

      <UnifiedMediaFrame
        alsoShow={["document", "folder"]}
        folderArea="code-sql"
        spaceKey="_root"
        spaceBasePath="/code/sql"
        title="SQL · pictures, documents & files"
      />
    </div>
  );
}
