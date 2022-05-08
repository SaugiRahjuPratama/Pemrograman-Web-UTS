import { createRouter, createWebHistory } from "vue-router";
import Surah from "../views/Surah.vue";
import Audio from "../views/audio.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/surah",
      name: "surah",
      component: Surah,
    },
    {
      path: "/audio",
      name: "audio",
      component: Audio,
    },
  ],
});

export default router;
