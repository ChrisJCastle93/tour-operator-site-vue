<template>
  <div
    class="p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex items-baseline text-gray-900 dark:text-white">
      <span class="text-xl font-semibold">€ </span>
      <span class="text-2xl font-extrabold tracking-tight">{{ price }}</span>
    </div>
    <ul role="list" class="my-7 space-y-5">
      <li class="flex space-x-3">
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >Free Cancellation</span
        >
      </li>
      <li class="flex space-x-3">
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >Lowest Price Guarantee</span
        >
      </li>
      <li class="flex space-x-3">
        <svg
          aria-hidden="true"
          class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Check icon</title>
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"
          >Secure Payment</span
        >
      </li>
    </ul>
    <button
      @click="addToCart"
      type="button"
      class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
    >
      Add to Cart
    </button>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();

defineProps<{
  price: Number;
}>();

function addToCart(): void {
  store.dispatch("addToCart", store.state.tours.selectedTour);
}
</script>
