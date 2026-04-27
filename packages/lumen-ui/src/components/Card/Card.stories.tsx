import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: { backgrounds: { default: "subtle" } },
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Variants: Story = {
  render: () => (
    <div
      style={{
        padding: 28,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
      }}
    >
      <Card>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--lumen-100)", color: "var(--lumen-700)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)" }}>✦</div>
        <h4 className="lm-h4" style={{ marginTop: 8 }}>Ship in a week.</h4>
        <p style={{ marginTop: 4, fontSize: 13 }}>Brief Monday, ship Friday. We do the words and the pixels.</p>
      </Card>
      <Card variant="dark">
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--ink-800)", color: "var(--lumen-300)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)" }}>→</div>
        <h4 className="lm-h4" style={{ marginTop: 8, color: "var(--paper-100)" }}>Built to convert.</h4>
        <p style={{ marginTop: 4, fontSize: 13, color: "var(--ink-300)" }}>
          Layouts grounded in the patterns that actually move the needle.
        </p>
      </Card>
      <Card variant="pull">
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "var(--lumen-300)", color: "var(--ink-950)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)" }}>★</div>
        <h4 className="lm-h4" style={{ marginTop: 8 }}>One revision round.</h4>
        <p style={{ marginTop: 4, fontSize: 13 }}>
          We get it right the first time. The second is on us.
        </p>
      </Card>
    </div>
  ),
};
