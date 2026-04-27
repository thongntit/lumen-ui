import { ArrowRight } from "lucide-react";
import {
  Badge,
  Button,
  CTA,
  FAQ,
  FeatureGrid,
  Footer,
  Hero,
  LogoCloud,
  Nav,
  Pricing,
  Section,
  Testimonial,
} from "@thongntit/lumen-ui";

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
    Lumen
  </span>
);

export default function Page() {
  return (
    <>
      <Nav
        brand={<Brand />}
        links={[
          { label: "Templates", href: "#templates" },
          { label: "Pricing", href: "#pricing" },
          { label: "Work", href: "#work" },
          { label: "Journal", href: "#journal" },
        ]}
        actions={
          <>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
            <Button variant="primary" size="sm" trailingIcon={<ArrowRight />}>
              Get a quote
            </Button>
          </>
        }
      />

      <Hero
        eyebrow="Landing pages · for SMEs and modern brands"
        title={
          <>
            Landing pages that <em>earn the click.</em>
          </>
        }
        lede="Brief Monday — live Friday. We write the words, design the page, set up the analytics, and run the first A/B test. No Figma file. No developer. No surprise invoice."
        actions={
          <>
            <Button variant="accent" size="lg" trailingIcon={<ArrowRight />}>
              Get a free quote
            </Button>
            <Button variant="secondary" size="lg">
              See templates
            </Button>
          </>
        }
      />

      <Section surface="white">
        <LogoCloud
          label="200+ pages shipped for SMEs, founders, and indie studios"
          logos={["Hearth", "Ferment", "Plumb.", "North & Co", "Atelier", "Foothold"].map(
            (name) => (
              <span
                key={name}
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 24,
                }}
              >
                {name}
              </span>
            ),
          )}
        />
      </Section>

      <Section surface="paper" id="templates">
        <FeatureGrid
          eyebrow="What you get"
          heading="A landing page that does its job."
          features={[
            {
              icon: "✦",
              title: "Live in seven days.",
              description:
                "Brief Monday, ship Friday. Copy, design, one revision round, and the page pushed to your domain — all included.",
            },
            {
              icon: "→",
              title: "Designed from real data.",
              description:
                "Layouts pulled from 200+ pages we've actually shipped. Every CTA has a reason — we don't chase trends.",
              variant: "dark",
            },
            {
              icon: "✓",
              title: "Wired up — no extras.",
              description:
                "Google Analytics 4, GTM, Facebook Pixel, MailChimp, webhook to Slack. Set up and tested before handover.",
              variant: "pull",
            },
          ]}
        />
      </Section>

      <Section surface="subtle">
        <Testimonial
          badge={
            <Badge tone="new" dot>
              Customer · Hearth Studio
            </Badge>
          }
          quote={
            <>
              Lumen shipped in eight days — and our conversion rate <em>tripled</em> against the old page.
            </>
          }
          attribution="Mai Lan"
          role="Founder, Hearth Studio"
        />
      </Section>

      <Section surface="paper" id="pricing">
        <Pricing
          eyebrow="Pricing"
          heading="Pick a plan. Or don't — we'll suggest one."
          tiers={[
            {
              name: "Starter",
              price: "$390",
              cadence: "/ page",
              description:
                "A landing page from a battle-tested template. Right for product launches and short campaigns.",
              features: [
                "1 page",
                "Custom copy",
                "1 revision round",
                "Pixel + GA4 + form",
                "Live in 5 days",
              ],
              action: <Button variant="secondary">Pick Starter</Button>,
            },
            {
              name: "Studio",
              price: "$890",
              cadence: "/ page",
              description:
                "A page designed top-to-bottom for your brand, with analytics and a 30-day A/B plan.",
              features: [
                "1 page, fully custom",
                "Copy + design + photo direction",
                "2 revision rounds",
                "GA4, GTM, A/B test plan",
                "Direct Slack channel",
                "Live in 7 days",
              ],
              action: <Button variant="accent">Go Studio</Button>,
              recommended: true,
            },
            {
              name: "Studio Annual",
              price: "Let's talk",
              description:
                "Multi-page, ongoing iteration, or quarterly retainer for brands that ship often.",
              features: [
                "Multi-page / multi-locale",
                "Monthly conversion review",
                "Dedicated lead",
                "Quarterly playbook",
              ],
              action: <Button variant="secondary">Book a call</Button>,
            },
          ]}
        />
      </Section>

      <Section surface="white">
        <FAQ
          eyebrow="FAQ"
          heading="Everything you might ask before booking."
          items={[
            {
              question: "How does the one-week delivery actually work?",
              answer:
                "You send a brief on Monday. We ship a draft Wednesday, take feedback, and the page goes live Friday. Copy, design, and tracking are all on us — you supply the brand voice and the approvals.",
              defaultOpen: true,
            },
            {
              question: "What if I don't have brand assets?",
              answer:
                "We default to a clean editorial system that pairs with most brands. If you need full identity work, that's a separate project — we'll introduce a partner studio.",
            },
            {
              question: "Is the page tuned for SEO and Core Web Vitals?",
              answer:
                "Yes. Every page hits good Core Web Vitals (LCP < 2.5s, CLS < 0.1), with meta tags, Open Graph, sitemap, and robots.txt set up. You can run Google Ads or Meta the day we hand it over.",
            },
            {
              question: "Do you wire up Pixel, GA4, MailChimp, etc.?",
              answer:
                "Included in Studio. Pixel and GA4 are tested before handover. MailChimp, HubSpot, Slack webhooks, Google Sheet — all set up if you ask.",
            },
            {
              question: "What about post-launch support and changes?",
              answer:
                "12-month warranty, free small tweaks for 30 days. After that, minor edits are $90 each, or move to a retainer if you iterate often.",
            },
          ]}
        />
      </Section>

      <Section surface="paper">
        <CTA
          heading={
            <>
              Ready to <em>ship?</em>
            </>
          }
          description="A 15-minute call. Walk away with a quote and two template recs for your industry."
          actions={
            <>
              <Button variant="secondary">Book a call</Button>
              <Button variant="accent" trailingIcon={<ArrowRight />}>
                Get a quote
              </Button>
            </>
          }
        />
      </Section>

      <Footer
        brand={<Brand />}
        links={[
          { label: "About", href: "#" },
          { label: "Pricing", href: "#pricing" },
          { label: "Templates", href: "#templates" },
          { label: "Journal", href: "#" },
          { label: "Contact", href: "#" },
        ]}
        small="© 2026 LUMEN STUDIO · BROOKLYN · TP.HCM"
      />
    </>
  );
}
