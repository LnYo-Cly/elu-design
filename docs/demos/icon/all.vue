<script setup lang="ts"></script>

<template>
  <div class="test">
    <div class="item">
      <elu-icon :size="32" name="eye"></elu-icon>
      <span>eye</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="eye-close"></elu-icon>
      <span>eye-close</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="no_eye"></elu-icon>
      <span>no_eye</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="search"></elu-icon>
      <span>search</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="bubble"></elu-icon>
      <span>bubble</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="mdatepicker"></elu-icon>
      <span>mdatepicker</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="cart-full"></elu-icon>
      <span>cart-full</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="like"></elu-icon>
      <span>like</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="heart"></elu-icon>
      <span>heart</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="list"></elu-icon>
      <span>list</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="favoriteslist"></elu-icon>
      <span>favoriteslist</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="comment"></elu-icon>
      <span>comment</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="shutdown"></elu-icon>
      <span>shutdown</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="minus-circle"></elu-icon>
      <span>minus-circle</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="plus-circle"></elu-icon>
      <span>plus-circle</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="star"></elu-icon>
      <span>star</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="fullscreen"></elu-icon>
      <span>fullscreen</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="fullscreen-exit"></elu-icon>
      <span>fullscreen-exit</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="loading"></elu-icon>
      <span>loading</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="error"></elu-icon>
      <span>error</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="pause"></elu-icon>
      <span>pause</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="hot"></elu-icon>
      <span>hot</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="info"></elu-icon>
      <span>info</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="success"></elu-icon>
      <span>success</span>
    </div>
    <div class="item">
      <elu-icon :size="32" name="guide"></elu-icon>
      <span>guide</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.test {
  display: flex;
  flex-wrap: wrap;
}

.item {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 64px;

  height: 100px;
  width: 16.6%;
  span {
    width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
}
</style>
