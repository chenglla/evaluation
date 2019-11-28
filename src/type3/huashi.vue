<template>
  <div class="huashiInfo">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconllfanhui"></i>
      </div>
      <div class="title">华师学习模型</div>
    </div>
    <div class="huashiQues" ref="huashiQues">
      <div>
        <p class="eval_content_head">开始测评</p>
        <div class="eval_content" v-for="(item, index) in type3Content" :key="index">
          <group class="eval_content_button" @click.native="dianji(item)">
            <group-title slot="title"><span class="eval_content_title">{{item.questions}}</span></group-title>
            <!--      <group class="eval_content_button">-->
            <radio :options="item.options" @on-change="change" class="eval_content_radio"></radio>
          </group>
          <!--        <group class="eval_content_button" :title="item.questions" @click.native="dianji(item)">-->
          <!--          <radio class="eval_content_radio" :options="item.options" @on-change="change"></radio>-->
          <!--        </group>-->
        </div>
        <div class="hs_button">
          <x-button @click.native="submit_t" text="提交" class="button" type="primary"></x-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { Radio, Group, GroupTitle, XButton } from 'vux'
import {getType3Question, postType3Answer} from '@/api/index'
export default {
  components: {
    Radio, Group, GroupTitle, XButton
  },
  data () {
    return {
      id: this.$route.query.id,
      type3Content: [],
      // options1: [{key: 1, value: '是'}, {key: 2, value: '否'}],
      selected: '',
      index: 0,
      answerList: {},
      hsScroll: null
    }
  },
  mounted () {
    this.init()
    // const _this = this
    this.getCPEvaQues()
    // setTimeout(function () {
    //   _this.init()
    // }, 2000)
  },
  // created () {
  // this.init()
  // },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        this.hsScroll = new BScroll(this.$refs.huashiQues, {
          click: true
        })
      })
    },
    getCPEvaQues () {
      getType3Question({
        openid: '111',
        evaluateType: this.id
      }).then(res => {
        this.type3Content = res.data.data
        for (const item in this.type3Content) {
          this.type3Content[item].options = [{key: 1, value: '是'}, {key: 2, value: '否'}]
          // this.type3Content[item].questionId = 'seleted' + item
        }
        console.log(this.type3Content)
      })
      // this.init()
    },
    change (key, value) {
      console.log('keyof', typeof key)
      console.log('是1吗：', this.index)
      this.answerList[this.index] = key
      console.log('Onchange:', key, value)
      console.log(this.answerList)
    },
    dianji (item) {
      this.index = parseInt(item.questions.split('.')[0])
      console.log('of:', typeof this.index)
      console.log('index:', item.questions.split('.')[0])
    },
    submit_t () {
      postType3Answer({
        openid: '111',
        evaluateType: this.id,
        result: this.answerList
      }).then(res => {
        this.$store.dispatch('SET_TYPE3_ANSWER', res.data.data)
        // this.$store.commit('type3Anser', res.data.data)
        this.$router.push('/type3_answer')
        console.log(res.data.data)
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .huashiInfo {
    height: 100%;
    position: absolute;
    /*display: flex;*/
    /*flex-direction: column;*/
    background: #f8f8f8;
  }
  .score_header {
    /*padding: 0;*/
    font-size: 16px;
    /*text-align: center;*/
    width: 100%;
    background-color: #42b983;
    color: #fff;
    height: 40px;
    line-height: 40px;
    flex: none;
    z-index: 1;
  }
  .return__icon{
    margin-left: 20px;
    width: 20px;
    height: 20px;
    /*margin-top: 10px;*/
    /*color: #fff;*/
    display: inline-block;
  }
  .iconfont {
    margin-top: 10px;
    font-size: 20px;
  }
  .title {
    display: inline-block;
    margin-left: 35%;
    transform: translateX(-45%);
  }
  .huashiQues {
    margin: 10px;
    position: relative;
    background: #fbf9fe;
    overflow: hidden;
    padding: 10px 0;
    height: calc(100% - 76px);
  }
  .eval_content{
    padding-top: 10px;
    /*padding-bottom: 10px;*/
    font-size: 14px;
    margin: 0 10px 5px;
    /*background-color: aliceblue;*/
  }
  .eval_content_head {
    margin-top: 10px;
    /*margin-bottom: 5px;*/
    margin-left: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  .eval_content_button{
    margin-top: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    box-shadow: 2px 2px 6px 3px rgba(130,120,150, .6);
    border-radius: 10px;
  }
  .eval_content_radio{
    text-decoration-line: none;
    font-size: 12px;
    color: darkgray;
    padding-left: 10px;
  }
  .eval_content_title{
    font-size: 14px;
    color: #000;
  }
  .hs_button {
    height: 80px;
  }
  .button {
    margin-top: 20px;
    margin-bottom: 15px;
  }
</style>
