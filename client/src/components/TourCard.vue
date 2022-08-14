<template>
  <n-card :title="tour.title">
    <!-- <template  #cover> -->
    <img alt="tourpic" class="n-card" :src="tour.images[0]" />
    <p>{{ tour.summary }}</p>
    <p>€ {{ tour.price }}</p>
    <p>{{ tour.duration }} hours</p>
    <router-link class="link" :to="{ name: 'tourdetails', params: { id: tour.id } }">
      <n-button color="red">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        Learn More
      </n-button>
    </router-link>
    <!-- <ul>
        <li v-for="highlight, index in tour.highlights" :key="index">{{highlight}}</li>
      </ul> -->
    <!-- </template> -->
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
import { defineComponent } from 'vue';
import { NCard, NButton, NIcon } from 'naive-ui';
import { HeartOutline as CashIcon } from '@vicons/ionicons5';

export default defineComponent({
  props: ['tour'],
  components: {
    NCard,
    NButton,
    NIcon,
    CashIcon,
  },
});
</script>
