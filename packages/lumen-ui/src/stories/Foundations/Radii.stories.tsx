import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Radii" };
export default meta;
type Story = StoryObj;

const tokens = [
  { name: "radius-none", value: "var(--radius-none)" },
  { name: "radius-xs", value: "var(--radius-xs)" },
  { name: "radius-sm", value: "var(--radius-sm)" },
  { name: "radius-md ★", value: "var(--radius-md)" },
  { name: "radius-lg", value: "var(--radius-lg)" },
  { name: "radius-xl", value: "var(--radius-xl)" },
  { name: "radius-2xl", value: "var(--radius-2xl)" },
  { name: "radius-full", value: "var(--radius-full)" },
];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: 32,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 16,
      }}
    >
      {tokens.map((t) => (
        <div key={t.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              height: 80,
              borderRadius: t.value,
              background: "#fff",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow-sm)",
            }}
          />
          <code className="lm-code">{t.name}</code>
        </div>
      ))}
    </div>
  ),
};
