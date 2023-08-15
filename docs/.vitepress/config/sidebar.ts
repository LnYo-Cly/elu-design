import type { DefaultTheme } from 'vitepress';

export const getSiderbar = (): DefaultTheme.Sidebar => {
  return {
    '/guide/': [
      {
        text: '基础',
        items: [
          { text: '安装', link: '/guide/install' },
          { text: '快速开始', link: '/guide/quickstart' },
        ],
      },
      {
        text: '开发',
        items: [
          { text: '基础介绍', link: '/guide/base-introduce' },
          { text: '组件开发', link: '/guide/comp-develop' },
          { text: '文档编写', link: '/guide/comp-docs' },
          { text: '贡献指南', link: '/guide/comp-commit' },
        ],
      },
    ],

    '/components/': [
      {
        text: '基本',
        items: [
          { text: 'Button 按钮', link: '/components/button/' },
          { text: 'Icon 图标', link: '/components/icon/' },
        ],
      },
      {
        text: 'DATA 数据展示',
        items: [{ text: 'Badge 徽标', link: '/components/badge/' }],
      },
    ],
  };
};
