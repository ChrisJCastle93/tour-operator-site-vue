<template>
  <div id="cart-container">
    <div id="col-1">
      <div class="cartItem" v-for="(item, index) in cart" :key="index">
        <CartItem :item="item" />
      </div>
    </div>
    <div id="col-2">
      <p>TOTAL: € {{ cartTotal }}</p>
      <form @submit.prevent="onSubmit">
        <label for="name">
          <input type="text" id="name" name="name" placeholder="Name" />
        </label>
        <label for="email">
          <input type="text" id="email" name="email" placeholder="email address" />
        </label>
        <button type="submit">checkout</button>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import CartItem from "../components/CartItem.vue";
import checkoutService from "../../services/CheckoutService";
import { cartItem } from "../types/types";

export default defineComponent({
  created(): void {
    this.$store.dispatch("fetchCart");
  },
  methods: {
    async onSubmit(e: Event): Promise<void> {
      const { name, email } = e.target as EventTarget & {
        name: { value: string };
        email: { value: string };
      };

      const orderId = await checkoutService.createOrder({
        name: name.value,
        email: email.value,
        cart: this.cart,
        total: this.cartTotal,
      });

      checkoutService.createCheckoutSession(this.cartTotal, orderId);
    },
  },
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart;
    },
    cartTotal(): number {
      return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    },
  },
});
</script>

<style scoped>
#cart-container {
  display: flex;
}

#col-1 {
  flex-grow: 2;
}
#col-2 {
  flex-grow: 1;
}

.cartItem {
  display: flex;
  width: 80%;
  margin: auto;
}
</style>