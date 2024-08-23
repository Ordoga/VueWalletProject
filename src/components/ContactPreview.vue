<template>
    <div class="contact-preview">
        <img src="https://robohash.org/{{ contact._id }}?set=set4" alt="" />
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
    justify-content:center;
    

    & img{
        height: 50px;
    }

}

</style>