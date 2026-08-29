import { redirect } from "next/navigation";

export default function CodeRubyPage() {
  redirect("/code/editor?lang=ruby");
}
