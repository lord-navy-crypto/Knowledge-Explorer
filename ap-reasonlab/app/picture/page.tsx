import { redirect } from "next/navigation";

/** Picture box merged into Forum → My box (pictures). */
export default function PictureRedirectPage() {
  redirect("/forum?tab=box&view=pictures");
}
