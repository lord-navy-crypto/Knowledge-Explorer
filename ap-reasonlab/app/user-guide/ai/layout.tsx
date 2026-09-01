import type { ReactNode } from "react";
import LocalAIScope from "@/components/LocalAIScope";

export default function UserGuideAiLayout({ children }: { children: ReactNode }) {
  return <LocalAIScope>{children}</LocalAIScope>;
}
