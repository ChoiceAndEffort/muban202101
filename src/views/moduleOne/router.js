export default [
  {
    path: "module-one",
    name: "module-one",
    meta: [],
    auth: false,
    // component: () => import("./Index.vue")
    component: () => import("@/views/moduleOne/Index.vue")
  }
];
