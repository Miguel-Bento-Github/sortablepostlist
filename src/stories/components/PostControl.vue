<script setup lang="ts">
import IconChevron from "@/stories/token/icon/IconChevron.vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps<{ isReversed?: boolean }>();
</script>

<template>
  <button
    type="button"
    class="control"
    :aria-label="isReversed ? t('actions.moveUp') : t('actions.moveDown')"
  >
    <IconChevron class="icon" :class="{ 'icon--reverse': isReversed }" />
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/size" as *;
@use "@/styles/mixins/viewport" as *;

.control {
  transition: transform 0.1s ease-in-out;

  &:hover {
    @media (pointer: fine) {
      transform: scale(1.4);
      transition: transform 0.2s ease-in-out;
      filter: drop-shadow(0 0 0.025rem currentColor);
    }
  }
}

.icon {
  @include size(1rem);
  position: relative;
  color: rgb(var(--primary));

  &--reverse {
    transform: rotate(180deg);
  }
}
</style>
