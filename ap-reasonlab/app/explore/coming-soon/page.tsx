import { redirect } from "next/navigation";

/** Old “正在准备” URL → Simulation & Research workshops hub. */
export default function ExploreComingSoonRedirect() {
  redirect("/explore/workshops");
}
