import { type ChangeEvent, useEffect, useState } from "react";
import { PDFDocument, degrees } from "pdf-lib";
import { exportFile } from "../lib/output";

type Tab = "pdf" | "images" | "word";
type PdfMode = "merge" | "split" | "rotate" | "compress";
type ImageFormat = "image/jpeg" | "image/png" | "image/webp";

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function safeName(value: string): string {
  return value.replace(/\.[^.]+$/, "").replace(/[^\p{L}\p{N}._-]+/gu, "-").slice(0, 60) || "output";
}

function parsePages(value: string, count: number): number[] {
  const chosen = new Set<number>();
  if (count < 1) return [];
  for (const raw of value.split(",")) {
    const part = raw.trim();
    if (!part) continue;
    const match = /^(\d+)(?:-(\d*))?$/.exec(part);
    if (!match) throw new Error("Use page numbers such as 1-3,5,7-");
    const start = Number(match[1]);
    const end = match[2] === undefined ? start : match[2] === "" ? count : Number(match[2]);
    if (start < 1 || end > count || start > end) throw new Error("Page range is out of bounds");
    for (let i = start; i <= end; i += 1) chosen.add(i - 1);
  }
  if (chosen.size === 0) throw new Error("Select at least one page");
  return [...chosen].sort((a, b) => a - b);
}

