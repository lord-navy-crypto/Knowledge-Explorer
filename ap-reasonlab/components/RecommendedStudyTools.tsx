import Link from "next/link";

type ExternalTool = {
  name: string;
  href: string;
  blurb: string;
  tags: string[];
};

/** Curated external tools — complements built-in Calculator, Grapher, and Unified AI. */
const EXTERNAL_TOOLS: ExternalTool[] = [
  {
    name: "Desmos Graphing Calculator",
    href: "https://www.desmos.com/calculator",
    blurb: "Official-style graphing for AP Calc, Physics, and Statistics. Same family as Bluebook’s embedded calculator.",
    tags: ["graphing", "math", "AP Calc", "AP Stats"],
  },
  {
    name: "Khan Academy",
    href: "https://www.khanacademy.org/",
    blurb: "Free concept videos and exercises across AP math, science, and humanities.",
    tags: ["lessons", "videos", "all subjects"],
  },
  {
    name: "GeoGebra",
    href: "https://www.geogebra.org/graphing",
    blurb: "Interactive geometry, 3D graphs, and CAS for visualizing relationships.",
    tags: ["graphing", "geometry", "STEM"],
  },
  {
    name: "Wolfram Alpha",
    href: "https://www.wolframalpha.com/",
    blurb: "Step-style math checks, unit conversions, and science lookups (verify against class rules).",
    tags: ["math", "science", "check work"],
  },
  {
    name: "Quizlet",
    href: "https://quizlet.com/",
    blurb: "Community flashcard decks — strong for vocab, formulas, and history timelines.",
    tags: ["flashcards", "memorization"],
  },
  {
    name: "Knowt",
    href: "https://knowt.com/",
    blurb: "Spaced-repetition flashcards and AI summaries from notes or PDFs.",
    tags: ["flashcards", "spaced repetition"],
  },
  {
    name: "Pomofocus",
    href: "https://pomofocus.io/",
    blurb: "Pomodoro timer for focused study blocks without installing an app.",
    tags: ["focus", "timer", "productivity"],
  },
];

const BUILT_IN = [
  { name: "Unified AI", href: "/hints", blurb: "Local / API tutoring for AP, English, and coding." },
  { name: "Black draft paper", href: "/tools/draft", blurb: "Dual-blended dark desk — notes + stylus drawing." },
  { name: "Dual-column editor", href: "/tools/dual", blurb: "Markdown left, live render right." },
  { name: "KE-84 Calculator", href: "/hints?tool=calculator", blurb: "Scientific keypad in the toolbox." },
  { name: "KE Graph", href: "/hints?tool=grapher", blurb: "Plot y = f(x) with trace and zoom." },
  { name: "Study timer", href: "/tools/timer", blurb: "Pomodoro and exam countdowns on this device." },
];

export default function RecommendedStudyTools() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="section-title">Recommended study tools</h2>
        <p className="mt-1 max-w-2xl text-sm text-slate-600">
          Built-in tools stay on this site (AI Toolbox + /tools suite). External links below are
          optional complements — follow your teacher’s rules on calculators and AI during graded work.
        </p>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {BUILT_IN.map((tool) => (
          <Link key={tool.href} href={tool.href} className="card-hover block border-brand-100 bg-brand-50/30">
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">Built-in</p>
            <h3 className="mt-1 font-semibold text-slate-900">{tool.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{tool.blurb}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {EXTERNAL_TOOLS.map((tool) => (
          <a
            key={tool.href}
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover block"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">External</p>
            <h3 className="mt-1 font-semibold text-slate-900">{tool.name}</h3>
            <p className="mt-1 text-sm text-slate-600">{tool.blurb}</p>
            <p className="mt-2 text-[11px] text-slate-400">{tool.tags.join(" · ")}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
