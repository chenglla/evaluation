<template>
  <div>
    <div class="eval_content">
      <div class="serviceInfo" ref="serviceInfo">
        <div>
          <div class="one-title">
            <div class="return__icon" @click="gotoPage">
              <i class="iconfont iconllfanhui4"></i>
            </div>
<!--            <span class="one-title__icon"></span>-->
            <span>评测结果</span>
            <span class="one-title__bacicon iconfont icon-jiantou">评测结果</span>
          </div>
          <div class="one-item">
            <p class="one__p">{{mbti.title}}</p>
          </div>

          <div class="one-item">
            <div class="one-step">
              <div class="one-step__item" v-html="mbti.advanddis">
                <span class="ptext">{{mbti.advanddis}}</span>
              </div>
            </div>
          </div>

<!--          <div class="one-item">-->
<!--            <div class="one-item__header"></div>-->
<!--            <div class="one-step">-->
<!--              <div class="one-step__item"  v-html="mbti.describe">-->
<!--                <span>{{mbti.describe}}</span>-->
<!--              </div>-->
<!--              <h4 class="eval_content_h">职业推荐</h4>-->
<!--              <div v-for="item in professionInfoList" :key="item" class="eval_content_p" @click="major_info(item.id)">-->
<!--                <span  >{{item.ktname}}&#45;&#45;{{item.submajorName}}</span>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      mbti: [],
      professionInfoList: []
    }
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
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
    },
    gotoPage () {
      console.log('return')
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped lang="scss">
  .eval_content{
    font-size: 14px;
    margin: 20px;
    /*background-color: aliceblue;*/
  }
  .iconfont {
    position: absolute;
    font-size: 24px;
  }
  /*.major-info-return {
    height: 20px;
    margin-top: -20px;
    margin-left: 20px;
    z-index: 1000;
    flex: none;
  }*/
  .major-info-title {
    color: #3c3c3c;
    text-align: center;
    font-size: 16px;
    padding: 16px 10px 16px 50px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
  .return__icon {
    margin-left: 40px;
    position: absolute;
    height: 30px;
  }
  /*.one-title__subtitle {*/
  /*  position: absolute;*/
  /*  left: 50%;*/
  /*  font-size: 13px;*/
  /*  bottom: -24px;*/
  /*  opacity: 0.3;*/
  /*  font-weight: 400;*/
  /*}*/
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
  /*.one-step {
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
  }*/
</style>
