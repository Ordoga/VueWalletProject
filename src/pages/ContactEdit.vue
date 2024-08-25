<template>
    <section class="contact-edit-page page">
        <form v-if="contact" @submit.prevent="onSaveContact">
            <input v-model="contact.name" name="name" placeholder="Name"/>
            <input v-model="contact.phone" name="phone" placeholder="Phone"/>
            <input v-model="contact.email" name="email" placeholder="Email"/>
            <button class="btn">{{ contact._id ? 'Save Changes' : 'Save' }}</button>
        </form>
    </section>
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
        async onSaveContact(){
            this.$store.dispatch({type:'saveContact', contactToSave : this.contact})
            this.$router.push('/contact')
        }
    },
    async created() {
        const { id : contactId} = this.$route.params
        
        if(contactId){
            const contact = await contactService.getContactById(contactId)
            // Creates Copy to not mutate store directly
            this.contact = {...contact}
        }else{
            this.contact = contactService.getEmptyContact()
        }
    },
}
</script>

<style lang='scss' scoped>

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

input {
    padding: 10px 16px;
    border-radius: 8px;
    background-color: rgb(186, 244, 255);
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
}

</style>