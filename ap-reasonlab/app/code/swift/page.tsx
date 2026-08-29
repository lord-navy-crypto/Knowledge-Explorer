import { redirect } from "next/navigation";

export default function CodeSwiftPage() {
  redirect("/code/editor?lang=swift");
}
