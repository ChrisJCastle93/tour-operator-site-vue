<template>
  <div id="container">
    <div v-if="!tourLength">
      <p>Sorry, there are no tours for your search.</p>
    </div>
    <div>
      <n-spin v-if="isLoading" color="red" size="large" />
    </div>
    <div v-if="!isLoading" id="results-container">
      <TourCard v-for="(tour, index) in tours" :tour="tour" :key="index" />
    </div>
  </div>
</template>

<script>
import { NSpin } from "naive-ui";
import TourCard from "../components/TourCard.vue";
import TourService from "../../services/TourService";

export default {
  data() {
    return {
      loadStatus: false,
    };
  },
  components: {
    NSpin,
    TourCard,
  },
  computed: {
    searchQuery() {
      return this.$route.query.query;
    },
    tours() {
      return this.$store.state.tours;
    },
    isLoading() {
      return this.loadStatus;
    },
    tourLength() {
      return this.$store.state.tours.length;
    },
  },
  created() {
    TourService.searchTours(this.searchQuery)
      .then((response) => {
        this.loadStatus = false;
        this.$store.dispatch("updateTours", response.data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
}

#results-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
}
</style>
