import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { Button } from "../Button";
import { Hero } from "./Hero";

const meta: Meta<typeof Hero> = {
  title: "Patterns/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => (
    <Hero
      eyebrow="Landing pages · for SMEs and modern brands"
      title={
        <>
          Landing pages that <em>earn the click.</em>
        </>
      }
      lede="Brief Monday, ship Friday. We write the words, design the page, and tune the conversion data — no Figma file, no developer, no excuses."
      actions={
        <>
          <Button variant="accent" size="lg" trailingIcon={<ArrowRight />}>
            Start free
          </Button>
          <Button variant="secondary" size="lg">
            See pricing
          </Button>
        </>
      }
    />
  ),
};

export const Vietnamese: Story = {
  render: () => (
    <div lang="vi">
      <Hero
        eyebrow="Trang đích · cho doanh nghiệp Việt"
        title={
          <>
            Trang đích <em>xứng đáng</em> để khách bấm.
          </>
        }
        lede="Bản tóm tắt thứ Hai — bàn giao thứ Sáu. Chúng tôi viết lời, dựng giao diện, và chạy thử dữ liệu chuyển đổi cho bạn."
        actions={
          <>
            <Button variant="accent" size="lg" trailingIcon={<ArrowRight />}>
              Bắt đầu miễn phí
            </Button>
            <Button variant="secondary" size="lg">
              Xem bảng giá
            </Button>
          </>
        }
      />
    </div>
  ),
};
