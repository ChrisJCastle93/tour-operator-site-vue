<template>
  <n-card>
    <img
      alt="tourpic"
      class="n-card"
      :src="tour.images[0]"
    >
    <h3>{{ tour.title }}</h3>
    <p id="summary">
      {{ tour.summary }}
    </p>
    <h4 id="price">
      <strong>€ {{ tour.price }}</strong> | <span>{{ tour.duration }} hours</span>
    </h4>
    <router-link
      class="link"
      :to="{ name: 'tourdetails', params: { id: tour._id } }"
    >
      <n-button color="red">
        <template #icon>
          <n-icon>
            <cash-icon />
          </n-icon>
        </template>
        Learn More
      </n-button>
    </router-link>
  </n-card>
</template>

<script>
import { defineComponent } from 'vue';
import { NCard, NButton, NIcon } from 'naive-ui';
import { HeartOutline as CashIcon } from '@vicons/ionicons5';

export default defineComponent({
  components: {
    NCard,
    NButton,
    NIcon,
    CashIcon,
  },
  props: ['tour'],
});
</script>

<style scoped>
.n-card {
  max-width: 300px;
  text-align: left;
}

h3 {
  min-height: 55px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

img {
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
}

#summary {
  height: 175px;
}

.link {
  text-decoration: none;
}
</style>
