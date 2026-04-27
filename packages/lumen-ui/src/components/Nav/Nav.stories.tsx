import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { Nav } from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Patterns/Nav",
  component: Nav,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  render: () => (
    <Nav
      brand={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 22, height: 22, borderRadius: "999px", background: "var(--grad-sunrise)" }} />
          Lumen
        </span>
      }
      links={[
        { label: "Templates", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Work", href: "#" },
        { label: "Journal", href: "#" },
      ]}
      actions={
        <>
          <Button variant="ghost" size="sm">
            Sign in
          </Button>
          <Button variant="primary" size="sm" trailingIcon={<ArrowRight />}>
            Start free
          </Button>
        </>
      }
    />
  ),
};
