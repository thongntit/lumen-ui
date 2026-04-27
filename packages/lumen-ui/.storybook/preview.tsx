import type { Preview } from "@storybook/react";

import "../src/styles/tokens.css";
import "../src/styles/reset.css";
import "../src/styles/typography.css";
import "../src/styles/fonts.css";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "paper",
      values: [
        { name: "paper", value: "#FCFBF7" },
        { name: "white", value: "#FFFFFF" },
        { name: "subtle", value: "#F6F2E9" },
        { name: "ink", value: "#0A0F1A" },
      ],
    },
  },
};

export default preview;
