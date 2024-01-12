import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutViewVue from "@/views/AboutView.vue";
import ProjectsViewVue from "@/views/ProjectsView.vue";
import ContactViewVue from "@/views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "#about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /*component: () =>
        import(/* webpackChunkName: "about" "../views/AboutView.vue")*/
      component: AboutViewVue,
    },
    {
      path: "#projects",
      name: "projects",
      component: ProjectsViewVue,
    },

    {
      path: "#contact",
      name: "contact",
      component: ContactViewVue,
    },
    {
      path: "/music",
      name: "music",
      component: () =>
        import(/* webpackChunkName: "music" */ "../views/MusicView.vue"),
    },
  ],
});

export default router;
