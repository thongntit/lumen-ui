import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10 }}>
      <Checkbox defaultChecked label="Send me launch updates" />
      <Checkbox label="I agree to the terms" />
    </div>
  ),
};
