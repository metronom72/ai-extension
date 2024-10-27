module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended"
  ],
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import",
    "jsx-a11y"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "no-param-reassign": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "@typescript-eslint/no-throw-literal": "off",
    "@typescript-eslint/lines-between-class-members": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/prop-types": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "never",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      {
        blankLine: "always",
        prev: [
          "multiline-expression",
          "multiline-const",
          "multiline-let",
          "multiline-var",
          "expression",
        ],
        next: [
          "multiline-expression",
          "multiline-const",
          "multiline-let",
          "multiline-var",
          "expression",
        ],
      },
    ],
    "import/no-named-as-default": "off",
    "no-underscore-dangle": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
      },
      {
        selector: "typeLike",
        format: ["PascalCase"],
      },
    ],
    "import/prefer-default-export": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        paths: ["src"]  // Add this line to ensure `src` is included in path resolution
      }
    },
  },
  ignorePatterns: ["*.js"],
};
