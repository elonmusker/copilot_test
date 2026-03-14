import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IronClaw — Defense-in-Depth Security for AI Agents",
  description:
    "IronClaw is an open-source, Rust-powered security layer for AI coding agents. Encrypted vaults, sandboxed tools, encrypted enclaves, and full audit logs — deployed in one click.",
  keywords: [
    "AI agent security",
    "encrypted vault",
    "sandboxed tools",
    "open source",
    "Rust",
    "defense-in-depth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0a0c10] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
