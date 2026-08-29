import { redirect } from "next/navigation";

export default function CodeSqlPage() {
  redirect("/code/editor?lang=sql");
}
