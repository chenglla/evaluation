<template>
  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">
    <div class="content">测评分类</div>
    <div>
      <tab v-model="index01" :line-width="1" bar-active-color="#668599">
<!--        <tab-item >测评分类</tab-item>-->
        <tab-item selected @on-item-click="gotoOption('job')">职业探测</tab-item>
        <tab-item @on-item-click="gotoOption('career')">生涯测试</tab-item>
        <tab-item @on-item-click="gotoOption('personAssessment')">人格测评</tab-item>
      </tab>
    </div>
    <div class="serviceInfo" ref="serviceInfo">
      <div class="one-item_all" v-show="showWhich === 'job'">
        <div class="one-item" @click="gotopage('home', 1)">
<!--          <div class="one-item__header">-->
            <div class="one-item_content_img">
              <img src="../assets/5677.jpg">
            </div>
            <div class="one-item_content">
               <span>
                 MBTI职业性格测试
               </span>
            </div>
<!--          </div>-->
        </div>
      </div>
      <div v-show="showWhich === 'career'" class="one-item_all">
        <div class="one-item" @click="gotopage('huashi', 3)">
<!--          <div class="one-item__header">-->
            <div class="one-item_content_img">
              <img src="../assets/23.jpg">
            </div>
            <div class="one-item_content">
               <span>
                 学习力模型
               </span>
            </div>
<!--          </div>-->
        </div>
      </div>
      <div v-show="showWhich === 'personAssessment'" class="one-item_all">
        <div class="one-item" @click="gotopage('personAssessment', 9)">
<!--          <div class="one-item__header">-->
            <div class="one-item_content_img">
              <img src="../assets/img/cp_1.jpg">
            </div>
            <div class="one-item_content">
               <span>
                五大人格测评
               </span>
            </div>
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
export default {
  name: 'homepage',
  components: {Tab, TabItem},
  data () {
    return {
      index01: 0,
      showWhich: 'job'
    }
  },
  methods: {
    gotopage (val, type) {
      this.$router.push({
        name: val,
        query: {
          id: type
        }
      })
    },
    gotoOption (val) {
      this.showWhich = val
    },
    onItemClick (a) {
      console.log(a)
    }
  }
}
</script>

<style scoped lang="scss">
  .serviceInfo {
    height: calc(100% - 60px);
    overflow: hidden;
  }
  .one-item_all {
    padding-top: 10px;
  }
  .one-item{
    background: #fff;
    padding: 16px;
    margin: 10px 20px 16px;
    /*box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);*/
    box-shadow: 2px 2px 6px 3px rgba(196,223,184, .6);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    .one-item_content_img {
      flex: 1;
      height: 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      /*text-align: center;*/
      img {
        height: 100%;
        vertical-align: middle;
      }
    }
    .one-item_content {
      flex: 2;
      margin-left: 15px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
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
</style>
