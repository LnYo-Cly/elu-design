# 组件文档

## 添加组件文档

1. `/docs/components/`组件文档：在`/docs/components/`下新建一个组件文件夹，并创建`index.md`用于编写组件文档
2. `/docs/demos/`组件代码演示：在`/docs/demos/`下新建对应组件的文件夹，接着创建你所需的demo演示文件。
3. 在`/docs/components/xxxxComp/index.md`中引入组件：

```html
<!-- 文档内容 -->

<demo src="../../demos/button/basic.vue"></demo>

<!-- 文档内容 -->
```

4. 在`/docs/.vitepress/config/sidebar.ts`添加组件文档内容。

## 部署文档

1. 在GitHub创建与账号同名的仓库
2. 修改`/docs/auto-deploy.sh`的仓库
3. 在项目根目录运行`bash ./docs/auto-deploy.sh`

## 打包时可能遇到的问题

### window is not defined 解决方案

因为vitepress的打包是client + server（浏览器+node），在node环境中是不存在window的所以会报错。

先找到哪里的代码引起了报错，例如：我这里是在`theme/index.ts`进行`app.use(EluDesign)`时打包报错，说明EluDesign中含有window，导致在node环境下报错找不到window。那么我们就在`packages`目录下寻找`window`（vs code自带了在文件夹中查找字符串）。我这里可以找到是`iconfont.js`中含有window，所以是导入`iconfont.js`时报了错。我们只需要将原来的导入代码在`onMounted`声明周期中进行使用即可，或者编一个判断当前环境的函数，仅当为浏览器环境时，才执行含有window的代码。
![20230811232523](https://cdn.jsdelivr.net/gh/lnyo-cly/blogImg/pics/20230811232523.png)

![20230811233346](https://cdn.jsdelivr.net/gh/lnyo-cly/blogImg/pics/20230811233346.png)
