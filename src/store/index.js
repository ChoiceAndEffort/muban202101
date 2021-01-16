import Vue from "vue";
import Vuex from "vuex";
import moduleFourStore from "@/views/moduleFour/store";
import moduleThreeStore from "@/views/moduleThree/store";
import moduleTwoStore from "@/views/moduleTwo/store";
import moduleOneStore from "@/views/moduleOne/store";
Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    moduleFourStore,
    moduleThreeStore,
    moduleTwoStore,
    moduleOneStore
  }
});
