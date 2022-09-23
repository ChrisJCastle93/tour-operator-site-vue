<template>
  <div
    class="w-full flex flex-col max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <img
      class="h-48 w-full object-cover rounded-t-lg"
      :src="tour.images[0]"
      alt="product image"
    />
    <div class="px-5 grow flex flex-col">
      <a href="#">
        <h5
          class="text-2xl pt-6 pb-3 font-semibold tracking-tight text-gray-900 dark:text-white min-h-24"
        >
          {{ tour.title }}
        </h5>
      </a>
      <p class="py-3 text-lg grow font-normal text-gray-500 dark:text-gray-400">
        {{ tour.summary }}
      </p>

      <div class="flex pt-3 pb-6 justify-between items-center">
        <span class="text-3xl font-bold text-gray-900 dark:text-white"
          >€ {{ tour.price }}</span
        >
        <router-link
          :to="{ name: 'tourdetails', params: { id: tour._id } }"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >Check it out
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  props: {
    tour: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped></style>
