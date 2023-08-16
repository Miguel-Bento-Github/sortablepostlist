import type { RouterScrollBehavior } from "vue-router";

export const scrollBehavior: RouterScrollBehavior = (
  to,
  from,
  savedPosition
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (savedPosition) {
        resolve(savedPosition);
      } else if (to.hash) {
        const uuid = to.hash.replace("#", "");
        resolve({
          el: `[id="${uuid}"]`, // The # id selector is invalid if the uuid starts with a number
          behavior: "smooth"
        });
      } else {
        resolve({ top: 0 });
      }
    }, 350);
  });
};
