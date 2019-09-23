<template>
  <div class="home-page"  ref="homeWrapper">
    <div class="home_content">
      <div class="content">MBTI职业测评</div>
      <evaluation></evaluation>
<!--      <div class="second">-->
<!--        <div ref="sunChart" class="second_chart"></div>-->
<!--      </div>-->
<!--      <div class="third">中心联动屏幕</div>-->
      <!--    <div class="seven_echarts" ref="chart"></div>-->
    </div>
  </div>
</template>
<script>
// import BScroll from 'better-scroll'
import evaluation from './evaluation'
export default {
  components: { evaluation },
  name: 'home',
  data () {
    return {
      sunCharts: '',
      homeScroll: null,
      key: ''
    }
  },
  mounted () {
    // this.drawSunburst()

    // this.$nextTick(() => {
    //
    // })
    // this._initScroll()
  },
  methods: {
    // gotoSearch () {
    //   this.$router.push({ path: '/search' })
    // }
    // _initScroll () {
    //   this.homeScroll = new BScroll(this.$refs.homeWrapper, {
    //     click: true
    //   })
    // }
  }
}
</script>
<style scoped="">
  .home-page {
       height: calc(100% - 50px);
       overflow: hidden;
       flex: 1;
       background: #fff;
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
