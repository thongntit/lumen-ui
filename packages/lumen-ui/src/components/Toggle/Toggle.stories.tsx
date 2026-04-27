import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
      <Toggle defaultChecked label="Show pricing in USD" />
      <Toggle label="Annual billing (–20%)" />
    </div>
  ),
};
