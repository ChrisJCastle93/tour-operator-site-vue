<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <div id="header">
      <h1
        class="mb-4 text-5xl text-white font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Unforgettable experiences.
      </h1>
      <p
        class="mb-6 text-lg font-bold text-white lg:text-2xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Locally-led tours and activities in 100+ countries.
      </p>
      <SearchInput />
    </div>
    <div id="container">
      <TourCard v-for="tour in filteredTours" :key="tour._id" :tour="tour" />
    </div>
    <UspCard />
    <Reviews />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TourCard from "../components/TourCard.vue";
import SearchInput from "../components/SearchInput.vue";
import UspCard from "../components/UspCard.vue";
import Reviews from "../components/Reviews.vue";
import { Tour, CartItem } from "../types/types";

export default defineComponent({
  name: "HomeView",
  components: {
    TourCard,
    SearchInput,
    UspCard,
    Reviews,
  },
  computed: {
    tours(): Tour[] {
      return this.$store.state.tours.tours;
    },
    filteredTours(): Tour[] {
      return this.$store.state.tours.tours.filter((tour: Tour) =>
        tour.title
          .toLowerCase()
          .includes(
            this.$store.state.search.searchInput.toString().toLowerCase()
          )
      );
    },
    cart(): CartItem[] {
      return this.$store.state.cart;
    },
  },
  created(): void {
    this.$store.dispatch("fetchTours"); // fetches all tours to populate homepage
    this.$store.dispatch("fetchCart");
  },
});
</script>

<style scoped>
#container {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
#header {
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://cdn.ventrata.com/image/upload/s--Fm46deUd--/ar_3,c_fill,dpr_2.0,q_auto,w_1500/v1654739183/gosqgnbz6p9mz1jbf2xv.jpg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  position: relative;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid red;
}
</style>
