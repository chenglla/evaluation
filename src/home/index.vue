<template>
  <div class="home-page">
    <div class="check-box">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconllfanhui"></i>
      </div>
      <div style="color: #fff;font-size: 17px;text-align: center;line-height: 45px;">
        MBTI职业测评
      </div>
    </div>
<!--    <div class="content">MBTI职业测评</div>-->
    <div class="home_content" ref="homeWrapper">
      <div>
        <first-header></first-header>
        <evaluation></evaluation>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import evaluation from './evaluation'
import firstHeader from './firstHeader'
export default {
  components: { evaluation, firstHeader },
  name: 'home',
  data () {
    return {
      sunCharts: '',
      homeScroll: null,
      key: ''
    }
  },
  mounted () {
    this.init()
    // this.$nextTick(() => {
    //
    // })
    // this._initScroll()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.homeScroll = new BScroll(this.$refs.homeWrapper, {
        click: true
      })
    }
  }
}
</script>
<style scoped>
  .home-page {
    height: 100%;
    flex: 1;
    background: #fff;
  }
  .check-box {
    background-color: #42b983;
    /*background: linear-gradient(to right, #4a8ef9 0%, #5292f7 15%, #347ff4 70%, #0c5ddc 100%);;*/
    flex: none;
    z-index: 1;
    height: 45px;
    position: relative;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
    margin-top: 10px;
    color: #fff;
  }
  .home_content {
     height: calc(100% - 45px);
     overflow: hidden;
  }
  /*.home_content{*/
  /*  height: calc(100% - 50px);*/
  /*  overflow: hidden;*/
  /*  flex: 1;*/
  /*  background: #fff;*/
  /*}*/
  .content {
    /*padding: 0;*/
    font-size: 16px;
    text-align: center;
    width: 100%;
    background-color: #42b983;
    height: 35px;
    line-height: 35px;
    /*padding-top: 5px;*/
    margin-bottom: 5px;
    /*background: url("../assets/img/home-bac.png") no-repeat;*/
    /*background-size: 100% 100%;*/
  }
  .second{
    height: 150px;
    background-color: antiquewhite;
    margin-bottom: 5px;
  }
  .second_chart{
    height: 150px;
  }
  .third{
    height: 60px;
    background-color: cornflowerblue;
    color: #fff;
    text-align: center;
    line-height: 60px;
    /*padding-top: 15px;*/
    /*transform: translate(-50%);*/
  }
</style>
