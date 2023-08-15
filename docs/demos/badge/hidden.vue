<script setup lang="ts"></script>

<template>
  <div class="demo1">
    <elu-badge class="ex1">
      <elu-icon name="comment" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge hidden class="ex1">
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
