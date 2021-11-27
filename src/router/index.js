import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "@/views/About";
import Contact from "@/views/Contact";
import TrumpetPerformance from "@/views/TrumpetPerformance";

const routes = [
  {
    path: "/",
    name: "Erin Mutchler",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/trumpet-performance",
    name: "Trumpet Performance",
    component: TrumpetPerformance,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
