import { createRouter, createWebHistory  } from "vue-router";
import VideoView from "../views/ViedoView.vue"
import HomeView from "../views/HomeView.vue"

const routes = [
    {
        name: "home",
        path: "/",
        component: HomeView
    },
    {
        name: "video",
        path: "/video/:uid",
        component: VideoView,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;