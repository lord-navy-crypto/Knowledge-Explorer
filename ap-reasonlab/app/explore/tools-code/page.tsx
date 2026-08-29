import Breadcrumbs from "@/components/Breadcrumbs";
import LazyToolsSharedFiles from "@/components/LazyToolsSharedFiles";
import ToolsCatalog from "@/components/ToolsCatalog";

export const metadata = {
  title: "Convenient Tools & Code — Knowledge Explorer",
  description:
    "Unified workbenches for math, code, writing, files, study, English, classroom utilities and AI, with external connections kept separate.",
};

const LITE_RENDER_CSS = `
body:has(#tools-code-lite-render) {
  background-color: #f7f4ee !important;
  background-image: linear-gradient(180deg, #f7f4ee 0%, #f3f0e8 100%) !important;
  background-attachment: scroll !important;
  background-blend-mode: normal !important;
}

body:has(#tools-code-lite-render) .academic-print,
body:has(#tools-code-lite-render) .style-window-launcher,
body:has(#tools-code-lite-render) .tomato-cloud-circle,
body:has(#tools-code-lite-render) button[aria-label="Jump to a random study page"],
body:has(#tools-code-lite-render) button[aria-label="Open page edit menu"],
body:has(#tools-code-lite-render) button[aria-label="Unlock page edit"],
body:has(#tools-code-lite-render) nav[aria-label="Mobile shortcuts"] {
  display: none !important;
}

body.site-shell:has(#tools-code-lite-render)::before,
body.site-shell:has(#tools-code-lite-render)::after {
  display: none !important;
}

body:has(#tools-code-lite-render) header.sticky {
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  background: rgba(255, 252, 247, 0.99) !important;
  box-shadow: 0 1px 0 rgba(30, 58, 95, 0.1) !important;
}

#tools-code-lite-render,
#tools-code-lite-render * {
  animation: none !important;
}

#tools-code-lite-render a,
#tools-code-lite-render button,
#tools-code-lite-render input {
  transition-duration: 0ms !important;
}

#tools-code-lite-render a:hover,
#tools-code-lite-render button:hover {
  transform: none !important;
}

#tools-code-lite-render .tools-code-paint-box {
  contain: layout paint style;
}
`;

export default function ExploreToolsCodePage() {
  return (
    <div id="tools-code-lite-render" className="space-y-8">
      <style dangerouslySetInnerHTML={{ __html: LITE_RENDER_CSS }} />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Explore", href: "/explore" },
          { label: "Convenient Tools & Code" },
        ]}
      />

      <section className="tools-code-paint-box rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Workbench-first · Lite render</p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Convenient Tools & Code
        </h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
          This directory uses a low-overhead render path: fixed decorative layers, background prefetch, floating chrome, blur effects, and nonessential animations are disabled here.
        </p>
      </section>

      <section id="convenient-tools" className="tools-code-paint-box scroll-mt-28">
        <ToolsCatalog />
      </section>

      <div className="tools-code-paint-box">
        <LazyToolsSharedFiles />
      </div>
    </div>
  );
}
