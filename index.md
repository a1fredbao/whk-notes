---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Alfred's whk notes"
  text: "退役 OIer："
  tagline: 从零开始的文化课生活
  actions:
    - theme: alt
      text: 联系我
      link: mailto:me@alfredbao.cn
  image:
    src: /avatar.png
    alt: Alfred Bao
---

<!-- <script setup>
import { onMounted, ref } from 'vue'

const hitokoto = ref('')

async function fetchHitokoto() {
  try {
    const response = await fetch('https://v1.hitokoto.cn')
    if (!response.ok) return ''

    const { hitokoto: text } = await response.json()
    return text
  } catch {
    return ''
  }
}

onMounted(async () => {
  hitokoto.value = await fetchHitokoto()
})
</script>

# Hitokoto

<div class="hitokoto" aria-live="polite">{{ hitokoto }}</div>

<style scoped>
h1 {
  text-align: center;
}

.hitokoto {
  margin: 24px auto 0;
  max-width: 720px;
  min-height: 56px;
  text-align: center;
  font-size: 18px;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
</style> -->
