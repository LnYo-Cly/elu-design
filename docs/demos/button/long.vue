<script setup lang="ts"></script>

<template>
  <div class="demo">
    <elu-button type="primary" long>Primary Button</elu-button>
    <elu-button type="outline" color="black" long>Outline Button</elu-button>
    <elu-button type="dashed" color="black" long>Dashed Button</elu-button>
    <elu-button type="text" color="black" long>Text Button</elu-button>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
</style>
