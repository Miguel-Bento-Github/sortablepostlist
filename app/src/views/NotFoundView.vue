<script setup lang="ts">
import { GlobalNavigationRoute } from "@/router/routes.enum";
</script>

<template>
  <section>
    <h1>404: Lost in Cyberspace</h1>
    <img
      src=""
      alt="A bewildered robot holding a magnifying glass, searching for a missing pixel."
    />
    <p>
      Oops! It seems you've wandered into the digital Bermuda Triangle. The
      pixel you were seeking must've taken a vacation. It's sipping piña coladas
      on a remote server beach.
    </p>
    <RouterLink :to="{ name: GlobalNavigationRoute.Home }"
      >Rescue Me!</RouterLink
    >
    <footer>
      Hang tight, intrepid voyager! Our digital sherpa is on the way.
    </footer>
  </section>
</template>
