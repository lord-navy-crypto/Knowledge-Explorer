import { redirect } from "next/navigation";

/** Old Research Workshop URL → Download. */
export default function ResearchWorkshopRedirect() {
  redirect("/explore/download");
}
