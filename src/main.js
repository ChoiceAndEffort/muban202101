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

//注册全局组件
import lgTable from "@/components/lgTable";
import LgSearch from "@/components/LgSearch";
Vue.component("lgTable", lgTable);
Vue.component("lgSearch", LgSearch);

Vue.config.productionTip = false;
Vue.ajax = Vue.prototype.$ajax = ajax;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
