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
        async loadContacts({ commit }, { filterBy }) {
            try {
                const contacts = await contactService.getContacts(filterBy)
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
        async updateContact({ commit }, { contactToEdit }) {
            await contactService.saveContact(contactToEdit)
            commit({ type: "updateContact", contactToEdit })
        },
        async saveContact(
            { commit, getters: { contacts } },
            { contactToSave }
        ) {
            let updatedContacts = null
            const contactWithId = await contactService.saveContact(
                contactToSave
            )
            if (contactToSave._id) {
                updatedContacts = contacts.map(contact =>
                    contact._id === contactToSave._id ? contactToSave : contact
                )
            } else {
                updatedContacts = [...contacts, contactWithId]
            }
            commit({ type: "setContacts", updatedContacts })
        },
    },
    getters: {
        contacts(state) {
            return state.contacts
        },
    },
}
