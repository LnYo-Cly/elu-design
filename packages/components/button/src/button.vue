<template>
  <button
    ref="_buttonRef"
    :class="classList"
    :disabled="disabled"
    :style="style"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, CSSProperties } from 'vue';
import { buttonProps } from './button';
import { createNamespace } from '@elu-design/utils/create-bem';
const _buttonRef = ref<HTMLButtonElement | null>(null);

defineOptions({
  name: 'EluButton',
});
const bem = createNamespace('button');
const props = defineProps(buttonProps);
const classList = computed(() => {
  return [
    bem.b(),
    bem.m(props.type),
    bem.m(props.size),
    bem.m(props.shape),
    bem.is('disabled', props.disabled),
    bem.is('loading', props.loading),
    bem.is('long', props.long),
  ];
});

onMounted(() => {
  const button = _buttonRef.value;
  //console.log(button.onclick);
  button?.addEventListener('pointerdown', (e) => {
    if (props.disabled) return;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const span = document.createElement('span');
    span.style.cssText = `top: ${y}px; left: ${x}px;`;
    span.classList.add(bem.e('wave'));
    button.append(span);

    span.addEventListener('animationend', () => {
      span.remove();
    });
    //console.log(x, y);
  });
});

const style = computed<CSSProperties>(() => {
  let { color, status } = props;
  if (!color && !status) {
    return {};
  }
  if (
    !color &&
    (status === 'success' ||
      status === 'warning' ||
      status === 'info' ||
      status === 'primary' ||
      status === 'danger')
  ) {
    color = `var(--button-theme-${status})`;
  }

  if (
    color === 'success' ||
    color === 'warning' ||
    color === 'info' ||
    color === 'primary' ||
    color === 'danger'
  ) {
    color = `var(--button-theme-${color})`;
  }

  if (props.type === 'primary') {
    return {
      ...(color ? { background: color } : {}),
    };
  }
  return {
    ...(color ? { color: color } : {}),
  };
});
</script>
