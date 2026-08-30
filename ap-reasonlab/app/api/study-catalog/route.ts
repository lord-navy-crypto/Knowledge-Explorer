import { NextRequest, NextResponse } from "next/server";
import { concepts, practiceQuestions } from "@/data/content";
import { keyConceptGuides } from "@/data/key-concepts";
import { formulas } from "@/data/formulas";
import { questionnaires } from "@/data/questionnaires";
import { AP_SUBJECTS } from "@/data/ap-expanded";
import { subjectsMatch } from "@/lib/managed-types";

export const dynamic = "force-dynamic";

function allSubjects() {
  const set = new Set<string>(AP_SUBJECTS);
  concepts.forEach((item) => set.add(item.subject));
  keyConceptGuides.forEach((item) => set.add(item.subject));
  formulas.forEach((item) => set.add(item.subject));
  practiceQuestions.forEach((item) => set.add(item.subject));
  questionnaires.forEach((item) => set.add(item.subject));
  return [...set].sort();
}

export async function GET(req: NextRequest) {
  const kind = String(req.nextUrl.searchParams.get("kind") || "").trim();
  const subject = String(req.nextUrl.searchParams.get("subject") || "").trim();
  const subjects = allSubjects();

  if (kind === "concepts") {
    if (subject) {
      return NextResponse.json({
        subject,
        concepts: concepts.filter((item) => subjectsMatch(item.subject, subject)),
        guides: keyConceptGuides
          .filter((item) => subjectsMatch(item.subject, subject))
          .map((item) => ({
            id: item.id,
            title: item.title,
            subject: item.subject,
            introduction: item.introduction,
          })),
      });
    }
    return NextResponse.json({
      subjects: subjects.map((name) => ({
        name,
        conceptCount: concepts.filter((item) => subjectsMatch(item.subject, name)).length,
        guideCount: keyConceptGuides.filter((item) => subjectsMatch(item.subject, name)).length,
      })),
    });
  }

  if (kind === "formulas") {
    if (subject) {
      return NextResponse.json({
        subject,
        formulas: formulas.filter((item) => subjectsMatch(item.subject, subject)),
      });
    }
    return NextResponse.json({
      subjects: subjects.map((name) => ({
        name,
        formulaCount: formulas.filter((item) => subjectsMatch(item.subject, name)).length,
      })),
    });
  }

  if (kind === "practice") {
    if (subject) {
      return NextResponse.json({
        subject,
        drills: practiceQuestions.filter((item) => subjectsMatch(item.subject, subject)),
        questionnaires: questionnaires.filter((item) => subjectsMatch(item.subject, subject)),
      });
    }
    return NextResponse.json({
      subjects: subjects.map((name) => ({
        name,
        drillCount: practiceQuestions.filter((item) => subjectsMatch(item.subject, name)).length,
        setCount: questionnaires.filter((item) => subjectsMatch(item.subject, name)).length,
      })),
    });
  }

  return NextResponse.json({ error: "Unknown study catalog kind." }, { status: 400 });
}
