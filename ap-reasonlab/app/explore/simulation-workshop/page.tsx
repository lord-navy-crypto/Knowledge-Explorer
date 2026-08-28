import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import GithubRepoCard from "@/components/GithubRepoCard";
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

      <section className="space-y-3 rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50/80 via-white to-slate-50 px-5 py-6 sm:px-7">
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
          . Each card opens the GitHub repository — clone or download ZIP, then follow the README to
          run locally (Python / Streamlit).
        </p>
        <div className="flex flex-wrap gap-2 text-xs text-slate-600">
          <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
            {REPOS.length} repositories
          </span>
          <span className="rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
            Monte Carlo · oscillators · chaos · Ising · RADIA
          </span>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {REPOS.map((item) => (
          <GithubRepoCard key={item.id} repo={item} />
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
