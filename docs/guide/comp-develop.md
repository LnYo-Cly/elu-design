# 组件开发

## 如何开发一个新的组件

1. 在`/packages/components/`下新建你所需组件文件夹，例如`button`文件夹。
2. `button`文件夹下需要：`src`文件夹存放组件源文件和类型文件，`index.ts`用于导出和注册组件。

```ts
// packages/components/button/inde.ts

import { withInstall } from '@elu-design/utils/with-install';
import Button from './src/button.vue';
const EluButton = withInstall(Button);

export { EluButton };
export default EluButton;
```

3. 组建的样式在`/packages/theme-chalk/src/`下进行编写，并在全局样式`/packages/theme-chalk/src/index.scss`中引入。

```scss
// packages\theme-chalk\src\button.scss
button {
  // ......
}

//-------分割线---------

// packages\theme-chalk\src\index.scss
// ......
@use 'button.scss';
```

4. 之后在`/packages/components/index.ts`导出你刚刚编写的组件。

```ts
// /packages/components/index.ts
// ......
export * from './button';
```

将组件和样式分开编写，可以保证组件与样式都可以按需引入。

如果把组件和样式写在一起，在引入组件时，同时会把样式也一起引入，这就无法灵活的自定义样式，并且内置的无用样式会增加打包体积。

- 确保编写的组件不会涉及到其他的第三方库
- 如果A组件需要用到B组件，请直接在A组件内引入

## 效果测试

1. 在`/play/main.ts`引入所需的样式和组件，或者引入全局组件和样式。
2. 在`/play/app.vue`中引入组件代码进行测试效果。
