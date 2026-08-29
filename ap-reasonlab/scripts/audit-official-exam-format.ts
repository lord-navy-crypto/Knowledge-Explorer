/**
 * Evidence audit: remaining SAT / TOEFL / AP items that miss current official exam shape.
 * Run: npx tsx scripts/audit-official-exam-format.ts
 */
import { satQuestions, toeflQuestions } from "../data/english-content";
import { SAT_ALL_SKILLS, TOEFL_ALL_SKILLS } from "../lib/english-exam-format";
import { questionnaires } from "../data/questionnaires";
import { practiceQuestions } from "../data/content";
import { AP_EXAM_BLUEPRINT } from "../lib/ap-exam-format";

const SAT_STEMS = [
  "conventions of Standard English",
  "writer's goal",
  "most logical transition",
  "best supported",
  "most logical and precise",
  "most nearly means",
  "closest in meaning",
];

const MATH = new Set([
  "Algebra",
  "Advanced Math",
  "Problem-Solving and Data Analysis",
  "Geometry and Trigonometry",
]);

type Issue = { id: string; kind: string; detail: string };
const issues: Issue[] = [];
function add(id: string, kind: string, detail: string) {
  issues.push({ id, kind, detail });
}

const toeflSkills = new Set(TOEFL_ALL_SKILLS);
const satSkills = new Set(SAT_ALL_SKILLS);

for (const q of toeflQuestions) {
  if (!toeflSkills.has(q.skill)) add(q.id, "toefl-skill", q.skill);
  if (q.choices.length !== 4) add(q.id, "toefl-choices", String(q.choices.length));
  if (!(q.passage?.trim() || q.skill === "Complete the Words")) add(q.id, "toefl-no-passage", q.skill);
  const p = q.passage || "";
  if (q.skill === "Write for an Academic Discussion") {
    if (!/Professor:/i.test(p) || !/Student A:/i.test(p)) add(q.id, "toefl-discussion", "missing board turns");
  }
  if (q.skill === "Take an Interview") {
    if (!/Interviewer:/i.test(p)) add(q.id, "toefl-interview", "missing interviewer");
  }
  if (q.skill.startsWith("Listen")) {
    if (/Follow-up:/i.test(p)) add(q.id, "toefl-listen-glue", "Follow-up in transcript");
    if (/\nWhat is the (TA|professor|speaker)/i.test(p)) add(q.id, "toefl-listen-glue", "question in transcript");
  }
  if (q.skill === "Complete the Words" && !/_{2,}|___/.test(`${q.prompt} ${p}`)) {
    add(q.id, "toefl-cloze", "no blank");
  }
  if (q.skill === "Write an Email" && !/Situation:|From:|Subject:|email/i.test(p)) {
    add(q.id, "toefl-email", "not an email situation");
  }
}

for (const q of satQuestions) {
  if (!satSkills.has(q.skill)) add(q.id, "sat-skill", q.skill);
  if (q.choices.length !== 4) add(q.id, "sat-choices", String(q.choices.length));
  if (!MATH.has(q.skill)) {
    if (!(q.passage?.trim())) add(q.id, "sat-rw-no-passage", q.skill);
    const words = (q.passage || "").trim().split(/\s+/).filter(Boolean).length;
    if (words > 0 && (words < 12 || words > 180)) add(q.id, "sat-rw-length", `${words} words`);
    const stem = q.prompt.toLowerCase();
    if (!SAT_STEMS.some((s) => stem.includes(s.toLowerCase()))) {
      add(q.id, "sat-rw-stem", q.prompt.slice(0, 120));
    }
  }
}

const apSets = questionnaires.filter((s) => s.subject.startsWith("AP "));
const leftoverFormats = new Map<string, number>();
let apItems = 0;
let apMcq = 0;
let apFrq = 0;
for (const set of apSets) {
  if (!AP_EXAM_BLUEPRINT[set.subject]) add(set.id, "ap-no-blueprint", set.subject);
  for (const item of set.items) {
    apItems += 1;
    if (!item.examSection) add(`${set.id}/${item.id}`, "ap-no-section", item.format);
    if (item.format === "mcq") {
      apMcq += 1;
      if ((item.choices?.length ?? 0) !== 4) add(`${set.id}/${item.id}`, "ap-mcq-choices", String(item.choices?.length));
      if (/History/.test(set.subject) && !/Stimulus \(original\)|excerpt|Source \(original\)/i.test(item.prompt)) {
        add(`${set.id}/${item.id}`, "ap-hist-mcq", "no stimulus");
      }
    } else if (item.format === "frq_half") {
      apFrq += 1;
      if (!/\(\s*a\s*\)|\ba\)\s+/i.test(item.prompt)) add(`${set.id}/${item.id}`, "ap-frq-no-a", item.prompt.slice(0, 80));
      if (/Identify the relevant principle, quantity, or claim/i.test(item.prompt)) {
        add(`${set.id}/${item.id}`, "ap-generic-wrap", "generic wrapper");
      }
    } else {
      leftoverFormats.set(item.format, (leftoverFormats.get(item.format) || 0) + 1);
      add(`${set.id}/${item.id}`, "ap-leftover-format", item.format);
    }
  }
}

const unofficialDrills = practiceQuestions.filter((q) =>
  q.subject.startsWith("AP ") && !/\(\s*a\s*\)/.test(q.question)
);

console.log("=== COUNTS ===");
console.log({
  toefl: toeflQuestions.length,
  sat: satQuestions.length,
  apSets: apSets.length,
  apItems,
  apMcq,
  apFrq,
  leftoverFormats: Object.fromEntries(leftoverFormats),
  practiceDrills: practiceQuestions.length,
  unofficialDrills: unofficialDrills.length,
  issues: issues.length,
});

const byKind = new Map<string, Issue[]>();
for (const i of issues) {
  const list = byKind.get(i.kind) || [];
  list.push(i);
  byKind.set(i.kind, list);
}
console.log("=== ISSUES BY KIND ===");
for (const [kind, list] of [...byKind.entries()].sort((a, b) => b[1].length - a[1].length)) {
  console.log(`\n${kind}: ${list.length}`);
  for (const i of list.slice(0, 12)) console.log(`  ${i.id} :: ${i.detail}`);
  if (list.length > 12) console.log(`  … ${list.length - 12} more`);
}

console.log("\n=== UNOFFICIAL AP DRILLS ===");
for (const d of unofficialDrills) {
  console.log(`${d.id} [${d.subject}/${d.topic}] ${d.question.slice(0, 90)}`);
}
