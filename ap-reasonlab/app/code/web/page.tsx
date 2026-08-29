import { redirect } from "next/navigation";

export default function CodeWebPage() {
  redirect("/code/editor?lang=web");
}
