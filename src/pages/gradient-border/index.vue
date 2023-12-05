<template>
  <h1>Gradient Border</h1>
  <div class="center">
    <div class="container">
      <div class="content" />
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
  background-color: #eee;
  border-radius: 4px;
}
.container::before {
  content: '';
  display: block;
  position: absolute;
  inset: -2px;
  z-index: -1;
  background-image: linear-gradient(to bottom, blue, red);
  border-radius: 6px;
}
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  width: 200px;
  height: 300px;
}
</style>
