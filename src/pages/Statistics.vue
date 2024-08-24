<template>
    <div v-if="marketPriceHistory" class="statistics-page page">
        {{  formattedData }}
        <LineChart
            :data="formattedData"
        />
    </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import { bitcoinService } from '../services/bitcoinService.js'

export default {
    data() {
        return {
            marketPriceHistory: null
        }
    },
    methods: {
    },
    async created() {
        this.marketPriceHistory = await bitcoinService.getMarketPriceHistory()
    },
    components: {
        LineChart
    },
    computed: {
        formattedData(){
            let values = this.marketPriceHistory.values;
            const dates = []
            const prices = []
            values = values.map((xyObj) => {
                const date = new Date(xyObj.x * 1000)   
                const day = String(date.getDay()).padStart(2, '0');
                const month = String(date.getMonth() + 1).padStart(2, '0');
                dates.push(`${day}/${month}`)
                prices.push(xyObj.y)
            })
            const dataset = { data : prices}
            return { datasets: [dataset], labels : dates}
        }
    }
}
</script>

<style scoped>

</style>