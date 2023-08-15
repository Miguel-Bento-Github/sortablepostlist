<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<template>
  <span class="loader">{{ t("loading") }}</span>
</template>

<style lang="scss" scoped>
.loader {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: #fff;

  &:before,
  &:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulseOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 calc(1rem / 2) rgba(#fff, 0.75));
  }

  &:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 calc(1rem / 2) #fff;
    animation-name: pulseIn;
    animation-timing-function: ease-in;
  }

  &::after {
    width: calc(100% - 1rem);
    padding-bottom: calc(100% - 1rem);
    box-shadow: 0 0 0 0 #fff;
  }
}

@keyframes pulseIn {
  0% {
    box-shadow: inset 0 0 0 calc(1rem / 2) #fff;
    opacity: 1;
  }
  50%,
  100% {
    box-shadow: inset 0 0 0 0 #f4f4f4;
    opacity: 0;
  }
}

@keyframes pulseOut {
  0%,
  50% {
    box-shadow: 0 0 0 0 #f4f4f4;
    opacity: 0;
  }
  100% {
    box-shadow: 0 0 0 calc(1rem / 2) #fff;
    opacity: 1;
  }
}
</style>
