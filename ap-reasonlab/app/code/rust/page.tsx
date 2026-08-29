import { redirect } from "next/navigation";

export default function CodeRustPage() {
  redirect("/code/editor?lang=rust");
}
