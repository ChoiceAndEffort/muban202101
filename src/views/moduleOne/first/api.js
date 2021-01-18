import Vue from "vue";
export const findData = data => Vue.ajax.get("/api", data);
