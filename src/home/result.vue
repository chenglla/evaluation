<template>
  <div>
    结果{{item}}
  </div>
</template>
<script>
import Bus from '@/utils/bus'
export default {
  data () {
    return {
      item: []
    }
  },
  mounted () {
    Bus.$on('val', (data) => {
      console.log('1111111111:', data)
      this.item = data
      console.log('22222222', this.item)
    })
  }
}
</script>
<style>

</style>
