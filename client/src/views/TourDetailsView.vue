<!-- eslint-disable no-console -->
<template>
  <div id="container">
    <h1 v-if="selectedTour[0]">{{ selectedTour[0].title }}</h1>
    <TourCarousel :img="img" />
    <br />
    <div id="bodycontainer">
      <div id="left-col">
        <h3 v-if="selectedTour[0]">{{ selectedTour[0].summary }}</h3>
        <br />
        <h2>Highlights</h2>
        <div v-if="selectedTour[0]">
          <div v-for="(highlight, index) in selectedTour[0].highlights" :key="index">
            • {{ highlight }}
          </div>
        </div>
        <br />
        <h2>Full Description</h2>
        <h4 v-if="selectedTour[0]">{{ selectedTour[0].fullDescription }}</h4>
      </div>
      <div>
        <PriceCard class="sticky" v-if="selectedTour[0]" :price="selectedTour[0].price" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#container {
  width: 90%;
  margin: auto;
}

#bodycontainer {
  display: flex;
}

#left-col {
  position: relative;
}

.sticky {
  width: 400px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}

* {
  text-align: left;
}

h4 {
  white-space: pre-wrap;
}
</style>

<script>
import TourCarousel from '../components/TourCarousel.vue';
import PriceCard from '../components/PriceCard.vue';

export default {
  name: 'TourDetailsView',
  components: {
    TourCarousel,
    PriceCard,
  },
  props: ['id'],
  created() {
    this.$store.dispatch('fetchTour', this.id);
  },
  computed: {
    selectedTour() {
      return this.$store.state.selectedTour;
    },
    img() {
      return this.$store.state.selectedTour ? this.$store.state.selectedTour[0].images[0] : '';
    },
  },
};
</script>
