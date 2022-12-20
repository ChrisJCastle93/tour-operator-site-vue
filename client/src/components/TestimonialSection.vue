<template>
  <div id="review-container">
    <h3 class="text-2xl font-bold p-2.5 my-4">What our customers are saying</h3>
    <div class="flex review-carousel">
      <TestimonialCard
        v-for="(review, index) in companyReviews"
        :key="index"
        :review="review"
      />
    </div>
  </div>
</template>

<script>
import TestimonialCard from "./TestimonialCard.vue";

export default {
  name: "TestimonialSection",
  components: {
    TestimonialCard,
  },
  computed: {
    companyReviews() {
      return [
        { name: "Mary", rating: 5, review: "This is a review." },
        {
          name: "Steve",
          rating: 5,
          review:
            "This is another review. But this one is way longer and says how amazing a time they had!",
        },
        { name: "Steve", rating: 5, review: "This is another review." },
        { name: "Mary", rating: 5, review: "This is a review." },
        {
          name: "Steve",
          rating: 5,
          review:
            "This is another review. But this one is way longer and says how amazing a time they had!",
        },
        { name: "Steve", rating: 5, review: "This is another review." },
      ];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/variables.scss";

#review-container {
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 1)
    ),
    url("https://cdn.filestackcontent.com/ln4bh1URiGgWM95X5YH8/convert?cache=true&compress=true&quality=90&w=1000&fit=max");
  background-color: #cccccc;
  height: 300px;
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 5%;

  .review-carousel {
    overflow-x: scroll;
    align-items: flex-start;
    width: 100%;
    padding-left: 5rem;
  }
}

@media (min-width: $breakpoint-tablet) {
  #review-container {
    height: 500px;
    padding: 5%;
    .review-carousel {
      width: 100%;
      padding: 0;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: center;
    }
  }
}
</style>
