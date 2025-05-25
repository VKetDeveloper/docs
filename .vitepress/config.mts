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
      ,
      {
        text: 'Beta Program',
        items: [
          { text: 'index', link: '/beta/index' },
          { text: 'プライバシーポリシー', link: '/beta/privacy' },
          { text: '利用規約', link: '/beta/terms' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/VKetDeveloper/docs' }
    ]
  }
})