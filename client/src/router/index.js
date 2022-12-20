import HomeView from "../views/HomeView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{ path: "/", component: HomeView }];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
