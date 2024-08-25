import { contactService } from "../../services/contactService"

export const contact = {
    state: {
        contact: null,
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact({ contacts }, { contactId }) {
            const idx = contacts.findIndex(contact => contact._id === contactId)
            contacts.splice(idx, 1)
        },
    },
    actions: {
        async loadContacts({ commit }) {
            try {
                const contacts = await contactService.getContacts()
                commit({ type: "setContacts", contacts })
            } catch (err) {
                console.log(err)
                throw err
            }
        },
        async removeContact({ commit }, { contactId }) {
            await contactService.deleteContact(contactId)
            commit({ type: "removeContact" }, contactId)
        },
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
    },
}
