<template>
    <section v-if="contact" class="contact-details-page page">
        <div class="contact-details">
            <div class="contact-name">{{ contact.name }}</div>
            <img :src="`https://robohash.org/${ contact._id }?set=set4`">
            <div class="email-phone">
                <div class="contact-email">{{ contact.email }}</div>
                <div class="contact-phone">{{ contact.phone }}</div>
            </div>
        </div>
        
        <div class="actions">
            <RouterLink to="/contact">Back</RouterLink>
        </div>
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

<style lang="scss" scoped>

.contact-details-page{
    display: flex;
    flex-direction: column;
    align-items:center;
}

.contact-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    height: 500px;
    border-radius: 24px;
    background-color: rgba(0,212,255,1);
    margin-bottom: 8px;

    & .contact-name {
        font-size: 1.4rem;
    }

    & .email-phone {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }
}

a {
    color: rgb(0, 212, 255);

    &:hover{
        color: white;
    }
}

</style>