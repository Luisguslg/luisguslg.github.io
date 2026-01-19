import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    ignores: ["docs/**", "node_modules/**"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "no-unused-vars": "off", // Astro frontmatter & asset modules can look unused
    },
  },
];

