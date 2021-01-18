export default [
  {
    path: "module-two",
    name: "module-two",
    meta: [],
    auth: false,
    component: () => import("./Index.vue")
  }
];
