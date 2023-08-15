import { defineConfig } from 'vitepress';
import { getNav } from './config/nav';
import { getSiderbar } from './config/sidebar';

export default defineConfig({
  title: 'EluDesign',
  titleTemplate: '一款全新的Vue3 UI组件库',
  description: 'Vue3 UI框架',
  lastUpdated: true,
  ignoreDeadLinks: true,
  head: [
    [
      // Google Search
      'meta',
      {
        name: 'google-site-verification',
        content: 'nm9r_2-zq6b3ydEA_eSobfD5teAkTCI73tzrgFN7d3M',
      },
      '',
    ],
  ],

  themeConfig: {
    lastUpdatedText: '最近更新时间',
    //siteTitle: false,
    nav: getNav(),
    sidebar: getSiderbar(),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/LnYo-Cly/elu-design' },
    ],
    search: {
      provider: 'local',
    },
  },
  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
});
