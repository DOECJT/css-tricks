<template>
  <section
    h-full
    flex="~ col"
    text-slate-700
  >
    <h1
      flex-shrink-0
      font="sans semibold"
      text="30px center"
    >
      Gradient Border
    </h1>
    <main flex-grow-1 overflow-hidden>
      <div h-full grid="~ cols-1" place-items-center>
        <div class="container" w-400px h-240px />
      </div>
    </main>
  </section>
</template>

<style scoped>
.container {
  display: inline;
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
  background-image: linear-gradient(120deg, blue, red);
  border-radius: 6px;
}
</style>
