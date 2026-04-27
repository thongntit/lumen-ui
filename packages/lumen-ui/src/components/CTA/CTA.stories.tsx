import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { CTA } from "./CTA";

const meta: Meta<typeof CTA> = {
  title: "Patterns/CTA",
  component: CTA,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof CTA>;

export const Ink: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <CTA
        heading={
          <>
            Ready to <em>ship?</em>
          </>
        }
        description="A page in a week. No retainer."
        actions={
          <>
            <Button variant="secondary">Book a call</Button>
            <Button variant="accent" trailingIcon={<ArrowRight />}>
              Start free
            </Button>
          </>
        }
      />
    </div>
  ),
};

export const Paper: Story = {
  render: () => (
    <div style={{ paddingBlock: 64 }}>
      <CTA
        surface="paper"
        heading={
          <>
            Sẵn sàng <em>khởi chạy?</em>
          </>
        }
        description="Đặt lịch tư vấn 15 phút. Chúng tôi sẽ tư vấn xem trang nào bạn cần."
        actions={
          <>
            <Button variant="secondary">Đặt lịch tư vấn</Button>
            <Button variant="accent" trailingIcon={<ArrowRight />}>
              Bắt đầu miễn phí
            </Button>
          </>
        }
      />
    </div>
  ),
};
