/** Curated off-site study links — complements built-in Knowledge Explorer tools. */

export type ExternalToolCategory =
  | "exams"
  | "math"
  | "science"
  | "english"
  | "coding"
  | "write"
  | "reference"
  | "media";

export type ExternalTool = {
  id: string;
  name: string;
  href: string;
  blurb: string;
  category: ExternalToolCategory;
  tags: string[];
  /** Highlight on Tools / AI Toolbox summary strips. Default false. */
  featured?: boolean;
};

export const EXTERNAL_TOOL_CATEGORIES: Array<{
  id: ExternalToolCategory;
  label: string;
  detail: string;
}> = [
  {
    id: "exams",
    label: "Official exams & AP",
    detail: "College Board, ETS, IELTS — format and official practice hubs.",
  },
  {
    id: "math",
    label: "Math & graphing",
    detail: "Calculators and solvers beyond KE Graph / KE-84.",
  },
  {
    id: "science",
    label: "Science labs & sims",
    detail: "Interactive physics, chemistry, and biology helpers.",
  },
  {
    id: "english",
    label: "English & dictionaries",
    detail: "Dictionaries, corpora, and language references.",
  },
  {
    id: "coding",
    label: "Coding & CS",
    detail: "Docs, sandboxes, and visualizers for programming practice.",
  },
  {
    id: "write",
    label: "Write & cite",
    detail: "Drafting, clarity, and citation helpers (follow school rules).",
  },
  {
    id: "reference",
    label: "Open textbooks & courses",
    detail: "Free lessons and open educational resources.",
  },
  {
    id: "media",
    label: "Diagrams & boards",
    detail: "External drawing / whiteboard sites for figures and planning.",
  },
];

