<template>
  <button
    :class="[colour, `${properties.isLight ? 'text-[#1B1B1B]' : 'text-white'}`]"
    :style="{
      backgroundColor: properties.colour
    }"
    type="button"
    class="px-7 py-[0.40rem] rounded-[1.5rem] transition-transform hover:scale-105 active:scale-100"
  >
    <span class="relative top-[-0.15rem] scale-110">
      {{ properties.text || 'Button' }}
    </span>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const properties = defineProps({
  text: String,
  colour: String,
  isLight: Boolean
});

const colour = computed(() => {
  return properties.colour ? '' : 'bg-violet-500';
});
</script>

<style scoped></style>
