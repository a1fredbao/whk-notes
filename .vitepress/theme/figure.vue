<template>
  <figure class="figure">
    <img
      class="figure-image"
      :src="resolvedSrc"
      :alt="altText"
      loading="lazy"
    />
    <!-- 优先使用默认插槽，其次使用 v-html 渲染 description 文本中的 HTML 标签 -->
    <figcaption v-if="description || $slots.default" class="figure-description">
      <slot>
        <span v-html="description"></span>
      </slot>
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { computed } from "vue";

const props = defineProps<{
	src: string;
	description?: string;
	alt?: string;
}>();

const imageAssets = import.meta.glob<string>(
	[
		"../../**/*.{png,jpg,jpeg,gif,webp,svg,avif}",
		"!../../**/node_modules/**",
		"!../../**/dist/**",
		"!../../**/.vitepress/**",
		"!../../public/**",
	],
	{ eager: true, query: "?url", import: "default" },
);

// biome-ignore lint/correctness/noUnusedVariables: Actually used
const altText = computed(() => props.alt ?? props.description ?? "");

// biome-ignore lint/correctness/noUnusedVariables: Actually used
const resolvedSrc = computed(() => {
	const src = props.src;

	if (
		/^(?:https?:)?\/\//i.test(src) ||
		/^(?:data|blob):/i.test(src) ||
		src.includes("/assets/") ||
		src.startsWith("/src/") ||
		src.startsWith("/@fs/")
	) {
		return src;
	}

	const normalized = src.replace(/^\.\//, "").replace(/^\/+/, "");
	const match = Object.keys(imageAssets).find((key) => {
		const file = key.replace(/\\/g, "/");
		return file === normalized || file.endsWith(`/${normalized}`);
	});

	if (match) return imageAssets[match];

	return withBase(src.startsWith("/") ? src : `/${normalized}`);
});
</script>

<style scoped>
.figure {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 24px auto;
  text-align: center;
}

.figure-image {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.figure-description {
  margin: 0;
  font-size: 0.875em;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}

/* 优化 v-html 渲染出来的 <a> 链接样式，使其符合 VitePress 主题 */
.figure-description :deep(a) {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.25s;
}

.figure-description :deep(a:hover) {
  color: var(--vp-c-brand-2);
}
</style>
