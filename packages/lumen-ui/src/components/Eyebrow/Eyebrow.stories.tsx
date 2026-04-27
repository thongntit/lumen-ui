import type { Meta, StoryObj } from "@storybook/react";
import { Eyebrow } from "./Eyebrow";

const meta: Meta<typeof Eyebrow> = {
  title: "Components/Eyebrow",
  component: Eyebrow,
};
export default meta;
type Story = StoryObj<typeof Eyebrow>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 8 }}>
      <Eyebrow>Templates · curated</Eyebrow>
      <Eyebrow accent>Limited · Q2 2026</Eyebrow>
    </div>
  ),
};
