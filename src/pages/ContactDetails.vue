<template>
    <section v-if="contact" class="contact-details">
        <div>{{ contact.name }}</div>
        <div>{{ contact.email }}</div>
    </section>
    <section v-else>Loading...</section>
</template>


<script>
import { contactService } from '../services/contactService'

export default {
    data() {
        return {
            contact : null
        }
    },
    methods: {
    },
    async created() {
        const { id : contactId } = this.$route.params
        this.contact = await contactService.getContactById(contactId)
    },
    components: {
    }
}
</script>

<style scoped>

</style>