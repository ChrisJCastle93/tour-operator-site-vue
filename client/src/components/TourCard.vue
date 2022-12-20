<template>
  <div class="product-card">
    <img :src="tourImageSrc" alt="tour image" />
    <h3 class="text-xl font-bold mt-4 mb-1">
      {{ tour.title }}
    </h3>
    <p class="font-light text-xs">
      {{ tour.city }} | {{ tour.duration }} hours
    </p>
    <p class="text-md my-4">{{ tour.summary }}</p>
    <RatingContainer />
    <p class="text-xs font-light my-4">
      from <span class="text-xl font-black not-italic">€ {{ tour.price }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";
.product-card {
  min-width: 100%;
  height: auto;
  scroll-snap-align: start;
  padding: 10px;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

@media (min-width: $breakpoint-mobile) {
  .product-card {
    width: 33.333%;
    min-width: 33.333%;
  }
}

@media (min-width: $breakpoint-tablet) {
  .product-card {
    width: 25%;
    min-width: 25%;
  }
}
</style>

<script>
import { defineComponent } from "vue";
import RatingContainer from "./RatingContainer.vue";

export default defineComponent({
  components: {
    RatingContainer,
  },
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
  computed: {
    tourImageSrc() {
      return this.tour.images[0];
    },
  },
});
</script>
