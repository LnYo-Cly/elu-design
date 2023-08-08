# elu-design组件库

## 快速开始
### 安装组件库
```bash
npm i elu-design --save
```

### 全局导入

```ts
import EluDesign from 'elu-design';
// 全局样式
import 'elu-design/theme-chalk/css/index.css'

app.use(EluDesign);
```

### 按需导入

```ts
import { EluIcon } from 'elu-design';
// 单个组件样式
import 'elu-design/theme-chalk/css/button.css'

app.use(EluIcon);
```

### vue文件按需导入

```html
<script setup  lang="ts">
    import { EluIcon } from 'elu-design';
    import "elu-design/theme-chalk/css/index.css"

</script>
<template>
    <EluIcon color="red" :size="50" name="tishi"></EluIcon>

</template>

```

### 更新日志

+ version 0.0.2：已修复全局导入和按需导入以及对应代码提示
+ version 0.0.1：初始测试