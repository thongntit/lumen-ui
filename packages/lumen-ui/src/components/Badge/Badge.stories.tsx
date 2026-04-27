import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Tones: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 10 }}>
      <Badge tone="new" dot>New</Badge>
      <Badge tone="soon">Coming soon</Badge>
      <Badge tone="live" dot>Live</Badge>
      <Badge tone="beta">Beta</Badge>
      <Badge tone="muted">Archived</Badge>
      <Badge tone="solid">v2.0</Badge>
    </div>
  ),
};
