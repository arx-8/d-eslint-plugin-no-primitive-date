# Disallow dangerous primitive Date (`no-dangerous-date`)

Date parsing in JavaScript is different between Chrome and Safari.

Chrome:

```ts
new Date("2020-10-10 01:02:03")
// -> Sat Oct 10 2020 01:02:03 GMT+0000
```

Safari:

```ts
new Date("2020-10-10 01:02:03")
// -> Invalid Date
```

**_Dangerous!_**

## Options

This rule accepts one custom error message.  
For example:

```jsonc
{
  "no-dangerous/no-dangerous-date": "error"
}
```

```jsonc
{
  "no-dangerous/no-dangerous-date": [
    "error",
    {
      "message": "Do not use primitive `Date`. Use `date-fns` instead."
    }
  ]
}
```

## Rule Details

- Every web browser has its own JavaScript engine.
- Therefore, Initializing `Date` with a string is ambiguous.
- We should use libraries such as [date-fns](https://www.npmjs.com/package/date-fns) and [dayjs](https://www.npmjs.com/package/dayjs), and only allow the generation of safe `Date` instances.

## Examples

:-1: Examples of **incorrect** code.

```js
new Date("2020-10-10 01:02:03")
new Date(dateString)
new Date(2020)
new Date(2020, 10)
new Date(2020, 10, 10, 1, 2, 3)
Date.parse("2020-10-10 01:02:03")
Date.parse(dateString)
```

:+1: Examples of **correct** code.

```ts
new Date()
Date.now()
dateFns.parse("02/11/2014", "MM/dd/yyyy", new Date())
dayjs("2018-08-08")
```
