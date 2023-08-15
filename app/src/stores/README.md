# Stores

[Pinia](https://pinia.vuejs.org/) Pinia is employed as the state management library within the project.
It enables the creation of multiple small stores,
simplifying maintenance and minimizing the need for extensive boilerplate code.

## Implementation

### Reactivity

In Pinia, all state properties are reactive by default.

```typescript
// In the store definition
export const useStore = defineStore('main', {
  state: () => ({ property: "text" }),
});

// In some other file...
const store = useStore();
store.$patch({
  property: "text 2",
});

const value = store.property; // This is reactive :)
```

⚠️ Just like `props`, destructuring properties from the store will make them lose
reactivity. If you want to destructure and keep reactivity, use `$state`.

```typescript
const store = useStore();
const { property } = store; // This is NOT reactive!
const { property } = store.$state; // This is reactive :)
```

⚠️ When defining an initial state for an [option store](https://pinia.vuejs.org/core-concepts/#option-stores)
make sure to **include all properties**. Any property that is added to the store
dynamically (i.e. not part of the initial state) will **not** be reactive when
accessing it directly!

```typescript
// In the store definition
export const useStore = defineStore('main', {
  state: (): { property?: string } => ({}),
});

// In some other file...
const store = useStore();
store.$patch({
  property: "text 2",
});

const value = store.property; // This is NOT reactive! It will remain undefined :(
```
