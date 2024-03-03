<script setup>
import Header from './components/Header.vue';
import HeaderButtons from './components/HeaderButtons.vue';
import Main from './components/Main.vue';
import Scrollbar from './components/Scrollbar.vue';
import ListMenu from './components/ListMenu.vue';

import { ref, computed } from 'vue';
import { useScroll } from '@vueuse/core';

const isWindows = ref(navigator.platform.toLowerCase().includes('win'));
const main = ref(null);
const { x, y } = useScroll(main);

const viewportHeight = ref(window.innerHeight);

const firstBreak = 2.69;

window.addEventListener('resize', () => {
  viewportHeight.value = window.innerHeight;
});

const firstHidden = computed(() => {
  return y.value > firstBreak * viewportHeight.value;
});

const secondHidden = computed(() => {
  return y.value <= firstBreak * viewportHeight.value;
});
</script>

<template>
  <main
    ref="main"
    class="relative text-[#1B1B1B] bg-[#FBFCFC] min-w-80 max-w-[100dvw] h-[100dvh] px-4 sm:px-0 py-9 sm:py-0 font-liter overflow-hidden overflow-y-auto"
  >
    <Header class="fixed top-[3.5vh] sm:left-8 xl:left-9 z-50" />
    <HeaderButtons
      :class="{
        'mac-wrong': !isWindows,
        'windows-right': isWindows
      }"
      class="fixed hidden sm:flex z-40 top-8 right-5"
    />
    <ListMenu class="z-50" />
    <div class="h-28 sm:h-16 lg:h-[10vh] transition-[height]"></div>
    <!-- GRADIENT -->
    <div
      class="hidden fixed w-screen left-0 top-0 h-28 lg:h-36 transition-[height] bg-gradient-to-b via-75% lg:via-65% to-90% from-[#FBFCFC] via-[#FBFCFC] z-30"
    ></div>
    <!-- GRADIENT END -->
    <Main
      :firstHidden="firstHidden"
      :secondHidden="secondHidden"
      class="z-20"
    />
    <div class="h-[2500px]"></div>
    <Scrollbar class="fixed bottom-36 right-12" :x="x" :y="y" />
  </main>
</template>

<style scoped>
@media (min-width: 640px) {
  .mac-wrong {
    right: 32px;
  }
  .windows-right {
    right: 49px;
  }
}

@media (min-width: 1280px) {
  .mac-wrong {
    right: 36px;
  }
  .windows-right {
    right: 53px;
  }
}
</style>
