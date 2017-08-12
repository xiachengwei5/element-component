<template>
  <div :class="className" :id="id" :style="{height:height,width:width}" @on-value-change="change" @click="click"></div>
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
         chart: null,
          myVal:'',
       };
     },
     mounted() {
       this.initChart();
       this.myVal = this.value;
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
        // debugger;
        this.myVal = this.value;
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
    },

      'myVal' :function(value,oldVal){
        // console.log("watch--myVal invoke");
        this.$emit("on-value-change",value);
      }

     },
     methods: {
      change(val){
        console.log("change");
        if(val){
          this.myVal = val;
        }
      },
      click(){
        console.log('click is invoke value is '+this.myVal);
        this.myVal++;
      },
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
