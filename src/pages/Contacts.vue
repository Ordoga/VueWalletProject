<template>
    <div class="contacts-page">
        <div class="contacts-title">Contacts</div>
        <ContactList v-if="contacts" :contacts="contacts" />
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

</style>