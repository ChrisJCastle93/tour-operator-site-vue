<template>
  <vueper-slides class="no-shadow" :bullets="false">
    <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.src">
    </vueper-slide>
  </vueper-slides>
</template>

<script setup lang="ts">
import { VueperSlides, VueperSlide } from "vueperslides";
import { toRefs, reactive, computed } from "vue";

import "vueperslides/dist/vueperslides.css";

const props = defineProps<{
  img: string;
}>();

const img = computed(() => {
  return props.img;
});

const slides = [
  {
    src: img,
  },
  {
    src: img,
  },
];
</script>

<style>
.vueperslides__arrow {
  color: blue;
}
</style>