import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../pages/HomePage.vue"
import Contacts from "../pages/Contacts.vue"
import Statistics from "../pages/Statistics.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/contacts",
            name: "Contacts",
            component: Contacts,
        },
        {
            path: "/statistics",
            name: "Statistics",
            component: Statistics,
        },
    ],
})

export default router
