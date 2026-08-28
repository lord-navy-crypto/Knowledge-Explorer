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
  /** Short bullet highlights for card UI */
  highlights?: string[];
  /** Card accent token — maps to gradient in GithubRepoCard */
  accent?: "violet" | "sky" | "emerald" | "amber" | "rose" | "indigo" | "slate";
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
    accent: "violet",
    highlights: ["2D/3D random walks", "Monte Carlo integration", "Uncertainty bands"],
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
    accent: "sky",
    highlights: ["Round-off error demos", "Cancellation pitfalls", "Stopping-rule checks"],
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
    accent: "indigo",
    highlights: ["SHM & damping", "Driver forcing", "Integrator comparison"],
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
    accent: "rose",
    highlights: ["Double pendulum chaos", "Lyapunov estimates", "Kapitza stabilization"],
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
    accent: "amber",
    highlights: ["Metropolis sampling", "Finite-size scaling", "1D vs 2D lattices"],
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
    accent: "emerald",
    highlights: ["Insertion-device presets", "Field maps", "Sensitivity sweeps"],
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
    accent: "sky",
    highlights: ["Magnet → trajectory pipeline", "Radiation scans", "Streamlit UI"],
  },
  {
    id: "radiation-study",
    name: "radiaition-study",
    href: "https://github.com/lord-navy-crypto/radiaition-study",
    title: "Radiation study",
    detail: "Related radiation / RADIA study repository.",
    lane: "simulation",
    badge: "Python",
    accent: "slate",
    highlights: ["RADIA companion repo", "Radiation workflow notes"],
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
    accent: "emerald",
    highlights: ["Universal2 fat binary", "Double-click .command launcher", "Project Chrono Modal"],
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
    accent: "indigo",
    highlights: ["Official RADIA Python ext", "Safe installer script", "arm64 + x86_64"],
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
    accent: "violet",
    highlights: ["Native arm64 build", "VAMPIRE atomistic sim", "START.command entry"],
  },
];

export function reposForLane(lane: "simulation" | "download"): NavyGithubRepo[] {
  return LORD_NAVY_REPOS.filter((r) => r.lane === lane);
}
