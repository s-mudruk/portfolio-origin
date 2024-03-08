<template>
  <div
    @click="switchOpen"
    class="fixed sm:hidden right-4 top-[3.2rem] text-4xl py-2 text-right cursor-pointer"
  >
    <!-- <i class="block sm:hidden relative right-2 top-[-4px] bi bi-list"></i> -->
    <div
      :class="{
        'rotate-45': isOpen,
        'top-[0.21rem]': !isOpen
      }"
      class="absolute bg-black h-[0.2rem] w-8 transition-transform"
    ></div>
    <div
      :class="{
        '-rotate-45': isOpen,
        'top-[0.56rem]': !isOpen
      }"
      class="relative bg-black h-[0.2rem] w-8 transition-transform"
    ></div>
    <HeaderButtons
      :is-list="true"
      :is-open="isOpen"
      class="fixed z-40 top-[5.25rem] right-4"
    />
  </div>
</template>

<script setup>
import HeaderButtons from './HeaderButtons.vue';

import { ref } from 'vue';

const isOpen = ref(false);

const switchOpen = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped></style>
