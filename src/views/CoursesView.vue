<template>   
<div class="w-full py-4">
  <div class="sm:w-full md:w-2/3 mb-10 mx-auto border-b-2 pb-1 border-slate-200 sm:pl-2 md:pl-0 " >
          <div class="flex gap-2 justify-start items-center rounded-xl py-3 px-3 w-fit h-14  cursor-pointer">
            <img src="../assets/logo.png" alt="" class="w-9 h-9 rounded-xl" >
            <h1 class="text-xl font-semibold">EduQuiz</h1>
          </div>
    </div>
<main class="flex gap-10 sm:gap-10 sm:w-auto md:w-2/3 mx-auto p-4 justify-evenly flex-wrap ">
       <div>
        <h1 class="welcome">Welcome to the <br/> <b class="text-blue-800">Form 5 Quiz !</b> </h1>
        <p class="mt-5 italic text-slate-600">Pick a subject to get start.</p>
        </div>

       <div class="flex flex-col gap-5 sm:w-96">
       <CardComp v-for="subject in data" :key="subject.id" :subject="subject" @click="navigateToCourse(subject.id)" />
       </div>
</main>
</div>
</template>

<script setup>
import CardComp from '@/components/CardComp.vue';
import data from "../data/data.json"
import { useRouter } from 'vue-router';
 
const router = useRouter();
const navigateToCourse = (courseId) => {
return router.push(`/course/${courseId}`);
}

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.welcome{
    font-size: 42px;
    font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}
</style>