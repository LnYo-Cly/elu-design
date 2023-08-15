<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <elu-badge value="new" class="ex1">
      <elu-icon name="cart-full" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge value="1+1" class="ex1">
      <elu-icon name="comment" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge value="Text" class="ex1">未读消息</elu-badge>
  </div>
</template>

<style scoped lang="scss">
.demo1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
