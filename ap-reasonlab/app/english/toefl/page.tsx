import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { TOEFL_HUB_OFFICIAL } from "@/data/official-resources";

export default function ToeflPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("toefl")}
      title="TOEFL iBT"
      description="Current ETS TOEFL iBT task types — Reading, Listening, Writing, and Speaking lanes plus 120+ original in-site items (not real ETS questions)."
      officialNote={TOEFL_HUB_OFFICIAL.note}
      officialLinks={TOEFL_HUB_OFFICIAL.links}
    />
  );
}
