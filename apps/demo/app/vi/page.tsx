import { ArrowRight } from "lucide-react";
import {
  Badge,
  Button,
  CTA,
  FAQ,
  FeatureGrid,
  Footer,
  Hero,
  LogoCloud,
  Nav,
  Pricing,
  Section,
  Testimonial,
} from "lumen-ui";

const Brand = () => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: 22,
        height: 22,
        borderRadius: 999,
        background: "var(--grad-sunrise)",
      }}
    />
    Lumen
  </span>
);

const wordmark = (text: string) => (
  <span
    style={{
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: 22,
    }}
  >
    {text}
  </span>
);

export default function Page() {
  return (
    <div lang="vi">
      <Nav
        brand={<Brand />}
        links={[
          { label: "Mẫu trang", href: "#mau-trang" },
          { label: "Bảng giá", href: "#bang-gia" },
          { label: "Khách hàng", href: "#khach-hang" },
          { label: "Bài viết", href: "#bai-viet" },
        ]}
        actions={
          <>
            <Button variant="ghost" size="sm">
              Đăng nhập
            </Button>
            <Button variant="primary" size="sm" trailingIcon={<ArrowRight />}>
              Nhận báo giá
            </Button>
          </>
        }
      />

      <Hero
        eyebrow="Trang đích · cho thương hiệu Việt"
        title={
          <>
            Trang đích <em>xứng đáng</em> để khách bấm.
          </>
        }
        lede="Brief đầu tuần — trang chạy thật cuối tuần. Chúng tôi viết nội dung, dựng giao diện, gắn pixel và A/B test cho bạn. Không cần Figma, không cần dev, không phụ phí."
        actions={
          <>
            <Button variant="accent" size="lg" trailingIcon={<ArrowRight />}>
              Nhận báo giá miễn phí
            </Button>
            <Button variant="secondary" size="lg">
              Xem mẫu trang
            </Button>
          </>
        }
      />

      <Section surface="white">
        <LogoCloud
          label="Đã giao hơn 200 trang đích cho thương hiệu Việt"
          logos={[
            wordmark("Hearth"),
            wordmark("Cà Phê Trú"),
            wordmark("Mộc Lan"),
            wordmark("Studio Bốn"),
            wordmark("Xưởng Số"),
            wordmark("Hảo Hảo"),
          ]}
        />
      </Section>

      <Section surface="paper" id="mau-trang">
        <FeatureGrid
          eyebrow="Bạn nhận được gì"
          heading="Một trang đích làm đúng việc của nó."
          features={[
            {
              icon: "✦",
              title: "Lên sóng trong 7 ngày.",
              description:
                "Brief thứ Hai, bàn giao thứ Sáu. Đã bao gồm nội dung, thiết kế, một vòng chỉnh sửa và đẩy lên hosting.",
            },
            {
              icon: "→",
              title: "Thiết kế dựa trên dữ liệu.",
              description:
                "Bố cục rút ra từ 200+ trang đã chạy thật. Mỗi nút bấm đều có lý do — không chạy theo trend.",
              variant: "dark",
            },
            {
              icon: "✓",
              title: "Tích hợp sẵn — không phụ phí.",
              description:
                "Facebook Pixel, Google Analytics, Zalo OA, MailChimp, Google Tag Manager. Cài đặt và kiểm tra trước khi bàn giao.",
              variant: "pull",
            },
          ]}
        />
      </Section>

      <Section surface="subtle" id="khach-hang">
        <Testimonial
          badge={
            <Badge tone="new" dot>
              Khách hàng · Hearth Studio · TP.HCM
            </Badge>
          }
          quote={
            <>
              Lumen giao trang trong 8 ngày — và <em>tỉ lệ chuyển đổi tăng 3.2 lần</em> so với trang cũ.
            </>
          }
          attribution="Mai Lan"
          role="Nhà sáng lập, Hearth Studio"
        />
      </Section>

      <Section surface="paper" id="bang-gia">
        <Pricing
          eyebrow="Bảng giá"
          heading="Chọn gói phù hợp. Chưa rõ — chúng tôi sẽ tư vấn."
          tiers={[
            {
              name: "Khởi đầu",
              price: "2.900.000 ₫",
              cadence: "/ trang",
              description:
                "Trang đích từ template đã được kiểm chứng. Phù hợp ra mắt sản phẩm hoặc landing chiến dịch ngắn.",
              features: [
                "1 trang đích",
                "Nội dung tuỳ chỉnh",
                "1 vòng chỉnh sửa",
                "Tích hợp Pixel, GA, form",
                "Bàn giao trong 5 ngày",
              ],
              action: <Button variant="secondary">Chọn Khởi đầu</Button>,
            },
            {
              name: "Studio",
              price: "6.900.000 ₫",
              cadence: "/ trang",
              description:
                "Trang đích thiết kế riêng từ A đến Z, kèm thiết lập đo lường và kế hoạch A/B test 30 ngày đầu.",
              features: [
                "1 trang thiết kế riêng",
                "Nội dung + thiết kế + ảnh",
                "2 vòng chỉnh sửa",
                "Thiết lập GA4 + GTM + A/B",
                "Tư vấn trực tiếp qua Zalo",
                "Bàn giao trong 7 ngày",
              ],
              action: <Button variant="accent">Chọn Studio</Button>,
              recommended: true,
            },
            {
              name: "Doanh nghiệp",
              price: "Liên hệ",
              description:
                "Hệ trang đa kênh, tối ưu liên tục, hoặc phối hợp dài hạn theo quý.",
              features: [
                "Đa trang / đa ngôn ngữ",
                "Tối ưu chuyển đổi hàng tháng",
                "Đội phụ trách riêng",
                "Báo cáo theo quý",
              ],
              action: <Button variant="secondary">Đặt lịch tư vấn</Button>,
            },
          ]}
        />
      </Section>

      <Section surface="white">
        <FAQ
          eyebrow="Câu hỏi thường gặp"
          heading="Mọi thứ bạn cần biết trước khi đặt lịch."
          items={[
            {
              question: "Quy trình giao trang trong một tuần thực sự là thế nào?",
              answer:
                "Bạn gửi brief thứ Hai. Chúng tôi giao bản nháp thứ Tư, nhận phản hồi, và trang chính thức lên sóng thứ Sáu. Nội dung, thiết kế và đo lường đều do Lumen làm — bạn chỉ cần phê duyệt.",
              defaultOpen: true,
            },
            {
              question: "Tôi chưa có bộ nhận diện thương hiệu thì sao?",
              answer:
                "Mặc định Lumen dùng hệ thiết kế editorial, hợp với hầu hết thương hiệu Việt. Nếu bạn cần bộ nhận diện hoàn chỉnh, đó là dự án riêng — chúng tôi sẽ giới thiệu studio đối tác.",
            },
            {
              question: "Trang có chuẩn SEO và tốc độ tải nhanh không?",
              answer:
                "Có. Mỗi trang đạt Core Web Vitals tốt (LCP < 2.5s, CLS < 0.1), có meta tag, Open Graph, sitemap.xml và robots.txt sẵn. Bạn có thể chạy quảng cáo Facebook, Google Ads ngay sau khi bàn giao.",
            },
            {
              question: "Có hỗ trợ tích hợp Zalo OA, Facebook Pixel, MailChimp không?",
              answer:
                "Có — tất cả đều miễn phí trong gói Studio. Pixel và GA4 được kiểm tra trước khi bàn giao. Zalo OA chat widget, form gửi MailChimp, Google Sheet đều cài sẵn nếu bạn cần.",
            },
            {
              question: "Sau khi bàn giao thì hỗ trợ thế nào? Có phụ phí không?",
              answer:
                "Bảo hành 12 tháng, chỉnh sửa nhỏ miễn phí trong 30 ngày đầu. Sau đó các thay đổi nhỏ là 290.000 ₫ / lần, hoặc bạn có thể chuyển sang gói retainer hàng tháng nếu trang cập nhật thường xuyên.",
            },
          ]}
        />
      </Section>

      <Section surface="paper">
        <CTA
          heading={
            <>
              Sẵn sàng <em>khởi chạy?</em>
            </>
          }
          description="Tư vấn 15 phút miễn phí — gửi brief, nhận báo giá và xem mẫu trang phù hợp với ngành của bạn."
          actions={
            <>
              <Button variant="secondary">Đặt lịch tư vấn</Button>
              <Button variant="accent" trailingIcon={<ArrowRight />}>
                Nhận báo giá
              </Button>
            </>
          }
        />
      </Section>

      <Footer
        brand={<Brand />}
        links={[
          { label: "Giới thiệu", href: "#" },
          { label: "Bảng giá", href: "#bang-gia" },
          { label: "Mẫu trang", href: "#mau-trang" },
          { label: "Bài viết", href: "#bai-viet" },
          { label: "Liên hệ", href: "#" },
        ]}
        small="© 2026 LUMEN STUDIO · HÀ NỘI · TP.HCM"
      />
    </div>
  );
}
