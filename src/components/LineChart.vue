<template>
    <div class="chart-container">
        <Line
            :data="data"
        />
    </div>

</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale);

export default {
    props: {
        data: {
            type: Object,
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
        Line
    }
}
</script>

<style lang='scss' scoped>
.chart-container{
    width: 500px;
    margin: 16px;   
    display:flex;
    justify-content: center;
    align-items: center;
}
</style>