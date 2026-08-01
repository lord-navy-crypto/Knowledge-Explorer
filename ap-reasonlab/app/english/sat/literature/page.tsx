import { notFound } from "next/navigation";
import EnglishExamSectionView from "@/components/EnglishExamSectionView";
import { getExamConfig, getExamSection } from "@/data/english-exam-sections";

export default function Page() {
  const exam = getExamConfig("sat");
  const section = getExamSection("sat", "literature");
  if (!section) notFound();
  return <EnglishExamSectionView exam={exam} section={section} />;
}
