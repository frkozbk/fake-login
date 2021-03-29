import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Login = () =>
  import(
    /* webpackChunkName: "Login" */
    "../components/Login.vue"
  );
export const routes = [
  {
    path: "/giris-yap",
    name: "Logina",
    component: Login,
  },
];

export const router = new VueRouter({
  mode: "history",
  routes,
});
