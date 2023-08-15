# Views

This directory contains the views for the app.

Each view is a component rendered by a route. It is added to the DOM by the
[`<route-view>`](https://router.vuejs.org/guide/#router-view).

## Usage

Use the `component` property to define which view a route should render. Most
views should be lazy loaded using the `import()` syntax.

```typescript
// ../router/routes/exampleRoute.ts

const exampleRoute = {
  name: "example",
  component: () => import("@/views/ExampleView.vue"), // Put your view here
```

### Layouts

The view is rendered into the `<main>` landmark, usually with a `<header>`
above it. Those elements are defined by route's the layout component.

[Read more about layouts here](../layouts/README.md).

## Implementation

- Every view **must** add the `<h1>` heading to the DOM.
- The `<template>` **must** have only one root element.
  - With multiple root elements,
    [the Vue `<Transition>` component](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)
    doesn't work.