<template>
  <div >
        <p class="mb-4 italic text-slate-600">{{ questionStatus }}</p>
        <h1 class="welcome ">What is the result of the following ?</h1>
        <h1 class="text-3xl mt-6 w-80">{{ questions.text }} </h1>
      </div>
    <div class="flex flex-col gap-5 sm:w-96">
        <div class="flex gap-5 justify-start items-center sm:w-full rounded-xl py-3 px-3 w-96  cursor-pointer border-2 border-slate-300 hover:border-blue-800" v-for="option in questions.options" :key="option.id" @click="optionClick(option.isCorrect)">
        <h1  class="w-10 h-10 rounded-xl P-4 text-center bg-slate-200 flex justify-center items-center text-xl">{{option.label}}</h1>
        <h1 class="text-xl">{{ option.text }}</h1>
        </div>
    </div>

      
</template>

<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';
// eslint-disable-next-line vue/no-setup-props-destructure
const {questions , questionStatus} = defineProps(["questions","questionStatus"]);
const emit = defineEmits(["selectedOption"]);
const optionClick = (value) =>{
  emit('selectedOption',value)
}

</script>
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
.welcome{
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}


</style>