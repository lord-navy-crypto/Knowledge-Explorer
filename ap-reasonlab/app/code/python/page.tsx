import { redirect } from "next/navigation";

export default function CodePythonPage() {
  redirect("/code/editor?lang=python");
}
