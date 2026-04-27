import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(tsx|mdx)"],
  staticDirs: ["./public"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  typescript: {
    reactDocgen: false,
  },
  managerHead: (head) => `${head}
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <title>Lumen UI · Storybook</title>
  `,
  previewHead: (head) => `${head}
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
  `,
};

export default config;
