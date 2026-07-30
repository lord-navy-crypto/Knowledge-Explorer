import { redirect } from "next/navigation";

/** English AI lives in the unified toolbox (Local AI recommended). */
export default function EnglishAiPage() {
  redirect("/hints?tool=english");
}
