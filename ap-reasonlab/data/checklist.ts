import { ChecklistItem } from "@/lib/types";

/** Live project checklist — shown on /checklist */
export const checklistItems: ChecklistItem[] = [
  {
    id: "deploy",
    status: "done",
    title: "Deploy live website",
    description: "Site online on Vercel with Knowledge Explorer branding.",
    link: "https://ap-webside.vercel.app",
  },
  {
    id: "github",
    status: "done",
    title: "Upload code to GitHub",
    description: "Repository lord-navy-crypto/Knowledge-Explorer connected to Vercel.",
    link: "https://github.com/lord-navy-crypto/Knowledge-Explorer",
  },
  {
    id: "root-dir",
    status: "done",
    title: "Vercel Root Directory = ap-reasonlab",
    description: "Git push auto-deploys the correct Next.js folder.",
  },
  {
    id: "user-guide",
    status: "done",
    title: "User Guide & Manage Guide",
    description: "Public /user-guide tour and locked /manage-guide for editors.",
    link: "/user-guide",
  },
  {
    id: "search-upgrade",
    status: "done",
    title: "Site search engine + sitemap",
    description: "Cached corpus indexes tools, guides, and AP content; /sitemap.xml for crawlers.",
    link: "/search",
  },
  {
    id: "content-v1",
    status: "in_progress",
    title: "Fill AP concepts, formulas, generated questions",
    description: "Core STEM units live; humanities formula sheets expanding.",
    link: "/concepts",
  },
  {
    id: "english-lanes",
    status: "in_progress",
    title: "Expand English TOEFL/SAT practice banks",
    description: "Lanes live; more in-site items and uploads welcome via Forum.",
    link: "/english",
  },
  {
    id: "gemini",
    status: "todo",
    title: "Production AI keys on Vercel",
    description: "Enable Website API / cloud backup models in production.",
    link: "/guide",
  },
  {
    id: "more-phys",
    status: "todo",
    title: "Expand Physics 1 (energy, momentum, rotation, SHM)",
    description: "Add concepts, formulas, and generated sets for Units 4–7.",
    link: "/formulas?subject=AP%20Physics%201",
  },
  {
    id: "more-calc",
    status: "todo",
    title: "Expand Calculus AB/BC (integrals, FTC, applications)",
    description: "Units 6–8 concepts + integral practice sets.",
    link: "/formulas?subject=AP%20Calculus%20AB%2FBC",
  },
  {
    id: "tier-ui",
    status: "todo",
    title: "Three difficulty tiers (UI)",
    description: "Filter generated sets by intro / standard / challenge.",
    link: "/questionnaires",
  },
  {
    id: "chem-bio",
    status: "in_progress",
    title: "AP Chemistry & AP Biology depth",
    description: "Starter formulas and concepts live; more units in progress.",
    link: "/ap",
  },
  {
    id: "users",
    status: "todo",
    title: "Get 10–20 student testers",
    description: "Share link, collect feedback, improve hints UX.",
  },
  {
    id: "collab",
    status: "todo",
    title: "Invite collaborators on GitHub (optional)",
    description: "Partners with write access can push via pull requests.",
    link: "/partners",
  },
];

export function getChecklistStats() {
  const done = checklistItems.filter((i) => i.status === "done").length;
  const inProgress = checklistItems.filter((i) => i.status === "in_progress").length;
  const todo = checklistItems.filter((i) => i.status === "todo").length;
  return { done, inProgress, todo, total: checklistItems.length };
}