<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

import { reactive } from 'vue'

const counter = reactive({
  count: 2
})
</script>

<template>
  <div id="main">
      <NavBar />
    <div id="middle">
      <router-view />
    </div>
    <footer>
      <p>Testing the composition API: {{ counter.count }} </p>
    </footer>
  </div>
</template>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
#main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
router-view {
  flex-grow: 1;
}
#middle {
  flex: 1 0 auto;
}
footer {
  background: #d3d3d3;
  flex-shrink: 0;
}
</style>
