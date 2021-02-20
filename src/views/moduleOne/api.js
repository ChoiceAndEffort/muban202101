import Vue from "vue";
export const findData = data => Vue.ajax.get("/api", data);

//获取配置
export const findConfigData = (params = {}) =>
  Vue.ajax.get("/api/moduleOne/findConfig", { params });

//更新配置
export const updateConfigData = (data = {}) =>
  Vue.ajax.post("/api/moduleOne/updateConfig", data);
