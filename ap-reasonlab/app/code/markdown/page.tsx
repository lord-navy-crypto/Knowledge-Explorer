import { redirect } from "next/navigation";

export default function CodeMarkdownPage() {
  redirect("/code/editor?lang=markdown");
}
