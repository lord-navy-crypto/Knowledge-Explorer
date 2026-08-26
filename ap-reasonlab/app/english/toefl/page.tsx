import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { TOEFL_HUB_OFFICIAL } from "@/data/official-resources";

export default function ToeflPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("toefl")}
      title="TOEFL iBT"
      description="Daily English practice with TOEFL-shaped materials — not a question bank. Reading = articles; Writing = prompts + 范文; Listening = upload + machine replay; Speaking = dialogue shadowing."
      officialNote={TOEFL_HUB_OFFICIAL.note}
      officialLinks={TOEFL_HUB_OFFICIAL.links}
    />
  );
}
