<template>
    <div class="contact-preview">
        <div class="name">{{ contact.name }}</div>
        <img :src="`https://robohash.org/${ contact._id }?set=set4`" alt="" />
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

<style lang="scss">

.contact-preview {
    display:flex;
    flex-direction: column;
    align-items:center;
    gap: 16px;

    & .name{
        font-size:1.2rem;
    }

    & img{
        height: 100px;
        aspect-ratio: 3/3.5;
    }

}

</style>