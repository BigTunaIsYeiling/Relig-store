import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import MainView from "@/views/MainView.vue";
import ClothesView from "@/views/ClothesView.vue";
import AccesView from "@/views/AccesView.vue";
import ShoesView from "@/views/ShoesView.vue";
import BagsView from "@/views/BagsView.vue";
import SignView from "@/views/SignView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignView,
  },
  {
    path: "/main",
    name: "main",
    component: MainView,
    children: [
      {
        path: "cloth",
        name: "cloth",
        component: ClothesView,
      },
      {
        path: "acces",
        name: "acces",
        component: AccesView,
      },
      {
        path: "shoes",
        name: "shoes",
        component: ShoesView,
      },
      {
        path: "bags",
        name: "bags",
        component: BagsView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
