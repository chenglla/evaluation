<template>
  <div class="first_title">
    <p class="first_title_t">MBTI简介</p>
    <div :class="[summary ? 'summary-open':'summary-close']" class="first_title_content">
      <div class="first_content">
        <p class="one_p">MBT理论认为一个人的性格可以从四个角度进行分析，用字母代表如下：驱动力来源；外向E-内向I接受信息的方式；感觉S一直觉N决策的方式；思维T-情感F对待不确定性的态度；判断J-知觉P<span @click="showNo('summary')" class="shou">收回</span></p>
        <span class="more_button" @click="more('summary')" v-if="showMore">展开</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      summary: false,
      showMore: true
    }
  },
  methods: {
    more (name) {
      this.showMore = false
      // if (this[name] === false) {
      //   this.showMore = false
      // } else {
      //   this.showMore = true
      // }
      console.log(name, this[name])
      // this[name] = !this[name]
      this[name] = true
    },
    showNo (name) {
      this.showMore = true
      this[name] = false
    }
  }
}
</script>
<style lang="scss">
  .first_title_content {
    /*overflow: hidden;*/
    margin: 0 20px;
    box-shadow: 2px 2px 6px 3px rgba(196,223,184, .6);
    border-radius: 8px;
  }
  .first_title {
    /*margin: 20px;*/
    /*box-shadow: 2px 2px 6px 3px rgba(196,223,184, .6);*/
    /*border-radius: 8px;*/
  }
  .first_title_t {
    margin-top: 15px;
    font-size: 16px;
    font-weight: bold;
    /*margin-left: 10px;*/
  }
  .more_button {
    color: purple;
    display: inline;
    position: absolute;
    left: 82%;
    top: 93px;
    font-size: 14px;
  }
  .shou {
    color: purple;
    font-size: 14px;
    margin-left: 8px;
  }
  .one_p {
    /*width: 80%;*/
    margin: 8px;
    padding: 5px;
    transition: all .2s;
  }
  p {
    text-indent: 2em;
    line-height: 27px;
    font-size: 14px;
    /*font-family: "宋体",serif;*/
    color: #3c3c3c;
  }
  .summary-open {
    height: 150px;
  }
  .summary-close {
    height: 40px;
    width: 88%;
    .one_p{
      width: 80%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  .first_content {
    display: inline;
  }
</style>
