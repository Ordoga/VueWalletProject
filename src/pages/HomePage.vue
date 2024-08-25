<template>
  <div class="homepage page">
    <div v-if="currRate" class="curr-rate">{{ currRate }}</div>
  </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoinService'



export default {
  data() {
    return {
    }
  },
  methods: {
  },
  async created() {

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