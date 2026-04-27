import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../Badge";
import { Testimonial } from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Patterns/Testimonial",
  component: Testimonial,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Testimonial>;

export const Default: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <Testimonial
        badge={
          <Badge tone="new" dot>
            Customer · Hearth Studio
          </Badge>
        }
        quote={
          <>
            They shipped <em>faster</em> than my old design agency replied to email.
          </>
        }
        attribution="Mai Lan"
        role="Founder, Hearth Studio"
      />
    </div>
  ),
};

export const Vietnamese: Story = {
  render: () => (
    <div lang="vi" style={{ paddingBlock: 64 }}>
      <Testimonial
        badge={
          <Badge tone="new" dot>
            Khách hàng · Hearth Studio
          </Badge>
        }
        quote={
          <>
            Họ giao trang <em>nhanh hơn</em> email trả lời của bên thiết kế cũ.
          </>
        }
        attribution="Mai Lan"
        role="Nhà sáng lập, Hearth Studio"
      />
    </div>
  ),
};
