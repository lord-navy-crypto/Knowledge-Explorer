import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

const RELATED = [
  { href: "/forum", title: "Forum & shared materials", detail: "Discuss sources and keep a private My box." },
  { href: "/ap", title: "AP subject library", detail: "Background concepts for your research question." },
  { href: "/english", title: "English skills", detail: "Reading, vocab, and writing support for papers." },
  { href: "/hints", title: "AI Toolbox", detail: "Outline research questions and critique drafts — you stay the author." },
  { href: "/tools", title: "Convenient Tools", detail: "Notes, timers, PDF helpers, and writing utilities." },
];

export default function ResearchWorkshopPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Simulation & Research", href: "/explore/workshops" },
          { label: "Research Workshop" },
        ]}
      />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Research Workshop
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Research Workshop
        </h1>
        <p className="max-w-2xl text-slate-600">
          Plan inquiry, gather sources, and organize notes for projects and lab-style write-ups.
          Treat AI and tools as coaches — cite real sources and keep your own reasoning in the draft.
        </p>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 px-5 py-6">
        <h2 className="font-display text-lg font-semibold text-slate-900">Research loop</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Write a clear question and what “done” looks like.</li>
          <li>Collect sources / data; record where each fact came from.</li>
          <li>Draft findings in your words; use AI Toolbox only for structure or clarity checks.</li>
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
        <Link href="/explore/simulation-workshop" className="font-medium text-brand-700 hover:underline">
          Simulation Workshop
        </Link>
        .
      </p>
    </div>
  );
}
