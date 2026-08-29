import { redirect } from "next/navigation";

export default function Page() {
  redirect("/tools/image-compress?mode=crop");
}
