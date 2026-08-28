import Link from "next/link";
import { Suspense } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LocalAiRecommendation from "@/components/LocalAiRecommendation";
import RecommendedStudyTools from "@/components/RecommendedStudyTools";
import ToolClusters from "@/components/ToolClusters";
import ToolsCatalog from "@/components/ToolsCatalog";
import ToolsSpotlightCards from "@/components/ToolsSpotlightCards";
import UnifiedMediaFrame from "@/components/UnifiedMediaFrame";
import { TOOL_SECURITY_LABELS, listedStudyTools, type ToolSecurity } from "@/data/study-tools";

export const metadata = {
  title: "Convenient Tools — Knowledge Explorer",
  description:
    "Convenient tools: Study desk, English helpers, STEM pads, File lab, classroom light tools, external connections, and AI — mostly local in your browser.",
};

export default function ToolsPage() {
  const tools = listedStudyTools();

  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Tools & Code", href: "/explore/tools-code" },
          { label: "Convenient Tools" },
        ]}
      />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-sky-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Convenient tools
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          {tools.length} browser utilities — search below, or jump to{" "}
          <Link href="/tools/write-convert" className="font-medium text-brand-700 underline">
            Write & convert wizard
          </Link>
          ,{" "}
          <Link href="/code" className="font-medium text-brand-700 underline">
            Code playgrounds
          </Link>{" "}
          and{" "}
          <Link href="/tools/code-board" className="font-medium text-brand-700 underline">
            code block adder
          </Link>
          . AI lives in{" "}
          <Link href="/hints" className="font-medium text-brand-700 underline">
            AI Toolbox
          </Link>
          .
        </p>
        <LocalAiRecommendation className="relative mt-4 max-w-2xl" />
        <div className="relative mt-4 flex flex-wrap gap-2 text-[11px] text-slate-600">
          {(Object.keys(TOOL_SECURITY_LABELS) as ToolSecurity[]).map((key) => {
            const meta = TOOL_SECURITY_LABELS[key];
            return (
              <span
                key={key}
                className={`rounded-md px-2 py-1 font-semibold ${meta.className}`}
                title={meta.detail}
              >
                {meta.label}
              </span>
            );
          })}
        </div>
      </section>

      <ToolsSpotlightCards />

      <Suspense fallback={<div className="card text-sm text-slate-500">Loading catalog…</div>}>
        <ToolsCatalog tools={tools} />
      </Suspense>

      <ToolClusters />

      <RecommendedStudyTools context="tools" />

      <section className="rounded-xl border border-violet-200 bg-violet-50/60 px-4 py-3 text-sm text-violet-950">
        <p className="font-semibold">Shared uploads on this page</p>
        <p className="mt-1 text-violet-900/85">
          The media panel below can store files with a <strong>change code</strong>. Treat that like
          an edit password — do not paste API keys into change-code fields.
        </p>
      </section>

      <UnifiedMediaFrame
        title="Tools · pictures, documents, files & folders"
        folderArea="tools"
        spaceKey="_root"
        alsoShow={["document", "folder"]}
        collapsedByDefault
      />
    </div>
  );
}
