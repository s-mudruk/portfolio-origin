<template>
  <div>
    <div class="flex text-xl py-2 flex-row gap-2 text-right">
      <a
        :class="{
          'translate-x-80': isList && !isOpen
        }"
        href="https://disk.yandex.ru/i/-HDDfE4qLrRvvw"
        target="_blank"
        rel="noopener noreferrer"
        class="transition-transform duration-500"
      >
        <HeaderButton
          text="резюме"
          colour="#7D83FF"
          class="transition-transform hover:scale-105"
        />
      </a>
      <a
        :class="{
          'translate-x-40 ease-out duration-[600ms]': isList && !isOpen,
          'ease-in duration-[466ms]': isList && isOpen
        }"
        class="transition-transform"
        href="mailto:fattesttoo@outlook.com"
      >
        <HeaderButton
          text="email"
          colour="black"
          class="transition-transform hover:scale-105"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import HeaderButton from './HeaderButton.vue';

const properties = defineProps({
  isList: Boolean,
  isOpen: Boolean
});
</script>

<style scoped></style>
