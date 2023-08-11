# 组件开发

## 如何开发一个新的组件

1. 在`/packages/components/`下新建你所需组件文件夹，例如`button`文件夹。
2. `button`文件夹下需要：`src`文件夹存放组件源文件和类型文件，`index.ts`用于导出和注册组件。
3. 组建的样式在`/packages/theme-chalk/`下进行编写
4. 之后在`/packages/components/index.ts`导出你刚刚编写的组件

将组件和样式分开编写，可以保证组件与样式都可以按需引入。
如果把组件和样式写在一起，

## 组件测试

1. 在`/play/main.ts`引入所需的样式和组件，或者引入全局组件和样式。
2. 在`/play/app.vue`中引入组件代码进行测试效果。
