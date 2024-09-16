<template>
    <div>
        <div class="flex gap-5 justify-start items-center rounded-xl py-3 px-3 w-96 sm:w-full  cursor-pointer border-2 border-slate-300 hover:border-blue-800">
        <img :src="subject.img" alt="" class="w-10 h-10 rounded-md" >
        <h1 class="text-xl">{{subject.name}}</h1>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
 
// eslint-disable-next-line vue/no-setup-props-destructure
const {subject} = defineProps(["subject"]);
</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>