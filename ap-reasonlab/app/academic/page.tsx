import { redirect } from "next/navigation";

/** Academic Platform removed — Shared library & My box live in Forum. */
export default function AcademicRedirectPage() {
  redirect("/forum");
}
