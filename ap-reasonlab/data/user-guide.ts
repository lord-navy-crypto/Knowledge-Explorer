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
  /** Optional mini-dialogue before the detail paragraph. */
  conversation?: Array<{ speaker: "you" | "guide"; text: string }>;
  body?: string;
  steps?: string[];
  links: GuideLink[];
};

export const USER_GUIDE_INTRO = {
  title: "User Guide",
  subtitle: "Walk through every major area of Knowledge Explorer",
  lead:
    "This is a full-site tour. Each section opens with a short back-and-forth (what you might ask, what the site answers), then deeper notes and links into the real pages. AI Toolbox stays in the top bar; home boxes, More menu, and mobile bar cover everything else.",
};

export const USER_GUIDE_SECTIONS: UserGuideSection[] = [
  {
    id: "start",
    title: "Start here — home & navigation",
    preview:
      "You land on four gateway boxes. The top bar always shows AI Toolbox; More (desktop) or the menu (mobile) reaches AP, English, tools, search, and this guide.",
    conversation: [
      { speaker: "you", text: "Where do I start on Knowledge Explorer?" },
      {
        speaker: "guide",
        text: "Home has four boxes — AP & English, Convenient Tools & Code, Simulation & Download, and Forum. Pick the box that matches your task; AI Toolbox is always one click away in the header.",
      },
      { speaker: "you", text: "Anything I should avoid?" },
      {
        speaker: "guide",
        text: "Do not turn on browser page translation — it breaks math layout and React. The site already sets notranslate. Night mode and themes are in the style window (palette icon) if you want a different look.",
      },
    ],
    body:
      "Desktop: sticky header with AI Toolbox + Search, plus More dropdown (boxes, quick links, editor login). On narrow screens the header also scrolls AP · English · Practice · AI · Search quick links. Mobile bottom bar: Home · Explore · Search · AI · More — tap More for AP, English, Tools, Code, and guides. Jump-to-chat appears on toolbox pages. Themes and night mode live in the style window (palette icon).",
    steps: [
      "Open Home → choose a box (AP, Tools, Simulation, Forum).",
      "Desktop: use Search in the header. Mobile: tap Search on the bottom bar (or ⌘K).",
      "More → Quick links for /ap, /english, /practice, /tools, /user-guide.",
      "Editors only: More shows full admin links after unlock at /login.",
    ],
    links: [
      { href: "/", label: "Home", detail: "Four gateway boxes" },
      { href: "/search", label: "Site search", detail: "Concepts, tools, files, members" },
      { href: "/about", label: "About", detail: "Ethics, members, editor policy" },
      { href: "/disclaimer", label: "Disclaimer", detail: "Copyright & study-use notices" },
      { href: "/user-guide", label: "This guide", detail: "Full walkthrough" },
    ],
  },
  {
    id: "ap-english-box",
    title: "AP & English box",
    preview:
      "The AP & English hub splits into subject folders (STEM, history, econ, CSA, …) and English exam lanes (TOEFL, SAT, vocabulary, grammar).",
    conversation: [
      { speaker: "you", text: "I need AP Physics and also TOEFL reading — same place?" },
      {
        speaker: "guide",
        text: "Yes — open the AP & English box. AP opens /ap and per-subject folders with concepts, formulas, practice, and uploads. English opens TOEFL/SAT lanes plus skill pages; English AI lives in AI Toolbox.",
      },
    ],
    body:
      "Built-in AP subjects include Physics 1/2/C, Calculus AB/BC, Statistics, Chemistry, Biology, Psychology, CSA/CSP, Micro/Macro Econ, US/World/Euro History, English Lang/Lit, Environmental Science, and Human Geography. Managed uploads can add more folders after editors publish them.",
    links: [
      { href: "/explore/ap-english", label: "AP & English hub" },
      { href: "/ap", label: "AP subject library", detail: "All subject folders" },
      { href: "/english", label: "English home" },
      { href: "/concepts", label: "Concepts (all subjects)" },
      { href: "/formulas", label: "Formulas (all subjects)" },
      { href: "/practice", label: "Practice sets", detail: "Individual sets at /questionnaires/[id]" },
      { href: "/key-concepts", label: "Key concepts & guides" },
    ],
  },
  {
    id: "ap-subjects",
    title: "AP subjects — folders, units, uploads",
    preview:
      "Each AP subject page lists units, concept links, formula sheets, practice sets, and an in-page media finder for PDFs and images uploaded to that folder.",
    conversation: [
      { speaker: "you", text: "How do I study one AP class end-to-end?" },
      {
        speaker: "guide",
        text: "Go to /ap → pick your subject → browse units. Open a concept for explanations and Ask AI, copy formulas from the formula tab, then try practice sets. Attachments appear in the subject media panel when editors upload them.",
      },
    ],
    body:
      "Subject URLs look like /ap/physics-1 or /ap/calculus-ab-bc. Roots /concepts, /formulas, and /practice filter across subjects. Questionnaires are longer structured sets; key-concepts holds study-skill guides including safe AI-for-AP workflows.",
    steps: [
      "Pick subject at /ap or from Concepts/Formulas/Practice filters.",
      "Read concept pages — use Ask AI on-page to open Toolbox with subject context.",
      "Open formulas for copy-ready LaTeX; use practice for generated or uploaded sets.",
      "Check the media finder on subject pages for class PDFs and images.",
    ],
    links: [
      { href: "/ap", label: "All AP subjects" },
      { href: "/ap/physics-1", label: "Example: AP Physics 1" },
      { href: "/ap/statistics", label: "Example: AP Statistics" },
      { href: "/ap/calculus-ab-bc", label: "Example: Calculus AB/BC" },
      { href: "/concepts", label: "Concept browser" },
      { href: "/formulas", label: "Formula sheets" },
      { href: "/practice", label: "Practice browser" },
      { href: "/hints?section=ai-for-ap", label: "AI for AP (Toolbox section)" },
    ],
  },
  {
    id: "ap-concept-pages",
    title: "Concept pages — reading, math, Ask AI",
    preview:
      "Every concept page shows summary, key points, common mistakes, and examples with LaTeX rendering. Ask AI pre-fills AI Toolbox with that topic; special-feature chips can start hint-style or extension tasks.",
    conversation: [
      { speaker: "you", text: "Can AI just give me the AP answer?" },
      {
        speaker: "guide",
        text: "The site is built as a tutor, not a solver — especially for science FRQs. Use Hints / half-process templates in Toolbox 特殊功能 for structured help without full solutions.",
      },
    ],
    steps: [
      "Open any concept from /concepts or a subject folder.",
      "Click Ask AI — Toolbox opens with subject + concept context.",
      "Use 特殊功能 chips (e.g. Half-process FRQ, Check my attempt) for exam-shaped prompts.",
      "Share a chip link with ?sf= after you customize a saved special feature.",
    ],
    links: [
      { href: "/concepts", label: "Browse concepts" },
      { href: "/key-concepts", label: "Key concept guides" },
      { href: "/hints", label: "AI Toolbox" },
      { href: "/hints?section=ai-for-ap", label: "AI for AP guides" },
    ],
  },
  {
    id: "english-toefl",
    title: "English — TOEFL lanes",
    preview:
      "TOEFL is split into Reading, Listening, Writing, and Speaking folders with sample prompts and practice materials. Timers and accent practice tools are in Convenient Tools; speaking can use speech-to-text and AI speaking coach in Toolbox.",
    conversation: [
      { speaker: "you", text: "Where is TOEFL integrated writing vs independent?" },
      {
        speaker: "guide",
        text: "Start at /english/toefl — open Writing for integrated/independent lanes, Speaking for record-and-review flows, Reading/Listening for passage-style practice. English AI in Toolbox can critique structure without writing the essay for you.",
      },
    ],
    links: [
      { href: "/english/toefl", label: "TOEFL home" },
      { href: "/english/toefl/reading", label: "TOEFL Reading" },
      { href: "/english/toefl/listening", label: "TOEFL Listening" },
      { href: "/english/toefl/writing", label: "TOEFL Writing" },
      { href: "/english/toefl/speaking", label: "TOEFL Speaking" },
      { href: "/tools/speech-to-text", label: "Speech to text tool" },
      { href: "/tools/dictation", label: "Dictation practice" },
    ],
  },
  {
    id: "english-sat",
    title: "English — SAT lanes",
    preview:
      "SAT covers Reading, Writing/Grammar, and Mathematics sections with in-site practice items. Vocabulary and grammar skill pages complement the exam lanes.",
    conversation: [
      { speaker: "you", text: "SAT math and reading — same AI?" },
      {
        speaker: "guide",
        text: "Use /english/sat for section folders. AI Toolbox → English tab can explain grammar rules or math word-problem setup; pick the English task that matches (reading, writing, or general).",
      },
    ],
    links: [
      { href: "/english/sat", label: "SAT home" },
      { href: "/english/sat/reading", label: "SAT Reading" },
      { href: "/english/sat/english", label: "SAT Writing & Language" },
      { href: "/english/sat/grammar", label: "SAT Grammar lane" },
      { href: "/english/sat/mathematics", label: "SAT Mathematics" },
      { href: "/english/vocabulary", label: "Vocabulary skills" },
      { href: "/english/grammar", label: "Grammar & sentences" },
    ],
  },
  {
    id: "english-ai",
    title: "English AI & study tools",
    preview:
      "English AI is unified in AI Toolbox (English tab) and shortcut at /english/ai. Convenient Tools adds vocab book, paraphrase compare, reading highlights, text comparator, and translator-style workflows.",
    body:
      "Toolbox English tasks include tutoring, writing feedback, speaking practice (with optional TTS), and exam-specific starters via 特殊功能. Vocab book and flashcards save locally in your browser.",
    links: [
      { href: "/english/ai", label: "English AI shortcut" },
      { href: "/hints?tool=english", label: "AI Toolbox · English" },
      { href: "/tools/vocab-book", label: "Vocab book" },
      { href: "/tools/paraphrase", label: "Paraphrase compare" },
      { href: "/tools/reading-highlight", label: "Reading highlights" },
      { href: "/tools/text-comparator", label: "Text comparator" },
    ],
  },
  {
    id: "ai-toolbox",
    title: "AI Toolbox — modes, tasks, 特殊功能",
    preview:
      "One panel: AP · English · Coding tabs, plus Calculator and Grapher. Choose Local AI (browser), Website API, or your own API key. Chat history saves in IndexedDB; site search can feed context into replies.",
    conversation: [
      { speaker: "you", text: "What can AP mode actually do?" },
      {
        speaker: "guide",
        text: "AP tasks include Hints (process-only), Concept explain, Concept extension, Formula derive, and Generate practice. Pick a subject, choose a task, then use 特殊功能 chips for one-click exam templates — or save your own customs.",
      },
      { speaker: "you", text: "Local AI vs cloud?" },
      {
        speaker: "guide",
        text: "Local AI runs in your browser when enabled — no API key, with tier labels for model size. Website API uses the site’s configured backend. Bring-your-own-key uses OpenRouter-compatible endpoints you paste in settings.",
      },
    ],
    body:
      "Coding tab helps with Python/JS/TS/Java/C# snippets and can receive run results from code playgrounds. Calculator (ClassWiz-style) and Grapher (Y1–Y4, calculus tools) share the same panel. Mobile: use jump-to-chat to scroll to the conversation.",
    steps: [
      "Open /hints — pick AP, English, or Coding (or Calculator/Grapher tabs).",
      "Select subject (AP) or task (English/Coding).",
      "Tap a 特殊功能 chip to pre-fill a prompt; edit before sending.",
      "Save customs to reuse; share with ?sf= link when enabled.",
      "Settings gear: AI provider, local model, context budget, voice input.",
    ],
    links: [
      { href: "/hints", label: "AI Toolbox (main)" },
      { href: "/hints?section=ai-for-ap", label: "AI for AP section" },
      { href: "/hints?tool=calculator", label: "Calculator tab" },
      { href: "/hints?tool=grapher", label: "Grapher tab" },
      { href: "/hints?tool=english", label: "English tab" },
      { href: "/hints?tool=coding", label: "Coding tab" },
      { href: "/english/ai", label: "English AI shortcut" },
    ],
  },
  {
    id: "tools-code-box",
    title: "Convenient Tools & Code",
    preview:
      "Tools run mostly client-side: PDF/Word helpers, LaTeX, timers, focus desk (Pomodoro + noise), image tools, exam countdown, mistake notebook, and more. Code opens live playgrounds — run Python/JS in-browser, SQL via sql.js, Java/C# practice editors.",
    conversation: [
      { speaker: "you", text: "Will my files upload to a server?" },
      {
        speaker: "guide",
        text: "Most tools process files only in your browser. Security badges on /tools explain safe vs upload vs API-key tools. External connections hub links out to Desmos, PhET, dictionaries, and official exam pages.",
      },
    ],
    steps: [
      "Browse /tools — use sticky category chips on mobile, or scroll sections on desktop.",
      "Open a tool card; read the security badge (Safe, Local data, File permission, API key).",
      "For coding, /code lists Python, JavaScript, TypeScript, Web, SQL, Markdown, Java, C#.",
      "Run code, then use Send to AI in Toolbox coding tab when available.",
    ],
    links: [
      { href: "/explore/tools-code", label: "Tools & Code hub" },
      { href: "/tools", label: "Convenient Tools catalog" },
      { href: "/tools/external", label: "External connections" },
      { href: "/tools/focus-desk", label: "Tomato focus desk" },
      { href: "/tools/latex", label: "LaTeX helper" },
      { href: "/code", label: "Code hub" },
      { href: "/code/python", label: "Python playground" },
      { href: "/code/javascript", label: "JavaScript" },
      { href: "/code/typescript", label: "TypeScript" },
      { href: "/code/web", label: "Web (HTML/CSS/JS)" },
      { href: "/code/sql", label: "SQL (sql.js)" },
      { href: "/code/java", label: "Java editor" },
      { href: "/code/csharp", label: "C# editor" },
    ],
  },
  {
    id: "workshops",
    title: "Simulation & Download",
    preview:
      "Simulation Workshop lists lord-navy-crypto research repos (Python labs). Download lists macOS Shell builders — clone or ZIP from GitHub; nothing installs automatically from this site.",
    conversation: [
      { speaker: "you", text: "Do simulations run inside the browser?" },
      {
        speaker: "guide",
        text: "No — each card opens GitHub. Monte Carlo, oscillators, chaos, Ising, and RADIA studios are separate Python projects. Download lane has Chrono Modal, RADIA Universal2, and VAMPIRE Apple Silicon builders.",
      },
    ],
    body:
      "Simulation repos: Random Walk Monte Carlo, numerical-methods, Oscillation Integration Lab, Nonlinear Dynamics Chaos Lab, Ising Monte Carlo, RADIA Magnet Studio, RADIA Radiation Studio, radiation-study. Download: chrono-modal-macos-universal2-builder, lord-navy-crypto-radia-universal2-macos-installer, VAMPIRE-Apple-Silicon-Builder. Cards show highlights and open GitHub — clone or ZIP from each repo.",
    links: [
      { href: "/explore/workshops", label: "Simulation & Download hub" },
      { href: "/explore/simulation-workshop", label: "Simulation Workshop" },
      { href: "/explore/download", label: "Download (Shell builders)" },
    ],
  },
  {
    id: "forum",
    title: "Forum — discussions, shared library, My box",
    preview:
      "Three tabs: public Discussions (pick a display name, no signup), Shared library (public uploads everyone can browse), and My box (private notes/pictures in localStorage for this browser only).",
    conversation: [
      { speaker: "you", text: "Is My box synced to my account?" },
      {
        speaker: "guide",
        text: "No — My box is private local storage. Clearing browser data removes it. Shared library and discussions are public; editors can moderate shared deletes with the content change code.",
      },
    ],
    steps: [
      "Discussions — post a thread, reply, attach files when allowed.",
      "Shared library — upload study PDFs/images; filter by subject/folder params.",
      "My box — notes and picture library; not visible to other users.",
      "Partners page lists Knowledge Explorer roster (editor-maintained).",
    ],
    links: [
      { href: "/forum", label: "Forum home" },
      { href: "/forum?tab=shared", label: "Shared library" },
      { href: "/forum?tab=box", label: "My box (private)" },
      { href: "/forum?tab=box&view=pictures", label: "My box · Pictures" },
      { href: "/partners", label: "Partners / roster" },
    ],
  },
  {
    id: "meta",
    title: "Search, themes, checklist & deploy guide",
    preview:
      "Site search indexes concepts, formulas, practice, tools, pages, forum, and managed files. Themes and night mode live in the style window. /guide is for developers deploying the repo; students usually only need this User Guide.",
    conversation: [
      { speaker: "you", text: "How do I find one formula fast?" },
      {
        speaker: "guide",
        text: "Use /search — type the topic or subject name, filter by type (Formula, Concept, Page). AI Toolbox can also run site search context when enabled in settings.",
      },
    ],
    links: [
      { href: "/search", label: "Search" },
      { href: "/checklist", label: "Project checklist (feature status)" },
      { href: "/guide", label: "Developer / deploy guide" },
      { href: "/manage-guide", label: "Manage Guide (editors only — locked)" },
    ],
  },
];
