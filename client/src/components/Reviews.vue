<template>
  <div id="carousel-container">
    <h1>What our travellers are saying</h1>
    <div id="review-carousel">
      <div v-for="(review, index) in reviews" class="review-card" :key="index">
        {{ review.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsCarousel',
  created() {
    // axios
    //     .get('https://api.unsplash.com/photos/random?client_id=xd8-hxjJkd6lN_mRyI12i38m5gozrXDZw4SaZVkmBes&query=tourism')
    //     .then((response) => {
    //         this.reviews.push(response.data.urls.regular);
    //     })
    //     .catch((err) => console.log(err));
  },
  computed: {
    reviews() {
      return [
        {
          id: 1,
          name: 'Chris',
          rating: 5,
          review: 'This place is great',
          product: 1,
        },
      ];
      //   return this.reviews;
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

#review-carousel {
  display: flex;
  scroll-behavior: 
}

.review-card {
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: red; */
  border-radius: 20px;
  height: 300px;
  width: 200px;
  margin-right: 20px;
}
</style>
