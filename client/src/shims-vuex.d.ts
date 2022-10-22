import { Store } from "./store/index";
import { Router } from "./router/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
    $router: Router;
  }
}
