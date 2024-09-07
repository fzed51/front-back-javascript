const config = {
  trailingComma: "es5",
  singleQuote: false,
  overrides: [
    {
      files: "*.svg",
      options: {
        parser: "html",
      },
    },
  ],
};

module.exports = config;
