import { redirect } from "next/navigation";

/** AI for AP hub merged into AI Toolbox — keep old URLs working. */
export default function AiForApRedirectPage() {
  redirect("/hints?section=ai-for-ap");
}
