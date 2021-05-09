import {
  noDangerousDate,
  RULE_NAME as noDangerousDateName,
} from "./rules/no-dangerous-date"

export = {
  configs: {
    extends: {
      plugins: ["no-dangerous"],
    },
    rules: {
      [noDangerousDateName]: "error",
    },
  },
  rules: {
    [noDangerousDateName]: noDangerousDate,
  },
}
