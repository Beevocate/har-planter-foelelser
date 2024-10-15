import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Har Planter Følelser?",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Hvad er bevidsthed?', link: '/hvad-er-bevidsthed' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    root: {
      label: "Dansk",
      lang: 'da-DK',
      title: 'Har Planter Følelser?',
      description: 'En VitePress-side'
    },
    en: {
      label: "English",
      lang: 'en-US',
      title: 'Do Plants Have Feelings?',
      description: 'A VitePress Site'
    }
  }
})
