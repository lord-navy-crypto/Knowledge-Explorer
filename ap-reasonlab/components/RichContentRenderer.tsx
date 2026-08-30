"use client";

import katex from "katex";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { toLatexSource } from "@/lib/unicode-math";

type Mode = "markdown" | "math" | "inline-math";

type Props = {
  text: string;
  mode: Mode;
  className?: string;
  clampClass?: string;
};

const KATEX_REHYPE_OPTIONS = {
  throwOnError: false,
  strict: "ignore" as const,
  errorColor: "#b45309",
  trust: false,
};

function renderKatex(source: string, displayMode: boolean): string {
  return katex.renderToString(toLatexSource(source), {
    throwOnError: false,
    displayMode,
    strict: "ignore",
    trust: false,
    errorColor: "#b45309",
  });
}

export default function RichContentRenderer({
  text,
  mode,
  className = "",
  clampClass = "",
}: Props) {
  if (mode === "math" || mode === "inline-math") {
    const html = renderKatex(text, mode === "math");
    return (
      <div
        className={`rich-content rich-math overflow-x-auto ${clampClass} ${className}`.trim()}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div
      className={`rich-content prose-study ${clampClass} ${className}`.trim()}
      suppressHydrationWarning
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[[rehypeKatex, KATEX_REHYPE_OPTIONS]]}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}
