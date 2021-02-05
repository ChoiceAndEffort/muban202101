import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ajax from "./ajax/axios";
//重置样式
import "@/assets/styles/reset.scss";
//重置样式
import "@/assets/styles/public.scss";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.ajax = Vue.prototype.$ajax = ajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
