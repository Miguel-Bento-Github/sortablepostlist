<script setup lang="ts">
defineProps<{ tag?: string }>();
</script>

<template>
  <component class="card" :is="tag ?? 'div'">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/shadow" as shadow;

.card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: rgb(var(--white));
  @include shadow.low;

  &--list {
    border: 1px solid rgb(var(--black), 5%);
  }

  &--list + .card--list {
    border-radius: 0;
  }

  &--list:first-child {
    border-radius: 0.375rem;
    border-end-start-radius: 0;
    border-end-end-radius: 0;
  }

  &--list:last-child {
    border-radius: 0.375rem;
    border-start-start-radius: 0;
    border-start-end-radius: 0;
  }
}
</style>
