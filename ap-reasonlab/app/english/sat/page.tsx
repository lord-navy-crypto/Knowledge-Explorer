import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { SAT_HUB_OFFICIAL } from "@/data/official-resources";

export default function SatPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("sat")}
      title="SAT · English, Grammar, Reading & Math"
      description="Four subject folders for SAT practice questions — English, Grammar, Reading, and Mathematics. Open a subject to upload files into that folder. Core language skills stay under Basic skills."
      officialNote={SAT_HUB_OFFICIAL.note}
      officialLinks={SAT_HUB_OFFICIAL.links}
    />
  );
}
