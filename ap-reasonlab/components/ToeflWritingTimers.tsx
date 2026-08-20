"use client";

import ToeflPracticeTimer from "@/components/ToeflPracticeTimer";

/** Writing lane timers: Integrated ~7 min / Independent-style ~10 min practice clocks. */
export default function ToeflWritingTimers() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <ToeflPracticeTimer
        title="Writing timer · 7 min"
        accent="amber"
        presets={[{ label: "7 minutes", seconds: 7 * 60 }]}
      />
      <ToeflPracticeTimer
        title="Writing timer · 10 min"
        accent="brand"
        presets={[{ label: "10 minutes", seconds: 10 * 60 }]}
      />
    </div>
  );
}
