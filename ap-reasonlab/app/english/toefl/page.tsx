import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";

export default function ToeflPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("toefl")}
      title="TOEFL iBT"
      description="Four subject folders for TOEFL practice questions. Open Reading, Listening, Writing, or Speaking to upload into that folder. Vocabulary and basic skills stay under Basic skills."
      officialNote="Use ETS for current format and official preparation. Knowledge Explorer is not affiliated with ETS."
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
