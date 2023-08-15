# elu-design组件库

## 快速开始

### 安装组件库

```bash
npm i elu-design --save
```

### 全局导入

```ts
// main.ts

import EluDesign from 'elu-design';
// 全局样式
import 'elu-design/theme-chalk/css/index.css';

app.use(EluDesign);
```

### 按需导入

```ts
// main.ts

import { EluIcon } from 'elu-design';
// 单个组件样式
import 'elu-design/theme-chalk/css/icon.css';

app.use(EluIcon);
```

### vue文件按需导入

```html
<!-- main.ts导入全局样式 -->
import 'elu-design/theme-chalk/css/index.css';

<!-- 单文件.vue导入 -->
<script setup lang="ts">
  import { EluIcon } from 'elu-design';
  //import 'elu-design/theme-chalk/css/icon.css';
  // 也可以只导入单个样式，但是你需要导入所有与该组件相关联的样式
  // 更加推荐导入所有样式
</script>
<template>
  <EluIcon color="red" :size="50" name="error"></EluIcon>
</template>
```

### Volar类型提示

如果遇到没有代码提示，可以在`tsconfig.json`中添加以下的代码：

```ts
compilerOptions：{
  "types": [
    "elu-design/global.d.ts",
  ],
}

```

### 更新日志

- version 0.1.0：新增Icon、Button、Badge。更换打包工具为vite
- version 0.0.2：已修复全局导入和按需导入以及对应代码提示
- version 0.0.1：初始测试
