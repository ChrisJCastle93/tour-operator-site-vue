<template>
  <div>
    <HeroSection />
    <UspSection />
    <div id="product-container">
      <div id="product-carousel">
        <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
      </div>
    </div>
    <TestimonialSection />
  </div>
</template>

<style scoped lang="scss">
@import "../assets/variables.scss";

#product-container {
  width: 90%;
  margin: 25px auto;
  #product-carousel {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
}
</style>

<script>
import TourCard from "../components/TourCard.vue";
import TestimonialSection from "../components/TestimonialSection.vue";
import UspSection from "../components/UspSection.vue";
import HeroSection from "../components/HeroSection.vue";
import { useStore } from "@/stores/index";

export default {
  name: "HomeView",
  components: {
    HeroSection,
    TourCard,
    UspSection,
    TestimonialSection,
  },
  setup() {
    const store = useStore();
    store.fetchTours();
    return { store };
  },
  computed: {
    tours() {
      const tours = this.store.tours;
      return tours.sort((a, b) => b.summary.length - a.summary.length);
    },
  },
};
</script>
