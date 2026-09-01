import type { ReactNode } from "react";
import LocalAIWebLLMBootstrap from "@/components/LocalAIWebLLMBootstrap";

export default function EasyLocalAiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LocalAIWebLLMBootstrap />
      {children}
    </>
  );
}
