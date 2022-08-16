<template>
  <n-menu v-model="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script>
import { defineComponent, h, ref } from 'vue';
import { NMenu } from 'naive-ui';

const menuOptions = [
  {
    label: () => h('a', {
      href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
    }, 'Destinations'),
    key: 'destinatons',
  },
  {
    label: () => h('a', {
      href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
    }, 'About Us'),
    key: 'about-us',
  },
  {
    label: () => h('a', {
      href: 'https://en.wikipedia.org/wiki/Hear_the_Wind_Sing',
    }, 'Contact Us'),
    key: 'contact-us',
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
