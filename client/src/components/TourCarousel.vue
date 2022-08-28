<template>
  <n-carousel>
    <img class="carousel-img" :src="img" object-fit="cover" alt="tourimage" />
    <img class="carousel-img" :src="img" object-fit="cover" alt="tourimage" />
    <img class="carousel-img" :src="img" object-fit="cover" alt="tourimage" />
  </n-carousel>
</template>

<style scoped>
img {
  width: 100%;
}

.n-carousel {
  border-radius: 50px;
}
</style>

<script>
import { NCarousel } from "naive-ui";

export default {
  name: "TourCarousel",
  props: ["img"],
  components: {
    NCarousel,
  },
};
</script>
