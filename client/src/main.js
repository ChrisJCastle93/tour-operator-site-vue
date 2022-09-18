import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import "@formkit/themes/genesis";
import App from "./App.vue";
import "./index.css";
import "flowbite";
import router from "./router";
import store from "./store/index";

console.log("STORE IN MAIN", store);

createApp(App).use(plugin, defaultConfig).use(store).use(router).mount("#app");
