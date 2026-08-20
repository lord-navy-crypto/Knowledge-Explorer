import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";

export default function ToeflPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("toefl")}
      title="TOEFL iBT"
      description="Daily English practice with TOEFL-shaped materials — not a question bank. Reading = articles; Writing = prompts + 范文; Listening = upload + machine replay; Speaking = dialogue shadowing."
      officialNote="Use ETS for current format and official preparation. Knowledge Explorer is not affiliated with ETS. Our lanes focus on materials and follow-along practice in everyday study time."
      officialLinks={[
        {
          href: "https://www.ets.org/toefl/test-takers/ibt/about/content.html",
          label: "ETS test content",
        },
        {
          href: "https://www.ets.org/toefl/test-takers/ibt/prepare.html",
          label: "ETS preparation",
        },
      ]}
    />
  );
}
