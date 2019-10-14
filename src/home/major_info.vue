<template>
  <div>
    <div class="serviceInfo" ref="serviceInfo">
      <div>
        <div class="one-title">
          <div class="return__icon" @click="gotoPage">
            <i class="iconfont iconllfanhui4"></i>
          </div>
<!--          <span class="one-title__icon"></span>-->
          <span>职业详解</span>
          <span class="one-title__bacicon iconfont icon-jiantou">职业详解</span>
        </div>
        <div class="one-item" v-for="item in major_content" :key="item" v-if="item.subClassTitleAndContent.length > 0">
          <h3 class="one-item-title">{{item.classTitle}}</h3>
<!--          <div class="one-item__content" v-for="(value,key,index) in item.subClassTitleAndContent[0]">-->
<!--&lt;!&ndash;            {{item.subClassTitleAndContent}}&ndash;&gt;-->
<!--            {{value}}&#45;&#45;{{key}}-&#45;&#45;{{index}} 哈哈哈哈-->
<!--          </div>-->
          <div class="one-item__content" v-for="(project, index) in item.subClassTitleAndContent" :key="index">
            <div v-for="(value,key,index) in project" :key="index">
<!--              {{key}}-&#45;&#45;{{value}}&#45;&#45;{{index}}-->
              <div v-if="key === ''" v-html="value[0].info" class="one-item-subcontent"></div>
              <div v-else>
                <h4 class="one-item-subtitle">{{key}}</h4>
                <div class="one-item-subcontent" v-html="value[0].info" v-if="value[0].info"></div>
                <div class="one-item-subcontent" v-html="value[0].specName" v-else></div>
              </div>
              <div class="one-item-img" v-if="value[0].imgId"><img :src="'https://xz.chsi.com.cn/occupation/showlabelimgori.action?labelimgid='+value[0].imgId" alt="这是图片"/></div>
            </div>
          </div>
<!--          <div class="one-step" v-html="item.info" >-->
<!--            <div class="one-step__item">-->
<!--              <span>{{item.info}}</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="one-item-img" v-if="item.imgId"><img :src="'https://xz.chsi.com.cn/occupation/showlabelimgori.action?labelimgid='+item.imgId" alt="这是图片"/></div>-->
        </div>
<!--        <h3>内容</h3>-->
<!--        <span>{{major_content[0]}}</span>-->
<!--        <span>{{major_content[1].info}}</span>-->
<!--        <span>{{major_content[2].info}}</span>-->
<!--        <span>{{major_content[3].info}}</span>-->
<!--        <span>{{major_content[4].info}}</span>-->
      </div>
    </div>
<!--    哈哈哈：{{major_content}}-->
<!--    <img :src="'https://xz.chsi.com.cn/occupation/showlabelimgori.action?labelimgid='+major_content[0].imgId"/>-->
<!--    <img :src=`https://xz.chsi.com.cn/occupation/showlabelimgori.action?labelimgid=${major_content[0].imgId}`>-->
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
  computed: {
    imgid () {
      return this.major_content[0].imgId
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
    },
    gotoPage () {
      console.log('return')
      this.$router.go(-1)
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
.return__icon {
  margin-left: 30px;
  position: absolute;
  height: 30px;
}
.iconfont {
  position: absolute;
  font-size: 24px;
  margin: 0 10px;
}
.one-item-img {
  /*width: 100px;*/
  text-align: center;
  height: 170px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
.one-item-img img {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  height: 100%;
}
.one-item-title {
  margin: 5px 3px;
  /*font-weight: normal;*/
}
.one-item-subtitle {
  margin: 7px;
}
.one-item-subcontent {
  /*text-indent: 2em;*/
  line-height: 23px;
  font-size: 14px;
  color: #3c3c3c;
  margin: 5px 1px 3px 10px;
}
/*p {*/
/*  text-indent: 2em;*/
/*}*/
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
  padding: 14px;
  margin: 20px 20px 16px;
  box-shadow: 0 6px 6px rgba(75, 92, 178, 0.1);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}
.one-step {
  margin-bottom: 5px;
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
/*.iconfont{*/
/*  margin: 0 10px;*/
/*}*/

.one-step__item {
  text-align: left;
  padding-top: 10px;
  /*padding-bottom: 10px;*/
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
