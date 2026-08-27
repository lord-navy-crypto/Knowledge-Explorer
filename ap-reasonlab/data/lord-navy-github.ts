/**
 * Public lord-navy-crypto GitHub catalog for Simulation Workshop & Download.
 * Knowledge-Explorer (this site) is excluded. Links open on GitHub only.
 */

export type NavyGithubRepo = {
  id: string;
  name: string;
  href: string;
  title: string;
  detail: string;
  /** simulation = research/lab platforms; download = Shell builders/installers */
  lane: "simulation" | "download";
  badge?: string;
};

export const LORD_NAVY_GITHUB = "https://github.com/lord-navy-crypto";

export const LORD_NAVY_REPOS: NavyGithubRepo[] = [
  // —— Simulation Workshop ——
  {
    id: "random-walk",
    name: "Random_Walk_Monte_Carlo_Studio",
    href: "https://github.com/lord-navy-crypto/Random_Walk_Monte_Carlo_Studio",
    title: "Random Walk & Monte Carlo Studio",
    detail:
      "Random walks, Monte Carlo integration, uncertainty analysis, and reproducible numerical experiments.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "numerical-methods",
    name: "numerical-methods",
    href: "https://github.com/lord-navy-crypto/numerical-methods",
    title: "Numerical Error Analysis Studio",
    detail:
      "Taylor evaluation, floating-point error, cancellation, stopping rules, and false-convergence diagnostics.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "oscillation",
    name: "OSCILLATION_NUMERICAL_INTEGRATION_LAB",
    href: "https://github.com/lord-navy-crypto/OSCILLATION_NUMERICAL_INTEGRATION_LAB",
    title: "Oscillation & Numerical Integration Lab",
    detail:
      "Linear / damped / driven / nonlinear oscillators and the numerical integrators behind them.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "chaos",
    name: "NONLINEAR_DYNAMICS_CHAOS_LAB_",
    href: "https://github.com/lord-navy-crypto/NONLINEAR_DYNAMICS_CHAOS_LAB_",
    title: "Nonlinear Dynamics & Chaos Lab",
    detail:
      "Driven pendula, Kapitza stabilization, double pendulum, Lyapunov estimates, and reliability checks.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "ising",
    name: "Ising-Monte-Carlo-Lab",
    href: "https://github.com/lord-navy-crypto/Ising-Monte-Carlo-Lab",
    title: "Ising Monte Carlo Lab",
    detail:
      "1D/2D Ising models, Monte Carlo sampling, finite-size effects, and analytic references.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "radia-magnet",
    name: "radia-magnet-studio",
    href: "https://github.com/lord-navy-crypto/radia-magnet-studio",
    title: "RADIA Magnet Studio",
    detail:
      "RADIA-based insertion-device modelling, presets, and sensitivity / Monte Carlo analysis.",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "radia-radiation",
    name: "simulator-radiation-planfotm",
    href: "https://github.com/lord-navy-crypto/simulator-radiation-planfotm",
    title: "RADIA Radiation Studio",
    detail:
      "Unified magnet → trajectory → radiation scan workflow (Streamlit research platform).",
    lane: "simulation",
    badge: "Python",
  },
  {
    id: "radiation-study",
    name: "radiaition-study",
    href: "https://github.com/lord-navy-crypto/radiaition-study",
    title: "Radiation study",
    detail: "Related radiation / RADIA study repository.",
    lane: "simulation",
    badge: "Python",
  },

  // —— Download (Shell builders / installers) ——
  {
    id: "chrono-modal",
    name: "chrono-modal-macos-universal2-builder",
    href: "https://github.com/lord-navy-crypto/chrono-modal-macos-universal2-builder",
    title: "Chrono::Modal macOS Universal2 Builder",
    detail:
      "Shell builder: Project Chrono Modal as Universal2 (arm64 + x86_64). Run START_CHRONO_MODAL_BUILDER.command.",
    lane: "download",
    badge: "Shell",
  },
  {
    id: "radia-installer",
    name: "lord-navy-crypto-radia-universal2-macos-installer",
    href: "https://github.com/lord-navy-crypto/lord-navy-crypto-radia-universal2-macos-installer",
    title: "RADIA macOS Universal2 Installer",
    detail:
      "Shell installer for the official RADIA Python extension as Universal2. Run RUN_RADIA_UNIVERSAL2_SAFE.command.",
    lane: "download",
    badge: "Shell",
  },
  {
    id: "vampire-builder",
    name: "VAMPIRE-Apple-Silicon-Builder",
    href: "https://github.com/lord-navy-crypto/VAMPIRE-Apple-Silicon-Builder",
    title: "VAMPIRE Apple Silicon Builder",
    detail:
      "Native Apple Silicon (arm64) source builder for the VAMPIRE atomistic magnetic simulator. Double-click START.command.",
    lane: "download",
    badge: "Shell",
  },
];

export function reposForLane(lane: "simulation" | "download"): NavyGithubRepo[] {
  return LORD_NAVY_REPOS.filter((r) => r.lane === lane);
}
