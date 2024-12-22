import next from "eslint-plugin-next";
import storybook from "eslint-plugin-storybook";
import recommended from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";

export default [
  recommended.configs.recommended,
  next.configs["core-web-vitals"],
  storybook.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": typescript,
    },
    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    rules: {
      "camelcase": [
        "warn",
        {
          properties: "always",
        },
      ],
      "indent": ["error", 2],
      "linebreak-style": ["error", "unix"],
      "no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "quotes": ["error", "double"],
      "semi": ["error", "always"],
    },
  },
];
