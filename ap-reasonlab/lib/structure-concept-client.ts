export type StructuredConcept = {
  summary: string;
  keyPoints: string[];
  commonMistakes: string[];
  example: string;
  note?: string;
};

export function formatStructuredConcept(data: StructuredConcept): string {
  const keyPoints = Array.isArray(data.keyPoints) ? data.keyPoints : [];
  const mistakes = Array.isArray(data.commonMistakes) ? data.commonMistakes : [];
  return [
    String(data.summary || "").trim(),
    keyPoints.length
      ? `\n\n**Key points**\n${keyPoints.map((p) => `- ${p}`).join("\n")}`
      : "",
    mistakes.length
      ? `\n\n**Common mistakes**\n${mistakes.map((p) => `- ${p}`).join("\n")}`
      : "",
    data.example ? `\n\n**Example**\n${String(data.example).trim()}` : "",
  ]
    .filter(Boolean)
    .join("");
}

export async function sortNotesWithAi(params: {
  name: string;
  area: string;
  content: string;
}): Promise<{ formatted: string; note: string }> {
  const res = await fetch("/api/structure-concept", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: params.name.trim(),
      area: params.area.trim(),
      subject: params.area.trim(),
      content: params.content,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Structure failed");
  return {
    formatted: formatStructuredConcept(data as StructuredConcept),
    note: String(data.note || "Notes sorted — review every field before saving."),
  };
}
