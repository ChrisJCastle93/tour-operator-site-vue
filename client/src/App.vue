<template>
  <div>
    <nav>
      <n-image
        height="50"
        src="https://cdn.ventrata.com/image/upload/s--eqruQi84--/b_transparent,c_pad,g_west,h_90,w_540/v1652707045/zk9fm987mb5dmwf6r7pm.png"
      />
      <NavBar />
    </nav>
    <router-view />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import { NImage } from 'naive-ui';

export default {
  components: {
    NavBar,
    NImage,
  },
};
</script>

<style>
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
</style>
