module.exports = {
  env: {
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "import",
    "jest",
    "sort-destructure-keys",
    "sort-keys-fix",
    "typescript-sort-keys",
    // CircleCI で warn も検知可能にするため、全て error にする
    "only-error",
  ],
  rules: {
    "import/no-default-export": "error",
    "jest/prefer-strict-equal": "error",
    "no-restricted-syntax": [
      "error",
      {
        selector: "TSEnumDeclaration",
        message:
          "Do not declare enums. Use `Plain Object` or `Literal Types` instead.",
      },
    ],
    "prefer-template": "error",
    "sort-destructure-keys/sort-destructure-keys": "error",
    "sort-keys-fix/sort-keys-fix": "error",

    "typescript-sort-keys/interface": "error",
    "typescript-sort-keys/string-enum": "error",

    // constructor のショートハンド（メンバーの省略記法）を許可
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-parameter-properties": "off",

    // ボイラープレートコードを減らすため
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],

    // バグの温床になりやすいコードを防ぐため
    "@typescript-eslint/no-unused-expressions": [
      "error",
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
      },
    ],

    // 有用なケースがあるため
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/no-non-null-assertion": "off",

    // Other
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-misused-promises": "error",
    "@typescript-eslint/prefer-readonly": "error",

    // note you must disable the base rule as it can report incorrect errors
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
  },
}
