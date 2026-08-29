import { redirect } from "next/navigation";

export default function CodeRPage() {
  redirect("/code/editor?lang=r");
}
