<script lang="ts" setup>
import { usePostsQuery } from "@/queries/usePostsQuery";
import CircleLoader from "@/stories/components/CircleLoader.vue";
import MainCard from "@/stories/components/MainCard.vue";
import PostControl from "@/stories/components/PostControl.vue";
import TimeTravel from "@/stories/components/TimeTravel.vue";
import { PostsResponse } from "@/types/api/posts";
import { swapItemsInArray } from "@/util/swapItemsInArray";
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const {
  data: postsData,
  isLoading: isLoadingPosts,
  isFetched
} = usePostsQuery(0, 5);

const posts = ref<PostsResponse[]>();
const postHistory = ref<
  {
    move: string;
    currentPostState: PostsResponse[];
  }[]
>([]);

watch(isFetched, (isDataFetched) => {
  if (!postsData.value || !isDataFetched) return;
  posts.value = postsData.value;
});

const handleSnapshot = (
  posts: PostsResponse[],
  id: number,
  from: number,
  to: number
) => {
  const snapshot = {
    move: t("actions.moved", { id, from, to }),
    currentPostState: [...posts]
  };
  postHistory.value.push(snapshot);
};

const swapPostPosition = (id: number, index: number, isMovingUp: boolean) => {
  if (!posts.value) return;

  const clickedPostIndex = posts.value.findIndex((post) => post.id === id);
  const nextIndexPosition = isMovingUp ? index - 1 : index + 1;

  handleSnapshot(posts.value, id, clickedPostIndex, nextIndexPosition);

  posts.value = swapItemsInArray(
    posts.value,
    clickedPostIndex,
    nextIndexPosition
  );
};

const handleTimeTravel = (index: number, newPostState: PostsResponse[]) => {
  posts.value = newPostState;
  postHistory.value.splice(index, postHistory.value.length);
};
</script>

<template>
  <div class="home">
    <section>
      <h1 class="headline">{{ t("home.headline") }}</h1>
      <TransitionGroup name="fade">
        <CircleLoader aria-live="polite" v-if="isLoadingPosts" />
        <TransitionGroup
          aria-live="polite"
          class="posts"
          name="list"
          tag="ul"
          role="list"
          v-else
        >
          <MainCard
            tag="li"
            role="listitem"
            v-for="(post, index) in posts"
            :key="post.id"
          >
            <span class="post-id">{{ t("home.post", { id: post.id }) }}</span>
            <div class="controls">
              <PostControl
                @click="swapPostPosition(post.id, index, true)"
                :is-reversed="!!index"
                v-if="index"
              />
              <PostControl
                @click="swapPostPosition(post.id, index, false)"
                v-if="postsData && postsData.length - 1 !== index"
              />
            </div>
          </MainCard>
        </TransitionGroup>
      </TransitionGroup>
    </section>
    <section class="history">
      <header class="history-header">
        <h2>{{ t("actions.title") }}</h2>
      </header>
      <TransitionGroup
        v-show="postHistory.length"
        class="history-list"
        name="list"
        tag="ul"
        role="list"
      >
        <MainCard
          tag="li"
          role="listitem"
          aria-live="polite"
          v-for="(post, index) in postHistory"
          :key="index + post.move"
          :class="{ 'card--list': postHistory.length > 1 }"
        >
          <span>{{ post.move }}</span>
          <TimeTravel @click="handleTimeTravel(index, post.currentPostState)" />
        </MainCard>
      </TransitionGroup>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "@/styles/mixins/typography";
@use "@/styles/mixins/size" as *;
@use "@/styles/mixins/pseudo" as *;
@use "@/styles/mixins/shadow" as shadow;
@use "@/styles/mixins/viewport" as *;
@use "@/styles/definitions/border-radius" as *;

.home {
  display: grid;
  column-gap: 4rem;

  @include tablet-landscape {
    grid-template-columns: 1fr 1fr;
  }
}

.headline {
  @include typography.header-1;
  color: rgb(var(--light-grey));
}

.posts {
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;
}

.post-id {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.controls {
  position: absolute;
  inset-inline-end: 0.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.history {
  @include shadow.low;
  position: relative;
  padding: 1rem;
  height: max-content;
  border-radius: $borderRadius;
  background: rgb(var(--light-grey));
}

.history-header {
  @include typography.header-2;
  position: relative;
  z-index: 0;

  &::before {
    z-index: -1;
    @include pseudo(0, 0, 0, 0);
    @include size(calc(100% + 2rem));
    margin: -1rem;
    border-start-start-radius: $borderRadius;
    border-start-end-radius: $borderRadius;
    background: rgb(var(--white));
  }
}

.history-list {
  margin: 2rem 0 0;
}
</style>
