"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackToolboxVisit } from "@/lib/recent-tools";

/** Record a toolbox or code playground visit for Recent lists. */
export default function TrackToolboxVisit({
  href,
  title,
}: {
  href?: string;
  title: string;
}) {
  const pathname = usePathname();
  const path = href || pathname || "";

  useEffect(() => {
    if (path.startsWith("/tools/") || path.startsWith("/code/")) {
      trackToolboxVisit(path, title);
    }
  }, [path, title]);

  return null;
}
