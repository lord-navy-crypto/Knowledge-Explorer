import { NextRequest, NextResponse } from "next/server";
import { getQuestionnaireById } from "@/data/questionnaires";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const quiz = getQuestionnaireById(String(id || ""));
  if (!quiz) return NextResponse.json({ error: "Not found." }, { status: 404 });
  return NextResponse.json({ quiz });
}
