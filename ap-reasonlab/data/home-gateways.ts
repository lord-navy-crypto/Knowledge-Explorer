/** Home gateway boxes — Knowledge Explorer portal lanes. */

export type GatewayLink = {
  href: string;
  title: string;
  description: string;
};

export type HomeGateway = {
  id: string;
  title: string;
  description: string;
  href: string;
  /** When true, the card is a placeholder (no deep links yet). */
  comingSoon?: boolean;
  /** Optional homepage card accent (tailwind token). */
  accent?: "brand" | "sentinel";
  /** Shown inside the gateway hub after click. */
  links?: GatewayLink[];
};

export const HOME_GATEWAYS: HomeGateway[] = [
  {
    id: "ap-english",
    title: "AP & English",
    description:
      "First plate of this personal site: AP subjects and English exams / skills — folders, practice, and study materials.",
    href: "/explore/ap-english",
    links: [
      {
        href: "/ap",
        title: "AP",
        description: "Subject library — concepts, formulas, practice, and uploads.",
      },
      {
        href: "/english",
        title: "English",
        description: "TOEFL iBT and Digital SAT in official task formats, plus vocabulary and grammar.",
      },
    ],
  },
  {
    id: "tools-code",
    title: "Convenient Tools & Code",
    description:
      "Combined workbenches first, then individual utilities: Calc + Graph, Code, AI, writing/file desks, and single-purpose tools.",
    href: "/explore/tools-code",
    links: [
      {
        href: "/hints?tool=calculator",
        title: "Math Workbench · Calc + Graph",
        description: "Combined calculator, grapher, calculus lab, units, vectors, LaTeX, and formulas.",
      },
      {
        href: "/code/editor?lang=python",
        title: "Code Workbench",
        description: "Combined editor with language picker plus JSON, Base64/URL, and Code board tabs.",
      },
      {
        href: "/hints",
        title: "AI Workbench",
        description: "Unified AI — Local / Website API / Your own API, with AP, English, Coding, and Math tools.",
      },
      {
        href: "/tools",
        title: "Convenient Tools",
        description: "Browse all combined workbenches first, then the individual tools underneath.",
      },
      {
        href: "/forum",
        title: "Forum",
        description: "Discussions, Shared library, and My box — run fenced code in the editor.",
      },
    ],
  },
  {
    id: "workshops",
    title: "Simulation & Download",
    description:
      "Simulation Workshop (research labs on GitHub) and Download (macOS Shell builders / installers, including VAMPIRE).",
    href: "/explore/workshops",
    links: [
      {
        href: "/explore/simulation-workshop",
        title: "Simulation Workshop",
        description: "Monte Carlo, oscillators, chaos, Ising, RADIA labs — open on GitHub.",
      },
      {
        href: "/explore/download",
        title: "Download",
        description: "Chrono Modal, RADIA Universal2, and VAMPIRE Apple Silicon builders.",
      },
    ],
  },
  {
    id: "sentinel",
    title: "Sentinel Mac",
    description:
      "Local-first macOS system intelligence — download v2.2.0-beta (DMG) or open releases on GitHub.",
    href: "/explore/sentinel",
    accent: "sentinel",
    links: [
      {
        href: "/explore/sentinel",
        title: "Download & overview",
        description: "Install Sentinel.app, feature tour, and release notes on this site.",
      },
      {
        href: "https://github.com/lord-navy-crypto/sentinel-macos/releases",
        title: "GitHub Releases",
        description: "Latest DMG, checksums, and full release documentation.",
      },
    ],
  },
];

export function getGatewayById(id: string): HomeGateway | undefined {
  return HOME_GATEWAYS.find((g) => g.id === id);
}
