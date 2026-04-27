import type { Meta, StoryObj } from "@storybook/react";
import { FeatureGrid } from "./FeatureGrid";

const meta: Meta<typeof FeatureGrid> = {
  title: "Patterns/FeatureGrid",
  component: FeatureGrid,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof FeatureGrid>;

export const ThreeColumn: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <FeatureGrid
        eyebrow="What you get"
        heading="A landing page that does its job."
        features={[
          {
            icon: "✦",
            title: "Ship in a week.",
            description: "Brief Monday, ship Friday. We do the words and the pixels — you keep the brand and the reins.",
          },
          {
            icon: "→",
            title: "Built to convert.",
            description: "Layouts grounded in the patterns that actually move the needle — not what's trending on dribbble.",
          },
          {
            icon: "★",
            title: "One revision round.",
            description: "We get it right the first time. The second is on us. No retainer, no surprise invoice.",
          },
        ]}
      />
    </div>
  ),
};
