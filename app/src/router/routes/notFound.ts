export const notFound = {
  path: "/:catchAll(.*)",
  component: () => import("@/views/NotFoundView.vue"),
  meta: {
    title: "404",
    metaTags: [
      {
        name: "description",
        content: "Page not found."
      }
    ]
  }
};
