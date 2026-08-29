import { redirect } from "next/navigation";

export default function CodePhpPage() {
  redirect("/code/editor?lang=php");
}
