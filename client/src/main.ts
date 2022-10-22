import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import "flowbite";
import router from "./router";
import store from "./store/index";

createApp(App).use(store).use(router).mount("#app");