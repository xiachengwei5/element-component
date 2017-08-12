<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
   import echarts from 'echarts';
   export default {
     props: {
       className: {
         type: String,
         default: 'chart'
       },
       id: {
         type: String,
         default: 'chart'
       },
       width: {
         type: String,
         default: '200px'
       },
       height: {
         type: String,
         default: '200px'
       },
       value:{
         type:Number,
         default:50
       },
       seriesName:{
         type:String,
         default:''
       },
       seriesDataName:{
         type:String,
         default:''
       },
       seriesFormatter:{
         type:String,
         default:''
       }
     },
     data() {
       return {
         chart: null
       };
     },
     mounted() {
       this.initChart();
     },
     beforeDestroy() {
       if (!this.chart) {
         return
       }
       this.chart.dispose();
       this.chart = null;
     },
     watch:{
      'value':function(value,oldval){
        let me = this;
          let option = {
                tooltip : {
                      formatter: "{a} <br/>{b} : {c}"+me.seriesFormatter
                  },
                  toolbox: {
                      feature: {
                          restore: {},
                          saveAsImage: {}
                      }
                  },
                  series: [
                  {
                  name: '水表',
                  type: 'gauge',
                  radius : '100%',
                  min: 0,
                  max: 2,
                  startAngle: 315,
                  endAngle: 225,
                  splitNumber: 2,
                  axisLine: {            // 坐标轴线
                      lineStyle: {       // 属性lineStyle控制线条样式
                          width: 8
                      }
                  },
                  axisTick: {            // 坐标轴小标记
                      show: false
                  },
                  axisLabel: {
                      formatter:function(v){
                          switch (v + '') {
                              case '0' : return 'H';
                              case '1' : return 'Water';
                              case '2' : return 'C';
                          }
                      }
                  },
                  splitLine: {           // 分隔线
                      length: 15,         // 属性length控制线长
                      lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                          color: 'auto'
                      }
                  },
                  pointer: {
                      width:2
                  },
                  title: {
                      show: false
                  },
                  detail: {
                      show: false
                  },
                  data:[{value:value, name: 'gas'}]
              }
            ]
        };
        this.chart.setOption(option,true);
      }
     },
     methods: {
       initChart() {
         let me = this;
         this.chart = echarts.init(document.getElementById(this.id));
         let option = {
                tooltip : {
                      formatter: "{a} <br/>{b} : {c}"+me.seriesFormatter
                  },
                  toolbox: {
                      feature: {
                          restore: {},
                          saveAsImage: {}
                      }
                  },
                  series: [
                  {
                  name: '水表',
                  type: 'gauge',
                  radius : '100%',
                  min: 0,
                  max: 2,
                  startAngle: 315,
                  endAngle: 225,
                  splitNumber: 2,
                  axisLine: {            // 坐标轴线
                      lineStyle: {       // 属性lineStyle控制线条样式
                          width: 8
                      }
                  },
                  axisTick: {            // 坐标轴小标记
                      show: false
                  },
                  axisLabel: {
                      formatter:function(v){
                          switch (v + '') {
                              case '0' : return 'H';
                              case '1' : return 'Water';
                              case '2' : return 'C';
                          }
                      }
                  },
                  splitLine: {           // 分隔线
                      length: 15,         // 属性length控制线长
                      lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                          color: 'auto'
                      }
                  },
                  pointer: {
                      width:2
                  },
                  title: {
                      show: false
                  },
                  detail: {
                      show: false
                  },
                  data:[{value:me.value, name: 'gas'}]
              }
            ]
        };
        this.chart.setOption(option,true);
       }
     }
   }
</script>
