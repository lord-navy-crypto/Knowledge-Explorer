"use client";

import { useEffect, useState } from "react";
import { consumePlaygroundHandoffNotice } from "@/lib/code-draft-bridge";

/** One-time note when navigating from the code block adder or Forum. */
export function usePlaygroundHandoffNotice(): string {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (consumePlaygroundHandoffNotice()) {
      setMessage("Loaded from code block adder or Forum — press Run when ready.");
    }
  }, []);
  return message;
}
