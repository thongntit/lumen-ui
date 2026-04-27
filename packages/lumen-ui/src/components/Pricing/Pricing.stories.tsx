import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../Button";
import { Pricing } from "./Pricing";

const meta: Meta<typeof Pricing> = {
  title: "Patterns/Pricing",
  component: Pricing,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Pricing>;

export const ThreeTier: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <Pricing
        eyebrow="Pricing"
        heading="Pick a plan. Or don't — we'll suggest one."
        tiers={[
          {
            name: "Starter",
            price: "$390",
            cadence: "/ page",
            description: "A single landing page from a tested template. Live in five days.",
            features: ["1 page", "1 revision round", "Custom copy", "Stock-free imagery"],
            action: <Button variant="secondary">Start a starter</Button>,
          },
          {
            name: "Studio",
            price: "$890",
            cadence: "/ page",
            description: "A bespoke landing page with copy, design, and analytics setup.",
            features: ["1 page, fully custom", "2 revision rounds", "Copy + design", "Analytics + A/B setup", "Direct DM"],
            action: <Button variant="accent">Go studio</Button>,
            recommended: true,
          },
          {
            name: "Custom",
            price: "Let's talk",
            description: "Multi-page, ongoing iteration, or something we haven't done before.",
            features: ["Multi-page", "Ongoing optimization", "Dedicated team", "Quarterly review"],
            action: <Button variant="secondary">Book a call</Button>,
          },
        ]}
      />
    </div>
  ),
};
