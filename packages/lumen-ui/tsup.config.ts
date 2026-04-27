import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/**/*.ts", "src/**/*.tsx", "!src/**/*.stories.tsx"],
  format: ["esm"],
  dts: true,
  // Don't bundle: emit each src file as a corresponding dist file with imports
  // intact. This preserves "use client" directives at the top of each file and
  // lets the consumer's bundler tree-shake unused components.
  bundle: false,
  clean: true,
  sourcemap: true,
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
    "react/jsx-dev-runtime",
    "lucide-react",
  ],
  loader: {
    ".css": "copy",
  },
  outExtension: () => ({ js: ".js" }),
});
