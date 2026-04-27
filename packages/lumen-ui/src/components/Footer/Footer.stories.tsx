import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
  title: "Patterns/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: () => (
    <Footer
      brand={
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 22, height: 22, borderRadius: "999px", background: "var(--grad-sunrise)" }} />
          Lumen
        </span>
      }
      links={[
        { label: "About", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Templates", href: "#" },
        { label: "Contact", href: "#" },
      ]}
      small="© 2026 LUMEN STUDIO"
    />
  ),
};
