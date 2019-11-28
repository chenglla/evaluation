<template>
  <div class="hsAnsInfo">
    <div class="score_header">
      <div class="return__icon" @click="returnBack">
        <i class="iconfont iconllfanhui"></i>
      </div>
      <div class="title">华师结果分析</div>
    </div>
    <div class="hsAna_second">
      <p>结果统计：</p>
      <div ref="radar_chart" class="radar_chart"></div>
      <div class="type3_four_tip">
        <!--        <h4>说明：</h4>-->
        <li>X轴表示各次考试名称；</li>
        <li>Y轴表示考试的排名所占百分比；</li>
        <li>排名是折线图越低越好，分数折线图是越高越好。</li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      hsAnsContent: this.$store.state.type3Anser,
      radarChart: '',
      rusultList: []
    }
  },
  mounted () {
    console.log(this.$store.state.type3Anser)
    this.getRadarChart()
  },
  methods: {
    returnBack () {
      this.$router.go(-1)
    },
    getRadarChart () {
      this.rusultList.push(this.hsAnsContent['accommodationForceNumScale'])
      this.rusultList.push(this.hsAnsContent['drivingForceScale'])
      this.rusultList.push(this.hsAnsContent['engineeringStressNumScale'])
      this.rusultList.push(this.hsAnsContent['reciprocityNumScale'])
      this.rusultList.push(this.hsAnsContent['resilienceNumScale'])
      console.log('3333', this.rusultList)
      this.radarChart = this.echarts.init(this.$refs.radar_chart)
      this.radarChart.setOption({
        // title: {
        //   text: '基础雷达图'
        // },
        // 图表的位置
        grid: {
          position: 'center'
        },
        tooltip: {
          // 雷达图的tooltip不会超出div，也可以设置position属性，position定位的tooltip 不会随着鼠标移动而位置变化，不友好
          confine: true,
          enterable: true // 鼠标是否可以移动到tooltip区域内
        },
        legend: {
          data: ['预算分配（Allocated Budget）']
        },
        radar: { // polar
          nameGap: 5, // 图中工艺等字距离图的距离
          center: ['50%', '50%'], // 图的位置
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            // '驱动力', '顺应力', '策应力', '调节力', '互惠力'
            {name: '驱动力',
              max: 1,
              // 若将此属性放在radar下，则每条indicator都会显示圈上的数值，放在这儿，只在通信这条indicator上显示
              axisLabel: {
                show: true,
                fontSize: 12,
                color: '#838D9E',
                showMaxLabel: false, // 不显示最大值，即外圈不显示数字30
                showMinLabel: true // 显示最小数字，即中心点显示0
              }},
            {name: '顺应力', max: 1},
            {name: '策应力', max: 1},
            {name: '调节力', max: 1},
            {name: '互惠力', max: 1}
          ]
        },
        series: [{
          name: '能力比',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: this.rusultList,
              // name: '预算分配（Allocated Budget）'
            }
            // {
            //   value: [5000, 14000, 28000, 31000, 42000, 21000],
            //   name: '实际开销（Actual Spending）'
            // }
          ]
        }]
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .hsAnsInfo {
    height: 100%;
    /*position: absolute;*/
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
  .hsAna_second {
    margin: 25px 10px 15px;
    padding: 5px;
    box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);
    border-radius: 10px;
    background-color: #fff;
    p {
      text-indent: 1.5em;
    }
  }
  .radar_chart {
    padding-top: 5px;
    height: 200px;
  }
  .type3_four_tip {
    /*border: 4px dashed rgba(66,185,130,0.4);*/
    border-radius: 10px;
    /*box-shadow: 1px 1px 5px 1px rgba(66,185,130,0.4);*/
    padding: 0 5px 10px;
    margin: 3px 15px 15px;
  }
  li {
    /*text-indent: 2em;*/
    color: #9c9c9c;
    font-size: 12px;
    line-height: 26px;
  }
</style>
