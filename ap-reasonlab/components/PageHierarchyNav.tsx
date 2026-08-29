"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ParentTarget = {
  href: string;
  label: string;
};

function parentFor(pathname: string): ParentTarget | null {
  if (!pathname || pathname === "/") return null;

  if (pathname === "/tools") return { href: "/explore/tools-code", label: "Tools & Code" };
  if (pathname.startsWith("/tools/")) return { href: "/tools", label: "Convenient Tools" };

  if (pathname === "/code" || pathname.startsWith("/code/")) {
    return { href: "/explore/tools-code", label: "Tools & Code" };
  }
  if (pathname === "/hints" || pathname.startsWith("/hints/")) {
    return { href: "/explore/tools-code", label: "Tools & Code" };
  }
  if (pathname === "/forum" || pathname.startsWith("/forum/")) {
    return { href: "/explore/tools-code", label: "Tools & Code" };
  }

  if (pathname === "/ap") return { href: "/explore/ap-english", label: "AP & English" };
  if (pathname.startsWith("/ap/")) return { href: "/ap", label: "AP" };
  if (pathname === "/english") return { href: "/explore/ap-english", label: "AP & English" };
  if (pathname.startsWith("/english/")) return { href: "/english", label: "English" };

  if (pathname === "/explore/download" || pathname === "/explore/simulation-workshop") {
    return { href: "/explore/workshops", label: "Simulation & Download" };
  }
  if (pathname.startsWith("/explore/")) return { href: "/", label: "Home" };
  if (pathname === "/explore") return { href: "/", label: "Home" };

  if (pathname.startsWith("/concepts/")) return { href: "/concepts", label: "Concepts" };
  if (pathname.startsWith("/key-concepts/")) return { href: "/key-concepts", label: "Key Concepts" };
  if (pathname.startsWith("/questionnaires/")) {
    return { href: "/questionnaires", label: "Questionnaires" };
  }

  const parts = pathname.split("/").filter(Boolean);
  if (parts.length <= 1) return { href: "/", label: "Home" };
  return {
    href: `/${parts.slice(0, -1).join("/")}`,
    label: "Up one level",
  };
}

export default function PageHierarchyNav() {
  const pathname = usePathname();
  const parent = parentFor(pathname);

  if (!parent) return null;

  return (
    <nav
      aria-label="Page hierarchy navigation"
      className="mb-5 flex flex-wrap items-center gap-2 print:hidden"
    >
      <Link
        href={parent.href}
        className="inline-flex min-h-9 items-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
      >
        ← Back to {parent.label}
      </Link>
      {parent.href !== "/" ? (
        <Link
          href="/"
          className="inline-flex min-h-9 items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-slate-900"
        >
          ⌂ Home
        </Link>
      ) : null}
    </nav>
  );
}
