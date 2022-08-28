<template>
  <div id="cart-container">
    <div id="col-1">
      <div class="cartItem" v-for="(item, index) in cart" :key="index">
        <p>{{ item.id }}</p>
        <p>{{ item.title }}</p>
        <p>{{ item.price }}</p>
        <p>{{ item.city }}</p>
      </div>
    </div>
    <div id="col-2">
      <p>checkout summary goes here</p>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("fetchCart");
  },
  computed: {
    cart() {
      console.log(this.$store.state);
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
* {
  outline: 1px solid red;
}

#cart-container {
  display: flex;
  background-color: gray;
}

#cart-container div {
  background-color: yellow;
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
