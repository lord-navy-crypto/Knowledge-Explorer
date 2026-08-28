import JsonFormatterTool from "@/components/JsonFormatterTool";

export const metadata = {
  title: "JSON formatter — Knowledge Explorer",
  description: "Validate, pretty-print, and minify JSON in your browser.",
};

export default function JsonFormatterPage() {
  return <JsonFormatterTool />;
}
