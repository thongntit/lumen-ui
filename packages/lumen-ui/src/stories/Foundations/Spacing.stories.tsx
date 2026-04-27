import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Spacing" };
export default meta;
type Story = StoryObj;

const tokens = [
  { name: "space-1", px: 4 },
  { name: "space-2", px: 8 },
  { name: "space-3", px: 12 },
  { name: "space-4", px: 16 },
  { name: "space-5", px: 20 },
  { name: "space-6", px: 24 },
  { name: "space-8", px: 32 },
  { name: "space-10", px: 40 },
  { name: "space-12", px: 48 },
  { name: "space-16", px: 64 },
  { name: "space-20", px: 80 },
  { name: "space-24", px: 96 },
  { name: "space-32", px: 128 },
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <span className="lm-eyebrow">4px grid</span>
      {tokens.map((t) => (
        <div key={t.name} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <code className="lm-code" style={{ minWidth: 100 }}>
            {t.name}
          </code>
          <div
            style={{
              width: t.px,
              height: 16,
              background: "var(--lumen-300)",
              borderRadius: 2,
            }}
          />
          <span className="lm-caption">{t.px}px</span>
        </div>
      ))}
    </div>
  ),
};
