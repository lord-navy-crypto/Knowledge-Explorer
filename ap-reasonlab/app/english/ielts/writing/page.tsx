import { notFound } from "next/navigation";
import EnglishExamSectionView from "@/components/EnglishExamSectionView";
import { getExamConfig, getExamSection } from "@/data/english-exam-sections";

export default function Page() {
  const exam = getExamConfig("ielts");
  const section = getExamSection("ielts", "writing");
  if (!section) notFound();
  return <EnglishExamSectionView exam={exam} section={section} />;
}
