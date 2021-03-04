import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import moduleFour from "@/views/moduleFour/router";
import moduleThree from "@/views/moduleThree/router";
import moduleTwo from "@/views/moduleTwo/router";
import moduleOne from "@/views/moduleOne/router";
import moduleFive from "@/views/moduleFive/router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    redirect: "module-one",
    component: Home,
    children: [
      ...moduleFour,
      ...moduleThree,
      ...moduleTwo,
      ...moduleOne,
      ...moduleFive
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
