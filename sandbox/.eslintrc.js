module.exports = {
  plugins: ["no-dangerous"],
  rules: {
    "no-dangerous/no-dangerous-date": [
      "error",
      {
        message: "Do not use primitive `Date`. Use `date-fns` instead.",
      },
    ],
  },
}
