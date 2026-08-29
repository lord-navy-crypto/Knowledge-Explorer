import { redirect } from "next/navigation";

/** Code and Editor are one workbench now. Keep /code as the stable entry URL. */
export default function CodePage() {
  redirect("/code/editor?lang=python");
}
