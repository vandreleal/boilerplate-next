module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  babel: async options => ({
    ...options,
    plugins: [...options.plugins, ["@emotion"]],
  }),
}
