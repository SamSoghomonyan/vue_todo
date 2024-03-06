import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import TodoList from "./components/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/todolist",
    name: "TodoList",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
