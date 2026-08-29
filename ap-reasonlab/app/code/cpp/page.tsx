import { redirect } from "next/navigation";

export default function CodeCppPage() {
  redirect("/code/editor?lang=cpp");
}
