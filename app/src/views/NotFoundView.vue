<script setup lang="ts">
import { GlobalNavigationRoute } from "@/router/routes.enum";
import MainCard from "@/stories/components/MainCard.vue";
</script>

<template>
  <MainCard class="card" tag="section">
    <h1 class="heading">404: Lost in Cyberspace</h1>
    <p class="content">
      Oops! It seems you've wandered into the digital Bermuda Triangle. The
      pixel you were seeking must've taken a vacation. It's sipping piña coladas
      on a remote server beach.
    </p>
    <RouterLink
      class="cta cta--primary"
      :to="{ name: GlobalNavigationRoute.Home }"
      >Rescue Me!</RouterLink
    >
  </MainCard>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/typography";
@use "@/styles/mixins/cta" as *;

.card {
  flex-direction: column;
  align-items: flex-start;
}

.headline {
  @include typography.header-1;
  color: rgb(var(--light-grey));
}

.content {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.cta {
  @include cta;

  text-decoration: none;
  color: rgb(var(--black));
}
</style>
