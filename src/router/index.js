import { createRouter, createWebHistory } from "vue-router"
import Login from "@/views/Sign-in"
import Home from "@/views/home"


const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
