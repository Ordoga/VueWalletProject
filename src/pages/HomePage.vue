<template>
  <div v-if="currRate" class="curr-rate">{{ currRate }}</div>
</template>

<script>
import { bitcoinService } from '../services/bitcoinService'



export default {
  data() {
    return {
      currRate : null
    }
  },
  methods: {
  },
  async created() {
    // this.currRate = await bitcoinService.getRate()
    // this.intervalId = setInterval(async () => {
    //   console.log('updating...')
    //   this.currRate = await bitcoinService.getRate()
    // }, 20000)

    this.currRate = 0.000234
  },
  unmounted() {
    clearInterval(this.intervalId)
  },
  components: {
  }
}
</script>

<style scoped>

</style>