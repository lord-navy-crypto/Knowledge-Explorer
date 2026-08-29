import { concepts } from "@/data/content";
import { formulas } from "@/data/formulas";
import { questionnaires } from "@/data/questionnaires";
import { getSubjectBySlug } from "@/data/ap-catalog";

export const revalidate = 86400;

export async function GET(
  _request: Request,
  context: { params: Promise<{ subject: string }> }
) {
  const { subject } = await context.params;
  const builtIn = getSubjectBySlug(subject);

  if (!builtIn) {
    return Response.json(
      { concept: 0, formula: 0, practice: 0 },
      { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } }
    );
  }

  const subjectName = builtIn.name;
  return Response.json(
    {
      concept: concepts.filter((item) => item.subject === subjectName).length,
      formula: formulas.filter((item) => item.subject === subjectName).length,
      practice: questionnaires.filter((item) => item.subject === subjectName).length,
    },
    { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } }
  );
}
