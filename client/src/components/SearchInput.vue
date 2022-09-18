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

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { NInput } from "naive-ui";

export default defineComponent({
  components: {
    NInput,
  },
  computed: {
    searchInput(): string {
      return this.$store.state.searchInput;
    },
  },
  methods: {
    updateSearchInput(e: string): void {
      this.$store.dispatch("updateSearchInput", e);
    },
    onSubmit(): void {
      this.$router.push(`/search?query=${this.searchInput}`);
    },
  },
});
</script>

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
