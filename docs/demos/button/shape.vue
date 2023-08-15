<script setup lang="ts"></script>

<template>
  <div class="demo">
    <elu-button type="primary">Default Shape</elu-button>
    <elu-button type="primary" shape="square">Square Shape</elu-button>
    <elu-button type="primary" shape="round">Round Shape</elu-button>
    <elu-button type="primary" shape="circle">Circle</elu-button>
    <elu-button type="primary" shape="circle">
      <elu-icon name="cart-full"></elu-icon>
    </elu-button>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
