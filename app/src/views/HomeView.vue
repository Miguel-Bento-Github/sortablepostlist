<script lang="ts" setup>
import { usePostsQuery } from "@/queries/usePostsQuery";
const { data: postsData, isLoading: isLoadingPosts } = usePostsQuery();
</script>

<template>
  <h1>Home</h1>
  <div v-if="isLoadingPosts">Loading...</div>
  <pre v-else>{{ postsData }}</pre>
</template>

<style lang="scss" scoped></style>
