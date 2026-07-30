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
import SiteFooter from "@/components/SiteFooter";
import { EditorModeProvider } from "@/components/EditorModeProvider";
import { LocalAIProvider } from "@/components/LocalAIProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  title: "Knowledge Explorer — Academic Box & Platform",
  description: brand.description,
};

const THEME_BOOT = `(function(){try{var k="ke-site-theme",a=["ap","cyberpunk","luxury","pastel","crimson","verdant","violet","amber","silver"],t=localStorage.getItem(k);if(t&&a.indexOf(t)>=0)document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="ap" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} site-shell min-h-screen bg-slate-50 text-slate-900 antialiased`}
      >
        <Script
          id="ke-theme-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: THEME_BOOT }}
        />
        <ThemeProvider>
          <EditorModeProvider>
            <LocalAIProvider>
              <div className="academic-print" aria-hidden="true" />
              <Nav />
              <EditorToolsChrome />
              <main className="relative z-[1] mx-auto max-w-6xl px-4 py-8 pb-24 md:pb-8">
                {children}
              </main>
              <RandomPageButton />
              <StyleWindow />
              <EditModeButton />
              <MobileActionBar />
              <SiteFooter />
            </LocalAIProvider>
          </EditorModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
