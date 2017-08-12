<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>

<script>
   import echarts from 'echarts';
   import echartsLiquidfill from 'echarts-liquidfill';
   export default {
     props: {
      className: {
        type: String,
        default: 'e-water-wave-progress'
      },
      id: {
        type: String,
        default: 'e-water-wave-progress'
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
        type:String,
        default:'0.5',
        required:true
      },
      waveAnimation:{
        type:Boolean,
        default: true
      },
      seriesFormatter:{
        type:String,
        default:''
      }
     },
     data() {
       return {
         chart: null,
         myVal:[]
       };
     },
     mounted() {
       let orgValArr = this.value.split(",");
       this.myVal = this.myVal.concat(orgValArr.map(x=>parseFloat(x)));
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
          series: [{
            type: 'liquidFill',
            data: me.myVal
          }]
        };

        if(!me.waveAnimation){
          option = {
            series: [{
              type: 'liquidFill',
              data: me.myVal,
              amplitude: 0,
              waveAnimation: 0
            }]
          };
        }
        this.chart.setOption(option,true);
       }
     }
   }
</script>
