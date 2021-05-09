import { ESLintUtils } from "@typescript-eslint/experimental-utils"

export const createRule = ESLintUtils.RuleCreator(
  (ruleName) =>
    `https://github.com/arx-8/eslint-plugin-no-dangerous/blob/main/docs/${ruleName}.md`
)
