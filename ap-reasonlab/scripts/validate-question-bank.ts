import { questionnaires, rawQuestionnaires, apQuestionBankStats, apRecoveryBatch5, apRecoveryBatch6, apRecoveryBatch7, apRecoveryBatch8, apRecoveryBatch9, apRecoveryBatch10, apRecoveryBatch11, apRecoveryBatch12 } from "@/data/questionnaires";
import {
  toeflQuestions,
  satQuestions,
  englishQuestionBankStats,
} from "@/data/english-content";
import { auditApSet, auditEnglishQuestion } from "@/lib/question-quality";

function fail(message: string): never {
  console.error(`\nQUESTION BANK VALIDATION FAILED\n${message}`);
  process.exit(1);
}

const errors: string[] = [];
const warnings: string[] = [];

for (const set of questionnaires) {
  const result = auditApSet(set);
  for (const issue of result.issues) {
    const line = `[AP] ${set.subject} / ${set.id} / ${issue.code}: ${issue.message}`;
    if (issue.severity === "error") errors.push(line);
    else warnings.push(line);
  }
}

for (const q of satQuestions) {
  const result = auditEnglishQuestion("sat", q);
  for (const issue of result.issues) {
    const line = `[SAT] ${q.id} / ${q.skill} / ${issue.code}: ${issue.message}`;
    if (issue.severity === "error") errors.push(line);
    else warnings.push(line);
  }
}

for (const q of toeflQuestions) {
  const result = auditEnglishQuestion("toefl", q);
  for (const issue of result.issues) {
    const line = `[TOEFL] ${q.id} / ${q.taskType || q.skill} / ${issue.code}: ${issue.message}`;
    if (issue.severity === "error") errors.push(line);
    else warnings.push(line);
  }
}

const rawApItems = rawQuestionnaires.reduce((sum, set) => sum + set.items.length, 0);
const publicApItems = questionnaires.reduce((sum, set) => sum + set.items.length, 0);
const quarantinedApItems = rawApItems - publicApItems;

const publicItemIds = new Set(questionnaires.flatMap((set) => set.items.map((item) => item.id)));
const publicSetIds = new Set(questionnaires.map((set) => set.id));
const quarantineRows = rawQuestionnaires.flatMap((set) =>
  set.items
    .filter((item) => !publicItemIds.has(item.id))
    .map((item) => ({ subject: set.subject, setId: set.id, itemId: item.id, wholeSetMissing: !publicSetIds.has(set.id) }))
);
const quarantineBySubject = [...quarantineRows.reduce((map, row) => {
  const current = map.get(row.subject) || { items: 0, wholeSetItems: 0, sets: new Set<string>() };
  current.items += 1;
  if (row.wholeSetMissing) current.wholeSetItems += 1;
  current.sets.add(row.setId);
  map.set(row.subject, current);
  return map;
}, new Map<string, { items: number; wholeSetItems: number; sets: Set<string> }>()).entries()]
  .map(([subject, value]) => ({ subject, items: value.items, wholeSetItems: value.wholeSetItems, sets: value.sets.size }))
  .sort((a, b) => b.items - a.items || a.subject.localeCompare(b.subject));
const quarantineSetRows = [...quarantineRows.reduce((map, row) => {
  const key = `${row.subject}|||${row.setId}`;
  const current = map.get(key) || { subject: row.subject, setId: row.setId, items: [] as string[], wholeSetMissing: row.wholeSetMissing };
  current.items.push(row.itemId);
  map.set(key, current);
  return map;
}, new Map<string, { subject: string; setId: string; items: string[]; wholeSetMissing: boolean }>()).values()]
  .sort((a, b) => a.subject.localeCompare(b.subject) || a.setId.localeCompare(b.setId));

console.log("\nQUESTION BANK QUALITY REPORT");
console.log("============================");
console.log(`AP sets: ${apQuestionBankStats.publicSets}/${apQuestionBankStats.rawSets} public`);
console.log(`AP items: ${publicApItems}/${rawApItems} public; ${quarantinedApItems} quarantined because no defensible complete answer could be established`);
for (const [label, batch] of [["5", apRecoveryBatch5], ["6", apRecoveryBatch6], ["7", apRecoveryBatch7], ["8", apRecoveryBatch8], ["9", apRecoveryBatch9], ["10", apRecoveryBatch10], ["11", apRecoveryBatch11], ["12", apRecoveryBatch12]] as const) {
  console.log(`AP batch ${label}: ${batch.ids.length} deeply upgraded; ${batch.severeMissingAnswer} severe missing/undefended-answer candidates; ${batch.severeStructural} severe structural candidates`);
  console.log(`AP batch ${label} IDs: ${batch.ids.join(",")}`);
}
console.log("\nAP QUARANTINE BREAKDOWN BY SUBJECT");
for (const row of quarantineBySubject) {
  console.log(`QUARANTINE SUBJECT | ${row.subject} | items=${row.items} | sets=${row.sets} | whole-set-items=${row.wholeSetItems}`);
}
console.log("\nAP QUARANTINE SETS / ITEM IDS");
for (const row of quarantineSetRows) {
  console.log(`QUARANTINE SET | ${row.subject} | ${row.setId} | wholeSetMissing=${row.wholeSetMissing} | items=${row.items.join(",")}`);
}
console.log(`SAT items: ${englishQuestionBankStats.sat.total} total; ${englishQuestionBankStats.sat.examAuthentic} Exam-style; ${englishQuestionBankStats.sat.skillDrill} Skill drill`);
console.log(`TOEFL items: ${englishQuestionBankStats.toefl.total} total; ${englishQuestionBankStats.toefl.examAuthentic} Exam-style; ${englishQuestionBankStats.toefl.skillDrill} Skill drill; ${englishQuestionBankStats.toefl.productive} productive-response`);
console.log(`Warnings: ${warnings.length}`);
console.log(`Errors: ${errors.length}`);

if (warnings.length) {
  console.log("\nWarnings (non-blocking; usually legacy Skill drills):");
  for (const warning of warnings.slice(0, 100)) console.log(`- ${warning}`);
  if (warnings.length > 100) console.log(`- … ${warnings.length - 100} more warnings`);
}

if (errors.length) {
  console.error("\nBlocking errors:");
  for (const error of errors) console.error(`- ${error}`);
  fail(`${errors.length} blocking quality error(s) remain.`);
}

console.log("\nPASS: no public question is missing a required answer/reference, explanation, or exam-authentic scoring requirement.\n");