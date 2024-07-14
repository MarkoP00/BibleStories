import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "./components/LandingPage.vue";
import StoriesList from "./components/StoriesList.vue";
import SingleStory from "./components/SingleStory.vue";
import About from "./components/other/About.vue";
import Contact from "./components/other/Contact.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/BibleStories",
      component: LandingPage,
    },
    {
      path: "/home",
      component: LandingPage,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/list",
      component: StoriesList,
    },
    {
      path: "/singleStory/:id",
      component: SingleStory,
      props: true,
    },
  ],
});

export default router;
