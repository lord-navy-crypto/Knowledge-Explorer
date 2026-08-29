"use client";

import { Suspense } from "react";
import CodeLanguageStudio from "@/components/CodeLanguageStudio";

export default function CodeEditorPage() {
  return (
    <Suspense fallback={<div className="card text-sm text-slate-500">Loading editor…</div>}>
      <CodeLanguageStudio />
    </Suspense>
  );
}
