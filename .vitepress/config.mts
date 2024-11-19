import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Har Planter Følelser?",
  description: "A VitePress Site",
  themeConfig: {
    //darkModeSwitchLabel: "stuff",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      
    ],

    socialLinks: [
      // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: []    
  },
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }]
  ],  
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
}

)


