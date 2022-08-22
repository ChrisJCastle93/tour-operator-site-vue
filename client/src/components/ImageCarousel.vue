<template>
  <div v-if="this.cities.length > 0" id="carousel-container">
    <h1>Get beneath the surface of these destinations</h1>
    <div id="image-carousel">
      <div v-for="(city, index) in computedCities" class="city-card" :key="index">
        {{ city.city }} {{ city.url }}
        <!-- {{ city }} -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['tours'],
  data() {
    return {
      cities: [],
    };
  },

  computed: {
    computedCities() {
      this.tours.forEach((tour) => {
        const query = tour.city;
        axios.get(`https://api.unsplash.com/photos/random?client_id=xd8-hxjJkd6lN_mRyI12i38m5gozrXDZw4SaZVkmBes&query=${query}`)
          .then((response) => {
            this.cities.push({ city: tour.city, img: response.data.urls.regular });
          })
          .catch((err) => console.log(err));
      });
      return this.cities;
    },
  },
};

</script>

<style scoped>
#carousel-container {
  width: 90%;
  margin: auto;
}

h1 {
  text-align: left;
}

#image-carousel {
  display: flex;
}

.city-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 20px;
  height: 300px;
  width: 200px;
  margin-right: 20px;
}
</style>
