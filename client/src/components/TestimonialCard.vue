<template>
  <div class="testimonial-card">
    <div class="my-2">
      <ReviewRating />
    </div>
    <p class="text-md font-bold leading-tight my-4 review-text">
      {{ review.review }}
    </p>
    <p class="text-xs font-semibold my-2">
      {{ review.name }}
    </p>
    <p class="font-light text-xs italic">Vienna Walking Tour</p>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";

.testimonial-card {
  min-width: 50%;
  width: 50%;
  border-radius: 10px;
  border: 1px solid $lightgray;
  margin-right: 20px;
  scroll-snap-align: start;
  padding: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
}

@media (min-width: $breakpoint-mobile) {
  .testimonial-card {
    width: 31%;
    min-width: 31%;
    margin-bottom: 20px;
    margin: 10px;
    background-color: rgba(255, 255, 255, 0.9);

    .review-text {
      flex-grow: 1;
    }
  }
}

@media (min-width: $breakpoint-tablet) {
}
</style>

<script>
import { defineComponent } from "vue";
import ReviewRating from "./ReviewRating.vue";

export default defineComponent({
  components: {
    ReviewRating,
  },
  props: {
    review: {
      type: Object,
      required: true,
    },
  },
});
</script>
