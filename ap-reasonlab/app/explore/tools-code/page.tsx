import Link from "next/link";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import ToolClusters from "@/components/ToolClusters";
import ToolsCatalog from "@/components/ToolsCatalog";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { listedStudyTools } from "@/data/study-tools";

export const metadata = {
  title: "Convenient Tools & Code — Knowledge Explorer",
  description:
    "Math, code, writing, files, AI, study utilities, and single-purpose tools in one Tools & Code area.",
};

export default function ExploreToolsCodePage() {
  const tools = listedStudyTools();

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
          One area, no extra directory layer
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools & Code
        </h1>
        <p className="relative mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          The old Convenient Tools page has been split into this area. Combined workbenches come first,
          then the smaller single-purpose tools, recommendations, clusters, and shared file area directly
          below. You no longer need to open a separate tools directory first.
        </p>
        <LocalAiRecommendation className="relative mt-4 max-w-2xl" />
        <div className="relative mt-5 flex flex-wrap gap-2">
          <Link
            href="/code/editor?lang=python"
            className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Open Code Workbench →
          </Link>
          <Link
            href="/hints?tool=calculator"
            className="rounded-lg border border-brand-200 bg-brand-50 px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-100"
          >
            Open Calc + Graph →
          </Link>
          <Link
            href="/hints"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-brand-300"
          >
            Open AI Workbench →
          </Link>
          <Link
            href="/forum"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-brand-300"
          >
            Open Forum →
          </Link>
        </div>
      </section>

      <section id="convenient-tools" className="scroll-mt-28 space-y-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-600">Convenient tools</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Workbenches and individual tools</h2>
          <p className="mt-1 max-w-3xl text-sm text-slate-600">
            Search and filter here without leaving Tools & Code. Combined desks stay first; single tools are grouped below them.
          </p>
        </div>
        <Suspense fallback={<div className="card text-sm text-slate-500">Loading tools…</div>}>
          <ToolsCatalog tools={tools} basePath="/explore/tools-code" />
        </Suspense>
      </section>

      <section className="space-y-4 border-t border-slate-200 pt-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Related groups</p>
          <h2 className="mt-1 font-display text-2xl font-bold text-slate-900">Tool clusters</h2>
        </div>
        <ToolClusters />
      </section>

      <RecommendedStudyTools context="tools" />

      <section className="rounded-xl border border-violet-200 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
        <p className="font-semibold">Shared files for Tools & Code</p>
        <p className="mt-1 text-violet-900/85">
          This is the same shared tool file area that used to live on the separate Convenient Tools page.
          A change code acts like an edit password, so do not place API keys in that field.
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
