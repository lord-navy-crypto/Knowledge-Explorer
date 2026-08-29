import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import ToolsCatalog from "@/components/ToolsCatalog";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";

export const metadata = {
  title: "Convenient Tools & Code — Knowledge Explorer",
  description:
    "Unified workbenches for math, code, writing, files, study, English, classroom utilities and AI, with external connections kept separate.",
};

export default function ExploreToolsCodePage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Convenient Tools & Code" },
        ]}
      />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Workbench-first
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools & Code
        </h1>
        <p className="relative mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Clusters and covered single-purpose tools are now one thing: Workbenches. If a larger desk already covers a smaller tool, the smaller tool is no longer shown as a separate product. External connections remain separate at the end.
        </p>
      </section>

      <section id="convenient-tools" className="scroll-mt-28">
        <Suspense fallback={<div className="card text-sm text-slate-500">Loading workbenches…</div>}>
          <ToolsCatalog basePath="/explore/tools-code" />
        </Suspense>
      </section>

      <section className="rounded-xl border border-violet-200 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
        <p className="font-semibold">Shared files for Tools & Code</p>
        <p className="mt-1 text-violet-900/85">
          Shared files stay available below the workbench catalog. A change code acts like an edit password, so do not place API keys in that field.
        </p>
      </section>

      <UnifiedMediaFrame
        title="Tools & Code · pictures, documents, files & folders"
        folderArea="tools"
        spaceKey="_root"
        alsoShow={["document", "folder"]}
        collapsedByDefault
      />
    </div>
  );
}
