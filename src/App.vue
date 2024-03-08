<script setup>

import Header from './components/Header.vue';
import HeaderButtons from './components/HeaderButtons.vue';
import Main from './components/Main.vue';
import Scrollbar from './components/Scrollbar.vue';
import ListMenu from './components/ListMenu.vue';

import { ref, computed } from 'vue';
import { useScroll } from '@vueuse/core';
import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);

const isWindows = ref(navigator.platform.toLowerCase().includes('win'));
const main = ref(null);
const { x, y } = useScroll(main);

const viewportHeight = ref(window.innerHeight);
const viewportWidth = ref(window.innerWidth);

const smallScreen = 640;
const mediumSceen = 768;
const largeScreen = 1024;
const extraLargeScreen = 1280;
const doubleExtraLargeScreen = 1536;

const isMobile = computed(() => {
  if (viewportWidth.value < smallScreen || md.mobile()) return true;
  else false;
});

const firstBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 2.45;
  else return 2.45;
});
const secondBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 3.8;
  else return 3.8;
});
const thirdBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 6.1;
  else return 6.1;
});
const fourthBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 9.2;
  else return 9.6;
});

const firstMidBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 0.2;
  else return 0.2;
})

const secondMidBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 2.9;
  else return 2.9;
})

const thirdMidBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 4.2;
  else return 4.2;
})

const fourthMidBreak = computed(() => {
  if (viewportWidth.value < doubleExtraLargeScreen) return 6.45;
  else return 6.55;
})

window.addEventListener('resize', () => {
  viewportHeight.value = window.innerHeight;
  viewportWidth.value = window.innerWidth;
});

const firstHidden = computed(() => {
  return y.value > firstMidBreak.value * viewportHeight.value;
});

const secondHidden = computed(() => {
  return (
    y.value <= firstBreak.value * viewportHeight.value ||
    y.value > secondMidBreak.value * viewportHeight.value
  );
});

const fourthHidden = computed(() => {
  return (
    y.value <= secondBreak.value * viewportHeight.value ||
    y.value > thirdMidBreak.value * viewportHeight.value
  );
});

const fifthHidden = computed(() => {
  return (
    y.value <= thirdBreak.value * viewportHeight.value ||
    y.value > fourthMidBreak.value * viewportHeight.value
  );
});

const endHidden = computed(() => {
  return y.value <= fourthBreak.value * viewportHeight.value;
});
</script>

<template>
  <main
    v-if="!isMobile"
    ref="main"
    class="relative text-[#1B1B1B] bg-[#FBFCFC] min-w-80 max-w-[100dvw] h-[100dvh] px-4 sm:px-0 py-9 sm:py-0 font-liter overflow-hidden overflow-y-auto z-10"
  >
    <Header class="fixed top-[3.5vh] sm:left-8 xl:left-9 z-50" />
    <HeaderButtons
      :class="{
        'mac-wrong': !isWindows,
        'windows-right': isWindows
      }"
      class="fixed hidden sm:flex z-50 top-8 right-5"
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
      :fourthHidden="fourthHidden"
      :fifthHidden="fifthHidden"
      :endHidden="endHidden"
      class="z-20"
    />
    <!-- <div class="h-[2500px]"></div> -->
    <Scrollbar hidden class="fixed bottom-36 right-12" :x="x" :y="y" />
  </main>
  <main
    class="flex flex-col text-3xl justify-center items-center fixed top-0 left-0 h-[100dvh] w-[100dvw] gap-32 font-liter"
  >
    <span class="text-center"
      >Мобильная версия сайта
      <span class="whitespace-nowrap"> пока недоступна</span>. <br />
      Приносим извинения.</span
    >
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
