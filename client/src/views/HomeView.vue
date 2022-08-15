<template>
  <div class="home">
    <SearchInput />
    <div id="container">
      <!-- <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" /> -->
      <TourCard v-for="tour in filteredTours" :key="tour.id" :tour="tour" />
    </div>
  </div>
</template>

<style scoped>

.home {
  width: 90%;
  margin: auto;
}

#container {
  display: flex;
}
</style>

<script>
import TourCard from '../components/TourCard.vue';
import SearchInput from '../components/SearchInput.vue';

export default {
  name: 'HomeView',
  components: {
    TourCard,
    SearchInput,
  },
  created() {
    this.$store.dispatch('fetchTours');
  },
  computed: {
    tours() {
      return this.$store.state.tours;
    },
    filteredTours() {
      return this.$store.state.tours
        .filter((tour) => tour.title.toLowerCase()
          .includes(this.$store.state.searchInput.toLowerCase()));
    },
  },
};
</script>
