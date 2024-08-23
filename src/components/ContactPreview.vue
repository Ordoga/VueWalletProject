<template>
    <div class="contact-preview">
        hi
        {{  contact.name }} 
    </div>
</template>

<script>
export default {
    props: {
        contact: {
            Type: Object,
            required: true
        }
    }
}
</script>

<style scoped>

</style>