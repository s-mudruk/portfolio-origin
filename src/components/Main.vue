<template>
  <div>
    <div class="relative h-0 overflow-visible z-0 pointer-events-none">
      <Intro
        :class="{
          'opacity-0': firstHiddenRef
        }"
        class="sm:fixed top-[16vh] 2xl:top-[18vh] sm:left-8 xl:left-9 duration-75 transition-opacity z-0"
      />
    </div>
    <div class="main z-10">
      <div class="relative top-0 left-0 sm:h-[3800px] w-screen z-10"></div>
      <img
        ref="portrait"
        :class="{
          'scale-105 z-50 ': isHoveredPortrait
        }"
        src="../img/portrait.png"
        alt="Portrait"
        class="sm:absolute sm:h-[52vh] top-[44.5vh] sm:left-8 xl:left-9 z-30 transition-transform"
      />
      <IntroBottom
        :class="{
          'opacity-0': firstHiddenRef
        }"
        class="transition-opacity"
      />
      <img
        ref="img_1_1"
        :class="{
          'scale-105 z-50 ': isHoveredImg_1_1
        }"
        src="../img/section1.1.png"
        alt="image one"
        class="sm:absolute sm:h-[31vh] 2xl:h-[38vh] sm:top-[38vh] sm:left-[29vw] 2xl:left-[26vw] z-30 transition-transform"
      />
      <img
        ref="img_1_2"
        :class="{
          'scale-105 z-50 ': isHoveredImg_1_2
        }"
        src="../img/section1.2.jpg"
        alt="image two"
        class="sm:absolute sm:h-[60vh] 2xl:h-[70vh] sm:top-[13vh] sm:right-8 xl:right-9 z-30 transition-transform"
      />
      <abbr title="+79873971117 Text me 😉">
        <img
          ref="img_1_3"
          :class="{
            'scale-105 z-50 ': isHoveredImg_1_3
          }"
          src="../img/section1.3.png"
          alt="image three"
          class="sm:absolute sm:h-[32vh] 2xl:h-[36vh] sm:top-[49vh] sm:right-[29vw] 2xl:right-[34vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_2_1"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_1
          }"
          src="../img/section2.1.png"
          alt="image four"
          class="sm:absolute sm:h-[69vh] sm:top-[120vh] sm:left-8 xl:left-9 z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_2_2"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_2
          }"
          src="../img/section2.2.jpg"
          alt="image five"
          class="sm:absolute sm:h-[40vh] 2xl:h-[45vh] sm:top-[103.5vh] sm:left-[33.5vw] 2xl:left-[32vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <video
          ref="img_2_3"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_3
          }"
          class="sm:absolute sm:h-[70vh] 2xl:h-[75vh] sm:top-[103.5vh] sm:right-8 xl:right-9 z-30 transition-transform"
          autoplay
          muted
          loop
          playsinline
          src="../img/section2.3.mov"
          type="video/mov"
        >
          A video playback error occurred
        </video>
      </abbr>
      <abbr title="">
        <img
          ref="img_2_4"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_4
          }"
          src="../img/section2.4.png"
          alt="image five"
          class="sm:absolute sm:h-[40vh] 2xl:h-[45vh] sm:top-[133.5vh] sm:right-[25.5vw] 2xl:right-[27vw] z-20 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_2_5"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_5
          }"
          src="../img/section2.5.png"
          alt="image six"
          class="sm:absolute sm:h-[40vh] sm:top-[178vh] sm:left-[21vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_2_6"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_6
          }"
          src="../img/section2.6.png"
          alt="image seven"
          class="sm:absolute sm:h-[40vh] sm:top-[188vh] sm:left-[50vw] 2xl:left-[45vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_2_7"
          :class="{
            'scale-105 z-50 ': isHoveredImg_2_7
          }"
          src="../img/section2.7.png"
          alt="image eight"
          class="sm:absolute sm:h-[40vh] sm:top-[226vh] sm:left-[5.3vw] z-30 transition-transform"
        />
      </abbr>
      <!-- SECTION THREE -->
      <VanGoghIntro
        :class="{ 'opacity-0': secondHiddenRef }"
        class="sm:fixed top-[16vh] 2xl:top-[18vh] sm:left-8 xl:left-9 transition-opacity"
      />
      <VanGoghOutro
        :class="{ 'opacity-0': secondHiddenRef }"
        class="sm:fixed sm:bottom-[3.5vh] 2xl:bottom-[3.5vh] sm:right-[3vw] transition-opacity"
      />
      <abbr title="">
        <img
          ref="img_3_1"
          :class="{
            'scale-105 z-50 ': isHoveredImg_3_1
          }"
          src="../img/section3.1.png"
          alt="image nine"
          class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[303.5vh] sm:left-[43vw] 2xl:left-[41vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_3_2"
          :class="{
            'scale-105 z-50 ': isHoveredImg_3_2
          }"
          src="../img/section3.4.png"
          alt="image nine"
          class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[337.5vh] 2xl:top-[340vh] sm:left-[19vw] 2xl:left-[17vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_3_3"
          :class="{
            'scale-105 z-50 ': isHoveredImg_3_3
          }"
          src="../img/section3.3.png"
          alt="image nine"
          class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[310vh] sm:left-8 xl:left-9 z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_3_4"
          :class="{
            'scale-105 z-50 ': isHoveredImg_3_4
          }"
          src="../img/section3.2.png"
          alt="image nine"
          class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[371vh] 2xl:top-[379.5vh] sm:left-[43vw] 2xl:left-[43vw] z-30 transition-transform"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_3_5"
          :class="{
            'scale-105 z-50 ': isHoveredImg_3_5
          }"
          src="../img/section3.5.png"
          alt="image nine"
          class="sm:absolute sm:h-[70vh] 2xl:h-[75vh] sm:top-[283.5vh] sm:right-8 xl:right-9 z-30 transition-transform"
        />
      </abbr>
      <!-- SECTION THREE BACKGROUND -->
      <img
        src="../img/section3background.svg"
        alt="image nine"
        class="sm:absolute w-[65vw] sm:top-[315vh] sm:left-[15vw] z-30 rotate-[13deg] transition-transform"
      />
    </div>
  </div>
