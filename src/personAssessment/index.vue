<template>
  <div style="height: 100%;width: 100%;background-color:#fff;">
    <div class="check-box">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconllfanhui"></i>
      </div>
      <div style="color: #fff;font-size: 17px;text-align: center;line-height: 45px;">
        人格测试
      </div>
    </div>
    <div class="personAssInfo" ref="personAssInfo">
      <div style="padding-bottom: 20px;" v-if="personAssList.length > 0">
        <div v-for="(item, index) in personAssList" :key="index" class="personAssItem">
          <span>{{item.questions}}</span>
          <div class="personItemOption">
            <div class="personAssOption" @click="gotoSelect(index, 0)">A. 是</div>
            <div class="personAssOption" @click="gotoSelect(index, 1)">B. 否</div>
            <!--       <i class="iconfont iconllduigou3"></i>   -->
          </div>
        </div>
        <x-button @click.native="submit_t" text="提交" class="subBtn" type="primary"></x-button>
<!--        <div style="height: 20px"></div>-->
      </div>
    </div>
  </div>
</template>
<script>
import {getPersonAssInfo} from '@/api/index'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      personAssList: [],
      value: '',
      choice: {},
      personAssScroll: null,
      options: [{
        key: 1,
        value: 'A 是'
      },
      {
        key: 2,
        value: 'B 否'
      }],
    }
  },
  computed: {
    typeId () {
      return this.$route.query.id
    }
  },
  mounted () {
    this.getPersonAssInfo()
    // this.init()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    init () {
      this.$nextTick(() => {
        // console.log()
        this.personAssScroll = new BScroll(this.$refs.personAssInfo, {
          click: true,
          bounce: false
        })
        console.log(this.personAssScroll)
      })
    },
    getPersonAssInfo () { // 获取所有题
      getPersonAssInfo({
        openid: '111',
        // openid: this.openid,
        evaluateType: this.typeId
      }).then(res => {
        if (res.data.code === 0) {
          this.personAssList = res.data.data
          // this.$nextTick(() => {
          //   this.personAssScroll && this.personAssScroll.refresh()
          // })
          this.init()
        }
        console.log(res.data)
      })
    },
    gotoSelect (index, option) { // 进行选择
      this.choice[index + 1] = option
      console.log(this.choice)
      var personIndexList = document.querySelectorAll('.personItemOption')
      // var newBQ = ``
      // var newBQ = document.createElement('i')
      // // newBQ.setAttribute('class', 'iconfont iconllduigou3')
      // newBQ.className = 'iconfont iconllduigou3'
      // newBQ.style.cssText = 'color: #42b983;float: right;margin-right: 25px;'
      // newBQ.style.color = '#42b983'
      // newBQ.innerHTML = `<i class="iconfont iconllduigou3"></i>`
      // personIndexList[index].querySelectorAll('personAssOption')
      console.log(personIndexList[index].children[option])
      for (let i = 0; i < personIndexList[index].children.length; i++) {
        personIndexList[index].children[i].className = 'personAssOption'
        console.log('有啊', personIndexList[index].children[i])
        if (personIndexList[index].children[i].querySelector('.iconfont') !== null) {
          personIndexList[index].children[i].removeChild(personIndexList[index].children[i].querySelector('.iconfont'))
        }
      }
      personIndexList[index].children[option].className = 'personAssOption optionActive'
      var newBQ = document.createElement('i')
      // newBQ.setAttribute('class', 'iconfont iconllduigou3')
      newBQ.className = 'iconfont iconllduigou3'
      newBQ.style.cssText = 'color: #42b983;float: right;margin-right: 25px;'
      personIndexList[index].children[option].appendChild(newBQ)
    },
    submit_t () {
      this.$router.push({
        name: 'personAssResult',
        query: {
          choice: JSON.stringify(this.choice)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .check-box {
    background-color: #42b983;
    /*background: linear-gradient(to right, #4a8ef9 0%, #5292f7 15%, #347ff4 70%, #0c5ddc 100%);;*/
    flex: none;
    z-index: 1;
    height: 45px;
    position: relative;
  }
  .return__icon{
    position: absolute;
    margin-left: 15px;
    margin-top: 10px;
    color: #fff;
  }
  .personAssInfo {
    margin: 10px 15px;
    position: absolute;
    left: 0;
    top: 46px;
    height: calc(100% - 50px);
    overflow: hidden;
  }
  .personAssItem {
    padding: 5px 0;
    border-bottom: 1px solid #ececec;
  }
  .personItemOption {
    margin-top: 3px;
  }
  .personAssOption {
    padding: 5px 3px;
    margin-left: 1em;
    color: #7c7c7c;
  }
  .iconllduigou3 {
    color: #42b983;
    float: right;
    margin-right: 25px;
    /*right: 15px;*/
  }
  .optionActive {
    color: #42b983!important;
  }
  .subBtn {
    margin: 10px 0;
  }
</style>
