"use client";

import { useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showCopy?: boolean;
}

export default function CodeBlock({
  code,
  language = "bash",
  filename,
  showCopy = true,
}: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function highlight() {
      try {
        const { codeToHtml } = await import("shiki");
        const html = await codeToHtml(code, {
          lang: language,
          theme: "github-dark",
        });
        if (!cancelled) setHighlighted(html);
      } catch {
        // fallback: plain text
        if (!cancelled) setHighlighted("");
      }
    }
    highlight();
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          {/* Traffic-light dots */}
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        {filename && (
          <span className="text-xs text-gray-500 font-mono">{filename}</span>
        )}
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-white px-2 py-1 rounded transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-orange-500"
            aria-label="Copy code"
          >
            {copied ? (
              <span className="flex items-center gap-1 text-green-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Copied!
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </span>
            )}
          </button>
        )}
      </div>

      {/* Code content */}
      {highlighted ? (
        <div
          className="p-4 overflow-x-auto text-sm leading-relaxed [&>pre]:!bg-transparent [&>pre]:!p-0 [&>pre]:m-0"
          dangerouslySetInnerHTML={{ __html: highlighted }}
        />
      ) : (
        <pre className="p-4 overflow-x-auto text-sm leading-relaxed text-gray-300 font-mono">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
}
