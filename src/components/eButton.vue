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
       scale:{
         type:Number,
         default:1
       },
       value:{
         type:Number,
         default:50
       },
      percent:{
        type:Number,
        default:0
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
     },
     methods: {
        getData() {
          let me = this;
          return [{
              value: me.percent,
              itemStyle: {
                  normal: {
                      color: '#fb358a',
                      shadowBlur: 10,
                      shadowColor: '#fb358a'
                  }
              }
          }, {
              value: 100 - me.percent,
              itemStyle: {
                  normal: {
                      color: 'transparent'
                  }
              }
          }];
      },
      initChart() {
         let me = this;
         this.chart = echarts.init(document.getElementById(this.id));
         let option = {
          backgroundColor: '#333645',
          title: {
              text: (me.percent * 1) + '%',
              x: 'center',
              y: 'center',
              textStyle: {
                  color: '#98a0c4',
                  fontWeight: 'bolder',
                  fontSize: 64,
              }
          },
          series: [{
                  type: 'pie',
                  radius: ['39%', '49%'],
                  silent: true,
                  label: {
                      normal: {
                          show: false,
                      }
                  },

                  data: [{
                      value: 1,
                      itemStyle: {
                          normal: {
                              color: '#313443',
                              shadowBlur: 10,
                              shadowColor: '#1b1e25',


                          }
                      }
                  }],
                  animation: false
              },
              {
                  type: 'pie',
                  radius: ['39%', '49%'],
                  silent: true,
                  label: {
                      normal: {
                          show: false,
                      }
                  },

                  data: [{
                      value: 1,
                      itemStyle: {
                          normal: {
                              color: '#313443',
                              shadowBlur: 50,
                              shadowColor: '#1b1e25'
                          }
                      }
                  }],

                  animation: false
              },

              {
                  name: 'main',
                  type: 'pie',
                  radius: ['50%', '51%'],
                  label: {
                      normal: {
                          show: false,
                      }
                  },
                  data: me.getData(),
                  animationEasingUpdate: 'cubicInOut',
                  animationDurationUpdate: 1000
              }
          ]
      };
        this.chart.setOption(option,true);
       }
     }
   }
</script>
