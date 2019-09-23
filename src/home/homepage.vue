<template>
  <div style="height: 100%;width: 100%;display:flex;flex-direction: column;">
    <div class="content">职业测评</div>
    <div class="serviceInfo" ref="serviceInfo">
      <div>
        <!--<div class="one-title">-->
          <!--<span class="one-title__icon"></span>-->
          <!--<span>食堂评价系统使用手册</span>-->
          <!--<span class="one-title__bacicon iconfont icon-jiantou">手册</span>-->
        <!--</div>-->
        <div class="one-item" @click="gotopage">
          <div class="one-item__header">
            <div style="height: 65px;float: left">
              <img src="../assets/5678.jpg" width="60">
            </div>
            <div style="height: 65px;line-height: 65px;">
               <span>
                 MBTI职业性格测试
               </span>
            </div>
          </div>
          <p class="one__p">MBT理论认为一个人的性格可以从四个角度进行分析，用字母代表如下：驱动力来源；外向E-内向I接受信息的方式；感觉S一直觉N决策的方式；思维T-情感F对待不确定性的态度；判断J-知觉P</p>
        </div>
        <div class="one-item" @click="gotopage">
          <div class="one-item__header">
            <div style="height: 65px;float: left">
              <img src="../assets/5677.jpg" width="60">
            </div>
            <div style="height: 65px;line-height: 65px;">
               <span>
                左右脑偏好测试
               </span>
            </div>
          </div>
          <p class="one__p">右脑控制着自律神经与宇宙波动共振等，和潜意识有关。左脑被称为“语言脑”，控制语言能力，注重细节和推理。左大脑发达的人善于沟通和说服他人。如果你更偏好左脑，你可能在数学和逻辑领域表现很好。右脑是与创造性和灵活性相关的。右脑偏好的人更大胆直观，以独特的方式看待世界</p>
        </div>
        <div class="one-item" @click="gotopage">
          <div class="one-item__header">
            <div style="height: 65px;float: left">
              <img src="../assets/455.jpg" width="60">
            </div>
            <div style="height: 65px;line-height: 65px;">
               <span>
                 抑郁症心理测试
               </span>
            </div>
          </div>
          <p class="one__p">抑郁症又称抑郁障碍，以显著而持久的心境低落为主要临床特征，是心境障碍的主要类型。临床可见心境低落与其处境不相称，情绪的消沉可以从闷闷不乐到悲痛欲绝，自卑抑郁，甚至悲观厌世，可有自杀企图或行为；甚至发生木僵；部分病例有明显的焦虑和运动性激越；严重者可出现幻觉、妄想等精神病性症状。每次发作持续至少2周以上、长者甚或数年，多数病例有反复发作的倾向，每次发作大多数可以缓解，部分可有残留症状或转为慢性。</p>
        </div>
        <!--<div class="one-item" @click="gotopage">-->
          <!--<div class="one-item__header">-->
            <!--<div style="height: 65px;float: left">-->
              <!--<img src="../assets/00000.png" width="60">-->
            <!--</div>-->
            <!--<div style="height: 65px;line-height: 65px;">-->
               <!--<span>-->
                 <!--霍兰德职业兴趣测试-->
               <!--</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<p class="one__p">人的性格类型、兴趣和职业密切相关，兴趣时人们活动的巨大动力，凡是从事职业是个人感兴趣的，都可以提高人们的积极性，促使人们积极地、高效的工作。</p>-->
        <!--</div>-->
        <!---->

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homepage',
  methods: {
    gotopage () {
      this.$router.push('/home')
    }
  }
}
</script>

<style scoped>
  /*.oto-wrapper {*/
    /*background: #647cfb;*/
    /*background: linear-gradient(to right, #4a8ef9 0%, #5292f7 15%, #347ff4 70%, #0c5ddc 100%);;*/
    /*flex: none;*/
    /*z-index: 1;*/
    /*height: 56px;*/
  /*}*/
  /*.returnicon{*/
    /*position: relative;*/
    /*left: 15px;*/
    /*top: 6px;*/
    /*z-index: 9;*/
    /*padding: 8px 6px;*/
    /*color: #fff;*/
  /*}*/
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
    background: #fff;
    padding: 16px;
    margin: 10px 10px 16px;
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
    font-size: 18px;
    font-weight: bold;
    text-align: center;
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
