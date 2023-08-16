<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
defineProps<{ backgroundColor?: string; color?: string }>();
</script>

<template>
  <button type="button" class="time-travel time-travel--primary">
    {{ t("actions.timeTravel") }}
  </button>
</template>

<style lang="scss" scoped>
@use "@/styles/definitions/border-radius" as *;
@use "@/styles/mixins/shadow" as shadow;
@use "@/styles/mixins/cta" as *;

.time-travel {
  @include cta;
}
</style>
