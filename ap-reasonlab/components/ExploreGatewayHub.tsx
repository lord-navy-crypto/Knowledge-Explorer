import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import type { HomeGateway } from "@/data/home-gateways";

export default function ExploreGatewayHub({ gateway }: { gateway: HomeGateway }) {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: gateway.title },
        ]}
      />

      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
          Knowledge Explorer
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {gateway.title}
        </h1>
        <p className="max-w-2xl text-slate-600">{gateway.description}</p>
      </section>

      {gateway.comingSoon ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
          <p className="font-display text-xl font-semibold text-slate-800">Coming soon</p>
          <p className="mx-auto mt-2 max-w-md text-sm text-slate-600">
            This box is reserved for future uploads and study areas. Check back later — AI Toolbox
            stays available from the top bar anytime.
          </p>
          <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-brand-700 hover:underline">
            ← Back to Knowledge Explorer home
          </Link>
        </section>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2">
          {(gateway.links || []).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
            >
              <h2 className="font-display text-xl font-semibold text-slate-900 group-hover:text-brand-800">
                {link.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p>
              <p className="mt-4 text-sm font-medium text-brand-700">Open {link.title} →</p>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
