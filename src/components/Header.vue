<template>
    <div class="header">
        <div class="logo">Mister Bitcoin</div>
        <div v-if="user" class="user-details">
                <div class="user-name"> {{user.name}} </div>
                <div class="user-balance"> 
                    <span class="curr-balance">
                        <img class="currency-logo" src="/btc.png">
                        <span class="curr-text">
                            {{user.balance}}
                        </span>
                    </span>
                    <span class="curr-balance">
                        <img class="currency-logo" src="/usd.png">
                        <span class="curr-text" :class="{ 'refreshed' : isRefreshed}">
                            {{ usdBalance }}
                        </span>
                        <div class="live">LIVE</div>
                    </span>
                </div>
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
import { bitcoinService } from '../services/bitcoinService'

export default {
    data() {
        return {
            user : null,
            currBitcoinRate : null,
            isRefreshed: false
        }
    },
    methods: {
        refresh(){
            this.isRefreshed = true
            setTimeout(() => {
                this.isRefreshed = false
            },1000)
        }
    },
    computed: {
        usdBalance(){
            return (this.user.balance / this.currBitcoinRate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
        }
    },
    async created() {
        this.user = userService.getUser()
        this.currBitcoinRate = await bitcoinService.getRate()
        
        this.intervalId = setInterval(async () => {
            this.refresh()
            this.currBitcoinRate = await bitcoinService.getRate()
        }, 10000)
    },
    unmounted() {
        clearInterval(this.intervalId)
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>

.currency-logo{
    width: 20px;
}

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
    .refreshed {
                background-color: #3eff6e;
                color:#00923f;
                border-radius: 4px;
    }

    .user-balance{
        display: flex;
        gap: 16px;


        & .curr-balance{
            display: flex;
            gap:4px;
        }
    }

    .live{
        font-size: 0.5rem;
        background-color: #00923f;
        height: min-content;
        padding: 1.5px 4px;
        border-radius: 4px;
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