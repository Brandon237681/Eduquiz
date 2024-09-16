<template>
  <main class="w-full py-4">
    <div
      class="sm:w-full md:w-2/3 mx-auto sm:pl-2 md:pl-1 mb-10 flex justify-between items-center flex-wrap border-b-2 md:pb-1 sm:pb-2 border-slate-200 sm:fixed md:relative sm:bg-slate-50 sm:top-0 sm:pt-6 md:pt-0 sm:left-0"
    >
      <div
        class="flex gap-2 justify-start items-center rounded-xl py-3 px-3 w-fit h-14 cursor-pointer sm:mr-20 md:mr-0"
      >
        <img src="../assets/logo.png" alt="" class="w-9 h-9 rounded-xl" />
        <h1 class="text-xl font-semibold">EduQuiz</h1>
      </div>

      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-center w-fit gap-4">
          <div class="flex justify-center items-center w-fit gap-1">
            <img src="../assets/alarm2.svg" alt="" class="w-4 h-4" />
            <h1>20 mins</h1>
          </div>
          <div class="md:w-60 sm:w-28 h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              class="h-2.5 bg-blue-700 rounded-full"
              :style="{ width: progressBar + '%' }"
            ></div>
          </div>
        </div>
      </div>
      <div>
        <RouterLink
          to="/"
          class="px-4 py-2 bg-red-600 text-white rounded-md w-24 flex justify-center items-center gap-1 hover:ring-2 ring-offset-2 mr-2 ring-red-700"
        >
          <h1 class="w-fit pl-2">Home</h1>
          <img src="../assets/arrow-right.svg" alt="" class="w-6 h-6" />
        </RouterLink>
      </div>
    </div>
    <div v-if="course.questions[currrentQuestionIndex] != undefined">
      <div class="w-fit md:w-2/3 md:pl-20 md:mx-auto sm:mt-28 md:mt-0">
        <div
          class="flex gap-2 justify-start items-center rounded-xl py-3 px-3 w-44 h-14  cursor-pointer"
        >
          <img :src="course.img" alt="" class="w-8 h-8 rounded-md" />
          <h1 class="text-xl dark:text-white">{{ course.name }}</h1>
        </div>
      </div>
      <main class="flex w-full p-4 justify-evenly flex-wrap gap-10 sm:gap-10 sm:w-auto md:w-2/3 mx-auto">
        <OptionComp
          :questions="course.questions[currrentQuestionIndex]"
          @selectedOption="optionSelected"
          :questionStatus="questionStatus"
        />
      </main>
    </div>
    <ResultComp :result="result" v-else />
  </main>
</template>

<script setup>
import OptionComp from "@/components/OptionComp.vue";
import ResultComp from "@/components/ResultComp.vue";
import { useRoute, RouterLink } from "vue-router";
import { ref, onMounted, computed } from "vue";
import data from "../data/data.json";

const currrentQuestionIndex = ref(0);
const courseId = parseInt(useRoute().params.id);
const course = data.find((c) => c.id == courseId);
const marks = ref(0);
const progressBar = ref(0);
const questionStatus = computed(
  () =>
    `Question ${currrentQuestionIndex.value + 1} of ${course.questions.length}`
);
const result = computed(
  () => `You score ${marks.value} / ${course.questions.length}`
);
const optionSelected = (value) => {
  if (currrentQuestionIndex.value < course.questions.length) {
    currrentQuestionIndex.value++;
    if (value) marks.value++;
  } else if (currrentQuestionIndex.value == course.questions.length) {
    console.log(" The else block is been executed ");
    endTimer();
  }
};
const startTimer = () => {
  if (progressBar.value <= 100) {
    progressBar.value++;
  }
};
const intervalId = setInterval(startTimer, 4000);
onMounted(() => {
  intervalId;
});
const endTimer = () => {
  clearInterval(intervalId);
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
