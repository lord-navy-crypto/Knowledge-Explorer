import { redirect } from "next/navigation";

/** Image Gen removed — keep plotter (Grapher) for function graphs. */
export default function ImageGenPage() {
  redirect("/hints?tool=grapher");
}
