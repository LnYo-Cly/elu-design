<script setup lang="ts"></script>

<template>
  <div class="demo">
    <div class="demo1">
      <span>comments</span>
      <elu-badge value="123" class="ex1"></elu-badge>
    </div>

    <div class="demo2">
      <span>comments</span>
      <elu-badge value="123" class="ex1"></elu-badge>
    </div>

    <div class="demo3">
      <elu-badge value="123" class="ex1"></elu-badge>
      <span>comments</span>
    </div>

    <div class="demo4">
      <elu-badge value="123" class="ex1"></elu-badge>
      <span>comments</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.demo {
  display: flex;
  align-items: center;
  justify-content: space-around;

  .demo1 {
    .ex1 {
      margin-bottom: 20px;
      margin-left: -10px;
    }
  }

  .demo2 {
    .ex1 {
      margin-top: 20px;
      margin-left: -10px;
    }
  }
  .demo3 {
    .ex1 {
      margin-bottom: 20px;
      margin-right: 20px;
    }
  }

  .demo4 {
    .ex1 {
      margin-top: 20px;
      margin-right: 20px;
    }
  }
}
</style>
