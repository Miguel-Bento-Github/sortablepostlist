import { GlobalNavigationRoute } from "@/router/routes.enum";
import HomeView from "@/views/HomeView.vue";

export const homeRoute = {
  name: GlobalNavigationRoute.Home,
  path: "/",
  alias: "/home",
  component: HomeView,
  meta: {
    metaTags: [
      {
        name: "description",
        content: "The home page in our app."
      }
    ]
  }
};
