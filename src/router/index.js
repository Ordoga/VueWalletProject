import { createRouter, createWebHistory } from "vue-router"

import HomePage from "../pages/HomePage.vue"
import Contacts from "../pages/Contacts.vue"
import Statistics from "../pages/Statistics.vue"
import ContactDetails from "../pages/ContactDetails.vue"
import ContactEdit from "../pages/ContactEdit.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        {
            path: "/contact",
            name: "Contacts",
            component: Contacts,
        },
        {
            path: "/contact/:id",
            name: "ContactDetails",
            component: ContactDetails,
        },
        {
            path: "/statistics",
            name: "Statistics",
            component: Statistics,
        },
        {
            path: "/contact/edit/:id?",
            name: "ContactEdit",
            component: ContactEdit,
        },
    ],
})

export default router