</template>

<script setup>
import Intro from './Intro.vue';
import IntroBottom from './IntroBottom.vue';
import VanGoghIntro from './VanGoghIntro.vue';

import { useElementHover } from '@vueuse/core';
import { ref, toRef } from 'vue';
import VanGoghOutro from './VanGoghOutro.vue';

const properties = defineProps({
  firstHidden: Boolean,
  secondHidden: Boolean
});

const firstHiddenRef = toRef(properties, 'firstHidden');
const secondHiddenRef = toRef(properties, 'secondHidden');

// const firstPartHidden = computed(() => {
//   return properties.scroll < 2450;
// });
// const secondPartHidden = computed(() => {
//   return properties.scroll >= 2450;
// });

const portrait = ref(null);
const img_1_1 = ref(null);
const img_1_2 = ref(null);
const img_1_3 = ref(null);
const img_2_1 = ref(null);
const img_2_2 = ref(null);
const img_2_3 = ref(null);
const img_2_4 = ref(null);
const img_2_5 = ref(null);
const img_2_6 = ref(null);
const img_2_7 = ref(null);
const img_3_1 = ref(null);
const img_3_2 = ref(null);
const img_3_3 = ref(null);
const img_3_4 = ref(null);
const img_3_5 = ref(null);

const hoverOptions = {
  delayEnter: 500,
  delayLeave: 100
};

const isHoveredPortrait = useElementHover(portrait, hoverOptions);
const isHoveredImg_1_1 = useElementHover(img_1_1, hoverOptions);
const isHoveredImg_1_2 = useElementHover(img_1_2, hoverOptions);
const isHoveredImg_1_3 = useElementHover(img_1_3, hoverOptions);
const isHoveredImg_2_1 = useElementHover(img_2_1, hoverOptions);
const isHoveredImg_2_2 = useElementHover(img_2_2, hoverOptions);
const isHoveredImg_2_3 = useElementHover(img_2_3, hoverOptions);
const isHoveredImg_2_4 = useElementHover(img_2_4, hoverOptions);
const isHoveredImg_2_5 = useElementHover(img_2_5, hoverOptions);
const isHoveredImg_2_6 = useElementHover(img_2_6, hoverOptions);
const isHoveredImg_2_7 = useElementHover(img_2_7, hoverOptions);
const isHoveredImg_3_1 = useElementHover(img_3_1, hoverOptions);
const isHoveredImg_3_2 = useElementHover(img_3_2, hoverOptions);
const isHoveredImg_3_3 = useElementHover(img_3_3, hoverOptions);
const isHoveredImg_3_4 = useElementHover(img_3_4, hoverOptions);
const isHoveredImg_3_5 = useElementHover(img_3_5, hoverOptions);
</script>

<style scoped></style>
