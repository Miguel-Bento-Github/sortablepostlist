import { LOCALE } from "@/const/readonly/locale";
import i18n from "@/i18n";
import { vueQueryPlugin } from "@/queries/queryClient";
import { router } from "@/router/router";
import "@/styles/boot.scss";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { setup } from "@storybook/vue3";
import { createPinia } from "pinia";

setup((app) => {
  app
    .use(i18n)
    .use(createPinia())
    .use(router)
    .use(...vueQueryPlugin);
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "light",
    grid: {
      cellSize: 16,
      opacity: 0.2,
      cellAmount: 5
    },
    values: [
      {
        name: "light",
        value: "#f4f4f4"
      },
      {
        name: "dark",
        value: "#333333"
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en-GB",
    toolbar: {
      icon: "globe",
      items: Object.entries(LOCALE).map(([value, details]) => ({
        value,
        title: details.name
      }))
    }
  }
};

export const decorators = [
  (story, { globals: { locale } }) => ({
    components: { story },
    setup() {
      // Change the locale to the global from the toolbar
      i18n.global.locale.value = locale;

      // Change document directionality for certain locales
      const dir = LOCALE[locale]?.dir ?? "ltr";

      return { dir, lang: locale };
    },
    template:
      '<div id="app" :dir="dir" :lang="lang" ontouchstart=""><story /></div>'
  })
];
