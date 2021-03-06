import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
    //the component which should be displayed
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services.vue")
  },
  {
    path: "/candidate/:id",
    name: "Candidate",
    component: () => import("../views/Candidate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
