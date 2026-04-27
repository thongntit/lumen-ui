import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Sun, Sparkles, Settings, Compass } from "lucide-react";
import { Icon } from "./Icon";

const meta: Meta = { title: "Components/Icon" };
export default meta;
type Story = StoryObj;

export const Sizes: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", alignItems: "center", gap: 24 }}>
      <Icon icon={Sun} size={16} />
      <Icon icon={Sun} size={20} />
      <Icon icon={Sun} size={24} />
      <Icon icon={Sun} size={32} />
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", alignItems: "center", gap: 24 }}>
      <Icon icon={Sparkles} tone="default" />
      <Icon icon={Sparkles} tone="accent" />
      <Icon icon={Sparkles} tone="muted" />
      <span style={{ background: "var(--ink-950)", padding: 8, borderRadius: 6 }}>
        <Icon icon={Sparkles} tone="inverse" />
      </span>
    </div>
  ),
};

export const Library: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
      <Icon icon={ArrowRight} />
      <Icon icon={Sun} />
      <Icon icon={Sparkles} />
      <Icon icon={Settings} />
      <Icon icon={Compass} />
    </div>
  ),
};
