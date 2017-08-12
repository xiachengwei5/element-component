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
                  name: me.seriesName,
                  type: 'gauge',
                  detail: {formatter:'{value}'+ me.seriesFormatter},
                  data: [{value:value, name: me.seriesDataName}]
              }
          ]
      };
      me.chart.setOption(option,true);
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
                    name: me.seriesName,
                    type: 'gauge',
                    detail: {formatter:'{value}'+ me.seriesFormatter},
                    data: [{value: me.value, name: me.seriesDataName}]
                }
            ]
        };
        this.chart.setOption(option,true);
       }
     }
   }
</script>
