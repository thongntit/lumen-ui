import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = { title: "Foundations/Vietnamese" };
export default meta;
type Story = StoryObj;

export const Glyphs: Story = {
  render: () => (
    <div lang="vi" style={{ padding: 32, display: "flex", flexDirection: "column", gap: 32 }}>
      <span className="lm-eyebrow">tiếng Việt · stacked-tone glyph plate</span>
      <div>
        <code className="lm-code">Lora — display</code>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, margin: "8px 0 0" }}>
          Đường lối <em style={{ fontStyle: "italic", color: "var(--lumen-600)" }}>xứng đáng</em> để khách bấm.
        </p>
      </div>
      <div>
        <code className="lm-code">Inter — body</code>
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 18, lineHeight: 1.6, margin: "8px 0 0", maxWidth: "52ch" }}>
          Chúng tôi viết lời, dựng giao diện, và chạy thử dữ liệu chuyển đổi — bàn giao đúng hẹn, không cần Figma.
        </p>
      </div>
      <div>
        <code className="lm-code">IBM Plex Mono — micro</code>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, margin: "8px 0 0" }}>
          ổ ề ẫ ớ ữ ự ấ ậ ổ ỗ ờ ợ ử ữ
        </p>
      </div>
    </div>
  ),
};
