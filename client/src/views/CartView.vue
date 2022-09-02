<template>
  <div id="cart-container">
    <div id="col-1">
      <div class="cartItem" v-for="(item, index) in cart" :key="index">
        <CartItem :item="item" />
      </div>
    </div>
    <div id="col-2">
      <p>TOTAL: € {{ cartTotal }}</p>
      <button>checkout</button>
    </div>
  </div>
</template>
<script>
import CartItem from '@/components/CartItem.vue';

export default {
  created() {
    this.$store.dispatch('fetchCart');
  },
  components: {
    CartItem,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    cartTotal() {
      return this.cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
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
