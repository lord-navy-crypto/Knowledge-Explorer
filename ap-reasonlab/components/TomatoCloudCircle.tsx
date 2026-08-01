"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Floating little-tomato cloud circle — sitewide shortcut to Tomato focus desk.
 */
export default function TomatoCloudCircle() {
  const pathname = usePathname();
  const onDesk = pathname === "/tools/focus-desk";

  return (
    <Link
      href="/tools/focus-desk"
      className={`tomato-cloud-circle ${onDesk ? "is-active" : ""}`}
      title="Little tomato desk"
      aria-label="Open little tomato focus desk"
      aria-current={onDesk ? "page" : undefined}
    >
      <span className="tomato-cloud-circle-puff" aria-hidden />
      <span className="tomato-cloud-circle-puff tomato-cloud-circle-puff--2" aria-hidden />
      <span className="tomato-cloud-circle-fruit" aria-hidden>
        <i className="tomato-cloud-circle-leaf" />
      </span>
      <span className="tomato-cloud-circle-label">Tomato</span>
    </Link>
  );
}
