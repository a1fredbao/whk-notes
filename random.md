<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, withBase } from 'vitepress'
import { data as pages } from './random-pages.data.mjs'

const router = useRouter()

function randomPageUrl(): string {
  const page = pages[Math.floor(Math.random() * pages.length)]
  return withBase(page)
}

onMounted(() => {
  const targetUrl = pages.length ? randomPageUrl() : withBase('/')
  void router.go(targetUrl, { replace: true })
})
</script>

正在随机跳转...
