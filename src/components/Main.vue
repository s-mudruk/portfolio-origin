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
      <!-- SCREEN HEIGHT -->
      <div
        class="relative top-0 left-0 sm:h-[1020vh] 2xl:h-[1055vh] w-screen z-10"
      ></div>
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
        class="sm:absolute sm:h-[31vh] 2xl:h-[38vh] sm:top-[38vh] sm:left-[26vw] 2xl:left-[26vw] z-30 transition-transform"
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
      <abbr title="">
        <img
          ref="img_1_3"
          :class="{
            'scale-105 z-50 ': isHoveredImg_1_3
          }"
          src="../img/section1.3.png"
          alt="image three"
          class="sm:absolute sm:h-[32vh] 2xl:h-[36vh] sm:top-[49vh] sm:right-[32vw] 2xl:right-[34vw] z-30 transition-transform"
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
          alt="image six"
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
          alt="image seven"
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
          alt="image eight"
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
          alt="image nine"
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
          alt="image ten"
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
          alt="image eleven"
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
          alt="image twelve"
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
          alt="image thirteen"
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
          alt="image fourteen"
          class="sm:absolute sm:h-[70vh] 2xl:h-[75vh] sm:top-[283.5vh] sm:right-8 xl:right-9 z-30 transition-transform"
        />
      </abbr>
      <!-- SECTION THREE BACKGROUND -->
      <img
        src="../img/section3background.svg"
        alt="image fifteen"
        class="sm:absolute w-[65vw] sm:top-[315vh] sm:left-[15vw] z-30 rotate-[13deg] transition-transform"
      />
    </div>
    <!-- SECTION FOUR -->
    <SectionFourIntro
      :class="{ 'opacity-0': fourthHiddenRef }"
      class="sm:fixed top-[16vh] 2xl:top-[18vh] sm:left-8 xl:left-9 transition-opacity"
    />
    <SectionFourOutro
      :class="{ 'opacity-0': fourthHiddenRef }"
      class="sm:fixed sm:bottom-[3.5vh] 2xl:bottom-[3.5vh] sm:right-[3vw] transition-opacity"
    />
    <abbr title="">
      <img
        ref="img_4_1"
        :class="{
          'scale-105 z-50 ': isHoveredImg_4_1
        }"
        src="../img/section4.1.png"
        alt="image sixteen"
        class="sm:absolute sm:h-[27vh] 2xl:h-[32vh] sm:top-[443vh] sm:left-8 xl:left-9 z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_4_2"
        :class="{
          'scale-105 z-50 ': isHoveredImg_4_2
        }"
        src="../img/section4.2.png"
        alt="image seventeen"
        class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[452vh] sm:left-[43vw] z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_4_4"
        :class="{
          'scale-105 z-50 ': isHoveredImg_4_4
        }"
        src="../img/section4.4.png"
        alt="image eighteen"
        class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[482vh] sm:left-[28.5vw] z-40 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_4_3"
        :class="{
          'scale-105 z-50 ': isHoveredImg_4_3
        }"
        src="../img/section4.3.jpg"
        alt="image nineteen"
        class="sm:absolute sm:h-[70vh] 2xl:h-[75vh] sm:top-[427vh] 2xl:top-[422vh] sm:right-8 xl:right-9 z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_4_5"
        :class="{
          'scale-105 z-50 ': isHoveredImg_4_5
        }"
        src="../img/section4.5.jpg"
        alt="image twenty"
        class="sm:absolute sm:h-[75vh] 2xl:h-[80vh] sm:top-[497vh] sm:left-8 xl:left-9 z-30 transition-transform"
      />
    </abbr>
    <div class="sm:absolute sm:top-[513vh] sm:flex sm:flex-col w-screen">
      <div
        class="self-end relative sm:h-[80vh] 2xl:h-[94vh] sm:w-[52vw] 2xl:w-[56vw]"
      >
        <abbr title="">
          <img
            ref="img_4_6"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_6
            }"
            src="../img/section4.6.png"
            alt="image einundzwanzig"
            class="sm:absolute sm:h-[45vh] 2xl:h-[52vh] sm:top-0 sm:left-[15vw] z-30 transition-transform"
          />
        </abbr>
        <abbr title="">
          <img
            ref="img_4_7"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_7
            }"
            src="../img/section4.7.png"
            alt="image twenty two"
            class="sm:absolute sm:h-[45vh] 2xl:h-[52vh] sm:bottom-0 2xl:bottom-0 sm:left-0 z-20 transition-transform"
          />
        </abbr>
        <abbr title="">
          <img
            ref="img_4_11"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_11
            }"
            src="../img/section4.11.png"
            alt="image twenty three"
            class="sm:absolute sm:h-[24vh] 2xl:h-[28vh] sm:bottom-[-11.8vh] 2xl:bottom-[-13.8vh] sm:left-[26vh] 2xl:left-[30vh] z-30 transition-transform"
          />
        </abbr>
      </div>
      <div
        class="sm:relative sm:flex sm:flex-row-reverse sm:w-[48vw] 2xl:w-[44vw]"
      >
        <abbr title="">
          <img
            ref="img_4_9"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_9
            }"
            src="../img/section4.9.png"
            alt="image twenty four"
            class="sm:relative sm:max-h-[18vh] 2xl:max-h-[20vh] z-30 transition-transform !aspect-[805/450] flex-shrink-0"
          />
        </abbr>
        <abbr title="">
          <img
            ref="img_4_8"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_8
            }"
            src="../img/section4.8.png"
            alt="image twenty five"
            class="sm:relative sm:max-h-[18vh] 2xl:max-h-[20vh] z-30 transition-transform !aspect-[1113/450] flex-shrink-0"
          />
        </abbr>
        <div class="sm:w-[3vw] 2xl:w-[2.5vw]"></div>
      </div>
      <div class="sm:relative self-end sm:flex sm:w-[52vw] 2xl:w-[56vw]">
        <abbr title="">
          <img
            ref="img_4_10"
            :class="{
              'scale-105 z-50 ': isHoveredImg_4_10
            }"
            src="../img/section4.10.png"
            alt="image twenty six"
            class="sm:relative sm:h-[18vh] 2xl:h-[20vh] z-30 transition-transform"
          />
        </abbr>
      </div>
    </div>
    <!-- SECTION FIVE -->
    <SectionFiveIntro
      :class="{ 'opacity-0': fifthHiddenRef }"
      class="sm:fixed top-[16vh] 2xl:top-[18vh] sm:left-8 xl:left-9 transition-opacity"
    />
    <SectionFourOutro
      :class="{ 'opacity-0': fifthHiddenRef }"
      class="sm:fixed sm:bottom-[3.5vh] 2xl:bottom-[3.5vh] sm:right-[3vw] transition-opacity"
    />
    <abbr title="">
      <img
        ref="img_5_1"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_1
        }"
        src="../img/section5.1.png"
        alt="image twenty seven"
        class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[655vh] 2xl:top-[662vh] sm:right-[15vw] 2xl:right-[14vw] z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_2"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_2
        }"
        src="../img/section5.2.png"
        alt="image twenty eight"
        class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[683vh] 2xl:top-[692vh] sm:right-8 xl:right-9 z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_3"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_3
        }"
        src="../img/section5.3.png"
        alt="image twenty nine"
        class="sm:absolute sm:h-[35vh] 2xl:h-[40vh] sm:top-[671vh] 2xl:top-[680vh] sm:left-8 xl:left-9 z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_4"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_4
        }"
        src="../img/section5.4.png"
        alt="image thirty"
        class="sm:absolute sm:h-[45vh] 2xl:h-[52vh] sm:top-[690vh] 2xl:top-[702vh] sm:left-[35vw] z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_5"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_5
        }"
        src="../img/section5.5.png"
        alt="image thirty one"
        class="sm:absolute sm:h-[45vh] 2xl:h-[52vh] sm:top-[728vh] 2xl:top-[745vh] sm:left-[19vw] z-20 transition-transform"
      />
    </abbr>
    <div
      class="sm:absolute sm:top-[746vh] 2xl:top-[765.8vh] sm:flex sm:flex-row-reverse sm:right-[3vw] sm:w-[48vw] 2xl:w-[44vw]"
    >
      <abbr title="">
        <img
          ref="img_5_6"
          :class="{
            'scale-105 z-50 ': isHoveredImg_5_6
          }"
          src="../img/section5.6.png"
          alt="image thirty two"
          class="sm:relative sm:max-h-[18vh] 2xl:max-h-[20vh] z-30 transition-transform !aspect-[805/450] flex-shrink-0"
        />
      </abbr>
      <abbr title="">
        <img
          ref="img_5_7"
          :class="{
            'scale-105 z-50 ': isHoveredImg_5_7
          }"
          src="../img/section5.7.png"
          alt="image thirty three"
          class="sm:relative sm:max-h-[18vh] 2xl:max-h-[20vh] z-30 transition-transform !aspect-[1113/450] flex-shrink-0"
        />
      </abbr>
      <div class="sm:w-[3vw] 2xl:w-[2.5vw]"></div>
    </div>
    <abbr title="">
      <img
        ref="img_5_8"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_8
        }"
        src="../img/section5.8.png"
        alt="image thirty four"
        class="sm:absolute sm:h-[40vh] 2xl:h-[45vh] sm:top-[773vh] 2xl:top-[798vh] sm:right-[7vw] 2xl:right-[7vw] z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_9"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_9
        }"
        src="../img/section5.9.png"
        alt="image thirty five"
        class="sm:absolute sm:h-[40vh] 2xl:h-[45vh] sm:top-[801.5vh] 2xl:top-[830vh] sm:right-[29vw] 2xl:right-[30vw] z-20 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_10"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_10
        }"
        src="../img/section5.10.png"
        alt="image thirty six"
        class="sm:absolute sm:h-[70vh] 2xl:h-[75vh] sm:top-[788vh] 2xl:top-[815vh] sm:right-[calc(2rem-20px)] xl:right-[calc(2.25rem-20px)] z-40 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_11"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_11
        }"
        src="../img/section5.11.png"
        alt="image thirty seven"
        class="sm:absolute sm:h-[40vh] 2xl:h-[45vh] sm:top-[785.5vh] 2xl:top-[810vh] sm:left-8 xl:left-9 z-20 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_12"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_12
        }"
        src="../img/section5.12.png"
        alt="image thirty eight"
        class="sm:absolute sm:h-[50vh] 2xl:h-[55vh] sm:top-[835vh] 2xl:top-[865vh] sm:left-8 xl:left-9 z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_13"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_13
        }"
        src="../img/section5.13.png"
        alt="image thirty nine"
        class="sm:absolute sm:h-[36vh] 2xl:h-[42vh] sm:top-[860vh] 2xl:top-[890vh] sm:right-[34vw] 2xl:right-[39vw] z-30 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_14"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_14
        }"
        src="../img/section5.14.png"
        alt="image thirty nine"
        class="sm:absolute sm:h-[30vh] 2xl:h-[36vh] sm:top-[888vh] 2xl:top-[923vh] sm:right-[14vw] 2xl:right-[18vw] z-20 transition-transform"
      />
    </abbr>
    <abbr title="">
      <img
        ref="img_5_15"
        :class="{
          'scale-105 z-50 ': isHoveredImg_5_15
        }"
        src="../img/section5.15.jpg"
        alt="image fourty one"
        class="sm:absolute sm:h-[45vh] 2xl:h-[48.76vh] sm:top-[875vh] 2xl:top-[910vh] sm:left-[12vw] z-20 transition-transform"
      />
    </abbr>
    <div
      :class="{ 'opacity-0': endHiddenRef }"
      class="sm:absolute sm:flex sm:flex-col sm:justify-between sm:top-[946vh] 2xl:top-[983vh] sm:h-[75vh] 2xl:h-[75vh] sm:w-full sm:px-8 2xl:px-9 text-2xl sm:text-3xl xl:text-[33px] z-40"
    >
      <span
        @click="sayWorkInProgress"
        class="underline hover:text-[#7D83FF] cursor-pointer"
        >Тык ми</span
      >
      <span class="self-center">Coming soon...</span>
      <span class="self-end">Конец.</span>
    </div>
  </div>
