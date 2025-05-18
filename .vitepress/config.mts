import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vket Developer",
  description: " Vket Developer Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Welcome to Vket', link: '/Overview/welcome' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VKetDeveloper/docs' }
    ]
  }
})
