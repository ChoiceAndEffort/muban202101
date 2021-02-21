import * as api from "./api";
import { Message } from "element-ui";
const state = {
  list: [],
  item: []
};
const getters = {
  list: state => state.list,
  item: state => state.item
};
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：第二个参数接收需要改变的值
const mutations = {
  LIST(state, list) {
    state.list = list;
  },
  ITEM(state, item) {
    state.item = item;
  }
};
const actions = {
  find: async ({ commit }, params) => {
    const res = await api.findData(params);
    if (res.status === 200) {
      commit("LIST", res.data.list);
    }
  },
  updateConfig: async ({ dispatch }, params) => {
    const res = await api.updateConfigData(params);
    if (res.code === 200) {
      Message.success(res.message || "更新配置成功!");
      dispatch("findConfig");
    }
  },
  findConfig: async ({ commit }, params) => {
    const res = await api.findConfigData(params);
    if (res.code === 200) {
      commit("ITEM", res.data);
    }
  }
};

export default {
  namespaced: true, // 模块独立
  state,
  getters,
  mutations,
  actions
};
