import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vket Developer",
  description: "Vket Developer Documentation",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' }
    ],

    sidebar: [
      {
        text: 'Overview',
        items: [
          { text: 'Welcome to Vket', link: '/overview/welcome' }
        ]
      },
      {
        text: 'Develop',
        items: [
          { text: 'Introduction', link: '/develop/introduction' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VKetDeveloper/docs' }
    ]
  }
})