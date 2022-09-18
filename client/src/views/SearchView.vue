<template>
  <div id="container">
    <div v-if="!tourLength">
      <p>Sorry, there are no tours for your search.</p>
    </div>
    <div>
      <n-spin v-if="isLoading" color="red" size="large" />
    </div>
    <div v-if="!isLoading" id="results-container">
      <TourCard v-for="(tour, index) in tours" :key="index" :tour="tour" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { NSpin } from "naive-ui";
import TourService from "../../services/TourService";
import TourCard from "../components/TourCard.vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    NSpin,
    TourCard,
  },
  data() {
    return {
      loadStatus: false,
    };
  },
  computed: {
    searchQuery(): unknown {
      return this.$route.query.query;
    },
    tours(): any {
      return this.$store.state.tours.tours;
    },
    isLoading(): boolean {
      return this.loadStatus;
    },
    tourLength(): number {
      return this.$store.state.tours.tours.length;
    },
  },
  created(): void {
    TourService.searchTours(this.searchQuery)
      .then((response: any): void => {
        this.loadStatus = false;
        this.$store.dispatch("updateTours", response.data);
      })
      .catch((err: any): void => console.log(err));
  },
});
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
