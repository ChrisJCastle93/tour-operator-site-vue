import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import 'flowbite'
import "@formkit/themes/genesis";
import router from "./router";
import store from "./store";
import { plugin, defaultConfig } from "@formkit/vue";

createApp(App).use(plugin, defaultConfig).use(store).use(router).mount("#app");
