import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Colors",
};
export default meta;
type Story = StoryObj;

const Swatch = ({ name, value }: { name: string; value: string }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: 6,
      padding: 12,
      borderRadius: 10,
      background: "#fff",
      border: "1px solid var(--border)",
    }}
  >
    <div
      style={{
        height: 56,
        borderRadius: 6,
        background: `var(${value})`,
        border: "1px solid var(--border)",
      }}
    />
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{name}</div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-3)" }}>
      {value}
    </div>
  </div>
);

const Group = ({
  label,
  swatches,
}: {
  label: string;
  swatches: { name: string; value: string }[];
}) => (
  <div style={{ marginBottom: 32 }}>
    <h3 className="lm-eyebrow" style={{ marginBottom: 12 }}>{label}</h3>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: 12,
      }}
    >
      {swatches.map((s) => (
        <Swatch key={s.name} {...s} />
      ))}
    </div>
  </div>
);

export const Palette: Story = {
  render: () => (
    <div style={{ padding: 32 }}>
      <Group
        label="Lumen — signature"
        swatches={[
          { name: "lumen-50", value: "--lumen-50" },
          { name: "lumen-100", value: "--lumen-100" },
          { name: "lumen-200", value: "--lumen-200" },
          { name: "lumen-300", value: "--lumen-300" },
          { name: "lumen-400", value: "--lumen-400" },
          { name: "lumen-500 ★", value: "--lumen-500" },
          { name: "lumen-600", value: "--lumen-600" },
          { name: "lumen-700", value: "--lumen-700" },
          { name: "lumen-800", value: "--lumen-800" },
        ]}
      />
      <Group
        label="Ink — neutral"
        swatches={[
          { name: "ink-25", value: "--ink-25" },
          { name: "ink-50", value: "--ink-50" },
          { name: "ink-100", value: "--ink-100" },
          { name: "ink-150", value: "--ink-150" },
          { name: "ink-200", value: "--ink-200" },
          { name: "ink-300", value: "--ink-300" },
          { name: "ink-400", value: "--ink-400" },
          { name: "ink-500", value: "--ink-500" },
          { name: "ink-600", value: "--ink-600" },
          { name: "ink-700", value: "--ink-700" },
          { name: "ink-800", value: "--ink-800" },
          { name: "ink-900", value: "--ink-900" },
          { name: "ink-950", value: "--ink-950" },
        ]}
      />
      <Group
        label="Paper"
        swatches={[
          { name: "paper-100", value: "--paper-100" },
          { name: "paper-200", value: "--paper-200" },
          { name: "paper-300", value: "--paper-300" },
        ]}
      />
      <Group
        label="Iris (cool secondary)"
        swatches={[
          { name: "iris-100", value: "--iris-100" },
          { name: "iris-300", value: "--iris-300" },
          { name: "iris-500", value: "--iris-500" },
          { name: "iris-700", value: "--iris-700" },
        ]}
      />
      <Group
        label="Sage / Coral"
        swatches={[
          { name: "sage-100", value: "--sage-100" },
          { name: "sage-300", value: "--sage-300" },
          { name: "sage-500", value: "--sage-500" },
          { name: "sage-700", value: "--sage-700" },
          { name: "coral-100", value: "--coral-100" },
          { name: "coral-300", value: "--coral-300" },
          { name: "coral-500", value: "--coral-500" },
          { name: "coral-700", value: "--coral-700" },
        ]}
      />
    </div>
  ),
};
