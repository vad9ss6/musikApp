module.exports = {
  printWidth: 80,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.md',
      options: {
        singleQuote: false,
      },
    },
  ],
};
