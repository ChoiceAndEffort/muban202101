import Vue from "vue";
export const findData = params => Vue.ajax.get("url", { params });
