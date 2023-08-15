# Layouts

This directory contains the layout components for the app.

Layout components wrap the current View content. Layouts include elements that
are present across a multitude of pages. Think of elements like the navigation
header and streak tracker.

## Usage

Each route can specify which layout should be used through the `layoutComponent`
[meta field](https://router.vuejs.org/guide/advanced/meta.html).

```typescript
import BaseLayout from "@/layouts/BaseLayout.vue"; // Import the component

const aboutView = {
  name: "about-view",
  component: () => import("@/views/AboutView.vue"),
  meta: {
    layoutComponent: BaseLayout, // Use it as the layout for a route
```

The [`App`](../App.vue) component adds the layout to the DOM. If there is no
`layoutComponent` specified for the current route, the
[`NavigationLayout`](./NavigationLayout.vue) component is used.

## Implementation

- Layout components **cannot** use `props`.
  - This makes switching a route to a different layout very easy.
  - The layout itself is responsible for using global state to render correctly.
  - It also enforces the idea that layouts elements are present across routes.
- Every layout component **must** have a default
  [`<slot />`](https://vuejs.org/guide/components/slots.html#slots).
  - Without it, the current
    [`<RouterView>`](https://router.vuejs.org/api/index.html#routerview) content
    cannot be rendered.
- Most layout components wrap the default `<slot />` with the
  [`<main>` landmark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main).
- To extend a layout, use
  [named slots](https://vuejs.org/guide/components/slots.html#named-slots), e.g.
  `<slot name="header" />`.
