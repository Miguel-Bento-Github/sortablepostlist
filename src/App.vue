<script setup lang="ts">
import BaseLayout from "@/layouts/BaseLayout.vue";

document.getElementById("loading")?.remove();
</script>

<template>
  <BaseLayout>
    <router-view />
  </BaseLayout>
</template>

<style lang="scss">
:where(#app) {
  min-height: max-content;
  height: 100%;
  padding: 3rem;
}
</style>

<style lang="scss" scoped>
@use "@/styles/mixins/rtl" as *;

.route-transition-leave-active {
  transition: all 0.25s 0.25s ease-in-out;
  transition-property: opacity, transform;
  transition-delay: 0.04s;
}

.route-transition-enter-active {
  transition: all 0.25s 0.25s ease-in-out;
  transition-property: opacity, transform;
}

.route-transition-enter-from {
  opacity: 0;
  transform: translateX(-5vw);

  @include rtl {
    transform: translateX(5vw);
  }
}

.route-transition-enter-to {
  opacity: 0;
  transform: translateX(5vw);

  @include rtl {
    transform: translateX(-5vw);
  }
}
</style>
