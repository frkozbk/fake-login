import { routes } from "./router";
import auth from "./store/modules/auth";
export const LoginPlugin = {
  install(Vue, options) {
    const { router, store } = options;
    router.addRoutes(routes);
    store.registerModule(auth);
  },
};
