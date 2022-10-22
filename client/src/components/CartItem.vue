<template>
  <div id="container">
    <h3>{{ item.title }}</h3>
    <div id="right-col">
      <p>{{ item.qty }}x</p>
      <p>€ {{ item.price }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  item: Record<string, any>;
}>();
</script>

<style scoped>
#container {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

#right-col {
  width: 75px;
  display: flex;
  justify-content: space-between;
}
</style>