import type { ReactNode } from "react";
import LocalAIScope from "@/components/LocalAIScope";

export default function EnglishAiLayout({ children }: { children: ReactNode }) {
  return <LocalAIScope>{children}</LocalAIScope>;
}
