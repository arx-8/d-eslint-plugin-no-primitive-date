import { AST_NODE_TYPES, TSESTree } from "@typescript-eslint/types"
import { createRule } from "../utils/createRule"

export const RULE_NAME = "no-dangerous-date"
export const MESSAGE_ID = "noDangerousDate"

const OPTION_KEY_OF_MESSAGE = "message"

type Option = {
  /**
   * Custom error message
   */
  message?: string
}

const defaultOptions: Option[] = []

export const noDangerousDate = createRule({
  create: (context) => {
    return {
      "CallExpression > MemberExpression": (
        node: TSESTree.MemberExpression
      ) => {
        const { object, property } = node
        if (
          object.type === AST_NODE_TYPES.Identifier &&
          object.name === "Date" &&
          property.type === AST_NODE_TYPES.Identifier &&
          property.name === "parse"
        ) {
          context.report({
            data: {
              errorMessage:
                context.options[0]?.message ??
                "Do not use 'Date.parse(dateString)'.",
            },
            messageId: MESSAGE_ID,
            node,
          })
        }
      },
      NewExpression: (node) => {
        if (
          node.callee.type === AST_NODE_TYPES.Identifier &&
          node.callee.name === "Date" &&
          node.arguments.length !== 0
        ) {
          context.report({
            data: {
              errorMessage:
                context.options[0]?.message ?? "Do not use 'new Date(value)'.",
            },
            messageId: MESSAGE_ID,
            node,
          })
        }
      },
    }
  },
  defaultOptions,
  meta: {
    docs: {
      category: "Best Practices",
      description: "TODO",
      recommended: "error",
    },
    messages: {
      [MESSAGE_ID]: "{{errorMessage}}",
    },
    schema: [
      {
        maxItems: 1,
        properties: {
          [OPTION_KEY_OF_MESSAGE]: {
            type: "string",
          },
        },
        required: [OPTION_KEY_OF_MESSAGE],
        type: "object",
      },
    ],
    type: "problem",
  },
  name: RULE_NAME,
})
