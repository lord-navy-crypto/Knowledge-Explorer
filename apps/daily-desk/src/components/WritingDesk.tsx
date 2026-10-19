import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { exportFile } from "../lib/output";
import "katex/dist/katex.min.css";

type Props = { markdown: string; onChange: (markdown: string) => void };

export default function WritingDesk({ markdown, onChange }: Props) {
  const [filename, setFilename] = useState("my-study-document");
  const [status, setStatus] = useState("");
  const words = markdown.trim() ? markdown.trim().split(/\s+/u).length : 0;

  async function saveDocument(format: "md" | "txt") {
    try {
      const name = filename.trim().replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^\.+/, "") || "document";
      const saved = await exportFile(name + "." + format, markdown);
      setStatus(saved ? "Document saved locally." : "Save cancelled.");
    } catch (error) {
      setStatus(error instanceof Error ? error.message : String(error));
    }
  }

  return (
    <section className="panel writing-workbench">
      <p className="eyebrow">WRITE & CONVERT · LOCAL EDITOR</p>
      <h2>Writing workbench</h2>
      <p className="subtle">Write Markdown and LaTeX, preview as formatted text, and export Markdown/plain-text. Use the system Print dialog to save the preview as PDF where supported.</p>
      <div className="actions">
        <label className="field-label" htmlFor="writing-name">Document name</label>
        <input className="field" id="writing-name" value={filename} onChange={(event) => setFilename(event.target.value)} maxLength={80}/>
        <button className="secondary-button" type="button" onClick={() => { void saveDocument("md"); }}>Save Markdown</button>
        <button className="secondary-button" type="button" onClick={() => { void saveDocument("txt"); }}>Save text</button>
        <button className="primary-button" type="button" onClick={() => { window.print(); }}>Print / save PDF</button>
      </div>
      <div className="writing-grid">
        <div>
          <label htmlFor="writing-markdown" className="field-label">Markdown source</label>
          <textarea id="writing-markdown" value={markdown} onChange={(event)=>onChange(event.target.value)} className="field writing-textarea" spellCheck rows={19} placeholder={"# My notes\n\nWrite **Markdown** and $E = mc^2$ here…"} />
          <p className="subtle">{words} words · {markdown.length} characters · autosaved to Daily Desk's native workspace.</p>
        </div>
        <div>
          <span className="field-label">Live preview</span>
          <article className="markdown-preview printable-document" aria-label="Document preview">
            <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{markdown}</Markdown>
          </article>
        </div>
      </div>
      {status&&<p className="subtle" role="status">{status}</p>}
    </section>
  );
}
