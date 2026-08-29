import { redirect } from "next/navigation";

export default function CodeTypeScriptPage() {
  redirect("/code/editor?lang=typescript");
}
