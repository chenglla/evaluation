<template>
  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">
    <div class="content">测评分类</div>
    <div>
      <tab v-model="index01" :line-width="1" bar-active-color="#668599">
<!--        <tab-item >测评分类</tab-item>-->
        <tab-item selected @on-item-click="clickJob">职业探测</tab-item>
<!--        <tab-item @on-item-click="clickAttainment">基本素养</tab-item>-->
<!--        <tab-item @on-item-click="clickAbility">能力测评</tab-item>-->
<!--        <tab-item @on-item-click="clickAttitude">态度测试</tab-item>-->
<!--        <tab-item @on-item-click="clickCharacter">性格特点</tab-item>-->
        <tab-item @on-item-click="clickCareer">生涯测试</tab-item>
<!--        <tab-item @on-item-click="clickDecision">决策风格</tab-item>-->
        <tab-item @on-item-click="clickComprehensive">综合素养</tab-item>
<!--        <tab-item @on-item-click="onItemClick">素养</tab-item>-->
      </tab>
    </div>
    <div class="serviceInfo" ref="serviceInfo">
      <div class="one-item_all" v-if="showWhich === 'job'">
        <div class="one-item" @click="gotopage(1)">
          <div class="one-item__header">
            <div class="one-item_content_img">
              <img src="../assets/5677.jpg" width="60">
            </div>
            <div class="one-item_content">
               <span>
                 MBTI职业性格测试
               </span>
            </div>
          </div>
<!--          <p class="one__p">MBT理论认为一个人的性格可以从四个角度进行分析，用字母代表如下：驱动力来源；外向E-内向I接受信息的方式；感觉S一直觉N决策的方式；思维T-情感F对待不确定性的态度；判断J-知觉P</p>-->
        </div>
        <div class="one-item" @click="gotopage(1)">
          <div class="one-item__header">
            <div class="one-item_content_img">
              <img src="../assets/5678.jpg" width="60">
            </div>
            <div class="one-item_content">
               <span>
                霍兰德职业兴趣测试
               </span>
            </div>
          </div>
<!--          <p class="one__p">右脑控制着自律神经与宇宙波动共振等，和潜意识有关。左脑被称为“语言脑”，控制语言能力，注重细节和推理。左大脑发达的人善于沟通和说服他人。如果你更偏好左脑，你可能在数学和逻辑领域表现很好。右脑是与创造性和灵活性相关的。右脑偏好的人更大胆直观，以独特的方式看待世界</p>-->
        </div>

      </div>
      <div v-if="showWhich === 'ability'" class="one-item_all">ability</div>
      <div v-if="showWhich === 'attitude'" class="one-item_all">attitude</div>
      <div v-if="showWhich === 'character'" class="one-item_all">character</div>
      <div v-if="showWhich === 'career'" class="one-item_all">
        <div class="one-item" @click="gotopage(3)">
          <div class="one-item__header">
            <div class="one-item_content_img">
              <img src="../assets/23.jpg" width="60">
            </div>
            <div class="one-item_content">
               <span>
                 华师学习模型
               </span>
            </div>
          </div>
          <!--          <p class="one__p">MBT理论认为一个人的性格可以从四个角度进行分析，用字母代表如下：驱动力来源；外向E-内向I接受信息的方式；感觉S一直觉N决策的方式；思维T-情感F对待不确定性的态度；判断J-知觉P</p>-->
        </div>
        <div class="one-item" @click="gotopage(3)">
          <div class="one-item__header">
            <div class="one-item_content_img">
              <img src="../assets/5677.jpg" width="60">
            </div>
            <div class="one-item_content">
               <span>
                 生涯控制力
               </span>
            </div>
          </div>
          <!--          <p class="one__p">MBT理论认为一个人的性格可以从四个角度进行分析，用字母代表如下：驱动力来源；外向E-内向I接受信息的方式；感觉S一直觉N决策的方式；思维T-情感F对待不确定性的态度；判断J-知觉P</p>-->
        </div>
      </div>
      <div v-if="showWhich === 'decision'" class="one-item_all">decision</div>
      <div v-if="showWhich === 'attainment'" class="one-item_all">
        <div class="one-item" @click="gotopage">
          <div class="one-item__header">
            <div class="one-item_content_img">
              <img src="../assets/455.jpg" width="60">
            </div>
            <div class="one-item_content">
              抑郁症心理测试
            </div>
          </div>
          <!--          <p class="one__p">抑郁症又称抑郁障碍，以显著而持久的心境低落为主要临床特征，是心境障碍的主要类型。临床可见心境低落与其处境不相称，情绪的消沉可以从闷闷不乐到悲痛欲绝，自卑抑郁，甚至悲观厌世，可有自杀企图或行为；甚至发生木僵；部分病例有明显的焦虑和运动性激越；严重者可出现幻觉、妄想等精神病性症状。每次发作持续至少2周以上、长者甚或数年，多数病例有反复发作的倾向，每次发作大多数可以缓解，部分可有残留症状或转为慢性。</p>-->
        </div>
      </div>
      <div v-if="showWhich === 'comprehensive'" class="one-item_all">comprehensive</div>
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
    gotopage (val) {
      if (val === 1) {
        // this.$router.push({
        //   path: '/major_info',
        //   query: {
        //     id: id
        //   }
        // })
        this.$router.push({
          path: '/home',
          query: {
            id: val
          }
        })
      } else if (val === 3) {
        this.$router.push({
          path: '/huashi',
          query: {
            id: val
          }
        })
        // this.$router.push('/huashi')
      }
    },
    clickJob () {
      this.showWhich = 'job'
    },
    clickAbility () {
      this.showWhich = 'ability'
    },
    clickAttitude () {
      this.showWhich = 'attitude'
    },
    clickCharacter () {
      this.showWhich = 'character'
    },
    clickCareer () {
      this.showWhich = 'career'
    },
    clickDecision () {
      this.showWhich = 'decision'
    },
    clickAttainment () {
      this.showWhich = 'attainment'
    },
    clickComprehensive () {
      this.showWhich = 'comprehensive'
    },
    onItemClick (a) {
      console.log(a)
    }
  }
}
</script>

<style scoped>
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
    /*position: relative;*/
    /*overflow: hidden;*/
  }
  .one__p {
    display: block;
    line-height: 1.5;
  }
  .one-item_content_img {
    /*height: 65px;*/
    /*float: left;*/
    display: inline-block;
  }
  .one-item_content {
    /*height: 65px;*/
    /*line-height: 65px;*/
    margin-left: 20px;
    display: inline-block;
    top: 20%;
    transform: translateY(-80%);
  }
  .one-item__header {
    font-size: 18px;
    font-weight: bold;
    margin-left: 15px;
    height: 65px;
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
