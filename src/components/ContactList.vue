<template>
    <section class="contact-list">
        <TransitionGroup class="contact-card-grid" name="list" tag="ul">
            <li class="contact-card" v-for="contact in contacts" :key="contact._id">
                <div class="card-content">
                    <ContactPreview :contact="contact" />
                    <div class="actions">
                        <RouterLink :to="`/contact/${contact._id}`"><button class="btn-details btn">Details</button></RouterLink>
                        <button @click="onDeleteContact(contact._id)" class="btn-delete btn">Delete</button>
                    </div>
                </div>
            </li>
        </TransitionGroup>
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
        onDeleteContact(contactId){
            this.$emit('delete',contactId)
        }
    },
    created() {
    },
    components: {
        ContactPreview
    }
}
</script>

<style lang="scss" scoped>

.actions {
    display:flex;
    gap:8px;
}

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
    position: relative;
    aspect-ratio: 2/2.5;
    
    background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgba(0,212,255,1) 70%);
    
    padding: 1rem;
    border-radius: 16px;
    
    &:hover{
        background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgb(137, 235, 255) 70%);

        // box-shadow: 8px 8px 8px 8px rgba(255, 255, 255, 0.2), 8px 8px rgba(14, 211, 255, 0.35);
    }
}

.card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:16px;
    height: 100%;
    justify-content: space-around;
    /* position: absolute; */
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
}



.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
//   transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}

.btn {
  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 8px 10px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 100%;


    &:after {
    background-clip: padding-box;
    background-color: #1CB0F6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
    }

    &:main {
        user-select: auto;
    }
    &:focus {
    user-select: auto;
    }

    &:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
    }

    &:disabled {
    cursor: auto;
    }

    &:active {
    border-width: 4px 0 0;
    background: none;
    }

    &.btn-delete{
        background-color: rgb(151, 46, 46);

        &:after{
            background-color: rgb(216, 89, 89);
        }
    }
}
</style>