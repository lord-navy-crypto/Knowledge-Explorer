import { redirect } from "next/navigation";

/** Old “正在准备” URL → Simulation & Download workshops hub. */
export default function ExploreComingSoonRedirect() {
  redirect("/explore/workshops");
}
