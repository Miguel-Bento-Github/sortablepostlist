import { createApp } from "vue";
import App from "@/App.vue";
import i18n from "@/i18n";
import { router } from "@/router/router";
import { vueQueryPlugin } from "@/queries/queryClient";

import "@/styles/boot.scss";

createApp(App)
  .use(i18n)
  .use(router)
  .use(...vueQueryPlugin)
  .mount("#app");
