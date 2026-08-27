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
  /** Shown inside the gateway hub after click. */
  links?: GatewayLink[];
};

export const HOME_GATEWAYS: HomeGateway[] = [
  {
    id: "ap-english",
    title: "AP & English",
    description: "AP subjects and English exams / skills — open folders, practice, and study materials.",
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
        description: "TOEFL, SAT, vocabulary, grammar, and English AI.",
      },
    ],
  },
  {
    id: "tools-code",
    title: "Convenient Tools & Code",
    description: "Everyday study utilities plus browser coding playgrounds.",
    href: "/explore/tools-code",
    links: [
      {
        href: "/tools",
        title: "Convenient Tools",
        description: "Timers, converters, editors, file helpers, and more.",
      },
      {
        href: "/code",
        title: "Code",
        description: "Python, JavaScript, TypeScript, Web, SQL, Java, C#, and more.",
      },
    ],
  },
  {
    id: "workshops",
    title: "Simulation & Download",
    description:
      "Simulation Workshop (research labs on GitHub) and Download (macOS Shell builders / installers).",
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
        description: "Chrono Modal builder and RADIA Universal2 installer — GitHub download links.",
      },
    ],
  },
  {
    id: "forum",
    title: "Forum",
    description: "Discussions, shared materials, and your private My box.",
    href: "/forum",
  },
];

export function getGatewayById(id: string): HomeGateway | undefined {
  return HOME_GATEWAYS.find((g) => g.id === id);
}
