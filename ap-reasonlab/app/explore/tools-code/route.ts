import { TOOL_WORKBENCHES } from "@/data/tool-workbenches";

export const dynamic = "force-static";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function workbenchCards() {
  return TOOL_WORKBENCHES.map(
    (workbench) => `
      <a class="card" href="${escapeHtml(workbench.href)}">
        <div class="card-top">
          <span class="eyebrow">Workbench</span>
          <span class="count">${workbench.moduleIds.length} modules</span>
        </div>
        <h2>${escapeHtml(workbench.title)}</h2>
        <p>${escapeHtml(workbench.blurb)}</p>
        <div class="capabilities">${escapeHtml(workbench.capabilityLabel)}</div>
        <div class="open">Open workbench →</div>
      </a>`
  ).join("");
}

function documentHtml() {
  return `<!doctype html>
<html lang="en" translate="no" class="notranslate">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <meta name="theme-color" content="#f7f4ee" />
  <meta name="google" content="notranslate" />
  <title>Convenient Tools &amp; Code — Knowledge Explorer</title>
  <meta name="description" content="Fast static launchpad for Knowledge Explorer workbenches and external tools." />
  <style>
    :root{color-scheme:light;font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:#f7f4ee;color:#152a45}
    *{box-sizing:border-box}
    html{background:#f7f4ee}
    body{margin:0;background:#f7f4ee;color:#152a45;min-height:100vh}
    a{color:inherit;text-decoration:none}
    .shell{max-width:1120px;margin:0 auto;padding:22px 18px 48px}
    .topbar{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:8px 0 22px;border-bottom:1px solid #d8dce2}
    .brand{display:flex;align-items:center;gap:10px;font-weight:800;letter-spacing:-.02em}
    .logo{display:grid;place-items:center;width:34px;height:34px;border-radius:8px;background:#1e3a5f;color:white;font-size:11px;letter-spacing:.06em}
    .nav{display:flex;gap:8px;flex-wrap:wrap}
    .nav a{padding:8px 11px;border-radius:9px;font-size:13px;font-weight:700;color:#40536d}
    .nav a:hover{background:#edf1f5}
    .hero{padding:34px 0 24px}
    .kicker{font-size:11px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#335f91}
    h1{margin:8px 0 10px;font-size:clamp(30px,5vw,48px);line-height:1.04;letter-spacing:-.035em}
    .lead{margin:0;max-width:760px;font-size:16px;line-height:1.65;color:#5d6876}
    .speed-note{display:inline-flex;margin-top:16px;padding:7px 10px;border:1px solid #cfd8e4;border-radius:999px;background:#fff;font-size:12px;font-weight:700;color:#46617f}
    .section-head{display:flex;align-items:end;justify-content:space-between;gap:16px;margin:12px 0 14px;padding-bottom:10px;border-bottom:1px solid #ccd3dc}
    .section-head h2{margin:0;font-size:21px}
    .section-head p{margin:0;color:#6b7280;font-size:13px}
    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .card{display:flex;flex-direction:column;min-height:224px;padding:18px;border:1px solid #cdd8e6;border-radius:16px;background:#fff}
    .card:hover{border-color:#829bb8;background:#fbfdff}
    .card-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
    .eyebrow{font-size:10px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;color:#3c6999}
    .count{font-size:10px;font-weight:800;color:#51667d;background:#eef3f8;padding:5px 8px;border-radius:999px}
    .card h2{margin:12px 0 8px;font-size:20px;line-height:1.2;letter-spacing:-.02em}
    .card p{margin:0;font-size:14px;line-height:1.55;color:#68717d}
    .capabilities{margin-top:13px;font-size:12px;line-height:1.5;font-weight:800;color:#2f5d8b}
    .open{margin-top:auto;padding-top:18px;font-size:13px;font-weight:800;color:#2b5d8e}
    .external{margin-top:30px;padding-top:24px;border-top:1px solid #ccd3dc}
    .external-card{display:block;margin-top:12px;padding:18px;border:1px solid #d4d9df;border-radius:14px;background:#fff}
    .external-card strong{display:block;font-size:18px;margin-bottom:6px}
    .external-card span{font-size:14px;line-height:1.5;color:#69717a}
    .footer{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;margin-top:32px;padding-top:18px;border-top:1px solid #d6d9dd;color:#727a84;font-size:12px}
    .footer a{font-weight:800;color:#3c6086}
    @media(max-width:900px){.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:620px){.shell{padding:16px 14px 34px}.topbar{align-items:flex-start}.nav{justify-content:flex-end}.hero{padding-top:26px}.grid{grid-template-columns:1fr}.card{min-height:0}.section-head{align-items:flex-start;flex-direction:column}}
  </style>
</head>
<body translate="no" class="notranslate">
  <main class="shell">
    <header class="topbar">
      <a class="brand" href="/"><span class="logo">KE</span><span>Knowledge Explorer</span></a>
      <nav class="nav" aria-label="Primary">
        <a href="/explore">Explore</a>
        <a href="/ap">AP</a>
        <a href="/english">English</a>
        <a href="/forum">Forum</a>
      </nav>
    </header>

    <section class="hero">
      <div class="kicker">Workbench-first</div>
      <h1>Convenient Tools &amp; Code</h1>
      <p class="lead">Choose one workbench and go directly to it. Covered small tools stay inside their workbench, while external connections remain separate.</p>
      <div class="speed-note">Static launchpad · no React hydration · no background prefetch</div>
    </section>

    <section aria-labelledby="workbenches-heading">
      <div class="section-head">
        <div><div class="kicker">Primary tools</div><h2 id="workbenches-heading">Workbenches</h2></div>
        <p>Only the workspace you click will load.</p>
      </div>
      <div class="grid">${workbenchCards()}</div>
    </section>

    <section class="external" id="external-tools">
      <div class="kicker">Separate</div>
      <h2>External Connections &amp; Tools</h2>
      <a class="external-card" href="/tools/external">
        <strong>Open external connections →</strong>
        <span>Off-site resources stay separate because they cannot be absorbed into a local workbench.</span>
      </a>
    </section>

    <footer class="footer">
      <span>This launchpad intentionally runs without the normal site app shell.</span>
      <a href="/explore/tools-code/full">Full app view + shared files</a>
    </footer>
  </main>
</body>
</html>`;
}

export function GET() {
  return new Response(documentHtml(), {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
