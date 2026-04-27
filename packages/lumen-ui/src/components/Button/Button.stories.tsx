import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Button variant="primary" trailingIcon={<ArrowRight />}>
        Get started
      </Button>
      <Button variant="accent" trailingIcon={<ArrowRight />}>
        Start free
      </Button>
      <Button variant="secondary">See pricing</Button>
      <Button variant="ghost">Contact sales</Button>
      <Button variant="link" trailingIcon={<span>→</span>}>
        Read the journal
      </Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
      <Button variant="accent" size="sm">Free</Button>
      <Button variant="accent" size="md">Start free</Button>
      <Button variant="accent" size="lg" trailingIcon={<ArrowRight />}>Start free</Button>
      <Button variant="primary" size="xl" trailingIcon={<ArrowRight />}>
        Ship in a week
      </Button>
    </div>
  ),
};

export const SquaredAndIconOnly: Story = {
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
      <Button variant="primary" squared>Book a call</Button>
      <Button variant="accent" squared>Launch</Button>
      <Button variant="secondary" iconOnly aria-label="Search" leadingIcon={<Search />} />
      <Button variant="primary" iconOnly aria-label="Next" leadingIcon={<ArrowRight />} />
      <Button variant="accent" disabled>Saving…</Button>
    </div>
  ),
};

export const OnInk: Story = {
  parameters: { backgrounds: { default: "ink" } },
  render: () => (
    <div style={{ padding: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
      <Button variant="primary" trailingIcon={<ArrowRight />}>Get started</Button>
      <Button variant="accent" trailingIcon={<ArrowRight />}>Start free</Button>
      <Button variant="secondary">See pricing</Button>
      <Button variant="ghost">Sign in</Button>
    </div>
  ),
};
