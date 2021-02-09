import Vue from "vue";
export const findData = params => Vue.ajax.get("/api/findUsers", params);
export const addData = (data = {}) => Vue.ajax.post("/api/addUsers", data);
