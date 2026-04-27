import type { Meta, StoryObj } from "@storybook/react";
import { Newsletter } from "./Newsletter";

const meta: Meta<typeof Newsletter> = {
  title: "Patterns/Newsletter",
  component: Newsletter,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 28 }}>
      <Newsletter
        onSubmit={async () => {
          await new Promise((r) => setTimeout(r, 400));
        }}
      />
    </div>
  ),
};
