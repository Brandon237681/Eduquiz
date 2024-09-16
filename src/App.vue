<template>
  <main class="bg-slate-50 flex flex-col justify-start items-center h-screen w-full ">
  <div class="w-full h-auto flex justify-center items-center font-mono  ">
     <RouterView />
</div>
</main>
</template>

<script setup>
import { RouterView } from 'vue-router';
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

*{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper{
  height: 97vh;
}
</style>