import { redirect } from "next/navigation";

export default function CodeCsharpPage() {
  redirect("/code/editor?lang=csharp");
}
