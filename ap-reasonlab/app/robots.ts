import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login", "/manage", "/manage-guide", "/admin", "/ai-developer"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://ap-webside.vercel.app"}/sitemap.xml`,
  };
}
