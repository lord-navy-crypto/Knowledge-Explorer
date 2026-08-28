import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { EXPLORE_EXTRA_GATEWAYS, HOME_GATEWAYS } from "@/data/home-gateways";

export default function ExploreIndexPage() {
  const workshops = EXPLORE_EXTRA_GATEWAYS.find((g) => g.id === "workshops");

  return (
    <div className="space-y-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Explore" }]} />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Knowledge Explorer
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Explore
        </h1>
        <p className="max-w-2xl text-slate-600">
          Open a gateway box — Forum, AP &amp; English, tools &amp; code, and Sentinel Mac downloads.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {HOME_GATEWAYS.map((gateway) => (
          <Link
            key={gateway.id}
            href={gateway.href}
            className={`group rounded-2xl border px-5 py-6 shadow-sm transition hover:shadow-md ${
              gateway.accent === "sentinel"
                ? "border-slate-700 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 text-white hover:border-sky-500/50"
                : "border-slate-200 bg-white hover:border-brand-300"
            }`}
          >
            <h2
              className={`font-display text-xl font-semibold ${
                gateway.accent === "sentinel"
                  ? "text-white group-hover:text-sky-100"
                  : "text-slate-900 group-hover:text-brand-800"
              }`}
            >
              {gateway.title}
            </h2>
            <p
              className={`mt-2 text-sm leading-6 ${
                gateway.accent === "sentinel" ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {gateway.description}
            </p>
            <p
              className={`mt-4 text-sm font-medium ${
                gateway.accent === "sentinel" ? "text-sky-300" : "text-brand-700"
              }`}
            >
              Open hub →
            </p>
          </Link>
        ))}
      </section>

      {workshops ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-5 py-5">
          <h2 className="font-display text-lg font-semibold text-slate-900">{workshops.title}</h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-600">{workshops.description}</p>
          <Link
            href={workshops.href}
            className="mt-3 inline-flex text-sm font-semibold text-brand-700 hover:underline"
          >
            Open Simulation &amp; Download →
          </Link>
        </section>
      ) : null}
    </div>
  );
}
