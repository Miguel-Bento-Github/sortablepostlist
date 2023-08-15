<template>
  <div class="layout" id="layout">
    <slot name="header" />
    <main id="main" class="main" role="main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/viewport" as *;

.layout {
  height: 100%;
  padding-inline: 1rem;

  @include desktop-small {
    max-width: 63.5rem;
    margin: auto;
  }
}
</style>
