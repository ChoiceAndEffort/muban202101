import Vue from "vue";
export const findData = params => Vue.ajax.get("/api/findUsers", { params });
export const addData = (data = {}) => Vue.ajax.post("/api/addUsers", data);
export const deleteData = (data = {}) =>
  Vue.ajax.post("/api/deleteUsers", data);
export const updateData = (data = {}) =>
  Vue.ajax.post("/api/updateUsers", data);
