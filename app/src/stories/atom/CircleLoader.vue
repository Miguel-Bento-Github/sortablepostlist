<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <span class="loader">{{ t("loading") }}</span>
</template>

<style lang="scss" scoped>
$color: #888;
$size: 1rem;

.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.loader:before,
.loader:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  animation: pulseOut 1.8s ease-in-out infinite;
  filter: drop-shadow(0 0 calc($size / 2) rgba($color, 0.75));
}

.loader:before {
  width: 100%;
  padding-bottom: 100%;
  box-shadow: inset 0 0 0 calc($size / 2) $color;
  animation-name: pulseIn;
  animation-timing-function: ease-in;
}

.loader:after {
  width: calc(100% - $size);
  padding-bottom: calc(100% - $size);
  box-shadow: 0 0 0 0 $color;
}

@keyframes pulseIn {
  0% {
    box-shadow: inset 0 0 0 calc($size / 2) $color;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 $color;
    opacity: 0;
  }
}

@keyframes pulseOut {
  0%,
  50% {
    box-shadow: 0 0 0 0 $color;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 calc($size / 2) $color;
    opacity: 1;
  }
}
</style>
