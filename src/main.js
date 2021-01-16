import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ajax from "./ajax/axios";
//重置样式
import "@/assets/reset.scss";
Vue.config.productionTip = false;
Vue.ajax = Vue.prototype.$ajax = ajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
