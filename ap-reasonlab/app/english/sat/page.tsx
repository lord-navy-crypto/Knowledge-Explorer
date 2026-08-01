import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";

export default function SatPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("sat")}
      title="SAT · English, Literature & Math"
      description="Three subject folders for SAT practice questions — English, Literature, and Mathematics. Open a subject to upload into that folder. Core language skills stay under Basic skills."
      officialNote="Use College Board practice banks / Bluebook for official practice. Knowledge Explorer is not affiliated with College Board."
      officialLinks={[
        {
          href: "https://satsuite.collegeboard.org/practice/student-question-bank",
          label: "Student Question Bank",
        },
        {
          href: "https://satsuite.collegeboard.org/practice/practice-tests",
          label: "Bluebook & practice tests",
        },
      ]}
    />
  );
}
