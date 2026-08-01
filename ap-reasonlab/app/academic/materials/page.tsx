import { redirect } from "next/navigation";

/** Shared materials live in Forum → Shared library. */
export default function ManagedMaterialsRedirectPage() {
  redirect("/forum?tab=shared");
}
