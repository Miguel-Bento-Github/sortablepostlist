import { nextTick } from "vue";
import {
  createRouter,
  createWebHistory,
  isNavigationFailure
} from "vue-router";
import { routes } from "./routes";
import { scrollBehavior } from "./scrollBehavior";

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior
});

router.afterEach((to, from, failure) => {
  if (isNavigationFailure(failure)) return;

  nextTick(() => {
    if (typeof to.name === "string") {
      document.title = to.name;
    }
  });
});
