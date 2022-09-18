import { createRouter, createWebHistory } from "vue-router";
import TourDetailsView from "../views/TourDetailsView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "tourdetails",
    component: TourDetailsView,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SearchView.vue"),
  },
  {
    path: "/order-result/:id",
    name: "order-result",
    props: true,
    component: () => import("../views/OrderResultView.vue"),
  },
  {
    path: "/order-finder",
    name: "order-finder",
    props: true,
    component: () => import("../views/OrderFinderView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
