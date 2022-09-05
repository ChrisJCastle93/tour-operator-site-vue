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
<script>
import CartItem from '@/components/CartItem.vue';
// eslint-disable-next-line import/extensions
import checkoutService from '../../services/CheckoutService';

export default {
  created() {
    this.$store.dispatch('fetchCart');
  },
  methods: {
    onSubmit(e) {
      console.log('onSubmit');
      checkoutService.createOrder({
        name: e.target.name.value,
        email: e.target.email.value,
        cart: this.cart,
        total: this.cartTotal,
      });
    },
  },
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce((acc, item) => acc + item.price * item.qty, 0);
    },
  },
};
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