</template>

<script setup>
import Intro from './Intro.vue';
import IntroBottom from './IntroBottom.vue';
import VanGoghIntro from './VanGoghIntro.vue';
import { ref, toRef } from 'vue';
import VanGoghOutro from './VanGoghOutro.vue';
import SectionFourIntro from './SectionFourIntro.vue';
import SectionFourOutro from './SectionFourOutro.vue';

import { useElementHover } from '@vueuse/core';
import SectionFiveIntro from './SectionFiveIntro.vue';

const sayWorkInProgress = () => {
  window.alert(
    'Сайт активно обновляется, поэтому не все работы присутствуют на данном лендинге. В скором времени все проекты появятся.'
  );
};

const properties = defineProps({
  firstHidden: Boolean,
  secondHidden: Boolean,
  fourthHidden: Boolean,
  fifthHidden: Boolean,
  endHidden: Boolean
});

const firstHiddenRef = toRef(properties, 'firstHidden');
const secondHiddenRef = toRef(properties, 'secondHidden');
const fourthHiddenRef = toRef(properties, 'fourthHidden');
const fifthHiddenRef = toRef(properties, 'fifthHidden');
const endHiddenRef = toRef(properties, 'endHidden');

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
const img_4_1 = ref(null);
const img_4_2 = ref(null);
const img_4_3 = ref(null);
const img_4_4 = ref(null);
const img_4_5 = ref(null);
const img_4_6 = ref(null);
const img_4_7 = ref(null);
const img_4_8 = ref(null);
const img_4_9 = ref(null);
const img_4_10 = ref(null);
const img_4_11 = ref(null);
const img_5_1 = ref(null);
const img_5_2 = ref(null);
const img_5_3 = ref(null);
const img_5_4 = ref(null);
const img_5_5 = ref(null);
const img_5_6 = ref(null);
const img_5_7 = ref(null);
const img_5_8 = ref(null);
const img_5_9 = ref(null);
const img_5_10 = ref(null);
const img_5_11 = ref(null);
const img_5_12 = ref(null);
const img_5_13 = ref(null);
const img_5_14 = ref(null);
const img_5_15 = ref(null);

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
const isHoveredImg_4_1 = useElementHover(img_4_1, hoverOptions);
const isHoveredImg_4_2 = useElementHover(img_4_2, hoverOptions);
const isHoveredImg_4_3 = useElementHover(img_4_3, hoverOptions);
const isHoveredImg_4_4 = useElementHover(img_4_4, hoverOptions);
const isHoveredImg_4_5 = useElementHover(img_4_5, hoverOptions);
const isHoveredImg_4_6 = useElementHover(img_4_6, hoverOptions);
const isHoveredImg_4_7 = useElementHover(img_4_7, hoverOptions);
const isHoveredImg_4_8 = useElementHover(img_4_8, hoverOptions);
const isHoveredImg_4_9 = useElementHover(img_4_9, hoverOptions);
const isHoveredImg_4_10 = useElementHover(img_4_10, hoverOptions);
const isHoveredImg_4_11 = useElementHover(img_4_11, hoverOptions);
const isHoveredImg_5_1 = useElementHover(img_5_1, hoverOptions);
const isHoveredImg_5_2 = useElementHover(img_5_2, hoverOptions);
const isHoveredImg_5_3 = useElementHover(img_5_3, hoverOptions);
const isHoveredImg_5_4 = useElementHover(img_5_4, hoverOptions);
const isHoveredImg_5_5 = useElementHover(img_5_5, hoverOptions);
const isHoveredImg_5_6 = useElementHover(img_5_6, hoverOptions);
const isHoveredImg_5_7 = useElementHover(img_5_7, hoverOptions);
const isHoveredImg_5_8 = useElementHover(img_5_8, hoverOptions);
const isHoveredImg_5_9 = useElementHover(img_5_9, hoverOptions);
const isHoveredImg_5_10 = useElementHover(img_5_10, hoverOptions);
const isHoveredImg_5_11 = useElementHover(img_5_11, hoverOptions);
const isHoveredImg_5_12 = useElementHover(img_5_12, hoverOptions);
const isHoveredImg_5_13 = useElementHover(img_5_13, hoverOptions);
const isHoveredImg_5_14 = useElementHover(img_5_14, hoverOptions);
const isHoveredImg_5_15 = useElementHover(img_5_15, hoverOptions);
</script>

<style scoped></style>
