<script setup lang="ts"></script>

<template>
  <div class="demo">
    <elu-button type="primary" disabled>Primary Button</elu-button>
    <elu-button type="outline" color="black" disabled>
      OutLine Button
    </elu-button>
    <elu-button type="dashed" color="black" disabled>Dashed Button</elu-button>
    <elu-button type="text" color="black" disabled>Text Button</elu-button>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
