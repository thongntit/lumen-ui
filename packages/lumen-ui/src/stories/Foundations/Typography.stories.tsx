import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Typography" };
export default meta;
type Story = StoryObj;

export const Display: Story = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 880 }}>
      <span className="lm-eyebrow">display · serif · Lora</span>
      <h1 className="lm-display" style={{ marginTop: 16 }}>
        Landing pages that <em className="lm-display-italic">earn the click.</em>
      </h1>
    </div>
  ),
};

export const Headings: Story = {
  render: () => (
    <div
      style={{
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <div>
        <span className="lm-eyebrow">h1</span>
        <h1 className="lm-h1">Built for conversion. Tuned for SMEs.</h1>
      </div>
      <div>
        <span className="lm-eyebrow">h2</span>
        <h2 className="lm-h2">Brief Monday. Ship Friday.</h2>
      </div>
      <div>
        <span className="lm-eyebrow">h3</span>
        <h3 className="lm-h3">Pick a plan, or don't.</h3>
      </div>
      <div>
        <span className="lm-eyebrow">h4</span>
        <h4 className="lm-h4">One revision round.</h4>
      </div>
    </div>
  ),
};

export const Body: Story = {
  render: () => (
    <div style={{ padding: 32, maxWidth: 720 }}>
      <p className="lm-lede">
        Your page goes live Friday. We do the words and the pixels — you keep
        the brand and the reins.
      </p>
      <p style={{ marginTop: 24 }}>
        The body voice is confident, plainspoken, a touch editorial. Short
        declarative sentences. Em-dashes, never hyphens. We say "we" for
        Lumen, "you" for the reader. Never "users" or "customers."
      </p>
      <p className="lm-small" style={{ marginTop: 24 }}>
        Small text. Used for footnotes, helper labels, and small print.
      </p>
      <p className="lm-caption" style={{ marginTop: 8 }}>
        Caption · mono · spaced
      </p>
    </div>
  ),
};

export const Mono: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <span className="lm-eyebrow">mono · IBM Plex Mono</span>
      <pre
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          background: "var(--surface-3)",
          padding: 20,
          borderRadius: 10,
          marginTop: 16,
        }}
      >{`// Buttons: verb-first, 1–3 words.
"Start free" — "See pricing" — "Book a call"

// Never:
"Click here"`}</pre>
    </div>
  ),
};
