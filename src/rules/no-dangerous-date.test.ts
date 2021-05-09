import { RuleTester } from "../utils/RuleTester"
import { MESSAGE_ID, noDangerousDate, RULE_NAME } from "./no-dangerous-date"

const tester = new RuleTester({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
})

tester.run(RULE_NAME, noDangerousDate, {
  invalid: [
    {
      code: `new Date("2020-10-10 01:02:03")`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `new Date(dateString)`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `new Date(2020)`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `new Date(2020, 10)`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `new Date(2020, 10, 10, 1, 2, 3)`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `Date.parse("2020-10-10 01:02:03")`,
      errors: [{ messageId: MESSAGE_ID }],
    },
    {
      code: `Date.parse(dateString)`,
      errors: [
        {
          data: {
            errorMessage: "custom error message",
          },
          messageId: MESSAGE_ID,
        },
      ],
      options: [
        {
          message: "custom error message",
        },
      ],
    },
  ],
  valid: [
    `new Date()`,
    `let d = new Date()`,
    `const timeInMs = Date.now()`,
    `var result = dateFns.parse("02/11/2014", "MM/dd/yyyy", new Date())`,
    `var result = parse("02/11/2014", "MM/dd/yyyy", new Date())`,
    `dayjs("2018-08-08")`,
    `var d = new MyDate()`,
    `var d = new MyDate("2020-10-10 01:02:03")`,
  ],
})
