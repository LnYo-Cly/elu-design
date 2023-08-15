# 基础介绍

## 项目目录

本项目采用monorepo架构，核心可分为：components、theme-chalk、utils、docs、play

```txt
├─.husky                          // 实现git hooks
├─.vscode                         // vscode配置文件夹
├─build                           // 用于项目的打包操作
├─docs                            // 编写组件库的文档
├─packages                        // 组件库的核心
│  ├─components                   // 存放所有组件组件
│  │  ├─button
│  │  │  ├─src                    // 组件源码
│  │  │  └─__test__               // vitest测试
│  │  │  └─index.ts               // 导出单个组件
│  │  ├─other-components
│  │  └─components.ts             // 导出所有组件
│  │  └─index.ts                  // 导出整体
│  │  └─vite.config.ts            // vite打包配置
│  ├─elu-design                   // 用于存放所有组件的导出入口
│  ├─theme-chalk                  // 编写组件样式
│  └─utils                        // 编写组件所需的工具类
├─play                            // 演示组件效果

```

## 开始一个全新的项目

如果你想基于此项目构建一套全新的项目，你可以clone此项目删除一些不必的文件，或者新建一个文件开始。

1. 下面介绍只需保留哪些文件：

- 根目录：`.npmrc`、`package.json`、`pnpm-workspace.yaml`、`tsconfig.json`
- `build`目录
- `packages`目录
- `docs`和`play`目录不是必须的，你也可以新建项目去测试组件和搭建组件文档

其余的文件和文件夹都不需要保留，再根目录`package.json`中，你可以删除无用的依赖。

2. 如何构建？

   在根目录下运行`pnpm run build`即可构建，具体构建代码在`build/gulpfile.ts`，它会自动生成所有的打包文件以及声明文件，打包目录为`dist`

   > 打包已经更换为vite打包，build目录下的打包文件不再使用，仅用来打包样式。

3. 发布为你的npm

代码构建完毕后，你会发现`dist`目录下，有一个`package.json`，这个文件来自于`/packages/elu-design/package.json`，这个文件就是你发布的npm包的具体信息。
在发布之前，你需要确保你的npm源是官方源，如果不是请进行切换：

```shell
npm get registry                                              # 查看当前源
npm config set registry https://registry.npm.taobao.org       # 修改为淘宝镜像
npm config set registry https://registry.npmjs.org            # 修改为官方源
```

使用`npm login`登录账号，接着在`dist`目录下执行`npm publish`即可发布。
