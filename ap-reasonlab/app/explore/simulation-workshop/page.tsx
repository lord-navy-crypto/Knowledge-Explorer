import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const RELATED = [
  { href: "/tools/external", title: "External science & sim links", detail: "PhET-style and reference links in Convenient Tools." },
  { href: "/ap", title: "AP subject library", detail: "Concepts and formulas that simulations often model." },
  { href: "/hints", title: "AI Toolbox", detail: "Ask for setup checklists — not final graded answers." },
  { href: "/code", title: "Code playground", detail: "Prototype a simple model in Python or JS." },
];

export default function SimulationWorkshopPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Simulation & Research", href: "/explore/workshops" },
          { label: "Simulation Workshop" },
        ]}
      />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Simulation Workshop
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Simulation Workshop
        </h1>
        <p className="max-w-2xl text-slate-600">
          Explore chance processes, physical models, and interactive simulations. Use this room to
          try a model, record what changes, and connect results back to AP / stats ideas — without
          treating a sim as a graded answer key.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50/80 via-white to-slate-50 px-5 py-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">How to use this workshop</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Pick a model or external simulation linked below.</li>
          <li>Change one variable at a time and note what you observe.</li>
          <li>Write a short conclusion in your own words (Forum / notes / AI Toolbox for coaching).</li>
        </ol>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {RELATED.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">Open →</p>
          </Link>
        ))}
      </section>

      <p className="text-sm text-slate-500">
        Also see{" "}
        <Link href="/explore/research-workshop" className="font-medium text-brand-700 hover:underline">
          Research Workshop
        </Link>
        .
      </p>
    </div>
  );
}
