import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";

export default function IeltsPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("ielts")}
      title="IELTS Academic"
      description="Four subject folders for IELTS practice questions — Listening, Reading, Writing, and Speaking. Open a subject to file materials there. Grammar, vocab, and writing craft stay under Basic skills."
      officialLinks={[
        {
          href: "https://ielts.org/take-a-test/test-types/ielts-academic-test",
          label: "Academic format",
        },
        {
          href: "https://ielts.org/take-a-test/preparation-resources/sample-test-questions/academic-test",
          label: "Official samples",
        },
      ]}
    />
  );
}
