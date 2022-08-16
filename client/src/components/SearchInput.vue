<template>
    <n-input
    id="searchInput"
    :value="searchInput"
    placeholder="Your dream experience awaits..."
    @input="updateSearchInput" />
</template>

<style scoped>

#searchInput {
    width: 30%;
    line-height: 1.5em;
    font-size: 1.5em;
    padding: 5px;
    border-radius: 10px;
    border: 3px solid lightgray;
}
</style>

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
