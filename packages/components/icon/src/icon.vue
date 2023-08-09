<template>
  <svg :class="bem.b()" :style="style" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>

  <slot></slot>
</template>
<script lang="ts" setup>
import { computed, CSSProperties } from 'vue';
import '../font/iconfont.js'; //这里用了阿里适量
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
