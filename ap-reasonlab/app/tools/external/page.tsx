import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  EXTERNAL_TOOL_CATEGORIES,
  EXTERNAL_TOOLS,
  externalToolsByCategory,
} from "@/data/external-tools";

export const metadata = {
  title: "External connections & tools — Liji Explore",
  description:
    "Curated off-site study links: official exams, math calculators, science sims, dictionaries, coding docs, and more.",
};

export default function ExternalToolsPage() {
  return (
    <div className="space-y-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Tools", href: "/tools" },
          { label: "External connections" },
        ]}
      />

      <section className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-indigo-50 px-5 py-7 sm:px-8">
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-indigo-100/60 blur-3xl"
          aria-hidden
        />
        <p className="relative text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Off-site connections
        </p>
        <h1 className="relative mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          External connections &amp; tools
        </h1>
        <p className="relative mt-2 max-w-2xl text-sm text-slate-600 sm:text-base">
          Curated outside links that complement Liji Explore — official exam hubs, graphing
          calculators, science simulations, dictionaries, coding docs, and writing helpers. Links
          open in a new tab. Follow your school’s rules on calculators and AI for graded work.
        </p>
        <div className="relative mt-4 flex flex-wrap gap-2">
          <Link href="/tools" className="btn-secondary text-sm">
            ← Built-in toolbox
          </Link>
          <Link href="/hints" className="btn-ghost text-sm">
            AI Toolbox
          </Link>
          <span className="self-center text-xs tabular-nums text-slate-500">
            {EXTERNAL_TOOLS.length} connections
          </span>
        </div>
      </section>

      <nav className="flex flex-wrap gap-2 rounded-xl border border-slate-200 bg-white p-3">
        {EXTERNAL_TOOL_CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-brand-300 hover:text-brand-700"
          >
            {cat.label}
          </a>
        ))}
      </nav>

      {EXTERNAL_TOOL_CATEGORIES.map((category) => {
        const items = externalToolsByCategory(category.id);
        if (!items.length) return null;
        return (
          <section key={category.id} id={category.id} className="scroll-mt-24 space-y-3">
            <div className="border-b border-slate-200 pb-2">
              <div className="flex items-end justify-between gap-3">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  {category.label}
                </h2>
                <span className="text-[11px] tabular-nums text-slate-400">{items.length}</span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{category.detail}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex min-h-[7.5rem] flex-col"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700">
                      {tool.name}
                    </h3>
                    <span className="shrink-0 rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-600">
                      External
                    </span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{tool.blurb}</p>
                  <p className="mt-2 text-[11px] text-slate-400">{tool.tags.join(" · ")}</p>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <p className="rounded-xl border border-amber-200 bg-amber-50/70 px-4 py-3 text-sm text-amber-950">
        Liji Explore is not affiliated with these sites. Prefer built-in tools when they
        cover your need; use external links as optional complements.
      </p>
    </div>
  );
}
