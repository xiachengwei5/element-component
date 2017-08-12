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
       min:{
         type:Number,
         default:0
       },
       max:{
         type:Number,
         default:100,
       },
       splitNumber:{
         type:Number,
         default:10
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
     methods: {
       initChart() {
         let me = this;
         this.chart = echarts.init(document.getElementById(this.id));
         let option = {
            series: [
              {
                name: me.seriesName,
                type: 'gauge',
                min:me.min,
                max:me.max,
                // radius: '50%',
                splitNumber:me.splitNumber,
                axisLine:{
                  lineStyle:{
                      width:10
                  }
                },
                axisTick: {            // 坐标轴小标记
                  length: 15,        // 属性length控制线长
                  lineStyle: {       // 属性lineStyle控制线条样式
                    color: 'auto'
                  }
                },
                splitLine: {           // 分隔线
                  length: 20,         // 属性length控制线长
                  lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                    color: 'auto'
                  }
               },
                title : {
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 20,
                    fontStyle: 'italic'
                  }
                },
                detail: {
                  formatter:'{value}'+ me.seriesFormatter,  
                  textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder'
                  }
                },
                data: [{value: me.value, name: me.seriesDataName}]
              }
            ]
        };
        this.chart.setOption(option,true);
       }
     }
   }
</script>
