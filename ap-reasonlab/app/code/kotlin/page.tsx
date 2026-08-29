import { redirect } from "next/navigation";

export default function CodeKotlinPage() {
  redirect("/code/editor?lang=kotlin");
}
