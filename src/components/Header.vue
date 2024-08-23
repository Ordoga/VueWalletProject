<template>
    <div class="header">
        <div class="logo">Mister Bitcoin</div>
        <div v-if="user" class="user-details">
                <div class="user-name"> {{user.name}} </div>
                <div class="user-balance"> {{user.balance}} </div>
        </div>
        <nav class="nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contact">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
        </nav>
    </div>
</template>

<script>
import { userService } from '../services/userService'

export default {
    data() {
        return {
            user : null
        }
    },
    methods: {
    },
    computed: {

    },
    created() {
        this.user = userService.getUser()
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>

.header{
    justify-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3rem;

    padding-right: 1.2rem;
    padding-left: 1.2rem;
    
    box-sizing: border-box;

    background-color: rgb(13, 113, 160);
    color: white;

    .user-details{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        display:flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 620px){
            position: relative;
            left:0%;
            transform:none;
            justify-self:center;
        }
    }

    .logo{
        justify-self: flex-start;
    }

    .nav{
        justify-self: flex-end;
        display: flex;
        gap: 1rem;
    }
}
</style>