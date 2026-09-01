import type { ReactNode } from "react";
import LocalAIScope from "@/components/LocalAIScope";

export default function EasyLocalAiLayout({ children }: { children: ReactNode }) {
  return <LocalAIScope>{children}</LocalAIScope>;
}
