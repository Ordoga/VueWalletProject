<template>
    <div class="statistics-page page">
        <LineChart v-if="marketPriceHistory" 
        :data="formattedData(marketPriceHistory)"
        />
        <LineChart v-if="avgBlockSize"
            :data="formattedData(avgBlockSize)"
        />
        <LineChart v-if="transactionRate"
            :data="formattedData(transactionRate)"
        />
    </div>
</template>

<script>
import LineChart from '../components/LineChart.vue'
import { bitcoinService } from '../services/bitcoinService.js'

export default {
    data() {
        return {
            marketPriceHistory: null,
            avgBlockSize: null,
            transactionRate: null
        }
    },
    methods: {
    },
    async created() {
        this.marketPriceHistory = await bitcoinService.getMarketPriceHistory()
        this.avgBlockSize = await bitcoinService.getAvgBlockSize()
        this.transactionRate = await bitcoinService.getTransactionRate()
    },
    components: {
        LineChart
    },
    computed: {
        formattedData(){
            return (data) => {
                let dataPoints = data.values;
                const dates = []
                const values = []
                dataPoints = dataPoints.map((xyObj) => {
                    const date = new Date(xyObj.x * 1000)   
                    const day = String((date.getDay()) + 1).padStart(2, '0');
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    dates.push(`${day}/${month}`)
                    values.push(xyObj.y)
                })
                const dataset = { 
                    data : values,
                    label: data.name,
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgb(13, 113, 160)'

                }
            return { datasets: [dataset], labels : dates}
            }
        }
    }
}
</script>

<style scoped>

.statistics-page{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, 500px);
    grid-auto-rows: 1fr;
    column-gap: 60px;
    justify-content: center;
}

</style>