import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = { title: "Components/Tag", component: Tag };
export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 8 }}>
      <Tag>design</Tag>
      <Tag>copywriting</Tag>
      <Tag>launch</Tag>
      <Tag>SEO</Tag>
      <Tag>+ analytics</Tag>
    </div>
  ),
};
