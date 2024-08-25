<template>
  <div class="homepage page">
    <ul v-if="cryptoUsdRares" class="rate-list">
      <li class="rate" :class="{ 'refreshed' : hasChanged[Object.keys(rate)[0]]}" v-for="rate in selectedCoins" :key="rate" @click="openSearch(Object.keys(rate)[0])" >
        <div class="coin-name">{{ Object.keys(rate)[0] }}</div>
        <div class="value">
          <img class="currency-logo" src="/usd.png">
          <div class="coin-usd-value">{{ (formatRate(Object.values(rate)[0])) }}</div>
          <div class="live">LIVE</div>
        </div>
      </li>
    </ul>
    <div class="crypto-rate">
    </div>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoinService'

export default {
  data() {
    return {
      cryptoUsdRares : null,
      prevCryptoUsdRares : null,
      intervalId : null,
      hasChanged: {
        'BTC' : false,
        'ETH' : false,
        'ADA' : false,
        'SOL' : false,
        'XRP' : false,
        'DOGE' : false,
        'SHIB' : false,
        'AVAX' : false,
        'LINK' : false,
        'DOT' : false,
      }
    }
  },
  methods: {
    refresh(){
      this.selectedCoins.forEach(coin => {
        const key = Object.keys(coin)[0]
        if(((1/this.cryptoUsdRares[key])).toFixed(5) !== (1/this.prevCryptoUsdRares[key]).toFixed(5)) {
          this.hasChanged[key] = true
        }
        setTimeout(() => {
          this.hasChanged[key] = false
        },1300)
      })
  },
    openSearch(name){
        window.open(`https://www.google.com/search?q=${name}+usd`, '_blank')
    },
    formatRate(rate){
      return (+rate).toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 5 })
    }
  },
  async created() {
    const firstCryptoRates = await bitcoinService.getCryptoUsdRates()
    this.cryptoUsdRares = firstCryptoRates
    this.prevCryptoUsdRares = firstCryptoRates

    this.intervalId = setInterval(async () => {
            this.prevCryptoUsdRares = {...this.cryptoUsdRares}
            this.cryptoUsdRares = await bitcoinService.getCryptoUsdRates()
            this.refresh()
        }, 3500)

  },
  unmounted() {
    clearInterval(this.intervalId)
  },
  computed: {
    selectedCoins(){
      const selectedCoins = ['BTC','ETH','ADA','SOL','XRP','DOGE','SHIB','AVAX','LINK','DOT']
      const selectedRates = selectedCoins.reduce((acc,coinSymbol) => {
        if(this.cryptoUsdRares[coinSymbol] !== undefined){
          acc.push({[coinSymbol] : (1/this.cryptoUsdRares[coinSymbol]).toFixed(5)})
        }
        return acc
      }, [])
      return selectedRates
    }
  }
}
</script>

<style lang="scss" scoped>

img{
  width: 30px;
  margin-right: 8px;
}

ul{
  font-size:1.6rem;
  list-style-type: none;
  padding: 0px;
  margin:0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.rate{
  background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgba(0,212,255,1) 70%);
  padding: 8px 8px 8px 24px;
  border-radius: 16px;
  align-items: center;
  display: flex;
  width: 600px;
  justify-content: space-between;
  
  &.refreshed{
    background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgba(0,212,255,1) 50%, rgb(106, 255, 106) 80%); 
  }
  &:hover{
        background: linear-gradient(142deg,rgb(118, 232, 255) 0%, rgb(137, 235, 255) 70%);
        cursor: pointer;
  }
}

.value{
  display:flex;
}

.coin-usd-value{
  display:flex;
  align-items: center;
}

.live{
        font-size: 0.5rem;
        background-color: #00923f;
        height: min-content;
        padding: 1.5px 4px;
        border-radius: 4px;
        margin-left:2px;
}

</style>