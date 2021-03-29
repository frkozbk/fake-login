import { routes } from "./router";
export const LoginPlugin = {
  install(Vue, options) {
    const { router } = options;
    router.addRoutes(routes)
  },
};
