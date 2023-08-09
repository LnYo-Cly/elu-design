# 快速开始

## 用法

### 完整引入
完整引入使用更加方便。
```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import EluDesign from 'elu-design';
// 全局样式
import 'elu-design/theme-chalk/css/index.css'

const app = createApp(App);

app.use(EluDesign);
app.mount('#app')
```

### 按需引入

你也可以采用以下方式引入所需组件。
```ts
// main.ts
import { createApp } from 'vue';
import App from './App.vue';

import { EluIcon } from 'elu-design';
// 单个组件样式
import 'elu-design/theme-chalk/css/button.css';

const app = createApp(App);

app.use(EluIcon);
app.mount('#app')
```

也可以采用以下方式在vue中引入。
```html
<script setup  lang="ts">
    import { EluIcon } from 'elu-design';
    import "elu-design/theme-chalk/css/index.css"

</script>
<template>
    <EluIcon color="red" :size="50" name="tishi"></EluIcon>

</template>

```