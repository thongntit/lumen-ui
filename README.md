# Lumen UI — monorepo

Source for the **Lumen Design System** — components for landing-page assembly.

```
packages/
  lumen-ui/      # the published library
apps/
  demo/          # Next.js consumer demo (English + Vietnamese)
```

## Quick start

```sh
corepack enable pnpm   # one-time
pnpm install
pnpm build             # builds the library
pnpm storybook         # component dev (port 6006)
pnpm demo              # next.js demo (port 3000)
```

See [`packages/lumen-ui/README.md`](./packages/lumen-ui/README.md) for usage docs.

## Layout

| Path | Purpose |
|---|---|
| `packages/lumen-ui/src/styles/` | Design tokens (`tokens.css`), reset, typography, fonts |
| `packages/lumen-ui/src/components/` | One folder per component — `.tsx`, `.css`, `.stories.tsx` |
| `packages/lumen-ui/.storybook/` | Storybook config (Vite framework) |
| `apps/demo/` | Next.js 15 app importing `lumen-ui` (English + `/vi`) |

## CWV-first design

This library is consumed by landing pages where Core Web Vitals matter. Decisions:

- Plain CSS, no runtime CSS-in-JS
- RSC-compatible by default; only `Nav` and `Newsletter` are `"use client"`
- Per-component CSS imports — unused components contribute 0 styles
- Fonts loaded by the consumer (not bundled), with `next/font` recipe documented
- Lucide as a peer dep, not bundled
- Zero-JS FAQ accordion via native `<details>`
- `prefers-reduced-motion` honored at the token level

## License

MIT.
