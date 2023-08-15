<template>
  <div :class="bem.b()">
    <slot></slot>

    <Transition name="elu-zoom-in-center">
      <sup
        v-show="!hidden && (isDot || content)"
        :class="[
          bem.e('content'),
          bem.is('dot', isDot),
          bem.is('fixed', !!$slots.default),
        ]"
        v-text="content"
        :style="style"
      ></sup>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue';
import { badgeProps } from './badge';
import { createNamespace } from '@elu-design/utils/create-bem';
defineOptions({
  name: 'EluBadge',
});
const bem = createNamespace('badge');
const props = defineProps(badgeProps);

const content = computed<string>(() => {
  if (props.isDot) return '';
  if (typeof props.max === 'number' && typeof props.value === 'number') {
    return props.value <= props.max ? `${props.value}` : `${props.max}+`;
  }
  return `${props.value}`;
});

const style = computed<CSSProperties>(() => {
  const { bgColor, textColor } = props;
  if (!bgColor && !textColor) {
    return {};
  }
  return {
    ...(bgColor ? { 'background-color': bgColor } : {}),
    ...(textColor ? { color: textColor } : {}),
  };
});
</script>
