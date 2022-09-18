<template>
  <n-menu v-model="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script lang="ts">
import { defineComponent, h, ref } from "vue";
import { NMenu } from "naive-ui";

const menuOptions = [
  {
    label: () =>
      h(
        "a",
        {
          href: "/cart",
        },
        "Cart"
      ),
    key: "cart",
  },
  {
    label: () =>
      h(
        "a",
        {
          href: "/order-finder",
        },
        "Order Finder"
      ),
    key: "order-finder",
  },
];

export default defineComponent({
  components: {
    NMenu,
  },
  setup() {
    return {
      activeKey: ref(null),
      menuOptions,
    };
  },
});
</script>
