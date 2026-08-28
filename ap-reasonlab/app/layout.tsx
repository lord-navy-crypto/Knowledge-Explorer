import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import Nav from "@/components/Nav";
import MobileActionBar from "@/components/MobileActionBar";
import RandomPageButton from "@/components/RandomPageButton";
import EditModeButton from "@/components/EditModeButton";
import EditorToolsChrome from "@/components/EditorToolsChrome";
import StyleWindow from "@/components/StyleWindow";
import TomatoCloudCircle from "@/components/TomatoCloudCircle";
import SiteFooter from "@/components/SiteFooter";
import SiteRelatedToolsBar from "@/components/SiteRelatedToolsBar";
import { EditorModeProvider } from "@/components/EditorModeProvider";
import { LocalAIProvider } from "@/components/LocalAIProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ToastProvider } from "@/components/ToastProvider";
import SiteStructuredData from "@/components/SiteStructuredData";
import { brand } from "@/data/brand";

const fontSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const fontDisplay = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://ap-webside.vercel.app"),
  title: {
    default: `${brand.name} — Academic Box & Platform`,
    template: `%s — ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: brand.name,
    title: brand.name,
    description: brand.description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${brand.name} — Academic Box & Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name,
    description: brand.description,
    images: ["/opengraph-image"],
  },
  // Discourage Chrome auto-translate — it mutates the DOM and causes React
  // NotFoundError: Failed to execute 'insertBefore' on 'Node'.
  other: {
    google: "notranslate",
  },
};

const THEME_BOOT = `(function(){try{var k="ke-site-theme",a=["ap","cyberpunk","luxury","pastel","crimson","verdant","violet","amber","silver"],t=localStorage.getItem(k);if(t&&a.indexOf(t)>=0)document.documentElement.setAttribute("data-theme",t);if(localStorage.getItem("ke-night-mode")==="on")document.documentElement.setAttribute("data-night","on");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="ap"
      translate="no"
      className="notranslate"
      suppressHydrationWarning
    >
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} notranslate site-shell min-h-screen bg-slate-50 text-slate-900 antialiased`}
        translate="no"
      >
        <Script
          id="ke-theme-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_BOOT }}
        />
        <ThemeProvider>
          <ToastProvider>
            <EditorModeProvider>
              <LocalAIProvider>
                <SiteStructuredData />
                <div className="academic-print" aria-hidden="true" />
              <Nav />
              <EditorToolsChrome />
              <main className="relative z-[1] mx-auto max-w-6xl px-4 py-8 pb-24 md:pb-8">
                {children}
                <SiteRelatedToolsBar />
              </main>
              <RandomPageButton />
              <TomatoCloudCircle />
              <StyleWindow />
              <EditModeButton />
              <MobileActionBar />
              <SiteFooter />
            </LocalAIProvider>
          </EditorModeProvider>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
