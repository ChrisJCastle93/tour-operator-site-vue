<template>
  <div id="usp-container">
    <div v-for="(usp, index) in usps" :key="index" id="card-container">
      <div class="column-one">
        <img :src="imageUrl(usp.url)" class="icon" :alt="usp.title" />
      </div>
      <div class="column-two">
        <h3 class="text-lg font-bold">{{ usp.title }}</h3>
        <p>{{ usp.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "UspSection",
  methods: {
    imageUrl(filename) {
      return new URL(`/src/assets/${filename}.png`, import.meta.url);
    },
  },
  data() {
    return {
      usps: [
        {
          title: "Local experts",
          subtitle: "Explore Vienna alongside those who know it best.",
          url: "guide1",
        },
        {
          title: "Top Sights",
          subtitle: "Experience must-see sights and local favorites.",
          url: "tower",
        },
        {
          title: "Free Cancellation",
          subtitle: "Cancel up to 24 hours before for free.",
          url: "free",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";

#usp-container {
  display: flex;
  overflow-x: scroll;
  width: 90%;
  margin: auto;

  #card-container {
    display: flex;
    justify-content: center;
    min-width: 100%;
    padding: 20px;

    .column-one {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33%;

      .icon {
        width: 75px;
        height: auto;
      }
    }
    .column-two {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 67%;
      padding-left: 10px;

      h3 {
        white-space: nowrap;
      }

      p {
        margin: 0;
      }
    }
  }
}

@media (min-width: $breakpoint-tablet) {
  #usp-container {
    width: 80%;
    overflow-x: visible;
    margin: 30px auto;

    #card-container {
      min-width: 33.333%;
      margin-right: 0;
      font-size: 0.8rem;

      .icon {
        width: 80%;
      }
    }
  }
}
</style>
