<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, withBase } from "vitepress";
import { VPButton } from "vitepress/theme";
import { data as pages } from "./random-pages.data.mjs";

const router = useRouter();
const fallbackUrl = "/";
const currentUrl = ref(withBase(pages[0] ?? fallbackUrl));

function randomUrl(): string {
  if (!pages.length) return withBase(fallbackUrl);

  const url = pages[Math.floor(Math.random() * pages.length)];
  return withBase(url);
}

onMounted(() => {
  currentUrl.value = randomUrl();
});

function openRandom(event: MouseEvent): void {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  router.go(randomUrl());
}
</script>

<template>
  <div v-if="pages.length" class="random-page-action">
    <VPButton
      tag="a"
      theme="brand"
      text="随机页面"
      :href="currentUrl"
      @click="openRandom"
    />
  </div>
</template>

<style scoped>
.random-page-action {
  flex-shrink: 0;
  padding: 6px;
}
</style>
