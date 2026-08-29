"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const UnifiedMediaFrame = dynamic(() => import("@/components/UnifiedMediaFrame"), {
  ssr: false,
  loading: () => (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-6 text-sm text-slate-500">
      Loading shared files…
    </div>
  ),
});

export default function LazyToolsSharedFiles() {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <section className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
        <div>
          <p className="font-semibold text-slate-900">Shared files</p>
          <p className="mt-1 text-sm text-slate-600">
            Kept out of the initial page load for speed. Load this area only when you actually need files or folders.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="mt-3 inline-flex min-h-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 sm:mt-0"
        >
          Load shared files
        </button>
      </section>
    );
  }

  return (
    <UnifiedMediaFrame
      title="Tools & Code · pictures, documents, files & folders"
      folderArea="tools"
      spaceKey="_root"
      alsoShow={["document", "folder"]}
      collapsedByDefault={false}
    />
  );
}
