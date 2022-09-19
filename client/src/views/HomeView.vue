<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <div id="header">
      <h1>Unforgettable<br />experiences.</h1>
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
          .includes(this.$store.state.search.searchInput.toLowerCase())
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
h1 {
  color: white;
  line-height: 1em;
  font-size: 5em;
  font-weight: bold;
  filter: drop-shadow(2px 2px 0.2rem black);
}
#container {
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
#header {
  background-image: url("https://cdn.ventrata.com/image/upload/s--Fm46deUd--/ar_3,c_fill,dpr_2.0,q_auto,w_1500/v1654739183/gosqgnbz6p9mz1jbf2xv.jpg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  position: relative;
  height: 400px;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 4px solid red;
}
</style>
