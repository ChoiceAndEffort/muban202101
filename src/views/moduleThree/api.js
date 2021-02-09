import Vue from "vue";
export const findData = params => Vue.ajax.get("/api/findUsers", params);
export const addData = params => Vue.ajax.get("/api/addUsers", params);
