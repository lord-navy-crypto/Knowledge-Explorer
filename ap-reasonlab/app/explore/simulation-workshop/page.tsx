import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LORD_NAVY_GITHUB, reposForLane } from "@/data/lord-navy-github";

const REPOS = reposForLane("simulation");

export default function SimulationWorkshopPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Simulation & Download", href: "/explore/workshops" },
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
          Research and simulation labs from{" "}
          <a
            href={LORD_NAVY_GITHUB}
            className="font-medium text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lord-navy-crypto
          </a>
          . Each card opens the GitHub repository — run them locally from the repo README.
        </p>
        <p className="text-xs text-slate-500">{REPOS.length} repositories · GitHub links only</p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {REPOS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            {item.badge ? (
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                {item.badge}
              </p>
            ) : null}
            <h2 className="mt-1 font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
              {item.title}
            </h2>
            <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            <p className="mt-3 text-sm font-medium text-brand-700">Open on GitHub →</p>
          </a>
        ))}
      </section>

      <p className="text-sm text-slate-500">
        Need macOS builders / installers? See{" "}
        <Link href="/explore/download" className="font-medium text-brand-700 hover:underline">
          Download
        </Link>
        .
      </p>
    </div>
  );
}
