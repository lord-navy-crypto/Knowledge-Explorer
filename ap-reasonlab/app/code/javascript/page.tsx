import { redirect } from "next/navigation";

export default function CodeJavaScriptPage() {
  redirect("/code/editor?lang=javascript");
}
