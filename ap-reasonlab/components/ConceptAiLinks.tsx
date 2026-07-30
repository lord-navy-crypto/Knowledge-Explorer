"use client";

import Link from "next/link";
import { stashToolboxPrefill } from "@/lib/ai-toolbox-prefill";
import { toolboxHref } from "@/lib/ai-toolbox-url";

type Props = {
  subject: string;
  title: string;
};

export default function ConceptAiLinks({ subject, title }: Props) {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href={toolboxHref({ apTask: "concept", subject })} className="text-sm text-brand-600 hover:underline">
        Open AI Toolbox →
      </Link>
      <Link
        href={toolboxHref({ apTask: "generate-questions", subject })}
        className="text-sm text-brand-600 hover:underline"
        onClick={() =>
          stashToolboxPrefill(
            `Generate original practice questions for AP topic: ${title}. Hints only — no final answers.`
          )
        }
      >
        Generate practice for this concept →
      </Link>
    </div>
  );
}
