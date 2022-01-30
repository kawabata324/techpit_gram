import { createRouter, createWebHistory } from "vue-router";
import ThreeTest from "@/components/ThreeTest.vue";
import Model from "@/components/Model.vue";

const routes = [
  {
    path: "/",
    component: ThreeTest,
  },
  {
    path: "/model",
    component: Model,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
