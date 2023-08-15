<template>
  <svg :class="bem.b()" :style="style" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script lang="ts" setup>
import { computed, CSSProperties, onMounted } from 'vue';

onMounted(() => {
  import('../font/iconfont.js'); //这里用了阿里矢量库，因为js中含有window，需要浏览器环境才能运行
});

import { createNamespace } from '@elu-design/utils/create-bem';
import { iconProps } from './icon';
const bem = createNamespace('icon');
defineOptions({
  name: 'EluIcon',
});
const props = defineProps(iconProps);
const iconName = computed(() => {
  return `#elu-icon-${props?.name}`;
});
const style = computed<CSSProperties>(() => {
  const { size, color } = props;
  if (!color && !size) {
    return {};
  }
  return {
    ...(size ? { 'font-size': size + 'px' } : {}),
    ...(color ? { color: color } : {}),
  };
});
</script>
