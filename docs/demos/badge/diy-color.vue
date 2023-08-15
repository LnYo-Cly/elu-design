<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <elu-badge bg-color="green" :value="5" class="ex1">
      <elu-icon name="cart-full" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge
      bg-color="rgb(25,118,210)"
      text-color="black"
      :value="100"
      class="ex1"
    >
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
