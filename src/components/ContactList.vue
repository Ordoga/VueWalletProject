<template>
    <section class="contact-list">
        <ul class="contact-card-grid">
            <li class="contact-card" v-for="contact in contacts" :key="contact._id">
                <div class="card-content">
                    <ContactPreview :contact="contact" />
                </div>
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

ul {
    list-style-type: none;
    padding: 0px;
    margin:0px;
}

.contact-card-grid {
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: 1fr;
  gap: 10px;
  grid-auto-flow: dense;
  justify-content: center;

}

.contact-card {
    display:flex;
    justify-content: center;

    position: relative;
    aspect-ratio: 2/2.5;

   
    background: rgb(54,0,117);
    background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgba(0,212,255,1) 70%);
    border-radius: 4px;
}

.card-content{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

</style>