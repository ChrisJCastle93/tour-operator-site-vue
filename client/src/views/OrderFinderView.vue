<script lang="ts">
import { defineComponent } from "vue";

import CartItem from "../components/CartItem.vue";
import checkoutService from "../services/CheckoutService";

type InputForm = {
  name: string;
  booking: string;
};

export default defineComponent({
  components: {
    CartItem,
  },
  methods: {
    submitForm(inputs: InputForm): void {
      checkoutService.findOrder(inputs.name, inputs.booking);
    },
  },
  computed: {
    foundBooking() {
      return this.$store.state.orderfinder.foundBooking[0];
    },
  },
});
</script>

<template>
  <div id="order-container">
    <FormKit type="form" submit-label="Find Booking" @submit="submitForm">
      <FormKit name="name" type="text" label="Name" validation="required" />
      <FormKit name="booking" label="Booking Reference" validation="required" />
    </FormKit>
    <div id="column-container" v-if="foundBooking">
      <p>Booking Number: {{ foundBooking.id }}</p>
      <div class="cartItem" v-for="(item, index) in foundBooking.products" :key="index">
        <CartItem :item="item" />
      </div>
    </div>
  </div>
</template>

<style>
#order-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
}

#column-container {
  width: 70%;
  margin: auto;
}

form {
  --fk-bg-submit: red;
  --fk-bg-submit-hover: maroon;
}
</style>
