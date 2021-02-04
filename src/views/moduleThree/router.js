import oneFirst from "./first/router";
export default [
  {
    path: "module-three",
    name: "module-three",
    meta: "",
    auth: false,
    component: () => import("./Index.vue"),
    children: [...oneFirst]
  }
];
