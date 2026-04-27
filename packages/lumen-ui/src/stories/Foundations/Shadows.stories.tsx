import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Shadows" };
export default meta;
type Story = StoryObj;

const tokens = ["shadow-xs", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl"];

export const Scale: Story = {
  render: () => (
    <div
      style={{
        padding: 64,
        background: "var(--paper-100)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: 28,
      }}
    >
      {tokens.map((t) => (
        <div key={t} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              height: 100,
              background: "#fff",
              borderRadius: 10,
              boxShadow: `var(--${t})`,
            }}
          />
          <code className="lm-code">{t}</code>
        </div>
      ))}
    </div>
  ),
};
