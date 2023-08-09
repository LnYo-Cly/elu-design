import type { App, Plugin } from 'vue'; // 只是导入类型不是导入App的值

/**
 * 组件外部使用use时执行install，然后将组件注册为全局
 */

// 类型必须导出否则生成不了.d.ts文件
export type SFCWithInstall<T> = T & Plugin;

/**
 * 定义一个withInstall方法处理以下组件类型问题
 * @param comp
 */

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
