<template>
  <form @submit.prevent="onSubmit">
    <n-input
      id="searchInput"
      :value="searchInput"
      placeholder="Your dream experience awaits..."
      @input="updateSearchInput"
    />
  </form>
</template>

<style scoped>
form {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#searchInput {
  line-height: 1.5em;
  font-size: 1.5em;
  padding: 5px;
  border-radius: 10px;
  border: 3px solid lightgray;
  margin: auto;
  width: 30%;
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
    onSubmit() {
      this.$router.push(`/search?query=${this.searchInput}`);
    },
  },
  components: {
    NInput,
  },
});
</script>
