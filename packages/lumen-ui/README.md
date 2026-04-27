# Lumen UI

A design system for **Lumen** — landing-page-as-a-service for SMEs and modern brands. Editorial polish, conversion fundamentals, no Figma file.

This package is built **CWV-first**, since it's consumed by landing pages where Core Web Vitals are revenue:

- **Zero runtime CSS-in-JS.** Plain `.css` files, no JS to evaluate at runtime.
- **RSC-compatible by default.** Only `Nav` and `Newsletter` are client components.
- **Per-component CSS imports.** Only the styles for components you use ship.
- **No external font requests.** Fonts are loaded by the consumer (recommended: `next/font` or `@fontsource`).
- **Lucide icons** as a peer dep — not bundled.

## Install

```sh
pnpm add lumen-ui lucide-react
```

Peer deps: `react ^18 || ^19`, `react-dom`, `lucide-react`.

## Setup

In your app root, import the tokens once:

```ts
// app/globals.css (Next.js) or src/main.css (Vite)
@import "lumen-ui/styles/tokens.css";
@import "lumen-ui/styles/reset.css";
@import "lumen-ui/styles/typography.css";
```

Each component imports its own CSS, so unused components contribute zero styles to your bundle.

## Fonts

The system uses **Inter / Lora / IBM Plex Mono** — all chosen for full Vietnamese coverage including stacked diacritics.

We don't ship the font files. Load them however you prefer:

### Next.js (recommended for landing pages)

```tsx
// app/layout.tsx
import { Inter, Lora, IBM_Plex_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
  adjustFontFallback: true,
});

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
  adjustFontFallback: true,
});

const mono = IBM_Plex_Mono({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  adjustFontFallback: true,
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      className={`${inter.variable} ${lora.variable} ${mono.variable}`}
      style={{
        ["--font-sans" as string]: `${inter.style.fontFamily}, system-ui, sans-serif`,
        ["--font-serif" as string]: `${lora.style.fontFamily}, Georgia, serif`,
        ["--font-mono" as string]: `${mono.style.fontFamily}, ui-monospace, monospace`,
      }}
    >
      <body>{children}</body>
    </html>
  );
}
```

`adjustFontFallback: true` injects a fallback `@font-face` with `size-adjust` metrics, so swapping from system font to Inter/Lora produces no layout shift.

### Vite or others

Use `@fontsource/inter`, `@fontsource/lora`, `@fontsource/ibm-plex-mono` — all ship vi subsets.

### Quick start (not recommended for production)

```css
@import "lumen-ui/styles/fonts.css";
```

This loads from the Google Fonts CDN. Fine for prototyping; switch to one of the above for production CWV.

## Usage

```tsx
import { ArrowRight } from "lucide-react";
import { Button, Hero, Nav } from "lumen-ui";

export default function Page() {
  return (
    <>
      <Nav
        brand="Lumen"
        links={[{ label: "Pricing", href: "#pricing" }]}
        actions={
          <Button variant="primary" size="sm" trailingIcon={<ArrowRight />}>
            Start free
          </Button>
        }
      />
      <Hero
        eyebrow="Landing pages · for SMEs"
        title={<>Landing pages that <em>earn the click.</em></>}
        lede="Brief Monday, ship Friday."
        actions={<Button variant="accent" size="lg">Start free</Button>}
      />
    </>
  );
}
```

## Components

### Primitives

`Button`, `Input`, `Textarea`, `Select`, `Checkbox`, `Toggle`, `Field`, `Card`, `Badge`, `Tag`, `Eyebrow`, `Divider`, `Icon`, `Container`, `Section`.

### Patterns

`Nav` (client), `Footer`, `Hero`, `LogoCloud`, `FeatureGrid`, `Pricing`, `Testimonial`, `FAQ` (zero-JS via `<details>`), `CTA`, `Newsletter` (client).

## CWV notes

- **No render-blocking external requests.** All assets ship through your bundler.
- **`Nav` uses `backdrop-filter: blur(12px)`** on its sticky surface — this is paint-heavy on long scrolls. If a page targets very low-end mobile, consider passing `sticky={false}` or removing the blur in your override.
- **`FAQ` uses native `<details>`** — zero JS, zero hydration cost.
- **`prefers-reduced-motion`** collapses transition durations to 0 globally.
- **Components are ESM-only**, marked `"sideEffects": ["**/*.css"]` so consumer bundlers can tree-shake JS but keep CSS imports.

## Vietnamese

All three font families ship full vi subsets. Wrap Vietnamese content in `lang="vi"` for proper hyphenation. Stacked tones (ổ ề ẫ ớ ữ ự) tested via the `Foundations/Vietnamese` Storybook story.

## Development

```sh
pnpm install
pnpm --filter lumen-ui dev          # tsup watch
pnpm --filter lumen-ui storybook    # storybook dev
pnpm --filter demo dev              # Next.js consumer demo
```

Storybook covers all components and tokens. The `apps/demo` Next.js app validates SSR/RSC integration end-to-end.

## License

MIT.
