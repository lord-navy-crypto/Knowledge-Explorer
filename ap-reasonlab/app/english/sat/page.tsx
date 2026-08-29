import EnglishExamHub from "@/components/EnglishExamHub";
import { getExamConfig } from "@/data/english-exam-sections";
import { SAT_HUB_OFFICIAL } from "@/data/official-resources";

export default function SatPage() {
  return (
    <EnglishExamHub
      exam={getExamConfig("sat")}
      title="Digital SAT · Reading & Writing + Math"
      description="Short passage + one question (Digital SAT Reading and Writing domains) and College Board Math domains. Original practice — not real SAT items."
      officialNote={SAT_HUB_OFFICIAL.note}
      officialLinks={SAT_HUB_OFFICIAL.links}
    />
  );
}
