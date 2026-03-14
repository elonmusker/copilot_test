# IronClaw Landing Page Clone

A 1:1 clone of [ironclaw.com](https://www.ironclaw.com), built with **Next.js (App Router) + TypeScript + Tailwind CSS + Shiki**.

> Built with authorization from the site owner, for learning/internal testing purposes only.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Shiki** — syntax highlighting for code blocks
- **Geist** font (via `next/font/google`)

## Project Structure

```
app/
  layout.tsx      # Root layout with metadata & fonts
  page.tsx        # Single-page entry point
  globals.css     # Tailwind + global styles
components/
  Header.tsx      # Sticky nav with mobile hamburger
  Hero.tsx        # Hero section with CTA buttons
  Badges.tsx      # Feature badge strip
  HowItWorks.tsx  # 3-step guide with code blocks
  Features.tsx    # Security feature cards grid
  ProblemSolution.tsx  # Problem → Solution comparison
  CompareTable.tsx     # OpenClaw vs IronClaw table
  Pricing.tsx     # Pricing cards (Starter/Basic/Pro+)
  Footer.tsx      # Footer with links
  CodeBlock.tsx   # Shiki-powered code block with copy button
```

## Local Development

### Prerequisites

- Node.js 18+ 
- npm / pnpm / yarn

### Using npm

```bash
npm install
npm run dev
```

### Using pnpm

```bash
pnpm install
pnpm dev
```

### Using yarn

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
# npm
npm run build && npm start

# pnpm
pnpm build && pnpm start
```

## Features

- ✅ Single-page with anchor scroll navigation (`#how-it-works`, `#features`, `#why-switch`, `#compare`, `#pricing`)
- ✅ Responsive header with mobile hamburger menu
- ✅ Smooth scroll with header offset compensation
- ✅ Shiki syntax highlighting with copy button
- ✅ Full dark theme matching ironclaw.com
- ✅ Accessible (keyboard navigation, focus rings, ARIA labels)
- ✅ TypeScript — no `any` types
