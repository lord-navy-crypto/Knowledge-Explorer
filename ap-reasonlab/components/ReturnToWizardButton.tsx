"use client";

import { useRouter } from "next/navigation";
import { preloadWriteToolDraft } from "@/lib/write-tool-handoff";

export default function ReturnToWizardButton({ text, title }: { text: string; title?: string }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className="btn-secondary text-sm"
      disabled={!text.trim()}
      onClick={() => {
        preloadWriteToolDraft("write-convert", text, title);
        router.push("/tools/write-convert");
      }}
    >
      Return to wizard with this text
    </button>
  );
}
