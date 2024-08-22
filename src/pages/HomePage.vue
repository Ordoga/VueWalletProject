<template>
  Homepage
  <div>{{ rate }}</div>
</template>

<script>
import  { bitcoinService } from '../services/bitcoinService'

export default {
  data() {
    return {
      currRate : -1
    }
  }
}
</script>

<style scoped>

</style>
