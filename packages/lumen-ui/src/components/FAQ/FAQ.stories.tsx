import type { Meta, StoryObj } from "@storybook/react";
import { FAQ } from "./FAQ";

const meta: Meta<typeof FAQ> = {
  title: "Patterns/FAQ",
  component: FAQ,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof FAQ>;

export const Default: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <FAQ
        eyebrow="FAQ"
        heading="Everything you might ask before booking."
        items={[
          {
            question: "How does the one-week delivery actually work?",
            answer:
              "You send a brief on Monday. We ship a draft Wednesday, take feedback, and the live page goes up Friday. We do the writing and the design — you supply the brand and the answers.",
            defaultOpen: true,
          },
          {
            question: "What if I don't have brand assets?",
            answer:
              "We default to a clean editorial system that pairs with most brands. If you need full identity work, that's a separate project — we'll point you to a partner.",
          },
          {
            question: "Do you write the copy too?",
            answer:
              "Yes. That's the whole point. We do plainspoken, conversion-tested copy — not marketing fluff. You get to approve every line.",
          },
          {
            question: "What if I need changes later?",
            answer:
              "One revision round is included. After that, small tweaks are $90 a pop, or you can move to a retainer if your page evolves often.",
          },
        ]}
      />
    </div>
  ),
};
