import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { HOME_GATEWAYS } from "@/data/home-gateways";

export default function ExploreIndexPage() {
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
          Open a gateway box — AP &amp; English, tools &amp; code, simulation labs, downloads, and
          more.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {HOME_GATEWAYS.map((gateway) => (
          <Link
            key={gateway.id}
            href={gateway.href}
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <h2 className="font-display text-xl font-semibold text-slate-900 group-hover:text-brand-800">
              {gateway.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">{gateway.description}</p>
            <p className="mt-4 text-sm font-medium text-brand-700">Open hub →</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
