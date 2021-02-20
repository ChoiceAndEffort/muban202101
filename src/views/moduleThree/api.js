import Vue from "vue";
export const findData = params =>
  Vue.ajax.get("/api/moduleThree/findUsers", { params });
export const addData = (data = {}) =>
  Vue.ajax.post("/api/moduleThree/addUsers", data);
export const deleteData = (data = {}) =>
  Vue.ajax.post("/api/moduleThree/deleteUsers", data);
export const updateData = (data = {}) =>
  Vue.ajax.post("/api/moduleThree/updateUsers", data);
