import Breadcrumbs from "@/components/Breadcrumbs";
import LazyToolsSharedFiles from "@/components/LazyToolsSharedFiles";
import ToolsCatalog from "@/components/ToolsCatalog";

export const metadata = {
  title: "Convenient Tools & Code — Knowledge Explorer",
  description:
    "Unified workbenches for math, code, writing, files, study, English, classroom utilities and AI, with external connections kept separate.",
};

export default function ExploreToolsCodePage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Convenient Tools & Code" },
        ]}
      />

      <section className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Workbench-first</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools & Code
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          Open only the workbench you need. Heavy editors, AI panels, external pages, and shared-file controls are no longer prefetched or loaded in the background.
        </p>
      </section>

      <section id="convenient-tools" className="scroll-mt-28">
        <ToolsCatalog />
      </section>

      <LazyToolsSharedFiles />
    </div>
  );
}
