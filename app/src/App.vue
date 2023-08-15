<script setup lang="ts">
import NavigationLayout from "@/layouts/NavigationLayout.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <transition name="route-transition" mode="out-in">
    <component :is="route.meta.layoutComponent ?? NavigationLayout">
      <router-view v-slot="{ Component }">
        <transition name="route-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </component>
  </transition>
</template>

<style lang="scss">
:where(#app) {
  min-height: max-content;
  height: 100%;
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
