import { notFound } from "next/navigation";
import ExploreGatewayHub from "@/components/ExploreGatewayHub";
import { getGatewayById } from "@/data/home-gateways";

export default function ExploreToolsCodePage() {
  const gateway = getGatewayById("tools-code");
  if (!gateway) notFound();
  return <ExploreGatewayHub gateway={gateway} />;
}
