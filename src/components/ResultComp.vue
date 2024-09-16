<template>
  <main
    class="md:flex h-fit w-full justify-center items-center md:top-12 left-0 sm:relative md:absolute sm:top-40 sm:block"
  >
    <div>
      <h1 class="text-3xl text-center">Well done..!!</h1>
      <h1 class="text-3xl text-center font-bold">{{ result }}</h1>
    </div>
    <img src="../assets/done-animate.svg" alt="" class="w-[39rem]" />
  </main>
</template>

<script setup>
import { defineProps } from "vue";

// eslint-disable-next-line vue/no-setup-props-destructure
const { result } = defineProps(["result"]);
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
