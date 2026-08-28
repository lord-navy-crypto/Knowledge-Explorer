import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { SAT_HUB_OFFICIAL } from "@/data/official-resources";

export default function SatPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("sat")}
      title="SAT · English, Grammar, Reading & Math"
      description="Four SAT subject folders for uploads plus 80+ in-site multiple-choice practice questions filtered by skill."
      officialNote={SAT_HUB_OFFICIAL.note}
      officialLinks={SAT_HUB_OFFICIAL.links}
    />
  );
}
