import type { QuestionnaireItem } from "@/lib/types";
import { recoveredApItemsBatch4CD } from "@/data/ap-question-recovery-batch-4cd";
import { recoveredApItemsBatch4EMcq } from "@/data/ap-question-recovery-batch-4e-mcq";
export const recoveredApItemsBatch4FinalFix:Record<string,QuestionnaireItem>={
"chem-eq-d1":{...recoveredApItemsBatch4CD["chem-eq-d1"],rationale:"A complete equilibrium analysis must connect reaction stoichiometry to the ICE-table concentration changes, calculate the equilibrium constant from the resulting state, and then use Q versus K to predict a later disturbance without confusing composition changes with a change in K itself."},
"calc-fmt-m1":{...recoveredApItemsBatch4EMcq["calc-fmt-m1"],prompt:"A calculus student studies the cubic function f(x)=x³−3x on the closed interval [−2,2] and uses the sign of its derivative to classify critical points. Which statement about the function is correct?"}
};
