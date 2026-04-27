import { create } from "storybook/theming";

export const lumenTheme = create({
  base: "light",
  brandTitle: "Lumen UI",
  brandUrl: "/?path=/story/introduction--welcome",
  brandImage: "lumen-brand.svg",
  brandTarget: "_self",

  // Colors — pulled from tokens.css
  colorPrimary: "#F59410", // --lumen-500
  colorSecondary: "#0A0F1A", // --ink-950

  // UI
  appBg: "#FCFBF7", // --paper-100
  appContentBg: "#FFFFFF",
  appBorderColor: "#E2E7EE", // --ink-150
  appBorderRadius: 10,

  // Text
  textColor: "#0A0F1A", // --ink-950
  textInverseColor: "#FCFBF7", // --paper-100
  textMutedColor: "#5E6A82", // --ink-500

  // Toolbar
  barTextColor: "#5E6A82",
  barSelectedColor: "#F59410",
  barHoverColor: "#0A0F1A",
  barBg: "#FFFFFF",

  // Inputs
  inputBg: "#FFFFFF",
  inputBorder: "#E2E7EE",
  inputTextColor: "#0A0F1A",
  inputBorderRadius: 8,

  fontBase:
    '"Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", "Helvetica Neue", sans-serif',
  fontCode: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
});
