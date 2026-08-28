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
    status: "done",
    title: "Fill AP concepts, formulas, generated questions",
    description:
      "Built-in CED depth across Chem, Bio, Psych, APES, Human Geo, CSA/CSP, Phys C, Calc BC, and World; Sets A–E plus long-tail via /manage.",
    link: "/concepts",
  },
  {
    id: "english-lanes",
    status: "done",
    title: "Expand English TOEFL/SAT practice banks (120+ each)",
    description:
      "120+ hand-curated and challenge-tier MCQs per exam; skill filters, pagination, localStorage resume, and section timers.",
    link: "/english",
  },
  {
    id: "ap-practice-b",
    status: "done",
    title: "AP generated FRQ Set A–D (STEM + humanities)",
    description:
      "Physics 1, Calc, Chem, Bio, USH, World, Euro, English Lang/Lit have Sets A–D with concept links on /practice.",
    link: "/practice",
  },
  {
    id: "beta-feedback",
    status: "done",
    title: "Beta feedback form + Forum tag filter",
    description:
      "Form on /about and /checklist; threads tagged #beta-feedback filter at /forum?tag=beta-feedback.",
    link: "/forum?tag=beta-feedback",
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
    status: "done",
    title: "Expand Physics 1 (energy, momentum, rotation, SHM)",
    description:
      "Units 4–8 concepts, formulas, half-process drills, and FRQ Sets A–D with concept links.",
    link: "/formulas?subject=AP%20Physics%201",
  },
  {
    id: "more-calc",
    status: "done",
    title: "Expand Calculus AB/BC (integrals, FTC, applications)",
    description:
      "Units 4–8 formulas, related-rates/DE drills, and FRQ Sets A–D including applications and DE.",
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
    status: "done",
    title: "AP Chemistry & AP Biology depth",
    description:
      "Starter concepts, formulas, and FRQ Sets A–D; expand further via Manage or generated uploads.",
    link: "/ap",
  },
  {
    id: "users",
    status: "in_progress",
    title: "Get 10–20 student testers",
    description:
      "Share https://ap-webside.vercel.app — use the beta feedback form on /about or /checklist (#beta-feedback on Forum).",
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
