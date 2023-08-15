<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <elu-badge :value="10" :max="9" class="ex1">
      <elu-icon name="cart-full" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge :value="100" :max="99" class="ex1">
      <elu-icon name="comment" color="grey" size="32"></elu-icon>
    </elu-badge>
  </div>
</template>

<style scoped lang="scss">
.demo1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
