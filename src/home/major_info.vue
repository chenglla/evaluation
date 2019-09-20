<template>
  <div class="major_info_content">
    <h3 class="major_info_h3">职业详解</h3>
    <div v-for="item in major_content">
      <div v-html="item.info">{{item.info}}</div>
    </div>
<!--    {{major_content}}-->
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      id: this.$route.query.id,
      major_content: []
    }
  },
  mounted () {
    this.getData()
    // this.id = this.$route.query.id
    // console.log(this.id)
  },
  methods: {
    getData () {
      console.log(33333333333)
      request({
        url: '/profession/getList',
        method: 'GET',
        params: {
          professionInfoId: this.$route.query.id
        }
      }).then(response => {
        this.major_content = response.data
        console.log(this.major_content)
      })
    }
  }
}
</script>
<style>
.major_info_content{
  margin: 15px 20px;
  background: #fbf9fe;
}
  .major_info_h3{
    text-align: center;
    margin: 10px;
    /*background-color: aliceblue;*/
  }
</style>
