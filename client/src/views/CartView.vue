<template>
<div id="cart-container">
    <div id="col-1">{{cart}}</div>
    <div id="col-2"></div>
</div>
</template>
<script>

export default {
  created() {
    this.$store.dispatch('fetchCart');
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

</style>
