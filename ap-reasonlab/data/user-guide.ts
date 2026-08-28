/**
 * Knowledge Explorer — public User Guide sections.
 * Each section: conversational preview + links to live pages.
 */

export type GuideLink = {
  href: string;
  label: string;
  detail?: string;
};

export type UserGuideSection = {
  id: string;
  title: string;
  /** Conversational preview — “what you’ll do here”. */
  preview: string;
  body?: string;
  links: GuideLink[];
};

export const USER_GUIDE_INTRO = {
  title: "User Guide",
  subtitle: "Walk through every major area of Knowledge Explorer",
  lead:
    "Think of this as a tour: each section starts with a short conversation about what that area is for, then links you straight into the real page. AI Toolbox stays in the top bar; everything else lives in the home boxes or quick links.",
};

export const USER_GUIDE_SECTIONS: UserGuideSection[] = [
  {
    id: "start",
    title: "Start here — home & navigation",
    preview:
      "You land on four main boxes: AP & English, Convenient Tools & Code, Simulation & Download, and Forum. The top bar always shows AI Toolbox; open More for AP, English, tools, search, and this guide.",
    body: "Your browser remembers the last toolbox tab and many panel settings. Do not turn on page translation — it can break math and layout.",
    links: [
      { href: "/", label: "Home", detail: "Four gateway boxes into study areas" },
      { href: "/search", label: "Site search", detail: "Find concepts, tools, and pages" },
      { href: "/about", label: "About", detail: "Brand, ethics, members" },
      { href: "/disclaimer", label: "Disclaimer", detail: "Copyright and study-use notices" },
      { href: "/user-guide", label: "This guide", detail: "You are here" },
    ],
  },
  {
    id: "ap-english-box",
    title: "AP & English box",
    preview:
      "Open this box when you want subject folders (AP) or exam lanes (English). AP gives you concepts, formulas, practice sets, and uploads per subject. English splits into TOEFL, SAT, vocabulary, grammar, and a dedicated English AI entry.",
    links: [
      { href: "/explore/ap-english", label: "AP & English hub" },
      { href: "/ap", label: "AP subject library" },
      { href: "/english", label: "English hub" },
      { href: "/concepts", label: "Concepts (all subjects)" },
      { href: "/formulas", label: "Formulas" },
      { href: "/practice", label: "Practice sets" },
      { href: "/questionnaires", label: "Questionnaires" },
      { href: "/key-concepts", label: "Key concepts & AI-for-AP guides" },
    ],
  },
  {
    id: "ap-subjects",
    title: "AP subjects — concepts, formulas, practice",
    preview:
      "Pick a subject (Physics, Calculus, Stats, CSA, …). Inside each folder you browse units, open concept pages with Ask AI, copy formulas, and try generated practice. Concept pages can hand off to AI Toolbox with special-feature chips.",
    links: [
      { href: "/ap", label: "All AP subjects" },
      { href: "/concepts", label: "Concept browser" },
      { href: "/formulas", label: "Formula sheets" },
      { href: "/practice", label: "Practice browser" },
      { href: "/hints?section=ai-for-ap", label: "AI for AP (in Toolbox)" },
    ],
  },
  {
    id: "english",
    title: "English — TOEFL, SAT, skills",
    preview:
      "English is organized by exam lanes and skills. TOEFL has reading, listening, writing, and speaking folders. SAT covers reading, writing/grammar, and math. Tools like vocab book, speech-to-text, and dictation live under Convenient Tools; unified English AI is in AI Toolbox.",
    links: [
      { href: "/english", label: "English home" },
      { href: "/english/toefl", label: "TOEFL" },
      { href: "/english/sat", label: "SAT" },
      { href: "/english/vocabulary", label: "Vocabulary" },
      { href: "/english/grammar", label: "Grammar & sentences" },
      { href: "/english/ai", label: "English AI (Toolbox)" },
      { href: "/hints?tool=english", label: "AI Toolbox · English tab" },
    ],
  },
  {
    id: "ai-toolbox",
    title: "AI Toolbox",
    preview:
      "One panel for AP hints, concept explain, formula derive, practice generation, English tutoring, and coding help. Choose Local AI, Website API, or your own API. Use 特殊功能 (special features) chips for one-click starters, or open Calculator / Grapher tabs in the same place.",
    body: "AI teaches from Knowledge Explorer site materials when possible. It is a tutor, not an answer key — especially for AP science.",
    links: [
      { href: "/hints", label: "AI Toolbox (main)" },
      { href: "/hints?tool=calculator", label: "Calculator tab" },
      { href: "/hints?tool=grapher", label: "Grapher tab" },
      { href: "/english/ai", label: "English AI shortcut" },
    ],
  },
  {
    id: "tools-code-box",
    title: "Convenient Tools & Code box",
    preview:
      "Everyday study utilities run mostly in your browser — timers, LaTeX, PDF helpers, English mic tools, focus desk, and more. Code opens playgrounds for Python, JavaScript, TypeScript, Web, SQL, Java, and C#.",
    links: [
      { href: "/explore/tools-code", label: "Tools & Code hub" },
      { href: "/tools", label: "Convenient Tools catalog" },
      { href: "/code", label: "Code hub" },
      { href: "/code/python", label: "Python playground" },
      { href: "/code/javascript", label: "JavaScript playground" },
      { href: "/code/typescript", label: "TypeScript playground" },
      { href: "/code/web", label: "Web (HTML/CSS/JS)" },
      { href: "/code/sql", label: "SQL playground" },
      { href: "/code/java", label: "Java editor" },
      { href: "/code/csharp", label: "C# editor" },
    ],
  },
  {
    id: "workshops",
    title: "Simulation & Download",
    preview:
      "Simulation Workshop links to research simulation labs on GitHub (Monte Carlo, oscillators, chaos, Ising, RADIA). Download lists macOS Shell builders and installers (Chrono Modal, RADIA Universal2, VAMPIRE) — open GitHub to clone or download ZIP.",
    links: [
      { href: "/explore/workshops", label: "Simulation & Download hub" },
      { href: "/explore/simulation-workshop", label: "Simulation Workshop" },
      { href: "/explore/download", label: "Download" },
    ],
  },
  {
    id: "forum",
    title: "Forum — discuss, share, My box",
    preview:
      "Three tabs: Discussions (public threads with optional attachments), Shared library (public uploads), and My box (private notes and pictures in this browser only). No account signup — pick a display name for discussions.",
    links: [
      { href: "/forum", label: "Forum home" },
      { href: "/forum?tab=shared", label: "Shared library" },
      { href: "/forum?tab=box", label: "My box (private)" },
      { href: "/partners", label: "Partners / roster" },
    ],
  },
  {
    id: "meta",
    title: "Search, checklist & developer setup",
    preview:
      "Site search finds pages and study content. The project checklist tracks live features. /guide is for developers deploying the site; students usually only need this User Guide.",
    links: [
      { href: "/search", label: "Search" },
      { href: "/checklist", label: "Project checklist" },
      { href: "/guide", label: "Developer / deploy guide" },
    ],
  },
];
