<template>
  <div class="aa">
    <h3>Icon 测试</h3>
    <elu-icon name="success" color="green" size="32"></elu-icon>
    <elu-icon name="error" color="red" size="32"></elu-icon>
    <elu-icon name="info" color="grey" size="32"></elu-icon>

    <elu-icon name="heart" color="red" size="32"></elu-icon>
    <elu-icon name="cart-full" color="grey" size="32"></elu-icon>
    <elu-icon name="comment" color="grey" size="32"></elu-icon>
    <h3>badge 测试</h3>
    <elu-badge value="Text" class="item" bg-color="rgb(25,118,210)">
      <elu-icon name="cart-full" color="grey" size="32"></elu-icon>
    </elu-badge>
    <elu-badge
      :value="badge.num"
      bg-color="red"
      text-color="#fff"
      :hidden="badge.hidden"
      :max="9"
      class="item"
    >
      <elu-icon name="comment" color="grey" size="32"></elu-icon>
    </elu-badge>

    <elu-badge class="item" is-dot>
      <elu-button @click="badgeNumAdd">数量+1</elu-button>
      <elu-button @click="badgeHidden" type="primary">显示/隐藏</elu-button>
    </elu-badge>

    <elu-badge class="item" is-dot>我是徽标</elu-badge>

    <elu-badge class="item"></elu-badge>

    <h3>elu-button 测试</h3>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const badge = reactive({
  num: 0,
  hidden: true,
});
const badgeNumAdd = () => {
  badge.num++;
  if (badge.num > 0) {
    badge.hidden = false;
  }
};
const badgeHidden = () => {
  badge.hidden = !badge.hidden;
};
</script>
<style scoped>
.item {
  margin: 0 10px;
}
</style>
