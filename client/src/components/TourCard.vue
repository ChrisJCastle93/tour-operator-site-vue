<template>
  <router-link :to="{ name: 'tourdetails', params: { id: tour._id } }">
    <div
      class="flex flex-col bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        class="h-48 w-full object-cover rounded-t-lg"
        :src="tour.images[0]"
        alt="product image"
      />
      <h5
        class="px-3 text-xl h-28 pt-6 pb-3 font-semibold line-clamp-3 tracking-tight text-gray-900 dark:text-white min-h-24"
      >
        {{ tour.title }}
      </h5>
      <p
        class="px-3 my-3 text-sm font-normal line-clamp-5 text-gray-500 dark:text-gray-400"
      >
        {{ tour.summary }}
      </p>
      <div class="px-3 my-3 text-xl font-bold text-gray-900 dark:text-white">
        € {{ tour.price }}
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  tour: Record<string, any>;
}>();
</script>