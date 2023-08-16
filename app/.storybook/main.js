const { resolve } = require("path");
const VueI18nPlugin = require("@intlify/unplugin-vue-i18n/vite");
const { loadConfigFromFile, mergeConfig } = require("vite");

module.exports = {
  async viteFinal(previousConfig, { previewUrl, configType }) {
    const { config } = await loadConfigFromFile(
      configType,
      resolve(__dirname, "../vite.config.ts")
    );

    if (previewUrl) {
      config.base = previewUrl.replace("iframe.html", "");
    }

    return mergeConfig(previousConfig, {
      ...config,
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
          "@cy": resolve(__dirname, "../cypress")
        }
      },
      plugins: [
        VueI18nPlugin({
          include: resolve(__dirname, "../src/locales/**"),
          runtimeOnly: false,
          strictMessage: false, // Allows HTML, might cause XSS
          escapeHtml: false
        })
      ]
    });
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}
  },
  staticDirs: ["../src/assets", "../src/stories/assets"],
  docs: {
    autodocs: "tag",
    defaultName: "Documentation"
  }
};
