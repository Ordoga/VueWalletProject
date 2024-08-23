<template>
    <div class="contacts-page page">
        <!-- <div class="contacts-title">Contacts</div> -->
        <ContactList @delete="deleteContact" v-if="contacts" :contacts="contacts" />
    </div>
</template>

<script>
import ContactList from '../components/ContactList.vue'
import { contactService } from '../services/contactService'

export default {
    data() {
        return {
            contacts : null
        }
    },
    methods: {
        async deleteContact(contactId){
            await contactService.deleteContact(contactId)
            const idx = this.contacts.findIndex(contact => contact._id === contactId)
            this.contacts.splice(idx,1)
        }
    },
    async created() {
        this.contacts = await contactService.getContacts()
    },
    components: {
        ContactList
    }
}
</script>

<style scoped>
.contacts-page{
    width:100%;
}
</style>