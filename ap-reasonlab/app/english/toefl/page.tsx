import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { TOEFL_HUB_OFFICIAL } from "@/data/official-resources";

export default function ToeflPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("toefl")}
      title="TOEFL iBT"
      description="Daily English practice with TOEFL-shaped materials — reading, listening, writing, and speaking lanes plus 120+ in-site MCQ items."
      officialNote={TOEFL_HUB_OFFICIAL.note}
      officialLinks={TOEFL_HUB_OFFICIAL.links}
    />
  );
}
