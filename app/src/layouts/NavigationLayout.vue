<script lang="ts" setup>
import { useMenuItems } from "@/hooks/useMenuItems";
import BaseLayout from "@/layouts/BaseLayout.vue";
import { ref } from "vue";

const menuItems = useMenuItems();
const activeMenuItems = ref(menuItems.value);
</script>

<template>
  <BaseLayout>
    <template #header>
      <nav>
        <RouterLink
          v-for="menuItem in activeMenuItems"
          :key="menuItem.label"
          :to="menuItem.to"
        >
          {{ menuItem.label }}
        </RouterLink>
      </nav>
      <slot name="header" />
    </template>
    <template #default>
      <slot />
    </template>
  </BaseLayout>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/viewport" as *;

.layout :deep(.main) {
  height: 100%;
}
</style>
