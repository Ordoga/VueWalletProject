import { createStore } from "vuex"
import { contact } from "./modules/contact.js"

const options = {
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        contact,
    },
}

const store = createStore(options)
export default store
