import DefaultTheme from 'vitepress/theme';
import { AntdTheme } from "vite-plugin-vitepress-demo/theme"
import EluDesign from "@elu-design/elu-design/index"
import "@elu-design/theme-chalk/src/index.scss"
import { EnhanceAppContext } from 'vitepress';
import type {Theme} from 'vitepress';


export default {
  ...DefaultTheme,
  // Layout,
  enhanceApp(ctx: EnhanceAppContext): void{
    DefaultTheme.enhanceApp?.(ctx);
    ctx.app.use(EluDesign);
    ctx.app.component('Demo', AntdTheme);
  }
} as Theme;