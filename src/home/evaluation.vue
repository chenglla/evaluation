<template>
<!--  <div class="eval">-->
  <div class="eval" ref="evalWrapper">
    <p class="eval_content_head">开始测评</p>
    <div class="eval_content">
<!--      <form>-->
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">1、认识你的人倾向形容你为：</span></group-title>
<!--      <group class="eval_content_button">-->
        <radio :options="options" @on-change="change" class="eval_content_radio" v-model="form.one"></radio>
      </group>

      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">2、下列哪一件事听起来比较吸引你？</span></group-title>

        <radio :options="options1" @on-change="change" class="eval_content_radio" v-model="form.two"></radio>
      </group>

      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">3、你倾向通过以下哪种方式收集信息：</span></group-title>

        <radio :options="options2" @on-change="change" class="eval_content_radio" v-model="form.three"></radio>
      </group>

      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">4、哪种特质更像你：</span></group-title>

        <radio :options="options3" @on-change="change" class="eval_content_radio" v-model="form.four"></radio>
      </group>

      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">5、当和某人分手时：</span></group-title>

        <radio :options="options4" @on-change="change" class="eval_content_radio" v-model="form.five"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">6、当与一个人交往时，你倾向于看重：</span></group-title>

        <radio :options="options5" @on-change="change" class="eval_content_radio" v-model="form.six"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">7、你倾向拥有：</span></group-title>

        <radio :options="options6" @on-change="change" class="eval_content_radio" v-model="form.seven"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">8、过去，你的爱人和恋人倾向对你说：</span></group-title>

        <radio :options="options7" @on-change="change" class="eval_content_radio" v-model="form.eight"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">9、当你对一个约会觉得放心时，你偏向谈论：</span></group-title>

        <radio :options="options8" @on-change="change" class="eval_content_radio" v-model="form.nine"></radio>
      </group><group class="eval_content_button">
      <group-title slot="title"><span class="eval_content_title">10、你倾向相信：</span></group-title>

      <radio :options="options9" @on-change="change" class="eval_content_radio" v-model="form.ten"></radio>
    </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">11、在约会中，你通常：</span></group-title>

        <radio :options="options10" @on-change="change" class="eval_content_radio" v-model="form.eleven"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">12、在第一次约会中：</span></group-title>

        <radio :options="options11" @on-change="change" class="eval_content_radio" v-model="form.twelve"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">13、当你置身于一段关系中时，你倾向相信：</span></group-title>

        <radio :options="options12" @on-change="change" class="eval_content_radio" v-model="form.thirteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">14、你是这种人:</span></group-title>

        <radio :options="options13" @on-change="change" class="eval_content_radio" v-model="form.fourteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">15、过去，你遇见你大部分的恋人是：</span></group-title>

        <radio :options="options14" @on-change="change" class="eval_content_radio" v-model="form.fifteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">16、你是这类型的人：</span></group-title>

        <radio :options="options15" @on-change="change" class="eval_content_radio" v-model="form.sixteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">17、哪一项较常见：</span></group-title>

        <radio :options="options16" @on-change="change" class="eval_content_radio" v-model="form.seventeen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">18、你偏好：</span></group-title>

        <radio :options="options17" @on-change="change" class="eval_content_radio" v-model="form.eighteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">19、你是此类型的人：</span></group-title>

        <radio :options="options18" @on-change="change" class="eval_content_radio" v-model="form.nineteen"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">20、你倾向如此做决定：</span></group-title>

        <radio :options="options19" @on-change="change" class="eval_content_radio" v-model="form.twenty"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">21、你倾向从何处得到力量：</span></group-title>

        <radio :options="options20" @on-change="change" class="eval_content_radio" v-model="form.twenty_one"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">22、你通常：</span></group-title>

        <radio :options="options21" @on-change="change" class="eval_content_radio" v-model="form.twenty_two"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">23、当你参加一个社交聚会时，你会：</span></group-title>

        <radio :options="options22" @on-change="change" class="eval_content_radio" v-model="form.twenty_three"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">24、当你不同意恋人的想法时： </span></group-title>

        <radio :options="options23" @on-change="change" class="eval_content_radio" v-model="form.twenty_four"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">25、你倾向比较能够察觉到：</span></group-title>

        <radio :options="options24" @on-change="change" class="eval_content_radio" v-model="form.twenty_five"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">26、若你有时间和金钱，你的朋友邀请你到国外度假，并且在前一天才通知，你会：</span></group-title>

        <radio :options="options25" @on-change="change" class="eval_content_radio" v-model="form.twenty_six"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">27、你选择的生活充满着：</span></group-title>

        <radio :options="options26" @on-change="change" class="eval_content_radio" v-model="form.twenty_seven"></radio>
      </group>
      <group class="eval_content_button">
        <group-title slot="title"><span class="eval_content_title">28、你是这种喜欢……的人：</span></group-title>
        <radio :options="options27" class="eval_content_radio" @on-change="change" v-model="form.twenty_eight"></radio>
      </group>
      <x-button @click.native="submit_t" text="提交" class="button" type="primary"></x-button>
    </div>
    <!--<div v-show="showResult" class="eval_content">-->
