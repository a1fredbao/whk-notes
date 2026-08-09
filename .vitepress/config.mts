import { defineConfig } from 'vitepress'

function resolveBase() {
  const configuredBase = process.env.VITE_BASE
  if (!configuredBase) return '/'

  const base = configuredBase.trim()
  if (!base || base === '/') return '/'

  return `/${base.replace(/^\/+|\/+$/g, '')}/`
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: resolveBase(),
  title: "Alfred's whk notes",
  description: "An retired OIer",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '化学', link: '/chemistry' }
    ],

    sidebar: {
      '/chemistry/': [
        {
          text: '化学',
          items: [
            { text: '化学基本原理', link: '/chemistry/basic-principles/' },
          ]
        }
      ]
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: "Released under the CC-BY-NC-4.0 License.",
      copyright: "Copyright © 2026-present Alfred Bao"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/a1fredbao/whk-notes' }
    ]
  },
  markdown: {
    math: true
  },
  sitemap: {
    hostname: 'https://whk.alfredbao.cn'
  }
})
