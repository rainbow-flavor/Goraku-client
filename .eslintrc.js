module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "next",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  plugins: ["@typescript-eslint", "import", "simple-import-sort"],
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    // react
    "react/no-unescaped-entities": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],

    // next
    "react-hooks/exhaustive-deps": "off",
    "@next/next/no-html-link-for-pages": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@next/next/no-img-element": "off",
    "simple-import-sort/exports": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", ["parent", "sibling"], "index"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
  overrides: [
    {
      // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching files!
      env: {
        jest: true,
      },
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: ["plugin:testing-library/react", "plugin:jest/recommended"],
      rules: {
        "import/no-extraneous-dependencies": [
          "off",
          { devDependencies: ["**/?(*.)+(spec|test).[jt]s?(x)"] },
        ],
      },
    },
  ],
  ignorePatterns: [
    "**/*.js",
    "**/*.json",
    "node_modules",
    "public",
    "styles",
    ".next",
    "coverage",
    "dist",
    ".turbo",
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: "./tsconfig.json",
    sourceType: "module",
  },
};
