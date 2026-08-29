import { redirect } from "next/navigation";

export default function CodeJavaPage() {
  redirect("/code/editor?lang=java");
}
