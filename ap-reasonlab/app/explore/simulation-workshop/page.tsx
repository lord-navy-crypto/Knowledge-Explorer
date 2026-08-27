import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

/** Simulation / research labs on github.com/lord-navy-crypto — open on GitHub only. */
const REPOS = [
  {
    href: "https://github.com/lord-navy-crypto/Random_Walk_Monte_Carlo_Studio",
    title: "Random Walk & Monte Carlo Studio",
    detail: "Random walks, Monte Carlo integration, uncertainty, and reproducible numerical experiments.",
  },
  {
    href: "https://github.com/lord-navy-crypto/numerical-methods",
    title: "Numerical Error Analysis Studio",
    detail: "Taylor evaluation, floating-point error, cancellation, and false-convergence diagnostics.",
  },
  {
    href: "https://github.com/lord-navy-crypto/OSCILLATION_NUMERICAL_INTEGRATION_LAB",
    title: "Oscillation & Numerical Integration Lab",
    detail: "Linear / damped / driven / nonlinear oscillators and the integrators behind them.",
  },
  {
    href: "https://github.com/lord-navy-crypto/NONLINEAR_DYNAMICS_CHAOS_LAB_",
    title: "Nonlinear Dynamics & Chaos Lab",
    detail: "Driven pendula, Kapitza, double pendulum, Lyapunov estimates, and reliability checks.",
  },
  {
    href: "https://github.com/lord-navy-crypto/Ising-Monte-Carlo-Lab",
    title: "Ising Monte Carlo Lab",
    detail: "1D/2D Ising models, Monte Carlo sampling, finite-size effects, and analytic references.",
  },
  {
    href: "https://github.com/lord-navy-crypto/radia-magnet-studio",
    title: "RADIA Magnet Studio",
    detail: "RADIA-based insertion-device modelling, presets, and sensitivity / Monte Carlo analysis.",
  },
  {
    href: "https://github.com/lord-navy-crypto/simulator-radiation-planfotm",
    title: "RADIA Radiation Studio",
    detail: "Unified magnet → trajectory → radiation scan workflow (Streamlit research platform).",
  },
  {
    href: "https://github.com/lord-navy-crypto/radiaition-study",
    title: "Radiation study",
    detail: "Related radiation / RADIA study repository.",
  },
];

export default function SimulationWorkshopPage() {
  return (
    <div className="space-y-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
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
            href="https://github.com/lord-navy-crypto"
            className="font-medium text-brand-700 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/lord-navy-crypto
          </a>
          . Each card opens the GitHub repository — run them locally from the repo README.
        </p>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        {REPOS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition hover:border-brand-300 hover:shadow-md"
          >
            <h2 className="font-display text-lg font-semibold text-slate-900 group-hover:text-brand-800">
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
