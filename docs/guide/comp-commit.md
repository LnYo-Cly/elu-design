# 贡献指南

## 代码规范

- ESLint
- StyleLint
- husky + commitlint + lint-staged
- prettier

## 组件开发

[详情看问这里](./comp-develop.md)

## 组件文档编写

[详情看问这里](./comp-docs.md)

## Pull Request 规范

1. 请先`fork`本仓库，你需要在fork的项目上进行新增或修改。
2. 确保可以正常执行`pnpm run build`组件构建命令。
3. 如果不想编写`docs`文档，请确保你的组件目录下新建`index.md`，内容需包含完整的使用方法。
4. 在`commit`之前，请确保你的版本与主仓库版本一致。如果版本落后，请使用`merge`同步最新的仓库。
5. 执行`commit`操作，需要遵守[commit 规范](./commitlint.md)
6. 确保`pull request`提交到`dev`分支，如有对应的`issue`，请进行关联
