"use client";

import type { ReactNode } from "react";
import { LocalAIProvider } from "@/components/LocalAIProvider";
import LocalAITaskBridge from "@/components/LocalAITaskBridge";

/** Mount the heavyweight Local AI state only on routes that actually use it. */
export default function LocalAIScope({ children }: { children: ReactNode }) {
  return (
    <LocalAIProvider>
      <LocalAITaskBridge />
      {children}
    </LocalAIProvider>
  );
}
