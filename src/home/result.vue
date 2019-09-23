<template>
  <div>
    <div class="eval_content">
      <!--      {{result}}-->
      <div class="serviceInfo" ref="serviceInfo">
        <div>
          <div class="one-title">
            <span class="one-title__icon"></span>
            <span>评测结果</span>
            <span class="one-title__bacicon iconfont icon-jiantou">评测结果</span>
          </div>
          <div class="one-item">
            <p class="one__p">{{mbti.title}}</p>
          </div>

          <div class="one-item">
            <div class="one-item__header"></div>
            <div class="one-step">
              <div class="one-step__item" v-html="mbti.advanddis">
                <span class="ptext">{{mbti.advanddis}}</span>
              </div>
            </div>
          </div>

          <div class="one-item">
            <div class="one-item__header"></div>
            <div class="one-step">
              <div class="one-step__item"  v-html="mbti.describe">
                <span>{{mbti.describe}}</span>
              </div>
              <h4 class="eval_content_h">职业推荐</h4>
              <div v-for="item in professionInfoList" :key="item" class="eval_content_p" @click="major_info(item.id)">
                <span  >{{item.ktname}}--{{item.submajorName}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--<h4 class="eval_content_h">简介</h4>-->
        <!--<div>{{mbti.title}}</div>-->
        <!--<div v-html="mbti.advanddis">{{mbti.advanddis}}</div>-->
        <!--<div v-html="mbti.describe">{{mbti.describe}}</div>-->
      </div>
      <!--<div>-->
      <!--<h4 class="eval_content_h">职业推荐</h4>-->
      <!--<div v-for="item in professionInfoList" :key="item">-->
      <!--<p class="eval_content_p" @click="major_info(item.id)">{{item.ktname}}&#45;&#45;{{item.submajorName}}</p>-->
      <!--</div>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
// import Bus from '@/utils/bus'
export default {
  data () {
    return {
      mbti: [],
      professionInfoList: []
    }
  },
  created () {
    // Bus.$on('val', (data) => {
    //   // console.log('1111111111:', data)
    //   // this.item = data
    //   // console.log('22222222', this.item)
    //   this.mbti = data.mbti
    //   this.professionInfoList =data.professionInfoList
    //   // localStorage.setItem('result', data)
    //   // console.log(this.mbti)
    // })
  },
  mounted () {
    // this.$nextTick(() => {
    //
    // })
    // this.mbti = this.$route.query.result.mbti
    // this.professionInfoList = this.$route.query.result.professionInfoList
    // this.mbti = localStorage.getItem('result')
    // this.professionInfoList = localStorage.getItem('result').professionInfoList
    // console.log('ss')
    // console.log('ss', this.$store.state.msg)

    this.mbti = this.$store.state.msg.mbti
    this.professionInfoList = this.$store.state.msg.professionInfoList
  },
  methods: {
    major_info (id) {
      this.$router.push({
        path: '/major_info',
        query: {
          id: id
        }
      })
    }
  }
}
</script>
<style>
  .eval_content{
    font-size: 14px;
    margin: 20px;
    /*background-color: aliceblue;*/
  }
  .eval_content_button{
    /*width: 50%;*/
    /*margin-left: 30%;*/
    margin: 5px;
    background-color: #fff;
  }
  .eval_content_radio{
    text-decoration-line: none;
    font-size: 12px;
    color: darkgray;
    padding-left: 10px;
    /*margin-left: 30%;*/
    /*background-color: aliceblue;*/
  }
  .eval_content_p{
    text-indent: 2em;
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    background-color: #99CC99;
    border-radius: 8px;
    color: #666666;
    font-weight: bold;
    box-shadow: 0 3px 3px black;
  }
  .eval_content_h{
    margin: 10px 5px;
  }
  .eval_content_title{
    font-size: 14px;
    color: #000;
    /*font-weight: bold;*/
  }
  .serviceInfo {
    height: calc(100% - 60px);
    overflow: hidden;
  }
  .one-title {
    padding-top: 20px;
    text-align: center;
    position: relative;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    font-weight: bold;
  }
  .one-title__subtitle {
    position: absolute;
    left: 50%;
    font-size: 13px;
    bottom: -24px;
    opacity: 0.3;
    font-weight: 400;
  }
  .one-title__icon {
    /*background: url('../assets/img/woshou.png') no-repeat;*/
    width: 40px;
    height: 40px;
    display: block;
    background-size: contain;
    position: absolute;
    left: 50%;
    margin-left: -140px;
  }
  .one-title__bacicon {
    position: absolute;
    right: 0;
    font-size: 60px;
    opacity: 0.2;
    top: 34px;
    color: #a3d4ff;
  }
  .one-item{
    background: rgba(255,255,204, 0.1);
    padding: 16px;
    margin: 20px 20px 16px;
    box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .one-step {
    margin-bottom: 20px;
  }
  .one__fee {
    margin-top: 10px;
  }
  .one__p--top {
    padding-left: 50px;
    line-height: 40px;
    position: relative;
  &:before {
     content: "\e66b";
     font-family: "iconfont" !important;
     font-size: 16px;
     font-style: normal;
     opacity: 0.2;
     padding-right: 10px;
     position: absolute;
     left: 24px;
     top: -10px;
   }
  }
  .one__p {
    display: block;
    line-height: 1.5;
  }
  .one-item__header {
    font-size: 15px;
    font-weight: bold;
  }
  .iconfont{
    margin: 0 10px;
  }
  .text {
    font-weight: bold;
  }
  .one-step__item {
    text-align: left;
    padding-top: 10px;
  }
  .one-step__item {
    position: relative;
  span {
    background: #fff;
    padding: 2px 6px;
    border-radius: 6px;
  }
  }
  .one-item__btn {
    width: 100%;
    text-align: center;
    border-radius: 4px;
    margin: 16px 0;
    background: rgba(52, 127, 244, 0.8);
    color: #fff;
    padding: 4px 0;
  }
  .one-item__ok {
    border-radius: 18px;
    background: #7cbb5a;
    color: #fff;
    font-size: 12px;
    width: 18px;
    height: 18px;
    display: inline-block;
    text-align: center;
    line-height: 18px;
  }
  .one-kefu {
    margin: 10px auto;
    text-align: left;
    display: block;
  & > div {
      display: inline-block;
      width: 240px;
      text-align: left;
      margin-bottom: 10px;
    }
  }
  .pctitle {
    font-weight: bold;
    color: red;
    font-size: 16px;
  }

  p {
    text-indent: 2em;
    margin-top: 10px;
  }
  .P1 {
    font-weight: bold;
  }
  .P2 {
    text-indent: 2em;
  }
  .ptext b {
    color: red;
  }
</style>
