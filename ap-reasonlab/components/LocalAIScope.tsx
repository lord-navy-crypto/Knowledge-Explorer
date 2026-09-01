"use client";

import type { ReactNode } from "react";
import { LocalAIProvider } from "@/components/LocalAIProvider";
import LocalAITaskBridge from "@/components/LocalAITaskBridge";
import LocalAIWebLLMBootstrap from "@/components/LocalAIWebLLMBootstrap";

/** Mount all shared Local AI state/runtime only on routes that actually use it. */
export default function LocalAIScope({ children }: { children: ReactNode }) {
  return (
    <LocalAIProvider>
      <LocalAIWebLLMBootstrap />
      <LocalAITaskBridge />
      {children}
    </LocalAIProvider>
  );
}
