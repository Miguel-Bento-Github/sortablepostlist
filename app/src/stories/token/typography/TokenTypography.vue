<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{ message: string; type: string }>();

const classList = computed(() => ({
  [`typography-${props.type}`]: !!props.type
}));
</script>

<template>
  <div :class="classList">
    {{ message }}
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/typography";

.typography-header-1 {
  @include typography.header-1;
}

.typography-header-2 {
  @include typography.header-2;
}

.typography-body {
  @include typography.body;
}
</style>
