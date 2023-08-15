import DefaultTheme from 'vitepress/theme';
import { AntdTheme } from 'vite-plugin-vitepress-demo/theme';
import EluDesign from '@elu-design/components/index';
import '@elu-design/theme-chalk/src/index.scss';
import { EnhanceAppContext } from 'vitepress';
import type { Theme } from 'vitepress';
import './style/var.css';
export default {
  ...DefaultTheme,
  // Layout,
  enhanceApp: async (ctx: EnhanceAppContext) => {
    DefaultTheme.enhanceApp?.(ctx);
    ctx.app.use(EluDesign);
    ctx.app.component('Demo', AntdTheme);
  },
} as Theme;
