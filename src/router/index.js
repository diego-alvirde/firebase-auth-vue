import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/components/Login.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next("home");
  } else {
    next();
  }
});

export default router;
