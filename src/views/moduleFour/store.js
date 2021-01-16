import * as api from './api'
const state = {
  list: [],
  num: 0
}
const getters = {
  list: state => state.list,
  num: state => state.num

}
// 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数：第二个参数接收需要改变的值
const mutations = {
  LIST (state, list) {
    state.list = list
  },
  NUM (state, num) {
    state.num = num
  }
}
const actions = {
  find: async ({ commit }, params) => {
    console.log(888)
    const res = await api.findData(params)
    console.log(res)
    if (res.status === 200) {
      commit('LIST', res.data.stories)
      console.log(state.list)
    }
  }

}

export default {
  namespaced: true, // 模块独立
  state,
  getters,
  mutations,
  actions
}
