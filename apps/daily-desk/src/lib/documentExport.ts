import { Document, HeadingLevel, Packer, Paragraph, TextRun } from "docx";

export type DocumentBlock = { kind: "paragraph" | "heading" | "list" | "quote" | "code"; content: string; level?: number };

export function parseMarkdownBlocks(input: string): DocumentBlock[] {
  const output: DocumentBlock[] = [];
  let code = false;
  for (const line of input.split(/\r?\n/u)) {
    if (line.trim().startsWith("```")) {code=!code;continue;}
    if(code){output.push({kind:"code",content:line});continue;}
    if(!line.trim()){output.push({kind:"paragraph",content:""});continue;}
    const h=/^(#{1,6})\s+(.+)$/u.exec(line);
    if(h){output.push({kind:"heading",level:h[1].length,content:h[2]});continue;}
    const list=/^\s*(?:[-*+]\s+|\d+\.\s+)(.*)$/u.exec(line);
    if(list){output.push({kind:"list",content:list[1]});continue;}
    if(line.trimStart().startsWith("> ")){output.push({kind:"quote",content:line.trimStart().slice(2)});continue;}
    output.push({kind:"paragraph",content:line});
  }
  return output.slice(0, 5000);
}

export function docxParagraphs(markdown: string): Paragraph[] {
  const headingLevels = [
    HeadingLevel.HEADING_1, HeadingLevel.HEADING_2, HeadingLevel.HEADING_3,
    HeadingLevel.HEADING_4, HeadingLevel.HEADING_5, HeadingLevel.HEADING_6,
  ];
  return parseMarkdownBlocks(markdown).map(block => {
    const content = block.content.replace(/\*\*([^*]+)\*\*/gu,"$1").replace(/\*([^*]+)\*/gu,"$1");
    const prefix = block.kind==="list" ? "• " : block.kind==="quote" ? "│ " : "";
    const isHeading=block.kind==="heading";
    return new Paragraph({
      heading:isHeading ? headingLevels[(block.level??1)-1] : undefined,
      children:[new TextRun({text:prefix+content,font:"Arial",size:22})],
      spacing:{after:block.kind==="heading"?200:95},
    });
  });
}

export async function markdownToDocx(markdown: string): Promise<Uint8Array> {
  const document = new Document({
    creator:"Daily Desk",
    title:"Daily Desk Document",
    sections:[{properties:{},children:docxParagraphs(markdown)}],
  });
  const blob=await Packer.toBlob(document);
  return new Uint8Array(await blob.arrayBuffer());
}
