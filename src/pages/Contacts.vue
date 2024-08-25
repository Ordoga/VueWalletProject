<template>
    <div class="contacts-page page">
        <div class="actions">
            <RouterLink to="contact/edit"><button class="btn">Add Contact</button></RouterLink>
            <ContactFilter class="search" @filter="applyFilter"/>
        </div>
        <ContactList @delete="deleteContact" v-if="contacts" :contacts="contacts" />
    </div>
</template>

<script>
import ContactFilter from '../components/ContactFilter.vue'
import ContactList from '../components/ContactList.vue'
import { contactService } from '../services/contactService'

export default {
    methods: {
        async deleteContact(contactId){
            // TODO : Fix Bug
            // Same Bug As Dolevs - deletes two if in correct order
            this.$store.dispatch({ type:'removeContact', contactId})
        },
        async applyFilter(filterBy){
            this.$store.dispatch({ type : 'loadContacts', filterBy})
            // this.contacts = await contactService.getContacts(filterBy)
        }

    },
    async created() {
        this.$store.dispatch({ type : 'loadContacts'})

    },
    computed: {
        contacts(){
            return this.$store.getters.contacts
        }
    },
    components: {
        ContactList,
        ContactFilter
    }
}
</script>

<style lang="scss" scoped>

.contacts-page{
    width:100%;
    display:flex;
    flex-direction: column;
}

.actions{
    width: 100%;
    margin-bottom:16px;
    display:flex;
    gap: 16px;
    justify-content: center;
}

.search{
    justify-self:center;
}

.btn {
    align-self: flex-start;
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