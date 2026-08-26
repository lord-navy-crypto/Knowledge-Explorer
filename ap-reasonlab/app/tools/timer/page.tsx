import { redirect } from "next/navigation";

export const metadata = {
  title: "Study timer — NauWiki Explorer",
};

/** Study timer merged into Tomato focus desk — keep bookmark-safe redirect. */
export default function TimerPage() {
  redirect("/tools/focus-desk");
}
