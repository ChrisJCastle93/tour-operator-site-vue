<template>
  <div id="main">
    <nav>NAV</nav>
    <div id="middle">
      <router-view></router-view>
    </div>
    <footer>
      <span>Wolfy's Adventures</span>
      <span>Link Goes Here</span>
      <span>Link Goes Here</span>
      <span>Link Goes Here</span>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
defineComponent({
  name: "App",
  components: {},
});
</script>

<style scoped lang="scss">
@import "@/assets/variables.scss";
#main {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

#middle {
  flex: 1 0 auto;
  padding-bottom: 150px;
}

nav {
  background: #d3d3d3;
  flex-shrink: 0;
}

footer {
  flex-shrink: 0;
  background-color: $lightgray;
  width: 100%;
  bottom: 0px;
  position: fixed;
}

span {
  margin: 0 10px 0 0;
}
</style>
