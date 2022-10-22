<template>
  <n-card>
    <h1>€ {{ price }}</h1>
    <n-button @click="addToCart" size="large" color="red">
      <template #icon>
        <n-icon>
          <!-- <cash-icon /> -->
        </n-icon>
      </template>
      Buy Now
    </n-button>
  </n-card>
</template>

<style scoped>
</style>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { NCard, NButton, NIcon } from "naive-ui";

export default defineComponent({
  props: {
    price: {
      type: Number,
      required: true,
    },
  },
  components: {
    NCard,
    NButton,
    NIcon,
  },
  methods: {
    addToCart(): void {
      this.$store.dispatch("addToCart", this.$store.state.tours.selectedTour);
    },
  },
});
</script>