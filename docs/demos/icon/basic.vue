<script setup lang="ts"></script>

<template>
  <div class="test">
    <elu-icon color="red" :size="20" name="error"></elu-icon>
    <elu-icon color="yellow" :size="50" name="star"></elu-icon>
    <elu-icon color="green" :size="50" name="success"></elu-icon>
    <elu-icon color="pink" :size="50" name="like"></elu-icon>
    <elu-icon color="black" :size="50" name="comment"></elu-icon>
  </div>
</template>

<style>
.test {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
