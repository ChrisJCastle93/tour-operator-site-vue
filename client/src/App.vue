<template>
  <div id="main">
    <nav>
      <a href="/">
        <img
          width="250"
          alt="logo"
          src="https://cdn.ventrata.com/image/upload/s--eqruQi84--/b_transparent,c_pad,g_west,h_90,w_540/v1652707045/zk9fm987mb5dmwf6r7pm.png"
        />
      </a>
      <NavBar />
    </nav>
    <div id="middle">
      <router-view />
    </div>
    <footer>
      <p>Footer goes here.</p>
    </footer>
  </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

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
