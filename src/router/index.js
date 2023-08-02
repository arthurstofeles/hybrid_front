import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "@/views/HomeView.vue"),
  },
  {
    path: "/simulador",
    component: () =>
      import(
        /* webpackChunkName: "SimuladorView" */ "@/views/SimuladorView.vue"
      ),
  },
  {
    path: "/contato",
    component: () =>
      import(/* webpackChunkName: "ContatoView" */ "@/views/ContatoView.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

export default router;
