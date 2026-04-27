import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Gradients" };
export default meta;
type Story = StoryObj;

const tokens = [
  { name: "grad-sunrise", note: "primary CTA, accent buttons" },
  { name: "grad-dawn", note: "hero backgrounds" },
  { name: "grad-horizon", note: "extended decorative" },
];

export const LightMotif: Story = {
  render: () => (
    <div
      style={{
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <span className="lm-eyebrow">light gradients · the signature motif</span>
      {tokens.map((t) => (
        <div key={t.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              height: 120,
              borderRadius: 16,
              background: `var(--${t.name})`,
              boxShadow: "var(--shadow-md)",
            }}
          />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <code className="lm-code">{t.name}</code>
            <span className="lm-caption">{t.note}</span>
          </div>
        </div>
      ))}
      <div>
        <h2 className="lm-h2 lm-lumen-text" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 64 }}>
          earn the click
        </h2>
        <code className="lm-code">.lm-lumen-text — gradient text utility</code>
      </div>
    </div>
  ),
};
