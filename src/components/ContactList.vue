<template>
    <section class="contact-list">
        <ul>
            <li v-for="contact in contacts" :key="contact._id">
                <ContactPreview :contact="contact" />
            </li>
        </ul>
    </section>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
    },
    created() {
    },
    components: {
        ContactPreview
    }
}
</script>

<style scoped>

</style>