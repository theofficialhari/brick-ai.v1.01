// Minimal flat config to stop ESLint v9 from crashing during setup
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: [
      "node_modules",
      ".next",
      "dist",
      "build",
    ],
    rules: {},
  },
];
