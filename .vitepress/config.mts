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
          { text: 'Introduction', link: '/develop/introduction' },
          { text: 'Howo to Git', link: '/develop/git' },
          { text: 'Howo to Github ', link: '/develop/github' },
          { text:'Howo to GitLab', link: '/develop/gitLab' },
          { text: '作業の進め方', link: '/develop/howtoproceed' },
          { text: 'How to Pull Request', link: '/develop/pullrequest' },
          { text: '用語集', link: '/develop/term' },
          { text: 'コマンド集', link: '/develop/Github_Command' }
        ]
      }
      ,
      {
        text: 'Beta Program',
        items: [
          { text: 'BETA PROGRAM AT VR', link: '/beta/index' },
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