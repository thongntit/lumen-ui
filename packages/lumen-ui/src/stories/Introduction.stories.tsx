import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import {
  Badge,
  Button,
  CTA,
  Card,
  Eyebrow,
  FAQ,
  FeatureGrid,
  Footer,
  Hero,
  Nav,
  Section,
} from "../index";

const meta: Meta = {
  title: "Introduction",
  parameters: {
    layout: "fullscreen",
    options: { showPanel: false },
  },
};
export default meta;
type Story = StoryObj;

const Mark = () => (
  <span
    aria-hidden
    style={{
      display: "inline-block",
      width: 22,
      height: 22,
      borderRadius: 999,
      background: "var(--grad-sunrise)",
    }}
  />
);

const Brand = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <Mark />
    Lumen UI
  </span>
);

const Code = ({ children }: { children: string }) => (
  <pre
    style={{
      background: "var(--ink-950)",
      color: "var(--paper-100)",
      padding: 20,
      borderRadius: 12,
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1.6,
      overflow: "auto",
      margin: 0,
    }}
  >
    <code>{children}</code>
  </pre>
);

export const Welcome: Story = {
  render: () => (
    <div>
      <Nav
        brand={<Brand />}
        links={[
          { label: "Components", href: "?path=/story/components-button--variants" },
          { label: "Patterns", href: "?path=/story/patterns-hero--default" },
          { label: "Foundations", href: "?path=/story/foundations-colors--palette" },
          { label: "Vietnamese", href: "?path=/story/foundations-vietnamese--glyphs" },
        ]}
        sticky={false}
        actions={
          <Button
            variant="primary"
            size="sm"
            href="https://github.com/thongntit/lumen-ui"
            trailingIcon={<ArrowRight />}
          >
            View on GitHub
          </Button>
        }
      />

      <Hero
        eyebrow="Design system · for landing pages"
        title={
          <>
            Components that <em>earn the click.</em>
          </>
        }
        lede="A small, opinionated React library built for landing-page assembly. Editorial polish, conversion fundamentals, and Core Web Vitals — by default."
        actions={
          <>
            <Button
              variant="accent"
              size="lg"
              trailingIcon={<ArrowRight />}
              href="?path=/story/patterns-hero--default"
            >
              Browse the components
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href="?path=/story/foundations-colors--palette"
            >
              See the tokens
            </Button>
          </>
        }
      />

      <Section surface="white">
        <div
          style={{
            maxWidth: "var(--container-content)",
            margin: "0 auto",
            paddingInline: "var(--space-6)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "var(--space-6)",
            textAlign: "center",
          }}
        >
          {[
            { value: "25", label: "Components" },
            { value: "~5 KB", label: "JS, gzipped" },
            { value: "~8.5 KB", label: "CSS, gzipped" },
            { value: "0", label: "Runtime CSS-in-JS" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: "var(--lumen-600)",
                }}
              >
                {s.value}
              </div>
              <Eyebrow>{s.label}</Eyebrow>
            </div>
          ))}
        </div>
      </Section>

      <Section surface="paper">
        <FeatureGrid
          eyebrow="Why this library"
          heading="A landing-page kit, tuned for the metrics that matter."
          features={[
            {
              icon: "✦",
              title: "CWV-first build.",
              description:
                "Plain CSS + per-component imports. No runtime CSS-in-JS, no font CDN, no surprise JS. Tree-shakes cleanly to ~3 KB gz for an above-the-fold subset.",
            },
            {
              icon: "→",
              title: "RSC-compatible by default.",
              description:
                "Only Nav and Newsletter are client components. Everything else is RSC-safe and renders on first paint with zero hydration cost.",
              variant: "dark",
            },
            {
              icon: "✓",
              title: "Vietnamese-first typography.",
              description:
                "Inter / Lora / IBM Plex Mono — all chosen for full Vietnamese coverage including stacked diacritics. Tested in the Foundations/Vietnamese story.",
              variant: "pull",
            },
          ]}
        />
      </Section>

      <Section surface="white">
        <div
          style={{
            maxWidth: 880,
            margin: "0 auto",
            paddingInline: "var(--space-6)",
            display: "grid",
            gap: "var(--space-6)",
          }}
        >
          <Eyebrow>Get started</Eyebrow>
          <h2 className="lm-h2" style={{ margin: 0 }}>
            Install once. Tree-shake by default.
          </h2>
          <Code>{`pnpm add lumen-ui lucide-react`}</Code>
          <Code>{`/* app/globals.css */
@import "lumen-ui/styles/tokens.css";
@import "lumen-ui/styles/reset.css";
@import "lumen-ui/styles/typography.css";`}</Code>
          <Code>{`import { Hero, Button } from "lumen-ui";

export default function Page() {
  return (
    <Hero
      eyebrow="Landing pages · for SMEs"
      title={<>Landing pages that <em>earn the click.</em></>}
      lede="Brief Monday, ship Friday."
      actions={<Button variant="accent">Start free</Button>}
    />
  );
}`}</Code>
        </div>
      </Section>

      <Section surface="subtle">
        <div
          style={{
            maxWidth: "var(--container-content)",
            margin: "0 auto",
            paddingInline: "var(--space-6)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "var(--space-8)",
              gap: "var(--space-4)",
              flexWrap: "wrap",
            }}
          >
            <div>
              <Eyebrow>What's inside</Eyebrow>
              <h2 className="lm-h2" style={{ margin: "var(--space-2) 0 0" }}>
                Primitives and patterns.
              </h2>
            </div>
            <Badge tone="solid">v0.1.0</Badge>
          </div>

          <div
            style={{
              display: "grid",
              gap: "var(--space-4)",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}
          >
            <Card>
              <Eyebrow accent>Primitives · 15</Eyebrow>
              <h3 className="lm-h3" style={{ margin: "var(--space-2) 0 var(--space-3)" }}>
                Building blocks.
              </h3>
              <p style={{ margin: 0, fontSize: 14 }}>
                Button · Input · Textarea · Select · Checkbox · Toggle · Field · Card ·
                Badge · Tag · Eyebrow · Divider · Icon · Container · Section.
              </p>
            </Card>
            <Card>
              <Eyebrow accent>Patterns · 10</Eyebrow>
              <h3 className="lm-h3" style={{ margin: "var(--space-2) 0 var(--space-3)" }}>
                Composed sections.
              </h3>
              <p style={{ margin: 0, fontSize: 14 }}>
                Nav · Footer · Hero · LogoCloud · FeatureGrid · Pricing · Testimonial ·
                FAQ · CTA · Newsletter.
              </p>
            </Card>
            <Card>
              <Eyebrow accent>Tokens · 100+</Eyebrow>
              <h3 className="lm-h3" style={{ margin: "var(--space-2) 0 var(--space-3)" }}>
                Design foundations.
              </h3>
              <p style={{ margin: 0, fontSize: 14 }}>
                Color · type · spacing · radii · shadows · motion · gradients. All as
                CSS variables — no Tailwind config required.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      <Section surface="white">
        <FAQ
          eyebrow="The fine print"
          heading="A few things worth knowing."
          items={[
            {
              question: "Is Lumen UI production-ready?",
              answer:
                "It's at v0.1.0 — APIs may shift before 1.0. The components and tokens are stable enough for landing pages today; the surface is small enough to fix breakages quickly.",
              defaultOpen: true,
            },
            {
              question: "Does it work with Next.js App Router?",
              answer:
                "Yes. Components are RSC-compatible by default. Only Nav (mobile menu) and Newsletter (form state) are 'use client'. The library ships ESM with proper exports for tree-shaking.",
            },
            {
              question: "Why not Tailwind / shadcn / Radix?",
              answer:
                "Different tradeoffs. Lumen ships plain CSS + tokens because landing pages are CWV-sensitive and runtime CSS-in-JS / heavy primitive libraries cost bytes. Bring your own primitives if you need them.",
            },
            {
              question: "How do I customize the design?",
              answer:
                "Override CSS custom properties at any scope. Change --lumen-500 to your brand color and the entire system follows. See Foundations/Colors for the full palette.",
            },
          ]}
        />
      </Section>

      <Section surface="paper">
        <CTA
          heading={
            <>
              Ready to <em>browse?</em>
            </>
          }
          description="Start with the Foundations, then move to Components and Patterns. Everything is in the sidebar."
          actions={
            <>
              <Button
                variant="secondary"
                href="?path=/story/foundations-colors--palette"
              >
                Foundations
              </Button>
              <Button
                variant="accent"
                trailingIcon={<ArrowRight />}
                href="?path=/story/components-button--variants"
              >
                Components
              </Button>
            </>
          }
        />
      </Section>

      <Footer
        brand={<Brand />}
        links={[
          { label: "GitHub", href: "https://github.com/thongntit/lumen-ui" },
          { label: "Demo", href: "?path=/story/patterns-hero--default" },
          { label: "Vietnamese", href: "?path=/story/foundations-vietnamese--glyphs" },
        ]}
        small="© 2026 LUMEN STUDIO · MIT"
      />
    </div>
  ),
};
