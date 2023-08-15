<script setup lang="ts"></script>

<template>
  <div class="app">
    <div class="demo">
      <elu-button type="primary" status="primary">Primary Button</elu-button>
      <elu-button type="outline" status="primary">Outline Button</elu-button>
      <elu-button type="dashed" status="primary">Dashed Button</elu-button>
      <elu-button type="text" status="primary">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="success">Primary Button</elu-button>
      <elu-button type="outline" color="success">Outline Button</elu-button>
      <elu-button type="dashed" color="success">Dashed Button</elu-button>
      <elu-button type="text" color="success">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="danger">Primary Button</elu-button>
      <elu-button type="outline" color="danger">Outline Button</elu-button>
      <elu-button type="dashed" color="danger">Dashed Button</elu-button>
      <elu-button type="text" color="danger">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="warning">Primary Button</elu-button>
      <elu-button type="outline" color="warning">Outline Button</elu-button>
      <elu-button type="dashed" color="warning">Dashed Button</elu-button>
      <elu-button type="text" color="warning">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="info">Primary Button</elu-button>
      <elu-button type="outline" color="info">Outline Button</elu-button>
      <elu-button type="dashed" color="info">Dashed Button</elu-button>
      <elu-button type="text" color="info">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="black">Primary Button</elu-button>
      <elu-button type="outline" color="black">Outline Button</elu-button>
      <elu-button type="dashed" color="black">Dashed Button</elu-button>
      <elu-button type="text" color="black">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button type="primary" color="#ff42b3">Primary Button</elu-button>
      <elu-button type="outline" color="#ff42b3">Outline Button</elu-button>
      <elu-button type="dashed" color="#ff42b3">Dashed Button</elu-button>
      <elu-button type="text" color="#ff42b3">Text Button</elu-button>
    </div>
    <div class="demo">
      <elu-button
        type="primary"
        color="linear-gradient(111.4deg, rgb(238, 113, 113) 1%, rgb(246, 215, 148) 58%)"
      >
        Primary Button
      </elu-button>
      <elu-button
        type="primary"
        color="linear-gradient(to top right, rgb(238, 163, 175), rgb(149, 214, 240))"
      >
        Primary Button
      </elu-button>
      <elu-button
        class="ex1"
        type="primary"
        color="linear-gradient(to right, #9fe1fa, #f4edc9)"
      >
        Primary Button
      </elu-button>
      <elu-button class="ex2" type="primary">Primary Button</elu-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
  display: flex;

  flex-direction: column;
}
.demo {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.ex1 {
  color: black;
}
.ex2 {
  color: black;
  background: linear-gradient(
    to top right,
    rgb(238, 163, 175),
    rgb(149, 214, 240)
  );
}
</style>
