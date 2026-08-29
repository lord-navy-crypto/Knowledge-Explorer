import { redirect } from "next/navigation";

export default function CodeCPage() {
  redirect("/code/editor?lang=c");
}
