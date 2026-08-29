import { redirect } from "next/navigation";

export const metadata = {
  title: "Convenient Tools & Code — Knowledge Explorer",
  description: "Convenient Tools now lives directly inside the Tools & Code area.",
};

export default function ToolsPage() {
  redirect("/explore/tools-code#convenient-tools");
}