export default function FileDesk() {
  const [tab, setTab] = useState<Tab>("pdf");
  const [pdfMode, setPdfMode] = useState<PdfMode>("merge");
  const [files, setFiles] = useState<File[]>([]);
  const [pages, setPages] = useState("1-");
  const [rotation, setRotation] = useState(90);
  const [pdfCount, setPdfCount] = useState(0);
  const [image, setImage] = useState<File | null>(null);
  const [imageSource, setImageSource] = useState("");
  const [imageWidth, setImageWidth] = useState(1600);
  const [imageFormat, setImageFormat] = useState<ImageFormat>("image/jpeg");
  const [quality, setQuality] = useState(.82);
  const [doc, setDoc] = useState<File | null>(null);
  const [markdown, setMarkdown] = useState("");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!image) {
      setImageSource("");
      return;
    }
    const url = URL.createObjectURL(image);
    setImageSource(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  async function onPdfChange(event: ChangeEvent<HTMLInputElement>) {
    const selected = [...(event.target.files ?? [])].slice(0, 20);
    setFiles(selected);
    setPdfCount(0);
    setPages("1-");
    setStatus("");
    const first = selected[0];
    if (!first) return;
    try {
      const document = await PDFDocument.load(await first.arrayBuffer());
      const n = document.getPageCount();
      setPdfCount(n);
      setPages(`1-${n}`);
    } catch {
      setStatus("Could not read the selected PDF. Choose an unencrypted PDF file.");
    }
  }

  async function processPdf() {
    if (!files.length) return;
    setBusy(true);
    setStatus("");
    try {
      if (pdfMode === "merge") {
        const output = await PDFDocument.create();
        for (const file of files) {
          const source = await PDFDocument.load(await file.arrayBuffer());
          const copied = await output.copyPages(source, source.getPageIndices());
          copied.forEach((page) => output.addPage(page));
        }
        const saved = await exportFile("merged.pdf", await output.save());
        setStatus(saved ? `Merged ${files.length} PDFs locally.` : "Save cancelled.");
      } else {
        const file = files[0];
        const source = await PDFDocument.load(await file.arrayBuffer());
        const selected = parsePages(pages, source.getPageCount());
        if (pdfMode === "split") {
          const output = await PDFDocument.create();
          const copied = await output.copyPages(source, selected);
          copied.forEach((page) => output.addPage(page));
          const saved = await exportFile(safeName(file.name) + "-pages.pdf", await output.save());
          setStatus(saved ? `Exported ${selected.length} pages.` : "Save cancelled.");
        } else if (pdfMode === "rotate") {
          for (const index of selected) {
            const page = source.getPage(index);
            page.setRotation(degrees((page.getRotation().angle + rotation) % 360));
          }
          const saved = await exportFile(safeName(file.name) + "-rotated.pdf", await source.save());
          setStatus(saved ? `Rotated ${selected.length} pages.` : "Save cancelled.");
        } else {
          const saved = await exportFile(safeName(file.name) + "-optimized.pdf", await source.save({ useObjectStreams: true }));
          setStatus(saved ? "Re-serialized this PDF with object streams. File size may increase; this does not downsample embedded images." : "Save cancelled.");
        }
      }
    } catch (error) {
      setStatus("PDF operation failed: " + errorMessage(error));
    } finally {
      setBusy(false);
    }
  }

  async function processImage() {
    if (!image) return;
    setBusy(true);
    setStatus("");
    try {
      const img = new Image();
      const objectUrl = URL.createObjectURL(image);
      try {
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Unsupported image format"));
          img.src = objectUrl;
        });
        const scale = Math.min(1, imageWidth / img.naturalWidth);
        const width = Math.max(1, Math.round(img.naturalWidth * scale));
        const height = Math.max(1, Math.round(img.naturalHeight * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas unavailable");
        if (imageFormat === "image/jpeg") {
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, width, height);
        }
        ctx.drawImage(img, 0, 0, width, height);
        const blob = await new Promise<Blob>((resolve, reject) =>
          canvas.toBlob((output) => output ? resolve(output) : reject(new Error("Image encoding failed")), imageFormat, quality)
        );
        const extension = imageFormat === "image/jpeg" ? "jpg" : imageFormat === "image/webp" ? "webp" : "png";
        const saved = await exportFile(safeName(image.name) + "-optimized." + extension, new Uint8Array(await blob.arrayBuffer()));
        setStatus(saved ? `Saved ${width}×${height} image · ${(blob.size / 1024).toFixed(1)} KB (original ${(image.size / 1024).toFixed(1)} KB).` : "Save cancelled.");
      } finally { URL.revokeObjectURL(objectUrl); }
    } catch (error) {
      setStatus("Image operation failed: " + errorMessage(error));
    } finally { setBusy(false); }
  }

  async function convertWord() {
    if (!doc) return;
    setBusy(true);
    setStatus("");
    try {
      if (!/\.docx$/i.test(doc.name)) throw new Error("Only .docx files are supported.");
      const mammoth = await import("mammoth");
      const result = await mammoth.convertToMarkdown({ arrayBuffer: await doc.arrayBuffer() });
      setMarkdown(result.value || "");
      setStatus(`Converted locally. ${result.messages.length} conversion note(s).`);
    } catch (error) { setStatus("Word import failed: " + errorMessage(error)); }
    finally { setBusy(false); }
  }

  return (
    <section className="panel">
      <p className="eyebrow">OFFLINE FILE LAB</p>
      <h2>File workbench</h2>
      <p className="subtle">Ported from the web file lab. Your selected documents stay in this app, without uploading to the AP website.</p>
      <div className="pill-row" role="group" aria-label="File tool">
        {(["pdf", "images", "word"] as const).map((item) => <button key={item} type="button" className={tab === item ? "pill active-pill" : "pill"} onClick={() => { setTab(item); setStatus(""); }}>{item === "pdf" ? "PDF desk" : item === "images" ? "Image desk" : "Word → Markdown"}</button>)}
      </div>
      {tab === "pdf" && <>
        <div className="pill-row compact" role="group" aria-label="PDF operation">
          {(["merge", "split", "rotate", "compress"] as const).map((item) => <button type="button" key={item} onClick={() => { setPdfMode(item); setFiles([]); setStatus(""); }} className={pdfMode === item ? "pill active-pill" : "pill"}>{item === "compress" ? "Optimize (light)" : item[0].toUpperCase() + item.slice(1)}</button>)}
        </div>
        <label htmlFor="pdf-picker" className="field-label">{pdfMode === "merge" ? "Choose up to 20 PDFs in order" : "Choose a PDF"}</label>
        <input id="pdf-picker" className="field" type="file" accept=".pdf,application/pdf" multiple={pdfMode === "merge"} onChange={(event) => { void onPdfChange(event); }} />
        {files.length > 0 && <p className="subtle">Selected: {files.map((file) => file.name).join(" · ")} {pdfCount > 0 && `· first PDF ${pdfCount} page(s)`}</p>}
        {(pdfMode === "split" || pdfMode === "rotate") && <><label className="field-label" htmlFor="pdf-pages">Pages (e.g. 1-3,5,7-)</label><input id="pdf-pages" className="field" value={pages} onChange={(e) => setPages(e.target.value)} /></>}
        {pdfMode === "rotate" && <><label className="field-label" htmlFor="pdf-angle">Degrees clockwise</label><select id="pdf-angle" className="field" value={rotation} onChange={(e) => setRotation(Number(e.target.value))}><option value={90}>90°</option><option value={180}>180°</option><option value={270}>270°</option></select></>}
        {pdfMode === "compress" && <p className="subtle">Like the web's light-compress mode, this reserializes PDF objects. Scanned/image-heavy PDFs may not shrink.</p>}
        <div className="actions"><button type="button" className="primary-button" disabled={!files.length || busy} onClick={() => { void processPdf(); }}>{busy ? "Processing…" : "Process & save PDF"}</button></div>
      </>}
      {tab === "images" && <>
        <label className="field-label" htmlFor="image-picker">Choose an image</label>
        <input id="image-picker" className="field" type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] ?? null)} />
        {imageSource && <img src={imageSource} alt="Selected file preview" style={{ maxWidth: 320, maxHeight: 220, objectFit: "contain", display: "block", marginTop: 16 }} />}
        <label className="field-label" htmlFor="image-width">Maximum width (keeps aspect ratio)</label>
        <input id="image-width" type="number" className="field" min={64} max={8192} value={imageWidth} onChange={(e) => setImageWidth(Math.max(64,Math.min(8192,Number(e.target.value)||1600)))} />
        <label className="field-label" htmlFor="image-format">Output format</label>
        <select id="image-format" className="field" value={imageFormat} onChange={(e) => setImageFormat(e.target.value as ImageFormat)}><option value="image/jpeg">JPEG</option><option value="image/webp">WebP</option><option value="image/png">PNG</option></select>
        <label className="field-label" htmlFor="image-quality">Quality · {Math.round(quality*100)}%</label>
        <input id="image-quality" type="range" min={.3} max={1} step={.05} value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
        <div className="actions"><button type="button" className="primary-button" disabled={!image || busy} onClick={() => { void processImage(); }}>{busy ? "Converting…" : "Convert & save image"}</button></div>
      </>}
      {tab === "word" && <>
        <label htmlFor="word-picker" className="field-label">Choose .docx Word document</label>
        <input id="word-picker" className="field" type="file" accept=".docx" onChange={(e) => setDoc(e.target.files?.[0] ?? null)} />
        <div className="actions"><button className="primary-button" type="button" disabled={!doc || busy} onClick={() => { void convertWord(); }}>Import document</button><button type="button" className="secondary-button" disabled={!markdown} onClick={() => { void exportFile(safeName(doc?.name || "document") + ".md", markdown).then(ok=>setStatus(ok?"Markdown saved.":"Save cancelled.")).catch(e=>setStatus(errorMessage(e))); }}>Save Markdown</button></div>
        {markdown && <><label htmlFor="word-converted" className="field-label">Editable Markdown</label><textarea id="word-converted" className="field text-editor" rows={12} value={markdown} onChange={(e) => setMarkdown(e.target.value)} /></>}
      </>}
      {status && <p role="status" className="subtle">{status}</p>}
    </section>
  );
}
