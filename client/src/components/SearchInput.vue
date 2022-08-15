<template>
  <div>
    <n-input :value="searchInput" placeholder="" @input="updateSearchInput" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { NInput } from 'naive-ui';

export default defineComponent({
  computed: {
    searchInput() {
      return this.$store.state.searchInput;
    },
  },
  methods: {
    updateSearchInput(e) {
      this.$store.dispatch('updateSearchInput', e);
    },
  },
  components: {
    NInput,
  },
});
</script>
