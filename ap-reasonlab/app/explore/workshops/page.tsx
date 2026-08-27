import { notFound } from "next/navigation";
import ExploreGatewayHub from "@/components/ExploreGatewayHub";
import { getGatewayById } from "@/data/home-gateways";

export default function ExploreWorkshopsPage() {
  const gateway = getGatewayById("workshops");
  if (!gateway) notFound();
  return <ExploreGatewayHub gateway={gateway} />;
}
