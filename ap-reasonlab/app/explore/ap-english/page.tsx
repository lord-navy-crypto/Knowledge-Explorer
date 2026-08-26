import { notFound } from "next/navigation";
import ExploreGatewayHub from "@/components/ExploreGatewayHub";
import { getGatewayById } from "@/data/home-gateways";

export default function ExploreApEnglishPage() {
  const gateway = getGatewayById("ap-english");
  if (!gateway) notFound();
  return <ExploreGatewayHub gateway={gateway} />;
}
