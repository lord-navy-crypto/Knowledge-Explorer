import { redirect } from "next/navigation";

export default function CodeGoPage() {
  redirect("/code/editor?lang=go");
}
