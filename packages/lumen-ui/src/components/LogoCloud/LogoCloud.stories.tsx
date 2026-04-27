import type { Meta, StoryObj } from "@storybook/react";
import { LogoCloud } from "./LogoCloud";

const meta: Meta<typeof LogoCloud> = {
  title: "Patterns/LogoCloud",
  component: LogoCloud,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof LogoCloud>;

const wordmark = (text: string) => (
  <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 24 }}>{text}</span>
);

export const Default: Story = {
  render: () => (
    <LogoCloud
      label="Trusted by makers, founders, and teams shipping in the next two weeks"
      logos={[
        wordmark("Hearth"),
        wordmark("Ferment"),
        wordmark("Plumb."),
        wordmark("North & Co"),
        wordmark("Atelier"),
        wordmark("Foothold"),
      ]}
    />
  ),
};
