import { notFound } from "next/navigation";
import ExploreGatewayHub from "@/components/ExploreGatewayHub";
import { getGatewayById } from "@/data/home-gateways";

export default function ExploreComingSoonPage() {
  const gateway = getGatewayById("coming-soon");
  if (!gateway) notFound();
  return <ExploreGatewayHub gateway={gateway} />;
}
