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
    title: "Site search engine + quick search (⌘K)",
    description: "Cached corpus, /search page, header quick search, and /sitemap.xml for crawlers.",
    link: "/search",
  },
  {
    id: "content-v1",
    status: "in_progress",
    title: "Fill AP concepts, formulas, generated questions",
    description: "Core STEM units live; humanities formula sheets and Chem/Bio expansion in progress.",
    link: "/concepts",
  },
  {
    id: "english-lanes",
    status: "done",
    title: "Expand English TOEFL/SAT practice banks (80+ each)",
    description: "Validated MCQ banks with batch3 expansion; lanes and uploads via Forum.",
    link: "/english",
  },
  {
    id: "gemini",
    status: "todo",
    title: "Production AI keys on Vercel",
    description:
      "Set GROQ, GEMINI, OPENROUTER, KIMI, and/or DEEPSEEK in Vercel → Settings → Environment Variables (see .env.example).",
    link: "/guide",
  },
  {
    id: "more-phys",
    status: "in_progress",
    title: "Expand Physics 1 (energy, momentum, rotation, SHM)",
    description: "Built-in concepts for Units 4–7; more generated sets welcome.",
    link: "/formulas?subject=AP%20Physics%201",
  },
  {
    id: "more-calc",
    status: "in_progress",
    title: "Expand Calculus AB/BC (integrals, FTC, applications)",
    description: "Units 6–8 concepts + integral practice sets in built-in library.",
    link: "/formulas?subject=AP%20Calculus%20AB%2FBC",
  },
  {
    id: "tier-ui",
    status: "done",
    title: "Three difficulty tiers (UI)",
    description: "Filter generated sets by intro / standard / challenge on Practice subject pages.",
    link: "/practice",
  },
  {
    id: "chem-bio",
    status: "in_progress",
    title: "AP Chemistry & AP Biology depth",
    description: "Starter concepts and formulas live; more units in progress.",
    link: "/ap",
  },
  {
    id: "users",
    status: "todo",
    title: "Get 10–20 student testers",
    description: "Share https://ap-webside.vercel.app — collect feedback on search, hints, and English lanes.",
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
