<template>
  <div>
    <ve-line :data="chartData"></ve-line>
    <ve-histogram :data="chartData1" :settings="chartSettings" tooltip-visible legend-visible></ve-histogram>
    <!--<ve-gauge :settings="chartSettings1"></ve-gauge>-->
  </div>
</template>

<script>
import VeLine from 'v-charts/lib/line'
import VeHistogram from 'v-charts/lib/histogram'
// import VeGauge from 'v-charts/lib/gauge'
export default {
  created () {
    this.chartData = {
      columns: ['日期', '销售量'],
      rows: [
        { '日期': '1月1日', '销售量': 123 },
        { '日期': '1月2日', '销售量': 1223 },
        { '日期': '1月3日', '销售量': 2123 },
        { '日期': '1月4日', '销售量': 4123 },
        { '日期': '1月5日', '销售量': 3123 },
        { '日期': '1月6日', '销售量': 7123 }
      ]
    }
    this.chartSettings2 = {
    series: [
        {
            name: '体重',
            type: 'gauge',
            radius:'45%',
            min:0,
            max:120,
            splitNumber:12,
            axisLine:{
                lineStyle:{
                    width:10
                }
            },
            pointer:{
                width:2,
            },
            data: [{value: 5,name:'INFORE'}],
            axisTick:{
                show:false
            },
            axisLabel:{
                formatter:'{value}kg'
            }
        }
    ]
};


    this.chartData1 = {
      columns: ['日期', '销售额-1季度', '销售额-2季度', '占比', '其他'],
      rows: [
        { '日期': '1月1日', '销售额-1季度': 1523, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月2日', '销售额-1季度': 1223, '销售额-2季度': 1523, '占比': 0.345, '其他': 100 },
        { '日期': '1月3日', '销售额-1季度': 2123, '销售额-2季度': 1523, '占比': 0.7, '其他': 100 },
        { '日期': '1月4日', '销售额-1季度': 4123, '销售额-2季度': 1523, '占比': 0.31, '其他': 100 },
        { '日期': '1月5日', '销售额-1季度': 3123, '销售额-2季度': 1523, '占比': 0.12, '其他': 100 },
        { '日期': '1月6日', '销售额-1季度': 7123, '销售额-2季度': 1523, '占比': 0.65, '其他': 100 }
      ]
    }

    this.chartSettings = {
      dimension: ['日期'],
      metrics: [ '销售额-1季度', '销售额-2季度', '占比'],
      axisSite: {
        right: ['占比']
      },
      yAxisType: ['KMB', 'percent'],
      yAxisName: ['销售额', '占比'],
      area: true,
      stack: {
        '销售额': ['销售额-1季度', '销售额-2季度']
      }
    }
  },
  components: { VeLine ,VeHistogram}
}
</script>