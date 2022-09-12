<template>
  <n-card>
    <h1>€ {{ price }}</h1>
    <!-- <router-link class="link" :to="{ name: 'tourdetails', params: { id: tour._id } }"> -->
    <n-button @click="addToCart" size="large" color="red">
      <template #icon>
        <n-icon>
          <cash-icon />
        </n-icon>
      </template>
      Buy Now
    </n-button>
    <!-- </router-link> -->
  </n-card>
</template>

<style scoped>
.n-card {
  max-width: 300px;
  text-align: left;
}

.link {
  text-decoration: none;
}
</style>

<script>
import { defineComponent } from "vue";
import { NCard, NButton, NIcon } from "naive-ui";
import { HeartOutline as CashIcon } from "@vicons/ionicons5";

export default defineComponent({
  props: ["price"],
  components: {
    NCard,
    NButton,
    NIcon,
    CashIcon,
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", this.$store.state.selectedTour);
    },
  },
});
</script>