<!--&lt;!&ndash;      {{result}}&ndash;&gt;-->
      <!--<div class="serviceInfo" ref="serviceInfo">-->
        <!--<div>-->
          <!--<div class="one-title">-->
            <!--<span class="one-title__icon"></span>-->
            <!--<span>评测结果</span>-->
            <!--<span class="one-title__bacicon iconfont icon-jiantou">评测结果</span>-->
          <!--</div>-->
          <!--<div class="one-item">-->
            <!--<p class="one__p">{{mbti.title}}</p>-->
          <!--</div>-->

          <!--<div class="one-item">-->
            <!--<div class="one-item__header"></div>-->
            <!--<div class="one-step">-->
              <!--<div class="one-step__item" v-html="mbti.advanddis">-->
                <!--<span class="ptext">{{mbti.advanddis}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->

          <!--<div class="one-item">-->
            <!--<div class="one-item__header"></div>-->
            <!--<div class="one-step">-->
              <!--<div class="one-step__item"  v-html="mbti.describe">-->
                <!--<span>{{mbti.describe}}</span>-->
              <!--</div>-->
              <!--<h4 class="eval_content_h">职业推荐</h4>-->
              <!--<div v-for="item in professionInfoList" :key="item" class="eval_content_p" @click="major_info(item.id)">-->
                <!--<span  >{{item.ktname}}&#45;&#45;{{item.submajorName}}</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;<h4 class="eval_content_h">简介</h4>&ndash;&gt;-->
        <!--&lt;!&ndash;<div>{{mbti.title}}</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div v-html="mbti.advanddis">{{mbti.advanddis}}</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div v-html="mbti.describe">{{mbti.describe}}</div>&ndash;&gt;-->
      <!--</div>-->
      <!--&lt;!&ndash;<div>&ndash;&gt;-->
        <!--&lt;!&ndash;<h4 class="eval_content_h">职业推荐</h4>&ndash;&gt;-->
        <!--&lt;!&ndash;<div v-for="item in professionInfoList" :key="item">&ndash;&gt;-->
          <!--&lt;!&ndash;<p class="eval_content_p" @click="major_info(item.id)">{{item.ktname}}&#45;&#45;{{item.submajorName}}</p>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    </div>
<!--  </div>-->
</template>
<script>
import { Radio, Group, Checker, CheckerItem, GroupTitle, XButton } from 'vux'
import request from '@/utils/request'
// import BScroll from 'better-scroll'
// import Bus from '@/utils/bus'
export default {
  components: {
    Radio, Group, Checker, CheckerItem, GroupTitle, XButton
  },
  data () {
    return {
      professionInfoList: [],
      mbti: [],
      showTimu: true,
      showResult: false,
      result: {},
      // twenty_eight: '',
      evalScroll: null,
      flag: false,
      // list: [],
      form: {
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: '',
        seven: '',
        eight: '',
        nine: '',
        ten: '',
        eleven: '',
        twelve: '',
        thirteen: '',
        fourteen: '',
        fifteen: '',
        sixteen: '',
        seventeen: '',
        eighteen: '',
        nineteen: '',
        twenty: '',
        twenty_one: '',
        twenty_two: '',
        twenty_three: '',
        twenty_four: '',
        twenty_five: '',
        twenty_six: '',
        twenty_seven: '',
        twenty_eight: ''
      },
      // demoRequired: '',
      options: [{
        key: 1,
        value: 'A 热情和敏感'
      },
      {
        key: 2,
        value: 'B 逻辑和明确'
      }],
      options1: [{
        key: 1,
        value: 'A 与恋人到有很多人且社交活动频繁的地方。'
      },
      {
        key: 2,
        value: 'B 呆在家中与恋人做一些特别的事情，例如说观赏一部有趣的录影带并享用你最喜欢的外卖食物。'
      }],
      options2: [{
        key: 1,
        value: 'A 你对有可能发生之事的想像和期望。'
      },
      {
        key: 2,
        value: 'B 你对目前状况的实际认知。'
      }],
      options3: [{
        key: 1,
        value: 'A 友善而仁慈。'
      },
      {
        key: 2,
        value: 'B 冷静而理智。'
      }],
      options4: [{
        key: 1,
        value: 'A 你通常让自己的情绪深陷其中，很难抽身出来。'
      },
      {
        key: 2,
        value: 'B 虽然你觉得受伤，但一旦下定决心，你会直截了当地将过去恋人的影子甩开。'
      }],
      options5: [{
        key: 1,
        value: 'A 情感上的相容性：表达爱意和对另一半的需求很敏感。'
      },
      {
        key: 2,
        value: 'B 智慧上的相容性：沟通重要的想法；客观地讨论和辩论事情。'
      }],
      options6: [{
        key: 1,
        value: 'A 很多认识的人和很亲密的朋友。'
      },
      {
        key: 2,
        value: 'B 一些很亲密的朋友和一些认识的人。'
      }],
      options7: [{
        key: 1,
        value: 'A 你难道不可以安静一会儿吗？'
      },
      {
        key: 2,
        value: 'B 可以请你从你的世界中出来一下吗？'
      }],
      options8: [{
        key: 1,
        value: ' A 未来，关于改进或发明事物和生活的种种可能性。'
      },
      {
        key: 2,
        value: 'B 实际的、具体的、关于“此时此地”的事物。例如，你也许会谈论品酒的好方法，或你即将要参加的新奇旅程。'
      }],
      options9: [{
        key: 1,
        value: 'A 你的直觉。'
      },
      {
        key: 2,
        value: 'B 你直接的观察和现成的经验。'
      }],
      options10: [{
        key: 1,
        value: ' A 整体来说很健谈。'
      },
      {
        key: 2,
        value: 'B 较安静并保留，直到你觉得舒服。'
      }],
      options11: [{
        key: 1,
        value: 'A 若你所约的人来迟了，你会很不高兴。'
      },
      {
        key: 2,
        value: 'B 一点儿都不在乎，因为你自己常常迟到。'
      }],
      options12: [{
        key: 1,
        value: ' A 永远有进步的空间。'
      },
      {
        key: 2,
        value: 'B 若它没有被破坏，不予修补。'
      }],
      options13: [{
        key: 1,
        value: 'A 喜欢先纵观全局。'
      },
      {
        key: 2,
        value: 'B 喜欢先掌握细节。'
      }],
      options14: [{
        key: 1,
        value: 'A 在宴会中、夜总会、工作上、休闲活动中、会议上或当朋友介绍我给他们的朋友时。'
      },
      {
        key: 2,
        value: 'B 通过私人的方式，例如个人广告、录影约会，或是由亲密的朋友和家人介绍。'
      }],
      options15: [{
        key: 1,
        value: 'A 与其活在现实中，不如活在想像里。'
      },
      {
        key: 2,
        value: 'B 与其活在想像里，不如活在现实中。确'
      }],
      options16: [{
        key: 1,
        value: 'A 你准时出席而其他人都迟到。'
      },
      {
        key: 2,
        value: 'B 其他人都准时出席而你迟到。'
      }],
      options17: [{
        key: 1,
        value: 'A 事先知道约会的行程：要去哪里、有谁参加、你会在那里多久、该如何打扮。'
      },
      {
        key: 2,
        value: 'B 让约会自然地发生，不做太多事先的计划。'
      }],
      options18: [{
        key: 1,
        value: 'A 喜欢在一段时间里专心于一件事情直到完成。'
      },
      {
        key: 2,
        value: 'B 享受同时进行好几件事情。'
      }],
      options19: [{
        key: 1,
        value: 'A 首先依你的心意，然后依你的逻辑。'
      },
      {
        key: 2,
        value: 'B 首先依你的逻辑，然后依你的心意。'
      }],
      options20: [{
        key: 1,
        value: 'A 朋友。'
      },
      {
        key: 2,
        value: 'B 自己的想法。'
      }],
      options21: [{
        key: 1,
        value: 'A 偏向于去想像一大堆关于即将来临的约会的事情。'
      },
      {
        key: 2,
        value: 'B 偏向于拘谨地想象即将来临的约会，只期待让它自然地发生。'
      }],
      options22: [{
        key: 1,
        value: 'A 在夜色很深时，一旦你开始投入，也许就是最晚离开的那一个。'
      },
      {
        key: 2,
        value: 'B 在夜晚刚开始的时候，我就疲倦了并且想回家。'
      }],
      options23: [{
        key: 1,
        value: 'A 你尽可能地避免伤害对方的感情；若是会对对方造成伤害的话，你就不会说。'
      },
      {
        key: 2,
        value: 'B 你通常毫无保留地说话，并且对情人直言不讳，因为对的就是对的。'
      }],
      options24: [{
        key: 1,
        value: 'A 当人们需要情感上的支持时。'
      },
      {
        key: 2,
        value: 'B 当人们不合逻辑时。'
      }],
      options25: [{
        key: 1,
        value: ' A 必须先检查你的时间表。'
      },
      {
        key: 2,
        value: 'B 立刻收拾行装。'
      }],
      options26: [{
        key: 1,
        value: 'A 日程表和组织。'
      },
      {
        key: 2,
        value: 'B 自然发生和弹性。 '
      }],
      options27: [{
        key: 1,
        value: 'A 下定决心并且做出最后肯定的结论。'
      },
      {
        key: 2,
        value: 'B 放宽你的选择面并且持续收集信息。'
      }]

    }
  },
  mounted () {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    // this.$nextTick(() => {
    //   this.evalScroll = new BScroll(this.$refs.evalWrapper, {
    //     click: true
    //   })
    // })
  },
  methods: {
    change (key, value) {
      // console.log(this.demoRequired)
      console.log('change:', key, value)
      console.log('form:', this.form)
      // this.twenty_eight = item
      // console.log(this.form.twenty_eight)
    },
    submit_t () {
      // this.flag = false
      // for (const i in this.form) {
      //   if (this.form[i] === '') {
      //     this.flag = true
      //   }
      // }
      // if (this.flag === true) {
      //   alert('请答完所有题再进行提交！')
      // } else {
      request({
        url: '/mbti/submitEvaluate',
        method: 'POST',
        params: {
          result: this.form,
          openid: '123'
        }
      }).then(response => {
        this.mbti = response.data.data.mbti
        this.professionInfoList = response.data.data.professionInfoList
        this.result = response.data.data
        this.$store.dispatch('changeMsg', this.result)

        // this.$router.push({
        //   path: '/result',
        //   query: {
        //     result: this.result
        //   }
        // })
        this.$router.push('/result')
        // console.log('val2:', this.result)
      })
      // }

      // console.log(this.form)
    }
    // major_info (id) {
    //   this.$router.push({
    //     path: '/major_info',
    //     query: {
    //       id: id
    //     }
    //   })
    //   // request({
    //   //   url: '/profession/getList',
    //   //   method: 'GET',
    //   //   params: {
    //   //     professionInfoId: id
    //   //   }
    //   // }).then(response => {
    //   //   this.major_content = response.data.data
    //   //   // this.mbti = response.data.data.mbti
    //   //   // this.professionInfoList = response.data.data.professionInfoList
    //   //   // this.showTimu = false
    //   //   // this.showResult = true
    //   //   // console.log(this.result)
    //   //   // Bus.$emit('val', this.result)
    //   //   // console.log('val:', this.result)
    //   //   // this.$router.push('/result')
    //   //   // console.log('val2:', this.result)
    //   // })
    // }
  }
  // beforeDestroy () {
  //   Bus.$emit('val', this.result)
  // },
}
</script>
<style>
  /*.eval{*/
    /*background-color: aliceblue;*/
    /*height: calc(100% - 50px);*/
    /*overflow: hidden;*/
    /*flex: 1;*/
    /*!*background: #fff;*!*/
  /*}*/
  .eval {
    margin: 10px;
    /*box-shadow: 2px 2px 6px 3px rgba(130,120,150, .6);*/
    /*border-radius: 10px;*/
  }
.eval_content{
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 14px;
  margin: 0 10px 10px;
  /*background-color: aliceblue;*/
}
.eval_content_head {
  margin-top: 20px;
  margin-bottom: -10px;
  margin-left: -5px;
  font-size: 16px;
  font-weight: bold;
}
  .eval_content_button{
    margin-top: 10px;
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
  .button {
    margin-top: 20px;
  }
</style>
