<template>
  <div>
    <!--<h3 class="major_info_h3">职业详解</h3>-->
    <!--<div v-for="item in major_content" :key="item">-->
      <!--&lt;!&ndash;<div v-html="item.info">{{item.info}}</div>&ndash;&gt;-->
      <!--<div>{{item.info}}</div>-->
    <!--</div>-->
    <div class="serviceInfo" ref="serviceInfo">
      <div>
        <div class="one-title">
          <span class="one-title__icon"></span>
          <span>职业详解</span>
          <span class="one-title__bacicon iconfont icon-jiantou">职业详解</span>
        </div>
        <!--<div class="one-item">-->
          <!--<p class="one__p">该套系统实现师生对饭菜质量及餐饮服务的评价反馈，满足师生与校园餐饮管理的有效互动，辅助校园餐厅提高服务质量、改善菜品结构搭配，力求为学校广大师生群体提供更加健康、养生、合理的餐饮服务<strong>注意：使用该系统前请关注“中科智禾”微信公众号,选择“智禾教育”模块，点击“食堂系统”进行使用</strong></p>-->
        <!--</div>-->

        <div class="one-item" v-for="item in major_content" :key="item" v-if="item.info!==''">
          <!--<div class="one-item__header">功能介绍</div>-->
          <div class="one-step" v-html="item.info" >
            <div class="one-step__item">
              <span>{{item.info}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    {{major_content}}-->
  </div>
</template>
<script>
import request from '@/utils/request'
export default {
  data () {
    return {
      id: this.$route.query.id,
      major_content: []
    }
  },
  mounted () {
    this.getData()
    // this.id = this.$route.query.id
    // console.log(this.id)
  },
  methods: {
    getData () {
      console.log(33333333333)
      request({
        url: '/profession/getList',
        method: 'GET',
        params: {
          professionInfoId: this.$route.query.id
        }
      }).then(response => {
        this.major_content = response.data
        console.log(this.major_content)
      })
    }
  }
}
</script>
<style>
.major_info_content{
  margin: 15px 20px;
  background: #fbf9fe;
}
  .major_info_h3{
    text-align: center;
    margin: 10px;
    /*background-color: aliceblue;*/
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
</style>
