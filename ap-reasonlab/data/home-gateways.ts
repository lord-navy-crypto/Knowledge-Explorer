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
      "First plate of this personal site: AP subjects and English exams / skills — now with their own contextual AI assistants.",
    href: "/explore/ap-english",
    links: [
      {
        href: "/ap",
        title: "AP",
        description: "Subject library — concepts, formulas, practice, uploads, and AI for AP.",
      },
      {
        href: "/ai-for-ap",
        title: "AI for AP",
        description: "AP-focused hints, concepts, formulas, derivations, and practice generation.",
      },
      {
        href: "/english",
        title: "English",
        description: "TOEFL iBT and Digital SAT in official task formats, plus vocabulary and grammar.",
      },
      {
        href: "/english/ai",
        title: "AI for English",
        description: "Writing feedback, grammar, translation, vocabulary help, and exam strategy.",
      },
    ],
  },
  {
    id: "tools-code",
    title: "Convenient Tools & Code",
    description:
      "Workbench-only tool area: math, code, files, study and classroom utilities, with coding AI kept beside the code workflow.",
    href: "/explore/tools-code",
    links: [
      {
        href: "/hints?tool=calculator",
        title: "Math Workbench · Calc + Graph",
        description: "Calculator, grapher, calculus lab, units, vectors, LaTeX, and formulas in one workbench.",
      },
      {
        href: "/code/editor?lang=python",
        title: "Code Workbench",
        description: "Editor plus code board, JSON, Base64/URL, compare, and presets under one workbench.",
      },
      {
        href: "/code/ai",
        title: "AI for Code",
        description: "Debug, write, explain, and reason about code in a dedicated coding assistant.",
      },
      {
        href: "/tools/workbench/files",
        title: "File Workbench",
        description: "PDF, images, CSV/Markdown, and batch rename collected into one workbench.",
      },
      {
        href: "/explore/tools-code#external-tools",
        title: "External Connections & Tools",
        description: "Off-site resources kept separate because they cannot be absorbed into local workbenches.",
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
    title: "Sentinel Map and Easy Local AI",
    description:
      "Two local-first paths: Sentinel Map for system intelligence and Easy Local AI for browser-local model testing and free chat without Ollama.",
    href: "/easy-local-ai",
    accent: "sentinel",
    links: [
      {
        href: "/explore/sentinel",
        title: "Sentinel Map",
        description: "Open the existing Sentinel system intelligence, download, overview, and releases.",
      },
      {
        href: "/easy-local-ai",
        title: "Easy Local AI",
        description: "Run WebLLM models directly in a compatible browser with WebGPU — no Ollama or local server setup.",
      },
      {
        href: "https://github.com/lord-navy-crypto/sentinel-macos/releases",
        title: "Sentinel GitHub Releases",
        description: "Latest DMG, checksums, and full release documentation.",
      },
    ],
  },
];

export function getGatewayById(id: string): HomeGateway | undefined {
  return HOME_GATEWAYS.find((g) => g.id === id);
}
