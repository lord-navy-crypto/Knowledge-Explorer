import { questionnaires, rawQuestionnaires, apQuestionBankStats, apRecoveryBatch5, apRecoveryBatch6 } from "@/data/questionnaires";
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

console.log("\nQUESTION BANK QUALITY REPORT");
console.log("============================");
console.log(`AP sets: ${apQuestionBankStats.publicSets}/${apQuestionBankStats.rawSets} public`);
console.log(`AP items: ${publicApItems}/${rawApItems} public; ${quarantinedApItems} quarantined because no defensible complete answer could be established`);
console.log(`AP batch 5: ${apRecoveryBatch5.ids.length} deeply upgraded; ${apRecoveryBatch5.severeMissingAnswer} severe missing/undefended-answer candidates; ${apRecoveryBatch5.severeStructural} severe structural candidates`);
console.log(`AP batch 5 IDs: ${apRecoveryBatch5.ids.join(",")}`);
console.log(`AP batch 6: ${apRecoveryBatch6.ids.length} deeply upgraded; ${apRecoveryBatch6.severeMissingAnswer} severe missing/undefended-answer candidates; ${apRecoveryBatch6.severeStructural} severe structural candidates`);
console.log(`AP batch 6 IDs: ${apRecoveryBatch6.ids.join(",")}`);
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