export const EXTERNAL_TOOLS: ExternalTool[] = [
  // —— Official exams & AP ——
  {
    id: "ap-central",
    name: "AP Central",
    href: "https://apcentral.collegeboard.org/",
    blurb: "Official AP course pages, exam info, and CED links from College Board.",
    category: "exams",
    tags: ["AP", "College Board"],
    featured: true,
  },
  {
    id: "ap-students",
    name: "AP Students",
    href: "https://apstudents.collegeboard.org/",
    blurb: "Student-facing AP exam dates, scores, and course overviews.",
    category: "exams",
    tags: ["AP", "students"],
  },
  {
    id: "bluebook",
    name: "Bluebook (digital exams)",
    href: "https://bluebook.collegeboard.org/",
    blurb: "College Board’s digital testing app hub for SAT and AP where used.",
    category: "exams",
    tags: ["SAT", "AP", "digital"],
  },
  {
    id: "sat-practice",
    name: "Official SAT practice",
    href: "https://satsuite.collegeboard.org/sat/practice-preparation",
    blurb: "College Board SAT practice and preparation portal.",
    category: "exams",
    tags: ["SAT", "practice"],
    featured: true,
  },
  {
    id: "ets-toefl",
    name: "ETS TOEFL",
    href: "https://www.ets.org/toefl.html",
    blurb: "Official TOEFL iBT format, registration, and preparation.",
    category: "exams",
    tags: ["TOEFL", "ETS"],
    featured: true,
  },
  {
    id: "ielts",
    name: "IELTS",
    href: "https://www.ielts.org/",
    blurb: "Official IELTS test information and preparation resources.",
    category: "exams",
    tags: ["IELTS"],
  },
  {
    id: "cambridge-english",
    name: "Cambridge English",
    href: "https://www.cambridgeenglish.org/",
    blurb: "Cambridge English exams and free practice activities.",
    category: "exams",
    tags: ["Cambridge", "exams"],
  },

  // —— Math ——
  {
    id: "desmos",
    name: "Desmos Graphing Calculator",
    href: "https://www.desmos.com/calculator",
    blurb: "Full graphing calculator for AP Calc / Physics / Stats. Prefer KE Graph for quick on-site plots.",
    category: "math",
    tags: ["graphing", "calculator"],
    featured: true,
  },
  {
    id: "desmos-geometry",
    name: "Desmos Geometry",
    href: "https://www.desmos.com/geometry",
    blurb: "Interactive geometry constructions and measurements.",
    category: "math",
    tags: ["geometry"],
  },
  {
    id: "desmos-matrix",
    name: "Desmos Matrix Calculator",
    href: "https://www.desmos.com/matrix",
    blurb: "Matrix operations for linear algebra and AP Calc BC contexts.",
    category: "math",
    tags: ["matrices"],
  },
  {
    id: "geogebra",
    name: "GeoGebra Graphing",
    href: "https://www.geogebra.org/graphing",
    blurb: "Interactive geometry, algebra, and 3D graphs beyond KE Graph.",
    category: "math",
    tags: ["geometry", "STEM"],
    featured: true,
  },
  {
    id: "wolfram-alpha",
    name: "Wolfram Alpha",
    href: "https://www.wolframalpha.com/",
    blurb: "Math and science lookups — follow class rules on graded work.",
    category: "math",
    tags: ["check work", "CAS"],
    featured: true,
  },
  {
    id: "symbolab",
    name: "Symbolab",
    href: "https://www.symbolab.com/",
    blurb: "Step-style equation solver. Use for checking, not for graded submissions.",
    category: "math",
    tags: ["algebra", "check work"],
  },
  {
    id: "integral-calculator",
    name: "Integral Calculator",
    href: "https://www.integral-calculator.com/",
    blurb: "Indefinite / definite integrals with optional steps for Calc practice checks.",
    category: "math",
    tags: ["calculus", "integrals"],
  },
  {
    id: "derivative-calculator",
    name: "Derivative Calculator",
    href: "https://www.derivative-calculator.net/",
    blurb: "Differentiate expressions and inspect intermediate steps.",
    category: "math",
    tags: ["calculus", "derivatives"],
  },

  // —— Science ——
  {
    id: "phet",
    name: "PhET Interactive Simulations",
    href: "https://phet.colorado.edu/",
    blurb: "Free physics, chemistry, and biology sims from University of Colorado.",
    category: "science",
    tags: ["sims", "Physics", "Chem"],
    featured: true,
  },
  {
    id: "ptable",
    name: "Ptable",
    href: "https://ptable.com/",
    blurb: "Interactive periodic table with isotopes, orbitals, and properties.",
    category: "science",
    tags: ["chemistry"],
  },
  {
    id: "physics-classroom",
    name: "The Physics Classroom",
    href: "https://www.physicsclassroom.com/",
    blurb: "Clear tutorials and practice for introductory / AP Physics ideas.",
    category: "science",
    tags: ["Physics", "tutorials"],
  },
  {
    id: "chemguide",
    name: "Chemguide",
    href: "https://www.chemguide.co.uk/",
    blurb: "Organic and physical chemistry explanations useful for AP Chem review.",
    category: "science",
    tags: ["chemistry"],
  },
  {
    id: "hhmi-biointeractive",
    name: "HHMI BioInteractive",
    href: "https://www.biointeractive.org/",
    blurb: "AP Biology–friendly interactives, films, and data activities.",
    category: "science",
    tags: ["Biology", "AP Bio"],
  },
  {
    id: "nasa-eyes",
    name: "NASA Eyes",
    href: "https://eyes.nasa.gov/",
    blurb: "Solar system and Earth visualizations for science context.",
    category: "science",
    tags: ["NASA", "space"],
  },

  // —— English ——
  {
    id: "cambridge-dictionary",
    name: "Cambridge Dictionary",
    href: "https://dictionary.cambridge.org/",
    blurb: "Learner-friendly definitions, examples, and pronunciation.",
    category: "english",
    tags: ["dictionary"],
    featured: true,
  },
  {
    id: "oxford-learner",
    name: "Oxford Learner’s Dictionaries",
    href: "https://www.oxfordlearnersdictionaries.com/",
    blurb: "Academic and learner English entries with collocations.",
    category: "english",
    tags: ["dictionary", "collocations"],
  },
  {
    id: "merriam-webster",
    name: "Merriam-Webster",
    href: "https://www.merriam-webster.com/",
    blurb: "US English dictionary and thesaurus for SAT / academic writing.",
    category: "english",
    tags: ["dictionary", "US"],
  },
  {
    id: "thesaurus",
    name: "Thesaurus.com",
    href: "https://www.thesaurus.com/",
    blurb: "Quick synonym / antonym lookup while drafting essays.",
    category: "english",
    tags: ["synonyms"],
  },
  {
    id: "wordreference",
    name: "WordReference",
    href: "https://www.wordreference.com/",
    blurb: "Bilingual dictionaries and forum threads for nuance checks.",
    category: "english",
    tags: ["bilingual", "forums"],
  },
  {
    id: "deepl",
    name: "DeepL Translator",
    href: "https://www.deepl.com/translator",
    blurb: "External translator for longer passages — site Translator is for quick Chinese ↔ English.",
    category: "english",
    tags: ["translate"],
  },
  {
    id: "google-translate",
    name: "Google Translate",
    href: "https://translate.google.com/",
    blurb: "Quick multi-language translation when you need more than Chinese ↔ English.",
    category: "english",
    tags: ["translate"],
  },
  {
    id: "ludwig",
    name: "Ludwig.guru",
    href: "https://ludwig.guru/",
    blurb: "See how phrases are used in published English sentences.",
    category: "english",
    tags: ["corpus", "phrases"],
  },

  // —— Coding ——
  {
    id: "mdn",
    name: "MDN Web Docs",
    href: "https://developer.mozilla.org/",
    blurb: "Authoritative HTML / CSS / JS reference for web and coding practice.",
    category: "coding",
    tags: ["web", "docs"],
    featured: true,
  },
  {
    id: "python-docs",
    name: "Python docs",
    href: "https://docs.python.org/3/",
    blurb: "Official Python 3 language and standard library reference.",
    category: "coding",
    tags: ["Python"],
  },
  {
    id: "pythontutor",
    name: "Python Tutor",
    href: "https://pythontutor.com/",
    blurb: "Step through code visually — great for AP CSA / intro CS debugging.",
    category: "coding",
    tags: ["Python", "visualize"],
  },
  {
    id: "replit",
    name: "Replit",
    href: "https://replit.com/",
    blurb: "Browser IDE for quick coding experiments outside this site.",
    category: "coding",
    tags: ["IDE", "sandbox"],
  },
  {
    id: "codepen",
    name: "CodePen",
    href: "https://codepen.io/",
    blurb: "Front-end playground for HTML / CSS / JS snippets.",
    category: "coding",
    tags: ["web", "sandbox"],
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    href: "https://stackoverflow.com/",
    blurb: "Q&A for programming errors — read answers critically.",
    category: "coding",
    tags: ["Q&A"],
  },

  // —— Write & cite ——
  {
    id: "hemingway",
    name: "Hemingway Editor",
    href: "https://hemingwayapp.com/",
    blurb: "Clarity and readability highlights for drafts (not a grader).",
    category: "write",
    tags: ["clarity", "draft"],
  },
  {
    id: "quillbot",
    name: "QuillBot",
    href: "https://quillbot.com/",
    blurb: "Paraphrase helper — compare with the site Paraphrase tool; follow honesty rules.",
    category: "write",
    tags: ["paraphrase"],
  },
  {
    id: "zotero",
    name: "ZoteroBib",
    href: "https://zbib.org/",
    blurb: "Fast bibliography builder for MLA / APA citations.",
    category: "write",
    tags: ["citations"],
    featured: true,
  },
  {
    id: "owl-purdue",
    name: "Purdue OWL",
    href: "https://owl.purdue.edu/",
    blurb: "Citation and academic writing style guides.",
    category: "write",
    tags: ["MLA", "APA", "writing"],
  },
  {
    id: "overleaf",
    name: "Overleaf",
    href: "https://www.overleaf.com/",
    blurb: "Online LaTeX editor for longer math / science write-ups.",
    category: "write",
    tags: ["LaTeX"],
  },

  // —— Open textbooks & courses ——
  {
    id: "khan",
    name: "Khan Academy",
    href: "https://www.khanacademy.org/",
    blurb: "Free concept videos and exercises across AP subjects.",
    category: "reference",
    tags: ["lessons", "videos"],
    featured: true,
  },
  {
    id: "khan-ap",
    name: "Khan Academy AP",
    href: "https://www.khanacademy.org/college-careers-more/ap",
    blurb: "AP-tagged courses and practice aligned to common exam topics.",
    category: "reference",
    tags: ["AP", "practice"],
  },
  {
    id: "openstax",
    name: "OpenStax",
    href: "https://openstax.org/",
    blurb: "Free peer-reviewed textbooks for physics, chem, calc, and more.",
    category: "reference",
    tags: ["textbooks", "OER"],
    featured: true,
  },
  {
    id: "ck12",
    name: "CK-12",
    href: "https://www.ck12.org/",
    blurb: "FlexBooks and practice for high-school STEM topics.",
    category: "reference",
    tags: ["textbooks", "practice"],
  },
  {
    id: "mit-ocw",
    name: "MIT OpenCourseWare",
    href: "https://ocw.mit.edu/",
    blurb: "University lecture materials for deeper STEM extension.",
    category: "reference",
    tags: ["courses", "STEM"],
  },
  {
    id: "google-scholar",
    name: "Google Scholar",
    href: "https://scholar.google.com/",
    blurb: "Find scholarly articles for research projects and FRQ context.",
    category: "reference",
    tags: ["research"],
  },

  // —— Diagrams & boards ——
  {
    id: "excalidraw",
    name: "Excalidraw",
    href: "https://excalidraw.com/",
    blurb: "Hand-drawn style whiteboard for FBDs, flowcharts, and planning.",
    category: "media",
    tags: ["whiteboard", "diagrams"],
    featured: true,
  },
  {
    id: "diagrams-net",
    name: "diagrams.net",
    href: "https://app.diagrams.net/",
    blurb: "Structured flowcharts and system diagrams (Draw.io).",
    category: "media",
    tags: ["flowcharts"],
  },
  {
    id: "photopea",
    name: "Photopea",
    href: "https://www.photopea.com/",
    blurb: "Browser image editor when crop/annotate on this site is not enough.",
    category: "media",
    tags: ["images"],
  },
  {
    id: "tinypng",
    name: "TinyPNG",
    href: "https://tinypng.com/",
    blurb: "Compress PNG/JPEG uploads before adding them to study materials.",
    category: "media",
    tags: ["compress", "images"],
  },
];

export function featuredExternalTools(): ExternalTool[] {
  return EXTERNAL_TOOLS.filter((tool) => tool.featured);
}

export function externalToolsByCategory(category: ExternalToolCategory): ExternalTool[] {
  return EXTERNAL_TOOLS.filter((tool) => tool.category === category);
}

export function getExternalTool(id: string): ExternalTool | undefined {
  return EXTERNAL_TOOLS.find((tool) => tool.id === id);
}
