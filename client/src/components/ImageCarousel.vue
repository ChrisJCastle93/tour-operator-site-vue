<!-- <template>
  <div v-if="computedCities.length > 0" id="carousel-container">
    <h1>Get beneath the surface of these destinations</h1>
    <div id="image-carousel">
      <div
        v-for="(city, index) in computedCities"
        :style="backgroundImage(city.img)"
        class="city-card"
        :key="index"
      >
        {{ city.city }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Tour } from "../types/types";
import { defineComponent } from "vue";

type City = {
  city: string;
  img: string;
};

export default defineComponent({
  props: {
    tours: {
      type: Array as () => Tour[],
      required: true,
    },
  },
  data() {
    return {
      cities: [] as string[],
    };
  },
  computed: {
    computedCities(): City[] {
      this.tours.forEach((tour: Tour) => {
        const computedCities = [];
        const query = tour.city;
        axios
          .get(
            `https://api.unsplash.com/photos/random?client_id=xd8-hxjJkd6lN_mRyI12i38m5gozrXDZw4SaZVkmBes&query=${query}`
          )
          .then((response) => {
            computedCities.push({
              city: tour.city,
              img: response.data.urls.regular,
            });
          })
          .catch((err) => console.log(err));
      });
      return this.computedCities;
    },
    // backgroundImage(url: string) {
    //   return `background-image: url("${url}");`;
    // },
  },
  methods: {
    backgroundImage(url: string) {
      return `background-image: url("${url}");`;
    },
  },
});
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
</style> -->
