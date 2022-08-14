<template>
  <div class="home">
    <TourCard v-for="tour in tours" :key="tour.id" :tour="tour" />
  </div>
</template>

<script>
import TourCard from '../components/TourCard.vue';

export default {
  name: 'HomeView',
  components: {
    TourCard,
  },
  created() {
    this.$store.dispatch('fetchTours');
  },
  computed: {
    tours() {
      return this.$store.state.tours;
    },
  },
};
</script>
